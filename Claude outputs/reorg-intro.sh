#!/usr/bin/env bash
# Reorganize Intro to Philosophy lecture notes by Reality+ part/chapter.
#
# Run from Git Bash, with Obsidian CLOSED (so Obsidian Git can't auto-commit halfway):
#   bash reorg-intro.sh                      # dry run: shows every change, touches nothing
#   bash reorg-intro.sh --apply              # does it and makes ONE git commit (no push)
# Optional last argument: path to the vault (default: ~/obsidian-notes)
#
# Safety: the script stops before changing anything if the vault doesn't look the way
# it did when this plan was made (missing/extra files, Spring 2026 and Spring 2027
# copies differing in text, duplicate notes not matching, staged changes in git...).
# It refuses to commit if the reorganization would leave any new broken path-style link.

set -euo pipefail
export LC_ALL=C.UTF-8 2>/dev/null || true

MODE=dry
if [[ "${1:-}" == "--apply" ]]; then MODE=apply; shift; fi
VAULT="${1:-$HOME/obsidian-notes}"
cd "$VAULT"

INTRO="Courses Database/Courses/Introduction to Philosophy"
LN="$INTRO/03-Lecture-Notes"
SRC="$LN/Spring 2027"          # the copy being reorganized
OLD="$LN/Spring 2026"          # identical older copy, deleted
PLAN="$INTRO/01-Schedule/Spring 2027 — 16-week plan.md"
INDEX="$INTRO/Introduction to Philosophy.md"
LOG="$INTRO/_import-log.md"
TODAY="2026-11-21"
MSG_SUBJECT="Intro: lecture notes by Reality+ part/chapter; Spring 2027 16-week plan"

P1="Part 1 Virtual Worlds"; P2="Part 2 Knowledge"; P3="Part 3 Reality"
P4="Part 4 Real Virtual Reality"; P5="Part 5 Mind"; P6="Part 6 Value"; P7="Part 7 Foundations"

# ---- folder skeleton --------------------------------------------------------
CHAPTERS=(
"$P1/Introduction - Adventures in technophilosophy"
"$P1/Ch 01 Is this the real life"
"$P1/Ch 02 What is the simulation hypothesis"
"$P2/Ch 03 Do we know things"
"$P2/Ch 04 Can we prove there is an external world"
"$P2/Ch 05 Is it likely that we are in a simulation"
"$P3/Ch 06 What is reality"
"$P3/Ch 07 Is God a hacker in the next universe up"
"$P3/Ch 08 Is the universe made of information"
"$P3/Ch 09 Did simulation create its from bits"
"$P4/Ch 10 Do virtual reality headsets create reality"
"$P4/Ch 11 Are virtual reality devices illusion machines"
"$P4/Ch 12 Does augmented reality lead to alternative facts"
"$P4/Ch 13 Can we avoid being deceived by deepfakes"
"$P5/Ch 14 How do mind and body interact in a virtual world"
"$P5/Ch 15 Can there be consciousness in a digital world"
"$P5/Ch 16 Does augmented reality extend the mind"
"$P6/Ch 17 Can you lead a good life in a virtual world"
"$P6/Ch 18 Do simulated lives matter"
"$P6/Ch 19 How should we build a virtual society"
"$P7/Ch 20 What do our words mean in virtual worlds"
"$P7/Ch 21 Do dust clouds run computer programs"
"$P7/Ch 22 Is reality a mathematical structure"
"$P7/Ch 23"
"$P7/Ch 24"
"_Not course"
)

