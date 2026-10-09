# Bibliography report

`references.bib` (this folder) merges the eight .bib files from 2026-10-09: about 35,800 entries in, **24,677 unique citekeys** out. Pandoc reads it cleanly, and every chapter was checked against it.

## How it was built
- **One entry per citekey.** Where files disagreed, the most complete entry won (author, title, year, venue, DOI).
- **Zotero `file` paths removed.** They pointed to the old Linux machine.
- **Dropped:** `bruner_acts_1990`, which had a corrupt notes field. Your other Bruner 1990 entries remain.
- **Tagged in `keywords`** (Pandoc does not print this field):
  - `ra-added` — recommended in the literature review
  - `ra-recovered` — cited in a chapter but missing from every file
  - `verify` — details from memory; check before citing

## Keys that pointed to different works
In these cases one citekey meant different works in different files. I chose the work the chapter text means.

| Key | Now points to | Why |
|---|---|---|
| `nuss01` | *Upheavals of Thought* (2001) | Cited for emotions as judgments of value; one file had the adaptive-preferences article |
| `nuss01a` | *The Fragility of Goodness* | Ch. 9 names *Fragility*; one file had "Non-Relative Virtues" |
| `nuss86` | *The Fragility of Goodness* (1986) | One file had "Commentary on Mourelatos" |
| `nuss90` | *Love's Knowledge* (1990) | Quoted pages run past the "Finely Aware" essay |
| `gold03` | Goldie, "Narrative, Emotion, and Perspective" | Cited at p. 60 with Kieran & Lopes 2003 |
| `kind16` | Kind & Kung, introduction to *Knowledge Through Imagination* | Cited as Kind & Kung |
| `lewi78` | Lewis, "Truth in Fiction" | Cleaner record of the same paper |

**Still worth checking:**
- `nuss95` is "Changing Aristotle's Mind," but the sentence ("the good in another's life … literary imagination") reads like *Poetic Justice* (1995).
- `leon18`: confirm the title of Leonard's 2018 *APQ* paper ("Transmission" or "Inheritance" view).
- `gold09` is Goldberg, "Experts, Semantic and Epistemic" (2009). The Word version printed it with no author; that was flag RA-1.
- The Golden Bowl quotations belong to `@nuss85c` ("Finely Aware and Richly Responsible," 1985), not `@nuss85`.
- The Abell quotations belong to `@abel20` (*Fiction: A Philosophical Analysis*), not `@abel22`.

## Cited keys added so the chapters resolve
- **Copies of an existing entry under the key the chapter uses:**
  - `jones99` = `jone99`
  - `wigg87` = `Wigg87`
  - `darm00b` = `darms_sentiment_2000`
  - `zazb17` = `zagz17`
  - `born20a` = `born20`
  - `hait03a` = `haid03`
  - `toma13`, `toma13e` = Tomaney 2013 (the pages cited at `toma13e`, 233–34, don't match Tomaney's 658–72)
  - `gilm21` = `gilm20` (*Apt Imaginings*)
  - `malo21` = `malo22`
  - `dyck19` = `dyck21`
  - `gram09` = `grah09`
  - `solo93` = Solomon, *The Passions*, set to 1993 (verify)
- **Rebuilt from the Word version's bibliography:** `layb18`, `lesl87`, `robi05`, `sche24`, `darw13c`
- **Identified from context and added (`verify`):** `gill82`, `feag96`, `lyon80`, `matr14`, `mcgi97`, `mesk03`, `nich00`, `putn75`, `smit95`, `livi97`, `hatf92`, `haid03b`, `vian10`

## Still unresolved (need your notes)
| Chapter | Keys |
|---|---|
| 01 Intro | `coe13` ("Palmer, Begley, and @coe13"); `@See` is a typo inside `[@See @alfa22 …]` |
| 04 Moral Testimony | `audi77` |
| 05 Moral Worth of Well-Being | `triv14` (Trivedi on how a song sounds sad?) |
| 06 Moral Intuition | `carr83`, `kopt11`, `zipf11` (fiction-as-institution list), `fiel99` (Fielding), `gold08`, `thie00`, `wils86`; `prin010` is probably `prin07` |
| 08 Social Identity | `dill13` |
| 09 Understanding and Worth | `gold04`, `gree09`, `nort97` |

## Literature-review works: keys to cite
- **Already in your library (use these keys):** `call18` Callahan, `howa18` Howard, `flet16` Fletcher, `moge17` Mogensen, `skar16a` Skarsaune, `mcsh18` McShane, `howe14` Howell, `sliw17` Sliwa 2017, `stra04` Strawson, `fric07` Fricker, `medi12` Medina, `mill12` Mills, `buch02` Buchanan, `camp12` Campbell & Kumar, `mark10` Markovits, `brad13a` Brady, `darb05` Darby & Shelby, `stum10` Stump, `lind14` Lindemann, `mill14` Million, `abel20` Abell, `nuss85c` Nussbaum, `benn74` Bennett, `tuna20` Tuna (SEP)
- **New:**
  - Moral testimony and understanding: `dish24`, `dish24a`, `dish24b` (Dishaw); `wila21` (Wiland); `woda21` (Wodak); `boyd20` (Boyd); `howa21x` (Howard, "Goals of Moral Worth"); `sliw23` and `sliw23a` (Sliwa); `file22` (Fileva); `hopk11` (Hopkins, aesthetic testimony)
  - Art, fiction and narrative: `haro20` (Harold); `nann20` (Nannicelli); `goff22` (Goffin & Friend); `gend00b` (Gendler); `nels01` (Lindemann Nelson); `rea22` (Rea)
  - Music: `hubb14` (Hubbs); `fox04` (Fox); `roys22` (Royster); `deno00` (DeNora)
  - Moral epistemology and moral progress: `kuma22` (Kumar & Campbell); `darm23` (D'Arms & Jacobson); `camp24` (Campbell, SEP 2024); `kitc11` (Kitcher); `ande14x` (Anderson); `rail14` (Railton)
  - AI moral advice: `dill25` (Dillion et al.); `krug23` (Krügel et al.); `frit25` (Fritz); `land26` (Landes et al.); `gala25` (Galatolo et al.); `ahar24` (Aharoni et al.)
  - Dilemmas and regret: `will76`, `will65` (Williams); `marc80` (Marcus)
  - Emotion and empathy: `dori07` (Döring); `keen07` (Keen); `bloo16` (Bloom)
  - Identity: `nguy19x` (Nguyen & Strohl); `higg91` (Higgins); `hasl12` (Haslanger); `appi05` (Appiah)
