'use strict';
/*
 * Yarn Spinner Editor for Obsidian
 * - Dedicated editor for .yarn files (CodeMirror 6) with Yarn-aware highlighting
 * - Every node gets a colour; its lines carry a colour bar, and every <<jump>> /
 *   <<detour>> target is painted in the colour of the node it points to
 * - Ctrl/Cmd-click a jump target to go to that node (or create it if missing)
 * - Autocomplete for node titles, commands and $variables
 * - Live node graph view (pan / zoom / drag), saving positions as `position:` headers
 *   (the same header the Yarn Spinner VS Code extension uses)
 *
 * Plain CommonJS — no build step. Obsidian supplies `obsidian` and the
 * @codemirror/* modules at runtime.
 */

const obsidian = require('obsidian');
const {
  Plugin, TextFileView, ItemView, PluginSettingTab, Setting, Notice,
  FuzzySuggestModal, TFile, TFolder, Platform, normalizePath,
} = obsidian;
const {
  EditorView, ViewPlugin, Decoration, keymap, lineNumbers,
  highlightActiveLine, highlightActiveLineGutter, drawSelection,
} = require('@codemirror/view');
const { EditorState, StateEffect, Annotation, Compartment } = require('@codemirror/state');
const { history, historyKeymap, defaultKeymap, indentWithTab } = require('@codemirror/commands');
const { searchKeymap, highlightSelectionMatches } = require('@codemirror/search');
const { autocompletion, completionKeymap } = require('@codemirror/autocomplete');
const { indentUnit } = require('@codemirror/language');
// Bundled at build time (Obsidian's own Vim mode only reaches its Markdown editor).
const { vim, Vim, getCM } = require('@replit/codemirror-vim');

const YARN_VIEW = 'yarn-spinner-editor';
const GRAPH_VIEW = 'yarn-spinner-graph';
const NODE_W = 220;
const NODE_H = 100;
const GHOST_W = 180;
const GHOST_H = 54;
const COL_GAP = 110;
const ROW_GAP = 50;

const DEFAULT_SETTINGS = {
  savePositions: true,
  colorNodes: true,
  lineNumbers: true,
  wrapLines: true,
  edgeLabels: true,
  vimMode: 'obsidian', // 'obsidian' = follow Obsidian's Vim setting, 'on', 'off'
};

const NEW_FILE_TEMPLATE = `// Ctrl/Cmd-click any jump target to go to that node (or create it if it doesn't exist yet).
title: Start
---
Narrator: This is where the story begins.
-> Look around
    <<jump LookAround>>
-> Leave
    <<stop>>
===

title: LookAround
---
Narrator: There isn't much here yet.
<<jump Start>>
===
`;

/* ------------------------------------------------------------------ */
/* Colours                                                             */
/* ------------------------------------------------------------------ */

const NAMED_COLORS = {
  red: 'var(--color-red)', orange: 'var(--color-orange)', yellow: 'var(--color-yellow)',
  green: 'var(--color-green)', cyan: 'var(--color-cyan)', blue: 'var(--color-blue)',
  purple: 'var(--color-purple)', pink: 'var(--color-pink)',
};

function hashHue(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  // Golden-angle spread keeps similar titles from landing on similar hues.
  return Math.abs(Math.round((Math.abs(h) % 1000) * 137.508)) % 360;
}

function nodeColor(title, colorHeader) {
  if (colorHeader) {
    const c = colorHeader.trim().toLowerCase();
    if (NAMED_COLORS[c]) return NAMED_COLORS[c];
    if (/^#[0-9a-f]{3,8}$/i.test(c)) return c;
  }
  return `hsl(${hashHue(title || '')}, 62%, 56%)`;
}

/* ------------------------------------------------------------------ */
/* Parser                                                              */
/* ------------------------------------------------------------------ */

const HEADER_RE = /^\s*([A-Za-z_][\w.-]*)\s*:\s*(.*?)\s*$/;
const COMMAND_RE = /<<([\s\S]*?)>>/g;

function stripComment(line) {
  return line.replace(/(?<!:)\/\/.*$/, '');
}

function cleanPreview(code) {
  return code
    .replace(/<<[\s\S]*?>>/g, '')
    .replace(/(^|\s)#\S+/g, '')
    .replace(/\[\/?[^\]]*\]/g, '')
    .replace(/^\s*(->|=>)\s*/, '→ ')
    .trim();
}

/**
 * Parse a Yarn file into nodes, with per-line info for the highlighter.
 * Lines are 0-based.
 */
function parseYarn(text) {
  const lines = text.split(/\r\n|\r|\n/);
  const nodes = [];
  const lineInfo = new Array(lines.length);
  let cur = null;
  let inBody = false;
  let optStack = [];
  let ifDepth = 0;

  const start = (i) => {
    cur = {
      index: nodes.length, title: '', titleLine: -1, positionLine: -1,
      startLine: i, bodyStart: -1, endLine: -1, headers: {}, tags: [],
      position: null, colorHeader: null, edges: [], preview: [], bodyLines: 0, color: '',
    };
    nodes.push(cur);
  };
  const finish = () => {
    if (!cur) return;
    if (!cur.title) cur.title = `Untitled ${cur.index + 1}`;
    cur.color = nodeColor(cur.title, cur.colorHeader);
    cur = null;
    inBody = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const t = line.trim();

    if (!inBody) {
      if (t === '---' && cur) {
        cur.bodyStart = i + 1;
        inBody = true;
        optStack = [];
        ifDepth = 0;
        lineInfo[i] = { kind: 'sep', node: cur.index };
        continue;
      }
      if (t === '' || t.startsWith('//')) {
        lineInfo[i] = cur ? { kind: 'header', node: cur.index } : { kind: 'outside', node: -1 };
        continue;
      }
      if (t === '===') { lineInfo[i] = { kind: 'stray', node: -1 }; continue; }
      if (!cur) start(i);
      lineInfo[i] = { kind: 'header', node: cur.index };
      const m = HEADER_RE.exec(line);
      if (m) {
        const key = m[1];
        const val = m[2];
        if (key === 'title') {
          if (cur.titleLine < 0) { cur.title = val; cur.titleLine = i; }
        } else {
          cur.headers[key] = val;
          if (key === 'position') {
            cur.positionLine = i;
            const pm = /^(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)$/.exec(val);
            if (pm) cur.position = { x: +pm[1], y: +pm[2] };
          } else if (key === 'tags') {
            cur.tags = val.split(/\s+/).filter(Boolean);
          } else if (key === 'color' || key === 'colour') {
            cur.colorHeader = val;
          }
        }
      }
      continue;
    }

    // ---- body ----
    if (t === '===') {
      cur.endLine = i;
      lineInfo[i] = { kind: 'end', node: cur.index };
      finish();
      continue;
    }
    lineInfo[i] = { kind: 'body', node: cur.index };
    if (t === '' || t.startsWith('//')) continue;
    cur.bodyLines++;

    const indent = line.length - line.trimStart().length;
    while (optStack.length && optStack[optStack.length - 1].indent >= indent) optStack.pop();

    const code = stripComment(line);
    const isOption = /^\s*(->|=>)/.test(code);
    if (isOption) {
      const label = cleanPreview(code).replace(/^→\s*/, '');
      optStack.push({ indent, label, cond: /<<\s*if\b/.test(code) });
    }
    if (cur.preview.length < 2) {
      const p = cleanPreview(code);
      if (p) cur.preview.push(p);
    }

    COMMAND_RE.lastIndex = 0;
    let m;
    while ((m = COMMAND_RE.exec(code))) {
      const cm = /^\s*([A-Za-z_][\w.]*)\s*([\s\S]*?)\s*$/.exec(m[1]);
      if (!cm) continue;
      const name = cm[1];
      const arg = cm[2];
      if (name === 'if' && !isOption) ifDepth++;
      else if (name === 'endif') ifDepth = Math.max(0, ifDepth - 1);
      else if (name === 'jump' || name === 'detour') {
        const tm = /^([A-Za-z_][\w.]*)$/.exec(arg);
        if (!tm) continue; // dynamic target like {$next}
        const opt = optStack.length ? optStack[optStack.length - 1] : null;
        cur.edges.push({
          target: tm[1],
          kind: name,
          label: opt && opt.indent < indent ? opt.label : '',
          conditional: ifDepth > 0 || optStack.some((o) => o.cond),
          line: i,
        });
      }
    }
  }
  if (cur) {
    if (inBody) cur.endLine = lines.length - 1;
    finish();
  }
  for (let i = 0; i < lineInfo.length; i++) if (!lineInfo[i]) lineInfo[i] = { kind: 'outside', node: -1 };
  return { nodes, lineInfo, lineCount: lines.length };
}

/* ------------------------------------------------------------------ */
/* Tokenizer (for highlighting)                                        */
/* ------------------------------------------------------------------ */

const KEYWORDS = new Set([
  'if', 'elseif', 'else', 'endif', 'set', 'declare', 'jump', 'detour', 'return', 'stop',
  'once', 'endonce', 'enum', 'case', 'endenum', 'call', 'local', 'wait',
]);
const EXPR_KW = new Set([
  'to', 'true', 'false', 'and', 'or', 'not', 'xor', 'is', 'eq', 'neq', 'gt', 'lt', 'gte', 'lte',
  'null', 'as', 'number', 'string', 'bool',
]);

function tokenizeExpr(s, base, out) {
  const re = /(\$[A-Za-z_]\w*)|("(?:[^"\\]|\\.)*"?)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][\w.]*)(\s*\()?|(==|!=|<=|>=|&&|\|\||[+\-*/%<>!=])/g;
  let m;
  while ((m = re.exec(s))) {
    const from = base + m.index;
    if (m[1]) out.push([from, from + m[1].length, 'yarn-variable']);
    else if (m[2]) out.push([from, from + m[2].length, 'yarn-string']);
    else if (m[3]) out.push([from, from + m[3].length, 'yarn-number']);
    else if (m[4]) {
      if (EXPR_KW.has(m[4])) out.push([from, from + m[4].length, 'yarn-keyword']);
      else if (m[5]) out.push([from, from + m[4].length, 'yarn-function']);
    } else if (m[6]) out.push([from, from + m[6].length, 'yarn-operator']);
  }
}