# ---- moves: source (relative to Spring 2027) <TAB> destination (relative to 03-Lecture-Notes)
EM="$P5/Ch 16 Does augmented reality extend the mind/Extended Mind lab (Metaphysics and Epistemology)"
read -r -d '' MOVES <<EOF || true
Is This the Real World How do we know Who Cares.md	$P1/Introduction - Adventures in technophilosophy/Is This the Real World How do we know Who Cares.md
Week 1 — Is This the Real World.md	$P1/Ch 01 Is this the real life/Week 1 — Is This the Real World.md
Review.md	$P1/Ch 01 Is this the real life/Review.md
Entire Course Notes.md	$P1/Ch 01 Is this the real life/Entire Course Notes.md
Week 1 - Chapter 2.md	$P1/Ch 02 What is the simulation hypothesis/Week 1 - Chapter 2.md
Week 1 - Chapter 3.md	$P2/Ch 03 Do we know things/Week 1 - Chapter 3.md
Week 3 — The Problem of the External World (MW).md	$P2/Ch 03 Do we know things/Week 3 — The Problem of the External World (MW).md
Skepticism and the Problem of the External World (TTH).md	$P2/Ch 03 Do we know things/Skepticism and the Problem of the External World (TTH).md
Week 4 — Verificationism (MW).md	$P2/Ch 04 Can we prove there is an external world/Week 4 — Verificationism (MW).md
Week 3 — Verificationism (TTH).md	$P2/Ch 04 Can we prove there is an external world/Week 3 — Verificationism (TTH).md
The Reality of (Metaphsyics)/Presentation Week 3—Reality.md	$P2/Ch 04 Can we prove there is an external world/Presentation Week 3—Reality.md
Week 5 — The Simulation Argument (MW).md	$P2/Ch 05 Is it likely that we are in a simulation/Week 5 — The Simulation Argument (MW).md
The Simulation Argument (TTH).md	$P2/Ch 05 Is it likely that we are in a simulation/The Simulation Argument (TTH).md
What is the simulation hypothesis revisisted.md	$P2/Ch 05 Is it likely that we are in a simulation/What is the simulation hypothesis revisisted.md
Week 6 — Sim Blockers and Virtual Realism (MW).md	$P2/Ch 05 Is it likely that we are in a simulation/Week 6 — Sim Blockers and Virtual Realism (MW).md
Week 5 — Sim Blockers and Virtual Realism (TTH).md	$P2/Ch 05 Is it likely that we are in a simulation/Week 5 — Sim Blockers and Virtual Realism (TTH).md
Chapter 5.md	$P2/Ch 05 Is it likely that we are in a simulation/Chapter 5.md
The Reality of (Metaphsyics)/The Reality of (Metaphsyics).md	$P3/Ch 06 What is reality/The Reality of (Metaphsyics).md
Week 9 — The Realness of Virtual (MW).md	$P3/Ch 06 What is reality/Week 9 — The Realness of Virtual (MW).md
Week 8 — The Realness of Virtual (TTH).md	$P3/Ch 06 What is reality/Week 8 — The Realness of Virtual (TTH).md
Week 7 — Is God a Hacker (MW).md	$P3/Ch 07 Is God a hacker in the next universe up/Week 7 — Is God a Hacker (MW).md
Week 6 — Is God a Hacker (TTH).md	$P3/Ch 07 Is God a hacker in the next universe up/Week 6 — Is God a Hacker (TTH).md
Week 8 — Bonaventure’s Four Lights (MW).md	$P3/Ch 07 Is God a hacker in the next universe up/Week 8 — Bonaventure’s Four Lights (MW).md
Week 7 — Bonaventure's Four Lights (TTH).md	$P3/Ch 07 Is God a hacker in the next universe up/Week 7 — Bonaventure's Four Lights (TTH).md
Week 4 Real Virtual Reality.md	$P4/Ch 10 Do virtual reality headsets create reality/Week 4 Real Virtual Reality.md
Topics.md	$P5/Ch 14 How do mind and body interact in a virtual world/Topics.md
Cognition, Cognitive Science.md	$P5/Ch 16 Does augmented reality extend the mind/Cognition, Cognitive Science.md
Extended Mind Space Sim analogs.md	$P5/Ch 16 Does augmented reality extend the mind/Extended Mind Space Sim analogs.md
Lab - The Extended Mind.md	$P5/Ch 16 Does augmented reality extend the mind/Lab - The Extended Mind.md
Metaphysics and Epistemology/Metaphysics and Epistemology.md	$EM/Metaphysics and Epistemology.md
Metaphysics and Epistemology/Phase 1 The Pilot’s Extended Mind The.md	$EM/Phase 1 The Pilot’s Extended Mind The.md
Metaphysics and Epistemology/Phase 2 The Coupled Pilot (Extended Mind).md	$EM/Phase 2 The Coupled Pilot (Extended Mind).md
Metaphysics and Epistemology/Phase 3 The Broken Mind (The Contra-Positive).md	$EM/Phase 3 The Broken Mind (The Contra-Positive).md
Values.md	$P6/Ch 17 Can you lead a good life in a virtual world/Values.md
Chapter 19.md	$P6/Ch 19 How should we build a virtual society/Chapter 19.md
ASA Friday.md	_Not course/ASA Friday.md
Bruised Soul Indy Works of Art Inside Virtual Environments.md	_Not course/Bruised Soul Indy Works of Art Inside Virtual Environments.md
Christian Existentialism and the Slow Death of a Spaceman Respawning into.md	_Not course/Christian Existentialism and the Slow Death of a Spaceman Respawning into.md
Forgive, forget, but trust.md	_Not course/Forgive, forget, but trust.md
Learning important lessons about life.md	_Not course/Learning important lessons about life.md
Testing Mechanics in 4.8.md	_Not course/Testing Mechanics in 4.8.md
Why It’s Okay to be a Gamer.md	_Not course/Why It’s Okay to be a Gamer.md
Why.md	_Not course/Why.md
Romans 77-The law and the emotion/Romans 77-The law and the emotion.md	_Not course/Romans 77-The law and the emotion/Romans 77-The law and the emotion.md
Class Notes.base	Class Notes.base
EOF

