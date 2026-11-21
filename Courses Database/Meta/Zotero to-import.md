---
tags: [zotero, reading-list]
---
# Readings to add to Zotero

Found as loose files during the course inventory (Nov 20, 2026) and not in your Zotero library (checked by file hash and title). Add each with **File → Add Attachment / Import**, or drag into Zotero, then put it in the right course collection.

| Reading | Where the file is | Course |
|---|---|---|
| forall x (IFL2_LM.pdf) | `C:\Users\Administrator\Default\logic-2026\IFL2_LM.pdf` | Logic |
| Yablo, "Coulda, Woulda, Shoulda" | `C:\Users\Administrator\Documents\yablo-Coulda.pdf` | Research |
| On Romantic Love | `C:\Users\Administrator\Documents\My Digital Editions\On Romantic Love Pia C.pdf` | |
| Project Gutenberg ebook 61077 | `C:\Users\Administrator\Favorites\Downloads\pg61077-images-3.epub` | |
| reality-value.pdf | `Obsidian Vault\Files\Documents\reality-value.pdf` | Intro |
| 27893.pdf | `Obsidian Vault\Files\Documents\27893.pdf` | (unidentified) |
| Introduction to Transformative Game Design (OER) | `Obsidian Vault\MIHLab Database\eduLARP\` | MIHLab |
| GameWrap Vol. 1 | `Obsidian Vault\MIHLab Database\eduLARP\GameWrapVol1.pdf` | MIHLab |
| Lumen Script Book (Erasmus EDGE Consortium) | `Obsidian Vault\MIHLab Database\eduLARP\` | MIHLab |
| UCOR reading lists (3 PDFs) | `C:\Users\Administrator\courses\spring-ucor\Introduction\` | UCOR |

Already in Zotero (no action): 12 PDFs matched exactly, plus *Nicomachean Ethics* and *The Prince of Darkness* by title.

Not readings (left where they are): your CV, cover letters, statements, transcripts, recommendation letters, your own paper drafts, LCCC adjunct paperwork, and course handouts.

## Citation workflow (plugins already installed)
1. **Zotero:** install Better BibTeX if it isn't active, and set **Better BibTeX → Automatic export** of *My Library* to `Obsidian Vault/Courses Database/Meta/My Library.bib` (format: Better BibLaTeX, "keep updated").
2. **Obsidian → Zotero Integration:** point it at that database and add a citation format (Pandoc) and an import format (literature note template). Bind "Insert citation" to a hotkey; it opens Zotero's own search box.
3. **Obsidian → Pandoc Reference List:** point it at the same `.bib` so `[@key]` citations show a formatted reference list in the sidebar.
4. **Course collections:** each course's `02-Readings/cited-works.bib` imports into Zotero as a collection named after the file.