function tokenizeCommand(text, start, end, out) {
  const inner = text.slice(start, end);
  const m = /^(\s*)([A-Za-z_][\w.]*)/.exec(inner);
  if (!m) { tokenizeExpr(inner, start, out); return; }
  const nameFrom = start + m[1].length;
  const nameTo = nameFrom + m[2].length;
  const name = m[2];
  out.push([nameFrom, nameTo, KEYWORDS.has(name) ? 'yarn-keyword' : 'yarn-command']);
  let rest = nameTo;
  if (name === 'jump' || name === 'detour') {
    const tm = /^(\s+)([A-Za-z_][\w.]*)/.exec(text.slice(nameTo, end));
    if (tm) {
      const tf = nameTo + tm[1].length;
      out.push([tf, tf + tm[2].length, 'yarn-jump-target', tm[2]]);
      rest = tf + tm[2].length;
    }
  }
  tokenizeExpr(text.slice(rest, end), rest, out);
}

function tokenizeBodyLine(text) {
  const out = [];
  const n = text.length;
  let i = 0;
  while (i < n && /\s/.test(text[i])) i++;
  if (text.startsWith('//', i)) { out.push([i, n, 'yarn-comment']); return out; }
  if (text.startsWith('->', i) || text.startsWith('=>', i)) {
    out.push([i, i + 2, text[i] === '-' ? 'yarn-option' : 'yarn-linegroup']);
    i += 2;
    while (i < n && /\s/.test(text[i])) i++;
  }
  // Character name: "Alice: Hello"
  const sm = /^([^\s:{}<>[\]#/\\$][^:{}<>[\]#\\]{0,39}):(?=\s|$)/.exec(text.slice(i));
  if (sm) {
    out.push([i, i + sm[1].length, 'yarn-speaker']);
    out.push([i + sm[1].length, i + sm[1].length + 1, 'yarn-punct']);
    i += sm[0].length;
  }
  while (i < n) {
    const c = text[i];
    if (c === '\\') { i += 2; continue; }
    if (c === '/' && text[i + 1] === '/' && text[i - 1] !== ':') { out.push([i, n, 'yarn-comment']); break; }
    if (c === '<' && text[i + 1] === '<') {
      const end = text.indexOf('>>', i + 2);
      const innerEnd = end === -1 ? n : end;
      out.push([i, i + 2, 'yarn-cmd-delim']);
      tokenizeCommand(text, i + 2, innerEnd, out);
      if (end !== -1) out.push([end, end + 2, 'yarn-cmd-delim']);
      i = end === -1 ? n : end + 2;
      continue;
    }
    if (c === '{') {
      const end = text.indexOf('}', i + 1);
      const innerEnd = end === -1 ? n : end;
      out.push([i, i + 1, 'yarn-brace']);
      tokenizeExpr(text.slice(i + 1, innerEnd), i + 1, out);
      if (end !== -1) out.push([end, end + 1, 'yarn-brace']);
      i = end === -1 ? n : end + 1;
      continue;
    }
    if (c === '[') {
      const m = /^\[\/?(?:[A-Za-z_][^\]\n]*)?\]/.exec(text.slice(i));
      if (m) { out.push([i, i + m[0].length, 'yarn-markup']); i += m[0].length; continue; }
    }
    if (c === '#' && (i === 0 || /\s/.test(text[i - 1]))) {
      let j = i + 1;
      while (j < n && !/\s/.test(text[j])) j++;
      out.push([i, j, 'yarn-hashtag']);
      i = j;
      continue;
    }
    i++;
  }
  return out;
}

function tokenizeHeaderLine(text) {
  const out = [];
  const t = text.trimStart();
  const lead = text.length - t.length;
  if (t.startsWith('//')) { out.push([lead, text.length, 'yarn-comment']); return out; }
  const m = /^(\s*)([A-Za-z_][\w.-]*)(\s*:)(\s*)(.*)$/.exec(text);
  if (!m) return out;
  let i = m[1].length;
  out.push([i, i + m[2].length, 'yarn-header-key']);
  i += m[2].length;
  out.push([i, i + m[3].length, 'yarn-punct']);
  i += m[3].length + m[4].length;
  if (m[5]) out.push([i, i + m[5].length, m[2] === 'title' ? 'yarn-title' : 'yarn-header-value']);
  return out;
}

function jumpTargetAt(state, pos) {
  const line = state.doc.lineAt(pos);
  const col = pos - line.from;
  for (const [f, t, cls, target] of tokenizeBodyLine(line.text)) {
    if (cls === 'yarn-jump-target' && col >= f && col <= t) return target;
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Editor decorations                                                  */
/* ------------------------------------------------------------------ */

const refreshEffect = StateEffect.define();
const External = Annotation.define();
const MOD_NAME = Platform && Platform.isMacOS ? 'Cmd' : 'Ctrl';

function buildDecorations(state, plugin, yarnView) {
  const doc = state.doc;
  const parsed = yarnView.getParsedFor(doc);
  const colorOn = plugin.settings.colorNodes;
  const local = new Map();
  for (const n of parsed.nodes) if (!local.has(n.title)) local.set(n.title, n);
  const filePath = yarnView.file ? yarnView.file.path : null;
  const markCache = new Map();
  const mark = (cls) => {
    let d = markCache.get(cls);
    if (!d) { d = Decoration.mark({ class: cls }); markCache.set(cls, d); }
    return d;
  };
  const lineCache = new Map();
  const lineDeco = (kind, color) => {
    const key = kind + '|' + color;
    let d = lineCache.get(key);
    if (!d) {
      d = color
        ? Decoration.line({ class: `yarn-line yarn-line-colored yarn-line-${kind}`, attributes: { style: `--yarn-node-color: ${color}` } })
        : Decoration.line({ class: `yarn-line yarn-line-${kind}` });
      lineCache.set(key, d);
    }
    return d;
  };

  const ranges = [];
  for (let ln = 1; ln <= doc.lines; ln++) {
    const line = doc.line(ln);
    const info = parsed.lineInfo[ln - 1];
    if (!info) continue;
    const node = info.node >= 0 ? parsed.nodes[info.node] : null;
    if (node) ranges.push(lineDeco(info.kind, colorOn ? node.color : null).range(line.from));

    let toks;
    const lead = line.text.length - line.text.trimStart().length;
    switch (info.kind) {
      case 'header': toks = tokenizeHeaderLine(line.text); break;
      case 'body': toks = tokenizeBodyLine(line.text); break;
      case 'sep': case 'end': toks = [[lead, lead + 3, 'yarn-delim']]; break;
      case 'stray': toks = [[lead, lead + 3, 'yarn-delim yarn-stray']]; break;
      default:
        toks = line.text.trimStart().startsWith('//') ? [[lead, line.text.length, 'yarn-comment']] : [];
    }
    for (const [f, t, cls, target] of toks) {
      if (t <= f) continue;
      const from = line.from + f;
      const to = Math.min(line.from + t, line.to);
      if (to <= from) continue;
      if (cls === 'yarn-jump-target') {
        const tnode = local.get(target);
        const ext = tnode ? null : plugin.lookup(target, filePath);
        let color = tnode ? tnode.color : ext ? ext.color : null;
        if (color && !colorOn) color = 'var(--text-accent)';
        const title = tnode
          ? `${MOD_NAME}-click to go to “${target}”`
          : ext ? `“${target}” is in ${ext.path} — ${MOD_NAME}-click to open`
            : `No node named “${target}” — ${MOD_NAME}-click to create it`;
        ranges.push(Decoration.mark({
          class: color ? 'yarn-jump-target' : 'yarn-jump-target yarn-jump-missing',
          attributes: color
            ? { 'data-yarn-target': target, style: `--yarn-target-color: ${color}`, title }
            : { 'data-yarn-target': target, title },
        }).range(from, to));
      } else {
        ranges.push(mark(cls).range(from, to));
      }
    }
  }
  return Decoration.set(ranges, true);
}

function yarnDecorations(plugin, yarnView) {
  return ViewPlugin.fromClass(class {
    constructor(view) { this.decorations = buildDecorations(view.state, plugin, yarnView); }
    update(u) {
      if (u.docChanged || u.transactions.some((tr) => tr.effects.some((e) => e.is(refreshEffect)))) {
        this.decorations = buildDecorations(u.state, plugin, yarnView);
      }
    }
  }, { decorations: (v) => v.decorations });
}

/* ------------------------------------------------------------------ */
/* Autocomplete                                                        */
/* ------------------------------------------------------------------ */

const COMMAND_COMPLETIONS = [
  ['jump', 'Go to another node'], ['detour', 'Visit a node, then come back'],
  ['return', 'Return from a detour'], ['stop', 'End the dialogue'],
  ['set', 'Set a variable'], ['declare', 'Declare a variable'],
  ['if', 'Conditional block'], ['elseif', ''], ['else', ''], ['endif', ''],
  ['once', 'Run only once'], ['endonce', ''], ['wait', 'Pause (seconds)'],
  ['enum', 'Declare an enum'], ['case', ''], ['endenum', ''],
].map(([label, info]) => ({ label, type: 'keyword', info: info || undefined }));

function closingApply(text) {
  return (view, completion, from, to) => {
    const after = view.state.sliceDoc(to, to + 2);
    const insert = after === '>>' ? text : text + '>>';
    view.dispatch({ changes: { from, to, insert }, selection: { anchor: from + insert.length } });
  };
}

/* ------------------------------------------------------------------ */
/* Graph layout + geometry helpers                                     */
/* ------------------------------------------------------------------ */

function autoLayout(nodes, subset) {
  const inSet = new Set(subset);
  const byTitle = new Map();
  for (const i of subset) {
    const t = nodes[i].title;
    if (!byTitle.has(t)) byTitle.set(t, []);
    byTitle.get(t).push(i);
  }
  const adj = new Map(subset.map((i) => [i, []]));
  const indeg = new Map(subset.map((i) => [i, 0]));
  for (const i of subset) {
    for (const e of nodes[i].edges) {
      for (const j of byTitle.get(e.target) || []) {
        if (j === i || !inSet.has(j) || adj.get(i).includes(j)) continue;
        adj.get(i).push(j);
        indeg.set(j, indeg.get(j) + 1);
      }
    }
  }
  const roots = [...subset].sort((a, b) => {
    const sa = nodes[a].title === 'Start' ? -2 : indeg.get(a) === 0 ? -1 : 0;
    const sb = nodes[b].title === 'Start' ? -2 : indeg.get(b) === 0 ? -1 : 0;
    return sa - sb || a - b;
  });
  const out = new Map();
  let baseRow = 0;
  for (const r of roots) {
    if (out.has(r)) continue;
    const rank = new Map([[r, 0]]);
    const order = [r];
    const q = [r];
    while (q.length) {
      const i = q.shift();
      for (const j of adj.get(i)) {
        if (out.has(j) || rank.has(j)) continue;
        rank.set(j, rank.get(i) + 1);
        order.push(j);
        q.push(j);
      }
    }
    const rows = [];
    let maxRow = 0;
    for (const i of order) {
      const k = rank.get(i);
      const row = rows[k] || 0;
      rows[k] = row + 1;
      maxRow = Math.max(maxRow, row + 1);
      out.set(i, { x: k * (NODE_W + COL_GAP), y: (baseRow + row) * (NODE_H + ROW_GAP) });
    }
    baseRow += maxRow;
  }
  return out;
}

const SVG_NS = 'http://www.w3.org/2000/svg';
function svgEl(tag, attrs, parent) {
  const el = document.createElementNS(SVG_NS, tag);
  if (attrs) for (const k in attrs) el.setAttribute(k, String(attrs[k]));
  if (parent) parent.appendChild(el);
  return el;
}
function clearEl(el) { while (el.firstChild) el.removeChild(el.firstChild); }
function truncate(s, n) { return s.length > n ? s.slice(0, Math.max(1, n - 1)) + '…' : s; }
function center(r) { return { x: r.x + r.w / 2, y: r.y + r.h / 2 }; }
function clipRect(r, toward, pad) {
  const c = center(r);
  const dx = toward.x - c.x;
  const dy = toward.y - c.y;
  if (!dx && !dy) return c;
  const hw = r.w / 2 + pad;
  const hh = r.h / 2 + pad;
  const t = Math.min(dx ? hw / Math.abs(dx) : Infinity, dy ? hh / Math.abs(dy) : Infinity);
  return { x: c.x + dx * t, y: c.y + dy * t };
}
function arrowHead(tip, from) {
  let ux = tip.x - from.x;
  let uy = tip.y - from.y;
  const len = Math.hypot(ux, uy) || 1;
  ux /= len; uy /= len;
  const bx = tip.x - ux * 11;
  const by = tip.y - uy * 11;
  const px = -uy * 5.5;
  const py = ux * 5.5;
  return `M${tip.x},${tip.y} L${bx + px},${by + py} L${bx - px},${by - py} Z`;
}
function curveGeo(a, b, bend) {
  const ac = center(a);
  const bc = center(b);
  const dx = bc.x - ac.x;
  const dy = bc.y - ac.y;
  const len = Math.hypot(dx, dy) || 1;
  const c = { x: (ac.x + bc.x) / 2 + (-dy / len) * bend, y: (ac.y + bc.y) / 2 + (dx / len) * bend };
  const p0 = clipRect(a, c, 2);
  const p2 = clipRect(b, c, 3);
  return {
    d: `M${p0.x},${p0.y} Q${c.x},${c.y} ${p2.x},${p2.y}`,
    arrow: arrowHead(p2, c),
    lx: 0.25 * p0.x + 0.5 * c.x + 0.25 * p2.x,
    ly: 0.25 * p0.y + 0.5 * c.y + 0.25 * p2.y - 5,
  };
}
function selfLoopGeo(a) {
  const sx = a.x + a.w - 50;
  const sy = a.y;
  const ex = a.x + a.w + 3;
  const ey = a.y + 30;
  const c2 = { x: a.x + a.w + 60, y: a.y + 30 };
  return {
    d: `M${sx},${sy} C${sx},${sy - 60} ${c2.x},${c2.y - 40} ${ex},${ey}`,
    arrow: arrowHead({ x: ex, y: ey }, c2),
    lx: a.x + a.w + 20,
    ly: a.y - 30,
  };
}

/* ------------------------------------------------------------------ */
/* Yarn editor view                                                    */
/* ------------------------------------------------------------------ */

class YarnView extends TextFileView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.dirty = false;
    this._parsed = null;
    this._parsedDoc = null;
    this.optCompartment = new Compartment();
    this.vimCompartment = new Compartment();
    this.vimOn = plugin.vimEnabled();
    this.contentEl.addClass('yarn-editor-view');
    this.cm = new EditorView({ parent: this.contentEl, state: this.makeState('') });
    plugin.yarnViews.add(this);
  }

  getViewType() { return YARN_VIEW; }
  getDisplayText() { return this.file ? this.file.basename : 'Yarn'; }
  getIcon() { return 'scroll-text'; }

  optionExtensions() {
    const s = this.plugin.settings;
    const exts = [];
    if (s.lineNumbers) exts.push(lineNumbers(), highlightActiveLineGutter());
    if (s.wrapLines) exts.push(EditorView.lineWrapping);
    return exts;
  }

  makeState(doc) {
    return EditorState.create({
      doc,
      extensions: [
        // Vim must come before other keymaps.
        this.vimCompartment.of(this.vimOn ? vim({ status: true }) : []),
        history(),
        drawSelection(),
        highlightActiveLine(),
        highlightSelectionMatches(),
        EditorState.tabSize.of(4),
        indentUnit.of('    '),
        keymap.of([...completionKeymap, ...defaultKeymap, ...historyKeymap, ...searchKeymap, indentWithTab]),
        autocompletion({ override: [(ctx) => this.plugin.complete(ctx, this)] }),
        this.optCompartment.of(this.optionExtensions()),
        yarnDecorations(this.plugin, this),
        EditorView.domEventHandlers({
          mousedown: (e, view) => {
            if (e.button !== 0 || !(e.metaKey || e.ctrlKey)) return false;
            const el = e.target && e.target.closest ? e.target.closest('[data-yarn-target]') : null;
            if (!el) return false;
            e.preventDefault();
            let pos = 0;
            try { pos = view.posAtDOM(el); } catch (_) { pos = view.state.selection.main.head; }
            this.plugin.followJump(this, el.getAttribute('data-yarn-target'), pos);
            return true;
          },
        }),
        EditorView.updateListener.of((u) => {
          if (u.docChanged) {
            const external = u.transactions.some((tr) => tr.annotation(External));
            if (!external) { this.dirty = true; this.requestSave(); }
            this.plugin.scheduleRefresh(this);
          }
          if (u.selectionSet || u.docChanged) this.plugin.onCursor(this);
        }),
        EditorView.theme({
          '&': { height: '100%' },
          '.cm-scroller': { fontFamily: 'var(--font-monospace)', lineHeight: '1.6' },
          '.cm-content': { padding: '12px 0 40vh' },
        }),
      ],
    });
  }

  applySettings() {
    this.cm.dispatch({ effects: [this.optCompartment.reconfigure(this.optionExtensions()), refreshEffect.of(null)] });
    this.syncVim();
  }

  syncVim() {
    const on = this.plugin.vimEnabled();
    if (on === this.vimOn) return;
    this.vimOn = on;
    this.cm.dispatch({ effects: this.vimCompartment.reconfigure(on ? vim({ status: true }) : []) });
  }

  followJumpAtCursor() {
    const pos = this.cm.state.selection.main.head;
    const target = jumpTargetAt(this.cm.state, pos);
    if (!target) { new Notice('No jump target under the cursor.'); return false; }
    this.plugin.followJump(this, target, pos);
    return true;
  }

  refreshDecorations() { this.cm.dispatch({ effects: refreshEffect.of(null) }); }

  getViewData() { return this.cm.state.doc.toString(); }

  setViewData(data, clear) {
    if (clear) {
      this.vimOn = this.plugin.vimEnabled();
      this.cm.setState(this.makeState(data));
      this.dirty = false;
    } else if (data !== this.getViewData()) {
      this.cm.dispatch({
        changes: { from: 0, to: this.cm.state.doc.length, insert: data },
        annotations: [External.of(true)],
      });
    }
    this.plugin.onYarnViewLoaded(this);
  }

  clear() { /* state is replaced in setViewData */ }

  async save(clear) {
    await super.save(clear);
    this.dirty = false;
  }

  async onClose() {
    if (super.onClose) await super.onClose();
    this.plugin.onYarnViewClosed(this);
    this.cm.destroy();
  }

  getParsedFor(doc) {
    if (this._parsedDoc !== doc) {
      this._parsed = parseYarn(doc.toString());
      this._parsedDoc = doc;
    }
    return this._parsed;
  }

  getParsed() { return this.getParsedFor(this.cm.state.doc); }

  currentNodeIndex() {
    const p = this.getParsed();
    const ln = this.cm.state.doc.lineAt(this.cm.state.selection.main.head).number - 1;
    const info = p.lineInfo[ln];
    return info ? info.node : -1;
  }

  revealLine(line0, focus) {
    const doc = this.cm.state.doc;
    const ln = Math.max(1, Math.min(doc.lines, line0 + 1));
    const pos = doc.line(ln).from;
    this.cm.dispatch({ selection: { anchor: pos }, effects: EditorView.scrollIntoView(pos, { y: 'start', yMargin: 24 }) });
    if (focus) this.cm.focus();
  }

  revealNodeByIndex(idx, focus) {
    const n = this.getParsed().nodes[idx];
    if (!n) return false;
    this.revealLine(n.titleLine >= 0 ? n.titleLine : n.startLine, focus);
    return true;
  }

  revealNode(title, focus = true) {
    const n = this.getParsed().nodes.find((x) => x.title === title);
    if (!n) return false;
    return this.revealNodeByIndex(n.index, focus);
  }

  uniqueTitle(base) {
    const titles = new Set(this.getParsed().nodes.map((n) => n.title));
    if (!titles.has(base)) return base;
    let i = 2;
    while (titles.has(base + i)) i++;
    return base + i;
  }

  createNode(title, nearIdx) {
    const doc = this.cm.state.doc;
    const p = this.getParsed();
    let posLine = '';
    if (p.nodes.some((n) => n.position)) {
      const near = p.nodes[nearIdx];
      const base = (near && near.position) || { x: 0, y: 0 };
      posLine = `position: ${Math.round(base.x + NODE_W + COL_GAP)},${Math.round(base.y)}\n`;
    }
    const text = doc.toString();
    const prefix = text.length === 0 ? '' : text.endsWith('\n') ? '\n' : '\n\n';
    const insert = `${prefix}title: ${title}\n${posLine}---\n\n===\n`;
    const from = doc.length;
    const cursor = from + insert.lastIndexOf('---\n') + 4;
    this.cm.dispatch({
      changes: { from, insert },
      selection: { anchor: cursor },
      effects: EditorView.scrollIntoView(cursor, { y: 'center' }),
    });
    this.cm.focus();
  }

  /** posByIdx: Map<nodeIndex, {x,y}>; titles: Map<nodeIndex, title> guards against stale indices. */
  writePositions(posByIdx, titles) {
    const p = this.getParsed();
    const doc = this.cm.state.doc;
    const changes = [];
    for (const [idx, pos] of posByIdx) {
      const n = p.nodes[idx];
      if (!n || (titles && titles.get(idx) !== n.title)) continue;
      const x = Math.round(pos.x);
      const y = Math.round(pos.y);
      if (n.position && Math.round(n.position.x) === x && Math.round(n.position.y) === y) continue;
      const text = `position: ${x},${y}`;
      if (n.positionLine >= 0) {
        const l = doc.line(n.positionLine + 1);
        changes.push({ from: l.from, to: l.to, insert: text });
      } else {
        const l = doc.line((n.titleLine >= 0 ? n.titleLine : n.startLine) + 1);
        changes.push({ from: l.to, insert: '\n' + text });
      }
    }
    if (changes.length) this.cm.dispatch({ changes, userEvent: 'input.yarn-position' });
  }
}

/* ------------------------------------------------------------------ */
/* Graph view                                                          */
/* ------------------------------------------------------------------ */

class YarnGraphView extends ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.source = null;
    this.view = { x: 40, y: 40, k: 1 };
    this.overrides = new Map();
    this.data = null;
    this.fittedPath = null;
    this.needsFit = false;
    this.currentIdx = -1;
    this.drag = null;
    this.hoverId = null;
    this.lastClick = { id: null, t: 0 };
  }

  getViewType() { return GRAPH_VIEW; }
  getDisplayText() { return this.source && this.source.file ? `Graph · ${this.source.file.basename}` : 'Yarn graph'; }
  getIcon() { return 'git-fork'; }

  async onOpen() {
    const root = this.contentEl;
    root.empty();
    root.addClass('yarn-graph-container');

    this.addAction('maximize', 'Fit graph to view', () => this.fit());
    this.addAction('layout-grid', 'Auto-arrange nodes', () => this.autoArrange());
    this.addAction('tag', 'Toggle option labels on arrows', async () => {
      this.plugin.settings.edgeLabels = !this.plugin.settings.edgeLabels;
      await this.plugin.saveSettings();
      this.drawEdges();
    });

    const bar = root.createDiv({ cls: 'yarn-graph-bar' });
    this.fileLabel = bar.createSpan({ cls: 'yarn-graph-file' });
    const legend = bar.createDiv({ cls: 'yarn-graph-legend' });
    const item = (cls, text) => { const s = legend.createSpan({ cls: 'yarn-legend-item' }); s.createSpan({ cls: 'yarn-legend-swatch ' + cls }); s.appendText(text); };
    item('is-jump', 'jump');
    item('is-detour', 'detour');
    item('is-conditional', 'conditional');
    item('is-missing', 'missing');

    this.emptyEl = root.createDiv({ cls: 'yarn-graph-empty', text: 'Open a .yarn file to see its node graph.' });
    this.svg = svgEl('svg', { class: 'yarn-graph-svg' }, root);
    this.viewport = svgEl('g', { class: 'yarn-graph-viewport' }, this.svg);
    this.edgeLayer = svgEl('g', { class: 'yarn-graph-edges' }, this.viewport);
    this.nodeLayer = svgEl('g', { class: 'yarn-graph-nodes' }, this.viewport);
    this.hint = root.createDiv({ cls: 'yarn-graph-hint', text: 'Drag nodes to arrange · drag background to pan · scroll to zoom · click to jump to node · double-click to edit' });

    this.bindEvents();
    this.setSource(this.plugin.lastYarnView || this.plugin.findAnyYarnView());
  }

  async onClose() { this.source = null; }

  onResize() { if (this.needsFit) this.fit(); }

  setSource(v) {
    if (v === this.source && this.data) return;
    this.source = v || null;
    this.currentIdx = -1;
    this.render(true);
    if (this.leaf && typeof this.leaf.updateHeader === 'function') this.leaf.updateHeader();
  }

  okey(path, idx, title) { return `${path}::${idx}::${title}`; }

  computePositions(nodes, path) {
    const pos = new Map();
    const missing = [];
    nodes.forEach((n, i) => {
      const o = this.overrides.get(this.okey(path, i, n.title));
      if (o) pos.set(i, { x: o.x, y: o.y });
      else if (n.position) pos.set(i, { x: n.position.x, y: n.position.y });
      else missing.push(i);
    });
    if (missing.length) {
      const auto = autoLayout(nodes, missing);
      let offX = 0;
      let offY = 0;
      if (pos.size) {
        let maxY = -Infinity;
        let minX = Infinity;
        for (const p of pos.values()) { maxY = Math.max(maxY, p.y); minX = Math.min(minX, p.x); }
        offX = minX;
        offY = maxY + NODE_H + ROW_GAP * 2;
      }
      for (const i of missing) { const a = auto.get(i); pos.set(i, { x: a.x + offX, y: a.y + offY }); }
    }
    return pos;
  }

  render(refit) {
    if (!this.svg || this.drag) return;
    const src = this.source;
    if (!src || !src.file) {
      this.emptyEl.style.display = '';
      this.svg.style.display = 'none';
      this.hint.style.display = 'none';
      this.fileLabel.setText('');
      this.data = null;
      return;
    }
    this.emptyEl.style.display = 'none';
    this.svg.style.display = '';
    this.hint.style.display = '';
    const path = src.file.path;
    this.fileLabel.setText(path);

    const parsed = src.getParsed();
    const nodes = parsed.nodes;
    const pos = this.computePositions(nodes, path);
    const boxes = nodes.map((n, i) => ({ id: String(i), idx: i, node: n, x: pos.get(i).x, y: pos.get(i).y, w: NODE_W, h: NODE_H }));
    const byTitle = new Map();
    nodes.forEach((n, i) => { if (!byTitle.has(n.title)) byTitle.set(n.title, []); byTitle.get(n.title).push(i); });

    const ghosts = new Map();
    const edgeMap = new Map();
    const addEdge = (from, to, e) => {
      const key = `${from}->${to}`;
      let ed = edgeMap.get(key);
      if (!ed) { ed = { key, from, to, kinds: new Set(), labels: [], allConditional: true }; edgeMap.set(key, ed); }
      ed.kinds.add(e.kind);
      if (e.label && !ed.labels.includes(e.label)) ed.labels.push(e.label);
      ed.allConditional = ed.allConditional && e.conditional;
    };
    nodes.forEach((n, i) => {
      for (const e of n.edges) {
        const targets = byTitle.get(e.target);
        if (targets) { for (const j of targets) addEdge(String(i), String(j), e); continue; }
        const gid = 'g:' + e.target;
        if (!ghosts.has(gid)) {
          ghosts.set(gid, { id: gid, ghost: true, title: e.target, ext: this.plugin.lookup(e.target, path), firstFrom: i, w: GHOST_W, h: GHOST_H, x: 0, y: 0 });
        }
        addEdge(String(i), gid, e);
      }
    });

    const ghostList = [...ghosts.values()];
    if (ghostList.length) {
      let maxX = 0;
      for (const b of boxes) maxX = Math.max(maxX, b.x + b.w);
      for (const g of ghostList) g.wantY = boxes[g.firstFrom].y + (NODE_H - GHOST_H) / 2;
      ghostList.sort((a, b) => a.wantY - b.wantY);
      let lastY = -Infinity;
      for (const g of ghostList) {
        g.x = maxX + COL_GAP + 30;
        g.y = Math.max(g.wantY, lastY + GHOST_H + 24);
        lastY = g.y;
      }
    }

    this.data = { path, boxes, ghosts: ghostList, ghostMap: ghosts, edges: [...edgeMap.values()] };
    this.drawNodes();
    this.drawEdges();
    if (refit || this.fittedPath !== path) { this.fit(); this.fittedPath = path; }
    this.applyTransform();
    this.setCurrent(src.currentNodeIndex());
  }

  getBox(id) {
    if (!this.data) return null;
    if (id.startsWith('g:')) return this.data.ghostMap.get(id);
    return this.data.boxes[+id];
  }

  drawNodes() {
    clearEl(this.nodeLayer);
    const { boxes, ghosts } = this.data;
    const charsTitle = Math.floor((NODE_W - 24) / 7.6);
    const charsBody = Math.floor((NODE_W - 24) / 6.4);
    for (const b of boxes) {
      const n = b.node;
      const g = svgEl('g', { class: 'yarn-gnode', 'data-id': b.id, transform: `translate(${b.x},${b.y})`, style: `--yarn-node-color: ${n.color}` }, this.nodeLayer);
      svgEl('rect', { class: 'yarn-gnode-box', width: b.w, height: b.h, rx: 8, ry: 8 }, g);
      svgEl('path', { class: 'yarn-gnode-head', d: `M0,8 A8,8 0 0 1 8,0 H${b.w - 8} A8,8 0 0 1 ${b.w},8 V28 H0 Z` }, g);
      svgEl('text', { class: 'yarn-gnode-title', x: 12, y: 19 }, g).textContent = truncate(n.title, charsTitle);
      const meta = [`${n.bodyLines} line${n.bodyLines === 1 ? '' : 's'}`, `${n.edges.length} exit${n.edges.length === 1 ? '' : 's'}`];
      if (n.tags.length) meta.push(n.tags.map((t) => '#' + t).join(' '));
      svgEl('text', { class: 'yarn-gnode-meta', x: 12, y: 45 }, g).textContent = truncate(meta.join(' · '), charsBody);
      n.preview.forEach((line, k) => {
        svgEl('text', { class: 'yarn-gnode-preview', x: 12, y: 66 + k * 17 }, g).textContent = truncate(line, charsBody);
      });
      svgEl('title', null, g).textContent = [n.title, ...n.preview].join('\n');
      b.el = g;
    }
    for (const gh of ghosts) {
      const cls = 'yarn-gnode is-ghost' + (gh.ext ? '' : ' is-missing');
      const style = gh.ext ? `--yarn-node-color: ${gh.ext.color}` : '';
      const g = svgEl('g', { class: cls, 'data-id': gh.id, transform: `translate(${gh.x},${gh.y})`, style }, this.nodeLayer);
      svgEl('rect', { class: 'yarn-gnode-box', width: gh.w, height: gh.h, rx: 8, ry: 8 }, g);
      svgEl('text', { class: 'yarn-gnode-title', x: 12, y: 22 }, g).textContent = truncate(gh.title, Math.floor((gh.w - 24) / 7.6));
      const sub = gh.ext ? `in ${gh.ext.path}` : 'missing — click to create';
      svgEl('text', { class: 'yarn-gnode-meta', x: 12, y: 41 }, g).textContent = truncate(sub, Math.floor((gh.w - 24) / 6.4));
      svgEl('title', null, g).textContent = gh.ext ? `${gh.title}\n${gh.ext.path}\nClick to open` : `${gh.title} does not exist yet.\nClick to create it in this file.`;
      gh.el = g;
    }
  }

  drawEdges() {
    if (!this.data) return;
    clearEl(this.edgeLayer);
    const keys = new Set(this.data.edges.map((e) => e.key));
    const showLabels = this.plugin.settings.edgeLabels;
    for (const e of this.data.edges) {
      const a = this.getBox(e.from);
      const b = this.getBox(e.to);
      if (!a || !b) continue;
      const cls = ['yarn-edge'];
      if (e.kinds.has('detour') && !e.kinds.has('jump')) cls.push('is-detour');
      if (e.allConditional) cls.push('is-conditional');
      if (b.ghost && !b.ext) cls.push('is-missing');
      const g = svgEl('g', { class: cls.join(' '), 'data-from': e.from, 'data-to': e.to, style: `--edge-color: ${a.node.color}` }, this.edgeLayer);
      const geo = e.from === e.to ? selfLoopGeo(a) : curveGeo(a, b, keys.has(`${e.to}->${e.from}`) ? 34 : 0);
      svgEl('path', { class: 'yarn-edge-line', d: geo.d }, g);
      svgEl('path', { class: 'yarn-edge-arrow', d: geo.arrow }, g);
      const kindText = [...e.kinds].join(' + ') + (e.allConditional ? ' (conditional)' : '');
      const tip = `${a.node.title} → ${b.ghost ? b.title : b.node.title}\n${kindText}` + (e.labels.length ? `\nvia: ${e.labels.join(' / ')}` : '');
      svgEl('title', null, g).textContent = tip;
      if (showLabels && e.labels.length) {
        svgEl('text', { class: 'yarn-edge-label', x: geo.lx, y: geo.ly, 'text-anchor': 'middle' }, g).textContent = truncate(e.labels.join(' / '), 28);
      }
    }
    if (this.hoverId) this.setHover(this.hoverId, true);
  }

  applyTransform() {
    const { x, y, k } = this.view;
    this.viewport.setAttribute('transform', `translate(${x},${y}) scale(${k})`);
  }

  fit() {
    if (!this.data || !this.svg) return;
    const r = this.svg.getBoundingClientRect();
    if (!r.width || !r.height) { this.needsFit = true; return; }
    this.needsFit = false;
    const all = [...this.data.boxes, ...this.data.ghosts];
    if (!all.length) { this.view = { x: 40, y: 40, k: 1 }; this.applyTransform(); return; }
    let minX = Infinity; let minY = Infinity; let maxX = -Infinity; let maxY = -Infinity;
    for (const b of all) {
      minX = Math.min(minX, b.x); minY = Math.min(minY, b.y);
      maxX = Math.max(maxX, b.x + b.w); maxY = Math.max(maxY, b.y + b.h);
    }
    const bw = maxX - minX + 80;
    const bh = maxY - minY + 80;
    const k = Math.max(0.1, Math.min(r.width / bw, r.height / bh, 1.2));
    this.view = { k, x: (r.width - (maxX - minX) * k) / 2 - minX * k, y: (r.height - (maxY - minY) * k) / 2 - minY * k };
    this.applyTransform();
  }

  setCurrent(idx) {
    this.currentIdx = idx;
    if (!this.nodeLayer) return;
    for (const g of this.nodeLayer.children) g.classList.toggle('is-current', g.getAttribute('data-id') === String(idx));
  }

  setHover(id, force) {
    if (id === this.hoverId && !force) return;
    this.hoverId = id;
    this.svg.classList.toggle('has-hover', !!id);
    const related = new Set(id ? [id] : []);
    for (const g of this.edgeLayer.children) {
      const on = !!id && (g.getAttribute('data-from') === id || g.getAttribute('data-to') === id);
      g.classList.toggle('is-related', on);
      if (on) { related.add(g.getAttribute('data-from')); related.add(g.getAttribute('data-to')); }
    }
    for (const g of this.nodeLayer.children) g.classList.toggle('is-related', related.has(g.getAttribute('data-id')));
  }

  bindEvents() {
    const svg = this.svg;
    svg.addEventListener('wheel', (e) => {
      e.preventDefault();
      const r = svg.getBoundingClientRect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;
      const k2 = Math.max(0.1, Math.min(3, this.view.k * Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0015))));
      const f = k2 / this.view.k;
      this.view.x = mx - (mx - this.view.x) * f;
      this.view.y = my - (my - this.view.y) * f;
      this.view.k = k2;
      this.applyTransform();
    }, { passive: false });

    svg.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || !this.data) return;
      const g = e.target.closest ? e.target.closest('.yarn-gnode') : null;
      const id = g ? g.getAttribute('data-id') : null;
      this.drag = { id, sx: e.clientX, sy: e.clientY, moved: false, vx: this.view.x, vy: this.view.y, box: null };
      if (id && !id.startsWith('g:')) {
        const b = this.data.boxes[+id];
        if (b) { this.drag.box = b; this.drag.bx = b.x; this.drag.by = b.y; }
      }
      try { svg.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
    });

    svg.addEventListener('pointermove', (e) => {
      const d = this.drag;
      if (!d) return;
      const dx = e.clientX - d.sx;
      const dy = e.clientY - d.sy;
      if (!d.moved && Math.hypot(dx, dy) < 4) return;
      if (!d.moved) { d.moved = true; svg.classList.add('is-dragging'); }
      if (d.box) {
        d.box.x = d.bx + dx / this.view.k;
        d.box.y = d.by + dy / this.view.k;
        d.box.el.setAttribute('transform', `translate(${d.box.x},${d.box.y})`);
        this.drawEdges();
      } else if (!d.id) {
        this.view.x = d.vx + dx;
        this.view.y = d.vy + dy;
        this.applyTransform();
      }
    });

    const end = (e) => {
      const d = this.drag;
      this.drag = null;
      svg.classList.remove('is-dragging');
      if (!d) return;
      try { svg.releasePointerCapture(e.pointerId); } catch (_) { /* ignore */ }
      if (d.moved && d.box) this.commitPositions();
      else if (!d.moved && d.id) this.onNodeClick(d.id);
    };
    svg.addEventListener('pointerup', end);
    svg.addEventListener('pointercancel', (e) => { this.drag = null; svg.classList.remove('is-dragging'); try { svg.releasePointerCapture(e.pointerId); } catch (_) { /* ignore */ } });

    this.nodeLayer.addEventListener('pointerover', (e) => {
      if (this.drag && this.drag.moved) return;
      const g = e.target.closest ? e.target.closest('.yarn-gnode') : null;
      this.setHover(g ? g.getAttribute('data-id') : null);
    });
    this.nodeLayer.addEventListener('pointerleave', () => { if (!this.drag) this.setHover(null); });
  }

  onNodeClick(id) {
    const now = Date.now();
    const isDouble = this.lastClick.id === id && now - this.lastClick.t < 400;
    this.lastClick = { id, t: now };
    const src = this.source;
    if (id.startsWith('g:')) {
      const gh = this.data.ghostMap.get(id);
      if (!gh) return;
      if (gh.ext) this.plugin.openNode(gh.ext.path, gh.title);
      else if (src) { src.createNode(gh.title, gh.firstFrom); this.plugin.app.workspace.setActiveLeaf(src.leaf, { focus: true }); }
      return;
    }
    if (!src) return;
    src.revealNodeByIndex(+id, isDouble);
    if (isDouble) this.plugin.app.workspace.setActiveLeaf(src.leaf, { focus: true });
    this.setCurrent(+id);
  }

  commitPositions() {
    if (!this.data) return;
    const { boxes, path } = this.data;
    const src = this.source;
    if (this.plugin.settings.savePositions && src && src.file && src.file.path === path) {
      const posMap = new Map(boxes.map((b) => [b.idx, { x: b.x, y: b.y }]));
      const titles = new Map(boxes.map((b) => [b.idx, b.node.title]));
      for (const b of boxes) this.overrides.delete(this.okey(path, b.idx, b.node.title));
      src.writePositions(posMap, titles);
    } else {
      for (const b of boxes) this.overrides.set(this.okey(path, b.idx, b.node.title), { x: b.x, y: b.y });
    }
  }

  autoArrange() {
    if (!this.data) return;
    const nodes = this.data.boxes.map((b) => b.node);
    const layout = autoLayout(nodes, nodes.map((_, i) => i));
    for (const b of this.data.boxes) { const p = layout.get(b.idx); b.x = p.x; b.y = p.y; }
    this.commitPositions();
    this.render(true);
    if (this.plugin.settings.savePositions) new Notice('Nodes arranged. Undo in the editor (Ctrl/Cmd-Z) to revert.');
  }
}

