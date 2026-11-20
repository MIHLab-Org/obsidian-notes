---
base: "[[Courses Database.base]]"
Area: Courses
# --- Stetson new-course proposal fields (from course-proposal.docx) ---
Course title: "UCOR"
Course Prefix: ""
Course Number: ""
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

# UCOR (course index)

## Course folders
- **00-Syllabus** · syllabus_spring_23 (2 files)
- **01-Schedule** · schedule-standalone (1 files)
- **02-Readings** · Introduction (3 files)
- **03-Lecture-Notes** · week_0 (9 files) · week_1 (8 files) · week_2 (6 files) · week_3 (6 files) · week_4 (6 files) · week_5 (6 files) · week_6 (6 files) · week_7 (6 files) · week_8 (6 files)
- **04-Slides** · Presentations (2 files)
- **05-Assignments** · assignments (5 files)
- **06-Rubrics** · shared rubrics in Meta: [[Courses Database/Meta/Assignment Rubrics/First Level|First Level]] · [[Courses Database/Meta/Assignment Rubrics/Second Level|Second Level]] · [[Courses Database/Meta/Assignment Rubrics/Third Level|Third Level]]
- **07-Exams-Quizzes** · (empty)
- **Terms** · (empty)
- **_archive** · (empty)
- **_resources** · top-level files (4 files)
- [[Courses Database/Courses/UCOR/_import-log|_import-log]]

## Related, linked not copied
- Original sources stay in `C:\Users\Administrator\courses\spring-ucor` (its own git repo; Word/PDF/.tex and week data folders not copied)

## To check
- Spring 2023 course; text sources only.

## Everything in this course folder
```base
filters:
  and:
    - file.inFolder("Courses Database/Courses/UCOR")
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
