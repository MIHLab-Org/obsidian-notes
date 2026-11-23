---
base: "[[Courses Database.base]]"
Area: Courses
Course Code: PHIL 101B
Section:
  - mw
  - tth
Semester: ""
Status: ""
Syllabus: "[[MASTER-SYLLABUS-PHIL101B]]"
zotero: ""
# --- Stetson new-course proposal fields (from course-proposal.docx) ---
Course title: Introduction to Philosophy
Course Prefix: PHIL
Course Number: 101B
Grade Mode: ""
Units: ""
Course Type: ""
Instructional Method: ""
Course Description: ""
Prerequisites: ""
Course restrictions: ""
Learning Outcomes: []
Gen Ed designation: ""
Stetson Values designation: ""
Writing Enhanced: ""
---

# Introduction to Philosophy

## Course versions
Each course has two complementary versions, so the content stays the same while the format changes.
- **Video-game (experimental) version:** [[Courses Database/Courses/Introduction to Philosophy/00-Syllabus/01-Schedule/Course Outline/Course Outline|Course Outline]] (Parts 1–7, Reality+ structure: Virtual Worlds → Foundations)
- **Traditional version:** syllabus and weekly pages in **00-Syllabus** and **01-Schedule** (course-site folders)

## Course folders
- **00-Syllabus** · [[MASTER-SYLLABUS-PHIL101B]] · [[PHIL 101B Introduction to Philosophy - Syllabus]]
- **00-Syllabus / Earlier** · [[Courses Database/Courses/Introduction to Philosophy/00-Syllabus/Earlier/SLU Phil 1700 The Examined Life - Fall 2023 syllabus|SLU Phil 1700 The Examined Life (Fall 2023)]]
- **01-Schedule** · [[CALENDAR-PHIL101B-SECTION01-MW]] · [[CALENDAR-PHIL101B-SECTION03-TTh-AM]] · [[CALENDAR-PHIL101B-SECTION04-TTh-PM]] · [[Spring 2027 — 16-week plan|Spring 2027 — 16-week plan]]
- **02-Readings** · [[Required Texts]] · [[Courses Database/Courses/Introduction to Philosophy/02-Readings/Literature|Literature]] (PDFs live in Zotero)
- **03-Lecture-Notes** · organized by *Reality+* part and chapter (Part 1 Virtual Worlds → Part 7 Foundations), with non-course notes in `_Not course` · also Summer 2026 and Course site 2026_intro
- **04-Slides** · [[Introduction to Philosophy --- Fall 2026]] · Fall 2026 reveal deck: [GitHub repo](https://github.com/MIHLab-Org/Intro-Fall-2026), local copy `C:\Users\Administrator\Desktop\Intro-Fall-2026`
- **05-Assignments** · [[Week Assignments]] · [[Course Video Production Guide]]
- **06-Rubrics** · [[Course Rubric]]
- **07-Exams-Quizzes** · (empty)
- **Terms** · [[Introduction to Philosophy, Spring 2026]] · [[Introduction to Philosophy, Summer 2026]] · [[PHIL 101B Introduction to Philosophy (MW)]]
- **_archive** · old project, update and meeting pages · [[Courses Database/Courses/Introduction to Philosophy/_import-log|_import-log]]

## Course-site sources (snapshot from GitHub)
Quarto sources from [course.phil.intro-tth](https://github.com/redapemusic35/course.phil.intro-tth.github.io), in "Course site 2026_intro" and "Course site 2023" subfolders:
- **00-Syllabus / Course site 2023** · 1 files
- **00-Syllabus / Course site 2026_intro** · 2 files
- **01-Schedule / Course site 2023** · 1 files
- **01-Schedule / Course site 2026_intro** · 16 files
- **03-Lecture-Notes / Course site 2026_intro** · 12 files
- **04-Slides / Course site 2023** · 1 files
- **04-Slides / Course site 2026_intro** · 16 files
- **05-Assignments / Course site 2026_intro** · 3 files
- **06-Rubrics / Course site 2026_intro** · 1 files
- **_archive / Course site 2026_intro** · 3 files

## Everything in this course
```base
filters:
  and:
    - file.inFolder("Courses Database/Courses/Introduction to Philosophy")
    - file.ext == "md"
views:
  - type: table
    name: By folder
    groupBy:
      property: file.folder
      direction: ASC
    order:
      - file.name
      - file.mtime
```
