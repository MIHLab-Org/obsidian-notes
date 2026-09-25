---
notion-id: 3548935b-cf8a-816a-a190-e432264eb3b9
---
> **Last updated:** May 2026

> **Purpose:** This document explains how the Moral Imagination and Hope Laboratory Notion workspace is organized, what each database does, how to create new projects, and how everything connects.

---

# 📚 Table of Contents

1. Overview
2. The Core Principle
3. Databases
4. Pages
5. How Everything Connects
6. How to Create a New Project
7. How to Use the Calendar
8. Templates Reference
9. What to Ignore / Clean Up

---

# 1. Overview

The Moral Imagination and Hope Laboratory workspace is organized around **one central idea: everything connects back to a Project.** Whether you are teaching a course, writing an article, running a thought experiment, or scheduling a family event, it all links to a project entry or appears in the Events Calendar.

The workspace lives at: [Moral Imagination and Hope Laboratory](https://www.notion.so/56c8935bcf8a8221b03701d11e3fba07)

---

# 2. The Core Principle

**One source of truth. No duplication.**

Every piece of information lives in exactly one place. Everything else links to it. If you update a note, an experiment, or a calendar entry in one place, it is updated everywhere. You never copy content between pages — you link to it.

If you find yourself writing the same thing in two places, stop. One of those places is wrong.

---

# 3. Databases

These are the live databases in the workspace. Each one has a specific job.

---

## 🗒️ Projects

[Open Projects](https://www.notion.so/b318935bcf8a837fb179817520c32123)

**The single most important database.** Every course, book, article, and organizational initiative is a row here. There are no separate course or publication databases — everything is a project with a type.

**Project Types:**

- 📚 **Book** — a book manuscript
- 📄 **Article** — a journal article or book chapter
- 🎓 **Course** — a course you are teaching or developing
- 🏗️ **Organization** — a lab initiative, committee, or organizational task
- ⬜ **Other** — anything that doesn't fit the above

**Key properties:**

- **Name** — the project title
- **Project Type** — Book / Article / Course / Organization / Other
- **Status** — Ideas → Outline → Draft → Review → Revise → Submitted → Canceled
- **Priority** — Now / Soon / Later
- **Target Date** — deadline or completion target
- **Target Journal** — for articles: where you are submitting
- **Abstract/Thesis** — the central claim in one sentence
- **Next Action** — the single most concrete next task (text field)
- **Events Calendar** — links to entries in the Events Calendar
- **Publications** — links to the Publications database (for books linking to their chapters)
- **Experiments Plan** — links to experiments
- **Tasks** — links to the Tasks database

**Templates (select when clicking New):**

- 📚 New Book Project
- 📄 New Article Project
- 🎓 New Course Project
- 🏗️ New Organization Project

**Current projects include:**

- Philosophy of Mind
- Introduction to Philosophy, Spring 2026 (MW and TTH)
- Logic, Spring 2026
- Philosophy of Law
- Cognition, Cognitive Science
- Philosophy of Mind: Love, Knowledge, and Suffering of the Vulnerable Self
- Annihilating Evil (book)

---

## 🗓️ Events Calendar

[Open Events Calendar](https://www.notion.so/3468935bcf8a80eb8c7bef9d730f27e1)

**Your single unified calendar.** This is where every scheduled event lives — personal, academic, and research. One row = one event or note. It replaces separate course schedules, personal calendars, and note databases.

**Key properties:**

- **Day** — the title / name of the event or note
- **Date** — when it happens
- **Tags** — what kind of entry it is:
	- `lecture` — a class you are teaching
	- `discussion` — a class discussion or seminar
	- `reading` — a reading assignment or independent reading
	- `research` — research work
	- `admin` — administrative tasks
	- `brain dump` — quick idea capture
	- `task` — a task or to-do
- **Category** — Meeting / Birthday / Conference / Social / Deadline / Appointment / Holiday / Workshop / Lecture / Quiz / Discussion / Office Hours
- **Section** — MW / TTH / Both / N/A (for course events)
- **People** — Elias / Mom / Faith / Asher / Dad (for personal events)
- **Project** — links to Projects database
- **Literature** — links to Notero/Zotero sources
- **Experiments** — links to Experiments Plan
- **Assignments Due** — links to Assignments database
- **Tasks** — links to Tasks database
- **Priority** — Now / Soon / Later (hidden by default)
- **Status** — Planned / In Progress / Done / Cancelled (hidden by default)
- **Source URL** — link to original source (hidden by default)

**Views available:**

- 🗓️ **Everything** — full calendar view, personal + academic
- 🎓 **Course Schedule** — filtered to lecture + discussion
- 🔬 **Research** — filtered to research + reading
- 🏗️ **Admin & Personal** — filtered to admin
- 🧠 **Brain Dump** — filtered to brain dump
- ✅ **Tasks** — filtered to task, sorted by Priority then Date

**How to use:** Add a new row for every lecture, appointment, note, task, or idea. Tag it appropriately. Link it to a project. Open the page inside the row to write notes, link sources, or capture details.

---

## 📚 Literature (Notero)

[Open Literature Database](https://www.notion.so/4118935bcf8a832fb892019756a63473)

Your **Zotero-synced** source library. Every academic source you read or reference lives here, synced automatically from Zotero via the Notero plugin. Do not add sources manually — add them in Zotero and they sync here.

**Reading Notes** for each source use the **Course Rubric** structure: Understanding (Text, Ideas, Analysis, Synthesis) → Evaluation (Argument, Position) → Creation (Thesis, Examples, Alternatives) → Style.

---

## 🧪 Experiments Plan

[Open Experiments Plan](https://www.notion.so/1798935bcf8a831d8756013dd3a95931)

Philosophical thought experiments using the scientific method. Each experiment tests a philosophical intuition using Star Citizen or Elite Dangerous as the experimental context. These exist in the [[Courses Database/Introduction to Philosophy, Spring 2026/Class Notes/Class Notes.base]] database, filtered by “tags=lab”.

**Structure of each experiment:**

- **Aim** — why you are running this experiment
- **Observation** — the intuition or counter-argument being tested
- **Hypothesis** — a single falsifiable claim
- **Method** — three phases: Internalist Baseline → Extended/Modified Case → Contra-Positive
- **Results** — what each phase revealed
- **Conclusion** — what this means for your argument

**Experiment types:**

- **Method** — used to develop a counter-argument in an article
- **Output** — a product of the lab organization

**Key relation:** Each experiment links to one or more Projects (multi-select).

---

## 📄 Publications

[Open Publications](https://www.notion.so/34c8935bcf8a8188869bf986a0e0f62d)

Journal articles and book chapters as discrete objects. Each entry represents one article you are writing, with its own status, next action, target journal, and links to literature and experiments. 

**Status pipeline:** Idea → Outline → Drafting → Revising → Under Review → Submitted → Published

**Critical rule: Only ONE publication should be in Drafting status at any time.** This is your active writing project. Everything else waits.

**Links to:** Book Projects (via Book Project relation), Courses, Literature

---

## 📝 Notes

[Open Notes](https://www.notion.so/05c501e78f3c4eb4b561283137805817)

A central notes database for all project types. Note Type property distinguishes:

- Class Note — lecture content
- Research Note — research ideas
- Reading Note — notes on a specific source (structured by rubric)
- Meeting Note — meeting records
- Planning Note — planning and strategy
- Brain Dump — unfiltered capture

**Note:** The Events Calendar is now the primary place for new notes tied to specific dates. The Notes database is for standalone notes not tied to a calendar entry.

---

## 📋 Assignments

[Open Assignments](https://www.notion.so/7318935bcf8a82e597be81a858e4b0aa)

All course assignments. Used for Courses only.

**Assignment types (templates):**

- 🧮 Logic Quiz Template
- 📓 Weekly Reflection Template
- 📄 Essay Assignment Template
- ❓ Philosophy Quiz Template

Each assignment template embeds the relevant rubric level (Low / Medium / High Stakes).

---

## 📚 Courses Database *(transitional)*

[Open Courses Database](https://www.notion.so/3348935bcf8a80b89151e2a44d2a03c6)

This database is being phased out. All courses are being moved to the Projects database. Once the migration is complete this database will be archived. Do not add new courses here — add them as Projects with Type = Course.

---

## 🗒️ Schedule *(transitional)*

[Open Schedule](https://www.notion.so/3518935bcf8a808fbb8bee314c00cfd4)

This database was built during restructuring but has been superseded by the Events Calendar. Existing entries need to be manually moved to the Events Calendar. Once migration is complete this database will be deleted. Do not add new entries here.

---

# 4. Pages

## 🏠 Moral Imagination and Hope Laboratory

[Open Lab Hub](https://www.notion.so/56c8935bcf8a8221b03701d11e3fba07)

The top-level home page. Contains quick links to all major databases and the Events Calendar as the main calendar view.

## 📓 Laboratory Notebook

[Open Laboratory Notebook](https://www.notion.so/d1e8935bcf8a82b69b09013c8e5c727d)

Contains the Experiments Plan database and lab journal entries.

## 🗺️ Templates & Forms Index

[Open Index](https://www.notion.so/34d8935bcf8a81a19133da4eeaf2fedb)

A clickable index of every template in the workspace. Start here when you need a template.

## 📋 Templates & Forms

[Open Templates & Forms](https://www.notion.so/33b8935bcf8a802abce0e798df53b5ee)

Contains the Syllabus Templates database and Travel Reimbursement tracker.

## 🏠 Home

[Open Home](https://www.notion.so/3538935bcf8a811291e1e68054783709)

A dedicated home page with quick links and the Events Calendar embedded as the main calendar view.

---

# 5. How Everything Connects

```javascript
Events Calendar (one database — everything scheduled)
    ↕ links to Projects (which project does this belong to?)
    ↕ links to Literature (which source is this about?)
    ↕ links to Experiments (which experiment is this related to?)
    ↕ links to Assignments (which assignment is due?)
    ↕ links to Tasks (which task is this?)

Projects (one database — everything you are working on)
    ↕ links to Events Calendar (what is scheduled for this project?)
    ↕ links to Publications (what articles belong to this book?)
    ↕ links to Experiments Plan (what experiments support this project?)
    ↕ links to Tasks (what needs to be done?)
    ↕ links to Courses Database (transitional)

Publications (articles and chapters)
    ↕ links to Projects (which book does this article belong to?)
    ↕ links to Literature (which sources does this article use?)
    ↕ links to Courses (which courses feed this article?)

Experiments Plan
    ↕ links to Projects (which projects does this experiment serve?)

Literature (Notero/Zotero)
    ↕ links to Publications (which articles use this source?)
    ↕ links to Courses (which courses use this source?)
    ↕ links to Events Calendar (which calendar entries reference this source?)
```

---

# 6. How to Create a New Project

## New Course

10. Go to [Projects](https://www.notion.so/b318935bcf8a837fb179817520c32123)
11. Click the dropdown arrow next to **New**
12. Select **🎓 New Course Project**
13. Fill in: Name, Semester, Section (MW/TTH), Status = Ideas
14. In the page body, fill in Course Overview, Learning Outcomes
15. Add course events to the Events Calendar, linking Project = this course
16. For each lecture: new Events Calendar row, tag = lecture, link this project
17. For each assignment: add to Assignments database, link this project

## New Article

18. Go to [Projects](https://www.notion.so/b318935bcf8a837fb179817520c32123)
19. Click the dropdown arrow next to **New**
20. Select **📄 New Article Project**
21. Fill in: Name, Target Journal, Status = Ideas, Priority
22. In the page body, fill in Abstract/Thesis
23. Add sources to the Literature Review section by linking from Notero
24. Use the Outline section to structure premises and counter-arguments
25. For each counter-argument: create a new experiment in Experiments Plan, link this project
26. **Only move to Drafting when you are actively writing** — only one article in Drafting at a time

## New Book

27. Go to [Projects](https://www.notion.so/b318935bcf8a837fb179817520c32123)
28. Click the dropdown arrow next to **New**
29. Select **📚 New Book Project**
30. Fill in: Name, Status = Ideas, Priority
31. Fill in The Argument section: thesis, why it matters, the gap it fills
32. Each chapter = a separate Article project linked to this book via the Publications relation
33. Write the articles first — the book emerges from them

## New Organization Project

34. Go to [Projects](https://www.notion.so/b318935bcf8a837fb179817520c32123)
35. Click the dropdown arrow next to **New**
36. Select **🏗️ New Organization Project**
37. Fill in: Name, Status, Priority
38. Fill in The Idea, Goals, Timeline
39. Link experiments that are outputs of this initiative via the Experiments Plan relation

---

# 7. How to Use the Events Calendar

The Events Calendar is your **single unified calendar** for everything — personal and professional.

**To add any event or note:**

40. Open the Events Calendar
41. Click **New** or click a date in calendar view
42. Name the entry (this is the title/topic)
43. Set the **Date**
44. Set the **Tag** (lecture, discussion, reading, research, admin, brain dump, task)
45. Set the **Project** if it belongs to one
46. Open the page inside the row to write detailed notes, link sources, or add content

**To see only course events:** Switch to the 🎓 Course Schedule view

**To see only research:** Switch to the 🔬 Research view

**To see your task list:** Switch to the ✅ Tasks view

**To see everything:** Switch to the 🗓️ Everything calendar view

**Filtering by project on a course page:**

When the Events Calendar is embedded in a course project page, use the filter to show only entries linked to that project. This gives you a course-specific view of the same database.

---

# 8. Templates Reference

| Template | Where | What it’s for |
| --- | --- | --- |
| 📚 New Book Project | Projects database | Starting a new book manuscript |
| 📄 New Article Project | Projects database | Starting a new journal article or chapter |
| 🎓 New Course Project | Projects database | Setting up a new course |
| 🏗️ New Organization Project | Projects database | A lab initiative or organizational task |
| Stetson Syllabus Template | Syllabus Templates database | Building a new course syllabus |
| 🧪 New Thought Experiment | Experiments Plan database | Running a philosophical experiment |
| 📝 Reading Note | Literature database | Processing a source using the rubric |
| 🧮 Logic Quiz | Assignments database | A logic course quiz |
| 📓 Weekly Reflection | Assignments database | A weekly reflection assignment |
| 📄 Essay Assignment | Assignments database | A philosophy essay |
| ❓ Philosophy Quiz | Assignments database | A short-answer philosophy quiz |
| ✈️ Travel Reimbursement | Templates & Forms | CAS conference reimbursement tracking |

For a full clickable index: [Templates & Forms Index](https://www.notion.so/34d8935bcf8a81a19133da4eeaf2fedb)

---

# 9. What to Ignore / Clean Up

These databases and pages exist but are transitional or redundant. Do not add new content to them:

| Item | Status | Action needed |
| --- | --- | --- |
| 📚 Courses Database | Transitional | Move remaining courses to Projects, then archive |
| 🗓️ Schedule database | Superseded by Events Calendar | Move entries to Events Calendar, then delete |
| 📝 Notes database | Partially superseded | Use Events Calendar for dated notes; Notes database for standalone reference notes |
| 🏠 Home page | New | Add linked view of Events Calendar manually |
| Old per-course Class Notes databases | Inside individual course pages | Migrate to Events Calendar over time |

**Also note:** The Projects database has some duplicate or legacy properties from before the restructuring (Status 1, Select, TW Project, etc.). These can be hidden or deleted when you have time.