/* ------------------------------------------------------------------ */
/* Go-to-node modal                                                    */
/* ------------------------------------------------------------------ */

class NodeSuggestModal extends FuzzySuggestModal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
    this.setPlaceholder('Go to Yarn node…');
  }
  getItems() { return this.plugin.allNodes(); }
  getItemText(item) { return `${item.title}   —   ${item.path}`; }
  onChooseItem(item) { this.plugin.openNode(item.path, item.title); }
}

/* ------------------------------------------------------------------ */
/* Settings                                                            */
/* ------------------------------------------------------------------ */

class YarnSettingTab extends PluginSettingTab {
  constructor(app, plugin) { super(app, plugin); this.plugin = plugin; }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new Setting(containerEl)
      .setName('Vim key bindings')
      .setDesc('Vim mode in the Yarn editor. "Follow Obsidian" uses Settings → Editor → Vim key bindings. Extras: :w saves, :q closes, :gr opens the graph, gd follows the jump under the cursor.')
      .addDropdown((d) => d
        .addOption('obsidian', 'Follow Obsidian')
        .addOption('on', 'Always on')
        .addOption('off', 'Off')
        .setValue(this.plugin.settings.vimMode)
        .onChange(async (v) => { this.plugin.settings.vimMode = v; await this.plugin.saveSettings(); this.plugin.applySettings(); }));
    const toggle = (key, name, desc) => new Setting(containerEl).setName(name).setDesc(desc).addToggle((t) => t
      .setValue(this.plugin.settings[key])
      .onChange(async (v) => { this.plugin.settings[key] = v; await this.plugin.saveSettings(); this.plugin.applySettings(); }));
    toggle('colorNodes', 'Colour-code nodes', 'Give each node a colour bar in the editor and paint jump targets in the colour of the node they lead to.');
    toggle('lineNumbers', 'Line numbers', 'Show line numbers in the Yarn editor.');
    toggle('wrapLines', 'Wrap long lines', 'Soft-wrap long dialogue lines.');
    toggle('savePositions', 'Save node positions to file', 'When you drag nodes in the graph, write `position: x,y` headers into the .yarn file (compatible with the Yarn Spinner VS Code extension). When off, arrangement is kept only for this session.');
    toggle('edgeLabels', 'Show option labels on arrows', 'Label arrows with the text of the option that leads to the jump.');
  }
}

