---
base: "[[Courses Database.base]]"
Area: Courses
# --- Stetson new-course proposal fields (from course-proposal.docx) ---
Course title: "Games and Play"
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

# Games and Play (course index)

## Course folders
- **00-Syllabus** · (empty)
- **01-Schedule** · (empty)
- **02-Readings** · (empty)
- **03-Lecture-Notes** · Blog posts (philosophy-of-no-play) (51 files)
- **04-Slides** · (empty)
- **05-Assignments** · (empty)
- **06-Rubrics** · shared rubrics in Meta: [[Courses Database/Meta/Assignment Rubrics/First Level|First Level]] · [[Courses Database/Meta/Assignment Rubrics/Second Level|Second Level]] · [[Courses Database/Meta/Assignment Rubrics/Third Level|Third Level]]
- **07-Exams-Quizzes** · (empty)
- **Terms** · (empty)
- **_archive** · (empty)
- **_resources** · top-level files (1 files)
- [[Courses Database/Courses/Games and Play/_import-log|_import-log]]

## Related, linked not copied
- Original sources stay in `C:\Users\Administrator\courses\philosophy-of-no-play` (Hugo blog; rendered site not copied)

## To check
- 51 blog posts (e.g. aesthetics of identity, Star Citizen, morality of wellbeing); some may belong to research rather than a course.

## Everything in this course folder
```base
filters:
  and:
    - file.inFolder("Courses Database/Courses/Games and Play")
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