# ---- deletions (relative to Spring 2027): duplicate <TAB> original it must match (or EMPTY)
read -r -d '' DELETES <<'EOF' || true
Metaphysics and Epistemology/Phase 1 The Pilot’s Extended Mind The 1.md	Metaphysics and Epistemology/Phase 1 The Pilot’s Extended Mind The.md
Metaphysics and Epistemology/Phase 2 The Coupled Pilot (Extended Mind) 1.md	Metaphysics and Epistemology/Phase 2 The Coupled Pilot (Extended Mind).md
Metaphysics and Epistemology/Phase 3 The Broken Mind (The Contra-Positive) 1.md	Metaphysics and Epistemology/Phase 3 The Broken Mind (The Contra-Positive).md
Romans 77-The law and the emotion/Untitled.md	EMPTY
The Reality of (Metaphsyics)/Untitled.md	EMPTY
EOF

die() { echo "STOPPED: $*" >&2; exit 1; }
say() { echo "$*"; }

# ============================ 1. PRE-FLIGHT CHECKS ============================
[[ -d .git ]] || die "$VAULT is not a git repository."
[[ ! -e .git/index.lock ]] || die "git is busy (.git/index.lock exists). Close Obsidian and try again."
git diff --cached --quiet || die "git already has staged changes; commit or unstage them first so this stays one clean commit."
[[ -d "$SRC" ]] || die "missing folder: $SRC"
[[ -d "$OLD" ]] || die "missing folder: $OLD"
[[ ! -e "$PLAN" ]] || die "already exists: $PLAN"
command -v perl >/dev/null || die "perl not found (it ships with Git for Windows; run this from Git Bash)."

declare -A EXPECTED=()
while IFS=$'\t' read -r s d; do [[ -n "$s" ]] || continue
  [[ -f "$SRC/$s" ]] || die "expected file is missing: $SRC/$s"
  [[ ! -e "$LN/$d" ]] || die "destination already exists: $LN/$d"
  EXPECTED["$s"]=1
done <<< "$MOVES"
while IFS=$'\t' read -r s o; do [[ -n "$s" ]] || continue
  [[ -f "$SRC/$s" ]] || die "expected file is missing: $SRC/$s"
  EXPECTED["$s"]=1
done <<< "$DELETES"

# nothing in the Spring folder that isn't on the list
UNLISTED=()
while IFS= read -r -d '' f; do r="${f#"$SRC/"}"; [[ -n "${EXPECTED[$r]:-}" ]] || UNLISTED+=("$r"); done \
  < <(find "$SRC" -type f -print0)