/* ------------------------------------------------------------------ */
/* Plugin                                                              */
/* ------------------------------------------------------------------ */

class YarnSpinnerPlugin extends Plugin {
  async onload() {
    await this.loadSettings();
    this.index = new Map(); // path -> { file, nodes: [{title,color,line}], sig }
    this.yarnViews = new Set();
    this.lastYarnView = null;
    this._indexTimer = null;
    this._cursorRaf = null;

    this.registerView(YARN_VIEW, (leaf) => new YarnView(leaf, this));
    this.registerView(GRAPH_VIEW, (leaf) => new YarnGraphView(leaf, this));
    try {
      this.registerExtensions(['yarn'], YARN_VIEW);
    } catch (e) {
      new Notice('Yarn Spinner Editor: another plugin already handles .yarn files.');
    }

    this.addRibbonIcon('git-fork', 'Open Yarn node graph', () => this.openGraph());

    this.addCommand({ id: 'open-graph', name: 'Open node graph', callback: () => this.openGraph() });
    this.addCommand({ id: 'go-to-node', name: 'Go to node…', callback: () => new NodeSuggestModal(this.app, this).open() });
    this.addCommand({ id: 'new-file', name: 'Create new Yarn file', callback: () => this.createYarnFile() });
    this.addCommand({
      id: 'insert-node', name: 'Insert new node',
      checkCallback: (checking) => {
        const v = this.app.workspace.getActiveViewOfType(YarnView);
        if (!v) return false;
        if (!checking) v.createNode(v.uniqueTitle('NewNode'), v.currentNodeIndex());
        return true;
      },
    });

    this.addCommand({
      id: 'follow-jump', name: 'Follow jump under cursor',
      checkCallback: (checking) => {
        const v = this.app.workspace.getActiveViewOfType(YarnView);
        if (!v) return false;
        if (!checking) v.followJumpAtCursor();
        return true;
      },
    });

    this.setupVim();
    this.addSettingTab(new YarnSettingTab(this.app, this));

    this.registerEvent(this.app.workspace.on('active-leaf-change', (leaf) => {
      if (leaf && leaf.view instanceof YarnView) { leaf.view.syncVim(); this.setLastYarnView(leaf.view); }
    }));
    this.registerEvent(this.app.workspace.on('file-menu', (menu, file) => {
      if (file instanceof TFolder) {
        menu.addItem((i) => i.setTitle('New Yarn file').setIcon('scroll-text').onClick(() => this.createYarnFile(file)));
      } else if (file instanceof TFile && file.extension === 'yarn') {
        menu.addItem((i) => i.setTitle('Open Yarn node graph').setIcon('git-fork').onClick(async () => {
          await this.openNode(file.path, null);
          this.openGraph();
        }));
      }
    }));

    this.app.workspace.onLayoutReady(async () => {
      const v = this.findAnyYarnView();
      if (v && !this.lastYarnView) this.setLastYarnView(v);
      await this.buildIndex();
      this.registerEvent(this.app.vault.on('modify', (f) => this.onVaultModify(f)));
      this.registerEvent(this.app.vault.on('create', (f) => { if (f instanceof TFile && f.extension === 'yarn') this.indexFile(f); }));
      this.registerEvent(this.app.vault.on('delete', (f) => { if (this.index.delete(f.path)) this.onIndexChanged(); }));
      this.registerEvent(this.app.vault.on('rename', (f, oldPath) => {
        const e = this.index.get(oldPath);
        if (e) { this.index.delete(oldPath); this.index.set(f.path, Object.assign(e, { file: f })); this.onIndexChanged(); }
        for (const g of this.graphs()) if (g.source && g.source.file === f) g.render(false);
      }));
    });
  }

