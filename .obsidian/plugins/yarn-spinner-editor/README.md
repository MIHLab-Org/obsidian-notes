# Yarn Spinner Editor for Obsidian

Edit Yarn Spinner `.yarn` files inside Obsidian, with highlighting built around one goal: seeing how nodes connect.

## Install

1. Unzip so you have a folder named `yarn-spinner-editor` containing `manifest.json`, `main.js`, `styles.css`.
2. Move that folder into your vault at `.obsidian/plugins/yarn-spinner-editor/` (show hidden files if `.obsidian` is invisible).
3. In Obsidian: Settings → Community plugins → turn off Restricted mode if needed → reload the list → enable **Yarn Spinner Editor**.

The zip contains the built plugin, so you don't need to build anything. The source is in `src/main.js`. If you change it, run `npm install` and then `npm run build` to regenerate `main.js`.

## The editor

`.yarn` files now show up in the file explorer and open in a dedicated editor.

- **Every node has its own colour.** Its lines carry a colour bar down the left edge, and its header block is tinted.
- **Jump targets wear the colour of their destination.** In `<<jump Chalmers>>`, the word `Chalmers` is painted in the Chalmers node's colour, so you can match a jump to its node at a glance.
- **Ctrl-click (Cmd-click on Mac) a jump target** to go to that node. If it lives in another `.yarn` file in the vault, that file opens. If it doesn't exist anywhere, it is underlined in red, and Ctrl/Cmd-click creates it at the end of the file.
- **Autocomplete:** type `<<jump ` or `<<detour ` for a list of node titles (including ones in other files); `<<` for commands; `$` for variables already used in the file.
- Highlighting for headers, `---`/`===`, character names, `->` options, `=>` line groups, `<<commands>>`, `{expressions}`, `$variables`, `[markup]`, `#hashtags`, and `// comments`.
- A `color:` header (`red`, `blue`, `#4a9`, etc.) overrides a node's automatic colour, in both the editor and the graph.

## Vim mode

The Yarn editor has its own Vim mode. By default it follows Obsidian's **Settings → Editor → Vim key bindings**. You can force it on or off in this plugin's settings. Extras:

- `gd` — follow the jump under the cursor (go to the node, or create it if it's missing)
- `:w` save · `:wq` / `:x` save and close · `:q` close
- `:gr` open the node graph

Toggling Obsidian's Vim setting applies the next time you switch to a Yarn tab.

## The graph

Open it from the ribbon (fork icon) or the command palette: **Yarn Spinner Editor: Open node graph**. It opens beside the editor and follows whichever `.yarn` file you are working in, updating as you type.

- Arrows are coloured by the node they leave from. **Solid** = jump, **dotted** = detour, **dashed** = conditional (inside an `<<if>>` or behind an option with an `<<if>>`).
- Arrows that come from an option are labelled with the option text (toggle with the tag icon).
- Targets in other files appear as dashed ghost boxes; click to open them. Missing targets appear in red; click to create them.
- **Hover** a node to spotlight its incoming and outgoing connections.
- **Click** a node to scroll the editor to it; **double-click** to jump into it and start typing. The node your cursor is in is highlighted.
- **Drag** nodes to arrange them, drag the background to pan, scroll to zoom. The header icons fit the view and auto-arrange.

### Positions

By default, dragging writes `position: x,y` headers into the file — the same header the Yarn Spinner VS Code extension uses, so layouts carry between the two. Moves are ordinary edits: Ctrl/Cmd-Z in the editor undoes them. Turn this off in settings if you'd rather keep the file untouched; the arrangement then lasts only for the session.

## Commands

- Open node graph
- Go to node… (fuzzy search across every `.yarn` file in the vault)
- Insert new node
- Create new Yarn file (also on folder right-click menus)

## Notes and limits

- Dynamic jumps such as `<<jump {$next}>>` are highlighted but can't be drawn as arrows, since the target is only known at runtime.
- Edits made outside Obsidian (Unity, VS Code) are picked up automatically when the open file has no unsaved changes.
- This is a fresh plugin, tested against a simulated Obsidian environment rather than inside Obsidian itself, so a first real run may surface small visual issues.