if ((${#UNLISTED[@]})); then
  printf '  %s\n' "${UNLISTED[@]}" >&2
  die "these files in Spring 2027 are not in the plan; tell Claude where they go."
fi

# Spring 2026 must be the same set of files with the same text (ignoring Spring 2026/2027 in self-links)
perl -e '
  use strict; my ($a,$b)=@ARGV; my @bad;
  my @fa = map { s{^\Q$a\E/}{}r } split /\0/, `find "$a" -type f -print0`;
  my @fb = map { s{^\Q$b\E/}{}r } split /\0/, `find "$b" -type f -print0`;
  my %A=map{$_,1}@fa; my %B=map{$_,1}@fb;
  for (sort keys %A){ push @bad,"only in Spring 2027: $_" unless $B{$_} }
  for (sort keys %B){ push @bad,"only in Spring 2026: $_" unless $A{$_} }
  for my $r (grep {$B{$_}} @fa){
    local $/; open my $x,"<:raw","$a/$r" or die; my $t1=<$x>; open my $y,"<:raw","$b/$r" or die; my $t2=<$y>;
    s{03-Lecture-Notes/Spring 202[67]/}{03-Lecture-Notes/SPRING/}g for $t1,$t2;
    push @bad,"text differs: $r" if $t1 ne $t2 }
  if(@bad){ print STDERR "  $_\n" for @bad; exit 1 }' "$SRC" "$OLD" \
  || die "Spring 2026 is not an identical copy of Spring 2027, so it will not be deleted. Nothing was changed."

# duplicates must match their originals (apart from the notion-id line); Untitled notes must be empty
while IFS=$'\t' read -r s o; do [[ -n "$s" ]] || continue
  if [[ "$o" == EMPTY ]]; then
    perl -e 'local $/; open my $f,"<:raw",$ARGV[0] or die; my $t=<$f>;
             $t =~ s/\A---\r?\n.*?\r?\n---\r?\n?//s; exit($t =~ /\S/ ? 1 : 0)' "$SRC/$s" \
      || die "not empty, so not deleting: $SRC/$s"
  else
    perl -e 'local $/; my @t; for (@ARGV){ open my $f,"<:raw",$_ or die; my $x=<$f>; $x =~ s/^notion-id:.*$//m; push @t,$x }
             exit($t[0] eq $t[1] ? 0 : 1)' "$SRC/$s" "$SRC/$o" \
      || die "duplicate text does not match its original, so not deleting: $SRC/$s"
  fi
done <<< "$DELETES"

# ============================ 2. LINK MAP + VAULT SCAN ============================
MAPFILE_TMP="$(mktemp)"; trap 'rm -f "$MAPFILE_TMP" "$MAPFILE_TMP".*' EXIT
while IFS=$'\t' read -r s d; do [[ -n "$s" ]] || continue
  for pre in "Spring 2027" "Spring 2026"; do
    printf 'MAP\t%s\t%s\n' "$LN/$pre/$s" "$LN/$d" >> "$MAPFILE_TMP"
  done
done <<< "$MOVES"
while IFS=$'\t' read -r s o; do [[ "$o" == EMPTY ]] || continue
  for pre in "Spring 2027" "Spring 2026"; do printf 'DROP\t%s\n' "$LN/$pre/$s" >> "$MAPFILE_TMP"; done
done <<< "$DELETES"

# The rewriter: path-style wikilinks/embeds ([[path]], [[path.md|alias]], ![[path#h]]),
# canvas "file":"path.md" fields and markdown (path%20with%20spaces.md) links.
# Lines that are nothing but a link to a deleted Untitled note are removed; otherwise just the link.
REWRITER='
use strict; use warnings;
use File::Path qw(make_path); use File::Basename qw(dirname);
my ($mapfile,$mode,$report,$skipre,$bk)=@ARGV;
my (@map,@drop);
open my $m,"<:raw",$mapfile or die; while(<$m>){ chomp; my @f=split /\t/; if($f[0] eq "MAP"){push @map,[$f[1],$f[2]]} else {push @drop,$f[1]} }
@map = sort { length($b->[0]) <=> length($a->[0]) } @map;
sub stem { my $p=shift; $p =~ s/\.md$//; $p }
sub enc  { my $p=shift; $p =~ s/ /%20/g; $p }
my @files = grep { !m{^\./(\.git|\.obsidian|\.trash)/} && !m{$skipre} } split /\0/, `find . -type f \\( -name "*.md" -o -name "*.base" -o -name "*.canvas" \\) -print0`;
open my $rep,">:raw",$report or die;
for my $file (@files){
  local $/; open my $fh,"<:raw",$file or die "$file: $!"; my $t=<$fh>; close $fh; my $orig=$t; my $n=0;
  for my $d (@drop){
    my $s=quotemeta(stem($d));
    $n += ($t =~ s/^[ \t]*!?\[\[$s(?:\.md)?(?:[#|][^\]]*)?\]\][ \t]*\r?\n//mg);
    $n += ($t =~ s/!?\[\[$s(?:\.md)?(?:[#|][^\]]*)?\]\]//g);
  }
  for my $p (@map){
    my ($o,$nw)=@$p;
    if($o =~ /\.md$/){
      my ($os,$ns)=(quotemeta(stem($o)),stem($nw));
      $n += ($t =~ s{(?<=\[\[)$os(\.md)?(?=[\]|#^])}{$ns.($1//"")}ge);
      my $oq=quotemeta($o); $n += ($t =~ s/(?<=")$oq(?=")/$nw/g);
      my $oe=quotemeta(enc($o)); my $ne=enc($nw); $n += ($t =~ s/(?<=\]\()$oe(?=[)#])/$ne/g);
    } else {
      my $oq=quotemeta($o);
      $n += ($t =~ s/(?<=\[\[)$oq(?=[\]|#^])/$nw/g);
      $n += ($t =~ s/(?<=")$oq(?=")/$nw/g);
    }
  }
  if($t ne $orig){
    (my $rel=$file) =~ s{^\./}{};
    print $rep "$rel\t$n\n";
    if($mode eq "apply"){
      make_path(dirname("$bk/$rel")); open my $b,">:raw","$bk/$rel" or die; print $b $orig; close $b;
      open my $o,">:raw",$file or die; print $o $t; close $o }
  }
}'

# skip the two Spring folders themselves in the dry-run scan (their files move first in apply mode)
SKIP='^\./'"$(printf '%s' "$LN" | sed 's/[][\.*^$()+?{}|/]/\\&/g')"'/Spring 202[67]/'

# path-style links into the Intro folder whose target doesn't exist
BROKEN_CHECK='
use strict; my $intro=$ARGV[0];
my @files = grep { !m{^\./(\.git|\.obsidian|\.trash)/} } split /\0/, `find . -type f \\( -name "*.md" -o -name "*.base" -o -name "*.canvas" \\) -print0`;
for my $file (@files){ local $/; open my $fh,"<:raw",$file or next; my $t=<$fh>;
  while($t =~ /\[\[(\Q$intro\E\/[^\]|#^]+)/g){ my $p=$1; $p =~ s/\s+$//;
    next if -e $p || -e "$p.md";
    (my $rel=$file)=~s{^\./}{}; print "$rel\t$p\n" } }'

# ============================ 3. DRY RUN ============================
if [[ "$MODE" == dry ]]; then
  say "DRY RUN — nothing will be changed. Vault: $VAULT"
  say ""; say "Create folders under $LN:"; for c in "${CHAPTERS[@]}"; do say "  + $c"; done
  say ""; say "Move from Spring 2027:"
  while IFS=$'\t' read -r s d; do [[ -n "$s" ]] || continue; say "  $s  ->  $d"; done <<< "$MOVES"
  say ""; say "Delete:"
  while IFS=$'\t' read -r s o; do [[ -n "$s" ]] || continue
    if [[ "$o" == EMPTY ]]; then say "  Spring 2027/$s  (empty note; links to it removed)"
    else say "  Spring 2027/$s  (duplicate of ${o##*/}; text verified identical)"; fi
  done <<< "$DELETES"
  say "  Spring 2026/  (whole folder: identical copy of Spring 2027, verified)"
  say "  Spring 2027/  (once empty)"
  say ""; say "Notes outside the Spring folders whose links would be rewritten:"
  perl -e "$REWRITER" "$MAPFILE_TMP" dry "$MAPFILE_TMP.rep" "$SKIP" /nonexistent
  if [[ -s "$MAPFILE_TMP.rep" ]]; then awk -F'\t' '{printf "  %s  (%s link%s)\n",$1,$2,($2==1?"":"s")}' "$MAPFILE_TMP.rep"
  else say "  (none)"; fi
  say "(Links inside the moved notes are rewritten too: their base: lines and links to each other.)"
  say ""; say "New: $PLAN"
  say "Edit: $INDEX (03-Lecture-Notes line, 01-Schedule line)"
  say "Append: $LOG"
  say ""; say "Pre-flight checks passed. Run again with --apply to do it."
  exit 0
fi

# ============================ 4. APPLY ============================
BEFORE_BROKEN="$(perl -e "$BROKEN_CHECK" "$INTRO" | sort)"
BK="$HOME/reorg-intro-backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BK/before"
cp -a "$INTRO" "$BK/before/"       # full copy of the course folder as it was
say "Backup of the course folder: $BK/before"

for c in "${CHAPTERS[@]}"; do mkdir -p "$LN/$c"; done
while IFS=$'\t' read -r s d; do [[ -n "$s" ]] || continue
  mkdir -p "$(dirname "$LN/$d")"; mv "$SRC/$s" "$LN/$d"
done <<< "$MOVES"
while IFS=$'\t' read -r s o; do [[ -n "$s" ]] || continue; rm "$SRC/$s"; done <<< "$DELETES"
find "$SRC" -depth -type d -empty -delete
[[ ! -e "$SRC" ]] || die "Spring 2027 is not empty after the moves (unexpected)."
rm -r "$OLD"

# keep empty chapter folders in git (dot-files are invisible in Obsidian)
for c in "${CHAPTERS[@]}"; do
  if [[ -z "$(ls -A "$LN/$c")" ]]; then : > "$LN/$c/.gitkeep"; fi
done

perl -e "$REWRITER" "$MAPFILE_TMP" apply "$MAPFILE_TMP.rep" '^$^' "$BK/links-original"

# --- 16-week plan
cat > "$PLAN" <<'EOF'
---
tags: [schedule]
term: spring-2027
status: draft
---
# Spring 2027 — 16-week plan

Stetson calendar: classes Jan 11 – Apr 28, 2027 · spring break Mar 8–12 · finals Apr 30 – May 4 · no classes Mon Jan 18 (MLK) or Tue Apr 13 (Showcase).

| Week | MW starts | TTh starts | Part | Reality+ | Additional readings | Video |
|---|---|---|---|---|---|---|
| 1 | Jan 11 | Jan 12 | Virtual Worlds | Intro, Ch 1 | course introduction | Ep 1 |
| 2 | Jan 20 | Jan 19 | Virtual Worlds/Knowledge | Ch 2–3 | Descartes, Meditations I–II; a Socratic dialogue (TBD) | Ep 2 |
| 3 | Jan 25 | Jan 26 | Knowledge | Ch 4–5 | Plantinga, EAAN; Bostrom 2003 | Ep 3, 4, 5 |
| 4 | Feb 1 | Feb 2 | Reality | Ch 6–7 | Bonaventure; reading cited in Analytic Theism (TBD) | Ep 6, 8 |
| 5 | Feb 8 | Feb 9 | Reality | Ch 8–9 | metaphysics reading (TBD) |  |
| 6 | Feb 15 | Feb 16 | Real Virtual Reality | Ch 10–13 |  | Ep 7 |
| 7 | Feb 22 | Feb 23 | Mind | Ch 14 | Swinburne, Are We Bodies or Souls?; Chalmers (ed.), Philosophy of Mind selection |  |
| 8 | Mar 1 | Mar 2 | Mind | Ch 15 | Chalmers, The Conscious Mind (excerpt); Plantinga, God and Other Minds | Ep 10 |
| — | Mar 8 | Mar 9 | Spring break (Mar 8–12) |  |  |  |
| 9 | Mar 15 | Mar 16 | Mind | Ch 16 | MindForge (arXiv:2411.12977); Extended Mind lab |  |
| 10 | Mar 22 | Mar 23 | Value | Ch 17 | Aquinas, ST I-II q.2; intro to value | Ep 9 |
| 11 | Mar 29 | Mar 30 | Value | Ch 18 | consciousness and value: shared conscious states, empathy, moral status (TBD) |  |
| 12 | Apr 5 | Apr 6 | Value | Ch 19 | philosophy of law; applied ethics (TBD) |  |
| 13 | Apr 12 | Apr 15 | Value | — | aesthetics; moral goodness (TBD) |  |
| 14 | Apr 19 | Apr 20 | Foundations | Ch 20–22 | logic and argument forms |  |
| 15 | Apr 26 | Apr 27 | Foundations | Ch 23–24 | experimental philosophy; Bayesian reasoning; review |  |
| 16 | Apr 30 – May 4 |  | Finals |  | final exam |  |

## Chapters with no notes yet
- Ch 08 Is the universe made of information
- Ch 09 Did simulation create its from bits
- Ch 11 Are virtual reality devices illusion machines
- Ch 12 Does augmented reality lead to alternative facts
- Ch 13 Can we avoid being deceived by deepfakes
- Ch 15 Can there be consciousness in a digital world
- Ch 18 Do simulated lives matter
- Ch 20 What do our words mean in virtual worlds
- Ch 21 Do dust clouds run computer programs
- Ch 22 Is reality a mathematical structure
- Ch 23
- Ch 24
EOF

# --- course index: exactly two lines change
perl -e '
  my $f=$ARGV[0]; local $/; open my $in,"<:raw",$f or die; my $t=<$in>; close $in; my $c=0;
  $c += ($t =~ s/^- \*\*03-Lecture-Notes\*\* · Spring 2026, Summer 2026[ \t]*$/- **03-Lecture-Notes** · organized by *Reality+* part and chapter (Part 1 Virtual Worlds → Part 7 Foundations), with non-course notes in `_Not course` · also Summer 2026 and Course site 2026_intro/m);
  $c += ($t =~ s/^(- \*\*01-Schedule\*\* · .*CALENDAR-PHIL101B-SECTION04-TTh-PM\]\])[ \t]*$/$1 · [[Courses Database\/Courses\/Introduction to Philosophy\/01-Schedule\/Spring 2027 — 16-week plan|Spring 2027 — 16-week plan]]/m);
  die "index note: expected 2 line edits, found $c; index left unchanged\n" unless $c==2;
  open my $out,">:raw",$f or die; print $out $t; close $out' "$INDEX"

# --- import log (CRLF, like the existing file)
{
  echo ""
  echo "## Lecture notes reorganized by Reality+ part and chapter ($TODAY)"
  echo ""
  echo "Spring 2027 lecture notes moved into one folder per *Reality+* part, with a subfolder per chapter; non-course notes moved to \`_Not course\`. Note text unchanged; only link paths were rewritten."
  echo ""
  echo "| Action | From | To |"
  echo "|---|---|---|"
  while IFS=$'\t' read -r s d; do [[ -n "$s" ]] || continue; echo "| moved | \`$SRC/$s\` | \`$LN/$d\` |"; done <<< "$MOVES"
  while IFS=$'\t' read -r s o; do [[ -n "$s" ]] || continue
    if [[ "$o" == EMPTY ]]; then echo "| deleted | \`$SRC/$s\` | empty note; links to it removed |"
    else echo "| deleted | \`$SRC/$s\` | duplicate of \`${o##*/}\` (same text, different notion-id) |"; fi
  done <<< "$DELETES"
  echo "| deleted | \`$OLD\` | whole folder; identical older copy of Spring 2027 |"
  echo "| deleted | \`$SRC\` | emptied folder |"
  echo "| created | — | \`$PLAN\` |"
  echo ""
  echo "Links rewritten in:"
  awk -F'\t' '{printf "- `%s` (%s)\n",$1,$2}' "$MAPFILE_TMP.rep"
} | sed 's/$/\r/' >> "$LOG"

# ============================ 5. CHECK + COMMIT ============================
AFTER_BROKEN="$(perl -e "$BROKEN_CHECK" "$INTRO" | sort)"
NEW_BROKEN="$(comm -13 <(printf '%s\n' "$BEFORE_BROKEN") <(printf '%s\n' "$AFTER_BROKEN") | sed '/^$/d')"
if [[ -n "$NEW_BROKEN" ]]; then
  echo "$NEW_BROKEN" | sed 's/\t/  ->  /; s/^/  /' >&2
  die "the links above would be broken. Files were changed but NOT committed. Originals: $BK (course folder in before/, other rewritten notes in links-original/). Send Claude this output."
fi

PATHS=("$OLD" "$SRC" "$LN/Class Notes.base" "$PLAN" "$INDEX" "$LOG")
for p in "$P1" "$P2" "$P3" "$P4" "$P5" "$P6" "$P7" "_Not course"; do PATHS+=("$LN/$p"); done
while IFS=$'\t' read -r f n; do [[ -n "$f" ]] || continue; PATHS+=("$f"); done < "$MAPFILE_TMP.rep"
ADD=()
for p in "${PATHS[@]}"; do
  if [[ -e "$p" ]] || [[ -n "$(git ls-files -- "$p" | head -n 1)" ]]; then ADD+=("$p"); fi
done
git add -A -- "${ADD[@]}"
git commit -q -F - <<EOF
$MSG_SUBJECT

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_017xM1nkcryiRBYYiLhnnZJG
EOF

say "Done: one commit made."
git --no-pager log -1 --stat --format='%h %s' | tail -n 3
if [[ -n "$AFTER_BROKEN" ]]; then
  say ""; say "Broken path-style links into the Intro folder that were already broken before (left alone):"
  echo "$AFTER_BROKEN" | sed 's/\t/  ->  /; s/^/  /'
fi
say ""; say "Now open Obsidian and push (Obsidian Git: 'Push')."