  onunload() {
    if (this._indexTimer) window.clearTimeout(this._indexTimer);
  }

  vimEnabled() {
    const m = this.settings.vimMode;
    if (m === 'on') return true;
    if (m === 'off') return false;
    try { return !!(this.app.vault.getConfig && this.app.vault.getConfig('vimMode')); } catch (_) { return false; }
  }

  viewForCM(cmAdapter) {
    const ev = cmAdapter && cmAdapter.cm6;
    for (const v of this.yarnViews) if (v.cm === ev) return v;
    return null;
  }

  setupVim() {
    const save = async (cm) => { const v = this.viewForCM(cm); if (v) { await v.save(); new Notice(`Saved ${v.file ? v.file.name : ''}`); } return v; };
    Vim.defineEx('write', 'w', (cm) => { save(cm); });
    Vim.defineEx('wq', 'wq', async (cm) => { const v = await save(cm); if (v) v.leaf.detach(); });
    Vim.defineEx('xit', 'x', async (cm) => { const v = await save(cm); if (v) v.leaf.detach(); });
    Vim.defineEx('quit', 'q', (cm) => { const v = this.viewForCM(cm); if (v) v.leaf.detach(); });
    Vim.defineEx('graph', 'gr', () => { this.openGraph(); });
    Vim.defineAction('yarnFollowJump', (cm) => { const v = this.viewForCM(cm); if (v) v.followJumpAtCursor(); });
    Vim.mapCommand('gd', 'action', 'yarnFollowJump', {}, { context: 'normal' });
  }

  async loadSettings() { this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData()); }
  async saveSettings() { await this.saveData(this.settings); }

  applySettings() {
    for (const v of this.yarnViews) v.applySettings();
    for (const g of this.graphs()) g.render(false);
  }

  /* ---------- views ---------- */

  graphs() {
    return this.app.workspace.getLeavesOfType(GRAPH_VIEW).map((l) => l.view).filter((v) => v instanceof YarnGraphView);
  }

  findAnyYarnView() {
    const leaf = this.app.workspace.getLeavesOfType(YARN_VIEW).find((l) => l.view instanceof YarnView);
    return leaf ? leaf.view : null;
  }

  setLastYarnView(v) {
    this.lastYarnView = v;
    for (const g of this.graphs()) g.setSource(v);
  }

  onYarnViewLoaded(view) {
    if (!this.lastYarnView || this.app.workspace.getActiveViewOfType(YarnView) === view) this.lastYarnView = view;
    this.updateIndexFromView(view);
    for (const g of this.graphs()) {
      if (g.source === view) g.render(true);
      else if (!g.source && view === this.lastYarnView) g.setSource(view);
    }
  }

  onYarnViewClosed(view) {
    this.yarnViews.delete(view);
    if (view._refreshTimer) window.clearTimeout(view._refreshTimer);
    if (this.lastYarnView === view) {
      this.lastYarnView = this.findAnyYarnViewExcept(view);
      for (const g of this.graphs()) if (g.source === view) g.setSource(this.lastYarnView);
    }
  }

  findAnyYarnViewExcept(view) {
    for (const v of this.yarnViews) if (v !== view) return v;
    return null;
  }

  scheduleRefresh(view) {
    if (view._refreshTimer) window.clearTimeout(view._refreshTimer);
    view._refreshTimer = window.setTimeout(() => {
      view._refreshTimer = null;
      this.updateIndexFromView(view);
      for (const g of this.graphs()) if (g.source === view) g.render(false);
    }, 250);
  }

  onCursor(view) {
    if (this._cursorRaf) return;
    this._cursorRaf = window.requestAnimationFrame(() => {
      this._cursorRaf = null;
      const idx = view.currentNodeIndex();
      for (const g of this.graphs()) if (g.source === view) g.setCurrent(idx);
    });
  }

  async openGraph() {
    let leaf = this.app.workspace.getLeavesOfType(GRAPH_VIEW)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf('split', 'vertical');
      await leaf.setViewState({ type: GRAPH_VIEW, active: false });
    }
    this.app.workspace.revealLeaf(leaf);
    if (leaf.view instanceof YarnGraphView) {
      const src = this.lastYarnView || this.findAnyYarnView();
      if (src) leaf.view.setSource(src);
    }
  }

  /* ---------- navigation ---------- */

  async openNode(path, title) {
    for (const v of this.yarnViews) {
      if (v.file && v.file.path === path) {
        this.app.workspace.setActiveLeaf(v.leaf, { focus: true });
        if (title) v.revealNode(title);
        return;
      }
    }
    const file = this.app.vault.getAbstractFileByPath(path);
    if (!(file instanceof TFile)) return;
    const leaf = this.lastYarnView ? this.lastYarnView.leaf : this.app.workspace.getLeaf('tab');
    await leaf.openFile(file);
    this.app.workspace.setActiveLeaf(leaf, { focus: true });
    if (title && leaf.view instanceof YarnView) leaf.view.revealNode(title);
  }

  followJump(view, target, pos) {
    const p = view.getParsed();
    if (p.nodes.some((n) => n.title === target)) { view.revealNode(target); return; }
    const ext = this.lookup(target, view.file ? view.file.path : null);
    if (ext) { this.openNode(ext.path, target); return; }
    const line0 = view.cm.state.doc.lineAt(pos).number - 1;
    const info = p.lineInfo[line0];
    view.createNode(target, info ? info.node : -1);
    new Notice(`Created node “${target}”`);
  }

  async createYarnFile(folder) {
    if (!(folder instanceof TFolder)) {
      const active = this.app.workspace.getActiveFile();
      folder = this.app.fileManager.getNewFileParent(active ? active.path : '');
    }
    const dir = !folder || folder.path === '/' ? '' : folder.path + '/';
    let path;
    let n = 0;
    do { path = normalizePath(`${dir}Untitled${n ? ' ' + n : ''}.yarn`); n++; } while (this.app.vault.getAbstractFileByPath(path));
    const file = await this.app.vault.create(path, NEW_FILE_TEMPLATE);
    const leaf = this.app.workspace.getLeaf('tab');
    await leaf.openFile(file);
  }

  /* ---------- vault index (for cross-file jumps) ---------- */

  async buildIndex() {
    const files = this.app.vault.getFiles().filter((f) => f.extension === 'yarn');
    for (const f of files) {
      if ([...this.yarnViews].some((v) => v.file === f)) continue;
      try {
        const text = await this.app.vault.cachedRead(f);
        this.setIndexEntry(f, parseYarn(text).nodes, true);
      } catch (_) { /* ignore unreadable */ }
    }
    for (const v of this.yarnViews) this.updateIndexFromView(v, true);
    this.onIndexChanged();
  }

  async indexFile(f) {
    try {
      const text = await this.app.vault.cachedRead(f);
      this.setIndexEntry(f, parseYarn(text).nodes);
    } catch (_) { /* ignore */ }
  }

  updateIndexFromView(view, silent) {
    if (!view.file) return;
    this.setIndexEntry(view.file, view.getParsed().nodes, silent);
  }

  setIndexEntry(file, nodes, silent) {
    const entry = nodes.map((n) => ({ title: n.title, color: n.color, line: n.titleLine >= 0 ? n.titleLine : n.startLine }));
    const sig = entry.map((e) => e.title + '\u0000' + e.color).join('\u0001');
    const prev = this.index.get(file.path);
    this.index.set(file.path, { file, nodes: entry, sig });
    if (!silent && (!prev || prev.sig !== sig)) this.onIndexChanged();
  }

  onIndexChanged() {
    if (this._indexTimer) window.clearTimeout(this._indexTimer);
    this._indexTimer = window.setTimeout(() => {
      this._indexTimer = null;
      for (const v of this.yarnViews) v.refreshDecorations();
      for (const g of this.graphs()) g.render(false);
    }, 300);
  }

  async onVaultModify(f) {
    if (!(f instanceof TFile) || f.extension !== 'yarn') return;
    let text;
    try { text = await this.app.vault.read(f); } catch (_) { return; }
    let bufferOwnsIndex = false;
    for (const v of this.yarnViews) {
      if (v.file !== f) continue;
      bufferOwnsIndex = true;
      // Pick up edits made outside Obsidian (Unity, VS Code…) when there are no unsaved local edits.
      if (!v.dirty && text !== v.getViewData()) v.setViewData(text, false);
    }
    if (!bufferOwnsIndex) this.setIndexEntry(f, parseYarn(text).nodes);
  }

  lookup(title, excludePath) {
    for (const [path, e] of this.index) {
      if (path === excludePath) continue;
      const n = e.nodes.find((x) => x.title === title);
      if (n) return { path, file: e.file, title: n.title, color: n.color, line: n.line };
    }
    return null;
  }

  allNodes() {
    const out = [];
    for (const [path, e] of this.index) for (const n of e.nodes) out.push({ path, title: n.title, line: n.line });
    return out;
  }

  /* ---------- autocomplete ---------- */

  complete(ctx, view) {
    const line = ctx.state.doc.lineAt(ctx.pos);
    const before = line.text.slice(0, ctx.pos - line.from);
    let m = /<<\s*(?:jump|detour)\s+([\w.]*)$/.exec(before);
    if (m) {
      const seen = new Set();
      const options = [];
      for (const n of view.getParsedFor(ctx.state.doc).nodes) {
        if (seen.has(n.title)) continue;
        seen.add(n.title);
        options.push({ label: n.title, type: 'class', detail: 'this file', apply: closingApply(n.title) });
      }
      const self = view.file ? view.file.path : null;
      for (const [path, e] of this.index) {
        if (path === self) continue;
        for (const n of e.nodes) {
          if (seen.has(n.title)) continue;
          seen.add(n.title);
          options.push({ label: n.title, type: 'class', detail: path, apply: closingApply(n.title), boost: -1 });
        }
      }
      return { from: ctx.pos - m[1].length, options, validFor: /^[\w.]*$/ };
    }
    m = /<<\s*(\w*)$/.exec(before);
    if (m) return { from: ctx.pos - m[1].length, options: COMMAND_COMPLETIONS, validFor: /^\w*$/ };
    m = /\$(\w*)$/.exec(before);
    if (m) {
      const vars = new Set();
      const re = /\$[A-Za-z_]\w*/g;
      const text = ctx.state.doc.toString();
      let v;
      while ((v = re.exec(text))) if (v.index + v[0].length !== ctx.pos) vars.add(v[0]);
      if (!vars.size) return null;
      return { from: ctx.pos - m[0].length, options: [...vars].map((label) => ({ label, type: 'variable' })), validFor: /^\$\w*$/ };
    }
    return null;
  }
}

module.exports = YarnSpinnerPlugin;
module.exports.default = YarnSpinnerPlugin;
// Exposed for tests only.
module.exports._internals = { Vim, getCM, jumpTargetAt, parseYarn, tokenizeBodyLine, tokenizeHeaderLine, autoLayout, buildDecorations, YarnView, YarnGraphView };
