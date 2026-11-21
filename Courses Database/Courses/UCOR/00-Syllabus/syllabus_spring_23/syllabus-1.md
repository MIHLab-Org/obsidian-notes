---
output: 
  pdf_document:
    keep_tex: true
    fig_caption: yes
    latex_engine: xelatex 
    template: /home/reynoldsmf/1-2021-22-Projects-2/templates/svm-latex-syllabus.tex
    citation_package: biblatex
geometry: margin=1in
bibliography: ["/home/reynoldsmf/1-2021-22-Projects-2/my-library/my-library.bib"]
biblio-style: musuos 
title: "Phil 1700-02: The Examined Life: Ultimate Questions (Philosophy)"
author: Montaque Reynolds 
date: "Spring 2023"
email: "montaque.reynolds@slu.edu"
web: "m-reynol.com"
officehours: "Tuesday 2pm---3pm"
office: "Adorjan Hall Rm. 235"
classroom: "Virtual"
classhours: Asychronous
fontfamily: mathpazo
fontsize: 11pt
table: true
graphics: yes
header-includes: |
    - \linespread{1.05}
    - \usepackage{booktabs}
    - \usepackage{longtable}
    - \usepackage{array}
    - \usepackage{multirow}
    - \usepackage{wrapfig}
    - \usepackage{float}
    - \usepackage{colortbl}
    - \usepackage{pdflscape}
    - \usepackage{tabu}
    - \usepackage{threeparttable}
    - \usepackage{threeparttablex}
    - \usepackage[normalem]{ulem}
    - \usepackage{makecell}
    - \usepackage{xcolor}
    - \usepackage{huxtable}
---

```{r setup, include=FALSE, cache=F, message=F, warning=F, results="hide"}
knitr::opts_chunk$set(cache=TRUE)
knitr::opts_chunk$set(fig.path='figs/')
knitr::opts_chunk$set(cache.path='_cache/')
knitr::opts_chunk$set(warning=F, message=F)
# knitr::opts_knit$get(kable.force.latex = TRUE)
```

```{r dates_bib, include=FALSE}
knitr::opts_chunk$set(cache=FALSE, dev='pdf')
mon <- as.Date("2021-01-17")
# fri <- as.Date("2016-01-08")

advdate <- function(obj, adv) {
 tmon <- obj + 7*(adv-1)
 tfri <- obj + 4 + 7*(adv-1)
 tmon <- format(tmon, format="%m/%d")
 tfri <- format(tfri, format="%m/%d")
 zadv <- sprintf("%02d", adv)
 tmp <- paste("Week ",zadv,sep='',", ", tmon," - ",tfri)
 return(tmp)
}

library(extrafont)
```

```{r dates, include=FALSE}
knitr::opts_chunk$set(cache=FALSE, dev='pdf')

advdate <- function(obj, adv) {
 tmon <- obj + 7*(adv-1)
 tfri <- obj + 4 + 7*(adv-1)
 tmon <- format(tmon, format="%m/%d")
 tfri <- format(tfri, format="%m/%d")
 zadv <- sprintf("%02d", adv)
 tmp <- paste("Week ",zadv,sep='',", ", tmon," - ",tfri)
 return(tmp)
}

options(scipen=999)
library(tidyverse)
library(stevemisc)
library(ggpmisc)
library(anonymizer)
library(ggcal)
library(stringr)
library(kfigr)
library(broom)
library(lubridate)
library(ggplot2)
library(googlesheets4)
#googledrive::drive_auth(email = "redapemusic35@gmail.com")
gs4_deauth()
#gargle::oauth_app_from_json("~/client_secret_978965312205-cmufahb6r2sul4mopks4e7ka3n0iqtrv.apps.googleusercontent.com.json")
#library(kableExtra)
#options(kableExtra.latex.load_packages = FALSE)
# the following section is for collaboration work. see "https://github.com/ClaudioZandonella/trackdown"
# first time, uncomment "upload_file" and comment out the others; "render", "download", "update" etc.
# the script will look for a pdf file that has not been created yet
# once it runs through once, you can then uncomment the "hide_code" and "path_output" and "pagedown" portions
# therefore leave "gpath" and "gfile" uncommented, but "hide_code", "path_output", and "pagedown" commented out the first time through.
# make sure the final parenthesis remains uncommented
#
#gargle::gargle_oauth_sitrep()
#trackdown::upload_file("/home/reynoldsmf/1-2021-22-Projects-2/COURSES/course-packets/spring-uq1700/syllabus/syllabus-1.Rmd",
#		gpath = "/home/reynoldsmf/1-2021-22-Projects-2/COURSES/UQ1700/syllabus.Rmd")
#trackdown::render_file("./paper.Rmd",
#trackdown::download_file("./paper.Rmd", 
trackdown::update_file("./syllabus-1.Rmd",
		gpath = "Projects/COURSES/UQ1700/",
		gfile = "syllabus-01-17-23",
		hide_code = TRUE,
#		path_output = "./syllabus-1.pdf"
)
#
#pagedown::chrome_print("./syllabus-1.pdf")
#pagedown::chrome_print("presentation.pptx")
#
# Create a calendar for your syllabus ----
# Source: http://svmiller.com/blog/2020/08/a-ggplot-calendar-for-your-semester/

# 1) what is the first Monday of the semester?
# Any number of ways to identify dates in R, but we'll use {lubridate} and the ymd() function here.
# Format: YYYYMMDD. In this example, 4 January 2021.

mon <- ymd(20230313)
wed <- ymd(20230315)
fri <- ymd(20230317)

# What are some dates you won't be here? In this example, I had a conference on 7 January 2021.
# Spring Break was 15 March 2021 to 19 March 2021.
not_here_dates <- c(
  # spring break 03-13, 03-17,
#  ymd(20220117),
  # Spring Break
  seq(
	  ymd(20230313),ymd(20230317), by=1
	  ),
  # Easter break 
  seq(
	  ymd(20230406), ymd(20230410), by=1
  )
  # Easter Break
#  ymd(20220418)
)

# Last day of classes
lastday <- ymd(20230507)

# Spring study day (Tues)
# springstudy <- ymd(20220510)

# Spring study day (Tues)
#lastwithdraw <- ymd(20230510)

# spring final exams
# springexams <- c(seq(ymd(20230510),ymd(20230516), by=1)) 

# You can adjust this as you see fit. Basically: add assignment types (e.g. papers, quizzes).
# My intro class was fairly simple: just papers, presentations, and final reflection paper.
## Spring 2023, reflections on reading (alternate endings, etc 8), what is the moral? Do you agree or 
# disagree? What is a possible alternate ending, for the sake of argument, assume that you disagree?

exam_dates <- c(
				  ymd(20230320), 
				  ymd(20230327), 
				  ymd(20230403), 
				  ymd(20230410), 
				  ymd(20230417), 
				  ymd(20230424), 
				  ymd(20230501), 
				  ymd(20220415), 
				  ymd(20220520)	
)

# What are the full dates of the semester? Here, I'll exclude exam week as I like to do.
# In this case: 6 January to 23 April
semester_dates <- seq(ymd(20230313), ymd(20230507), by=1)

# Custom function for treating the first day of the month as the first week 
# of the month up until the first Sunday (unless Sunday was the start of the month)
wom <- function(date) {
    first <- wday(as.Date(paste(year(date),month(date),1,sep="-")))
    return((mday(date)+(first-2)) %/% 7+1)
  }

# Create a data frame of dates, assign to Cal
tibble(date = seq(ymd(20220116), ymd(20220517), by=1))  %>%
  mutate(mon = lubridate::month(date, label=T, abbr=F), # get month label
         wkdy = weekdays(date, abbreviate=T), # get weekday label
         wkdy = fct_relevel(wkdy, "Sun", "Mon", "Tue", "Wed", "Thu","Fri","Sat"), # make sure Sunday comes first
         semester = ifelse(date %in% semester_dates, 1, 0), # is date part of the semester?
         exams = ifelse(date %in% exam_dates, 1, 0), # is it an exam?
         not_here = ifelse(date %in% not_here_dates, 1, 0), # is it a day off?
         day = lubridate::mday(date), # get day of month to add later as a label
         # Below: our custom wom() function
         week = wom(date)) -> Cal

# Create a category variable, for filling.
# I can probably make this a case_when(), but this will work.

Cal %>%
  mutate(category = NA,
         category = ifelse(semester == 1, "Semester", category),
         category = ifelse(semester == 1 & wkdy %in% c("Mon", "Wed", "Fri"), "Class Day", category),
         category = ifelse(exams == 1, "Exams", category),
         category = ifelse(is.na(category) | (semester == 1 & not_here == 1), "NA", category)) -> Cal 

Cal %>% 
  ggplot(.,aes(wkdy, week)) +
  # custom theme stuff below
  # theme_steve_web() + 
  theme_bw() +
  theme(panel.grid.major.x = element_blank()) +
  # geom_tile and facet_wrap will do all the heavy lifting
  geom_tile(alpha=0.8, aes(fill=category), color="black", size=.45) +
  facet_wrap(~mon, scales="free", ncol=3) +
  # fill in tiles to make it look more "calendary" (sic)
  geom_text(aes(label=day),family="Open Sans") +
  # put your y-axis down, flip it, and reverse it
  scale_y_reverse(breaks=NULL) +
  # manually fill scale colors to something you like...
  scale_fill_manual(values=c("Class Day"="steelblue", 
                             "Semester"="lightsteelblue",
                             "NA" = "darkgrey", # I like these whited out...
                             "Exams"="indianred4"),
                    #... but also suppress a label for a non-class semester day
                    breaks=c("Class Day","Exams")) +
  labs(fill = "", x="", y="",
       caption = "Notable dates: Holidays (April 6-10), Spring Break (March 13-17), Classes End (May 7)")  -> class_cal

```

Ultimate Questions: Philosophy is one of 19 Core Components. The University Core SLO(s) that this component is designed to intentionally advance are listed below:

* **SLO 1:** Examine their actions and vocations in dialogue with the Catholic, Jesuit tradition.
* **SLO 2:** Integrate knowledge from multiple disciplines to address complex questions.
* **SLO 3:** Assess evidence and draw reasoned conclusions.

Additionally, the Core Component-level Student Learning Outcomes are listed below.

\noindent Students who complete this course will be able to:

* Explain and evaluate arguments for philosophical answers, including those in the Catholic tradition, to ultimate questions concerning the nature of humanity, reality and God, knowledge, and/or the good life.
* Apply an array of analytic methods, and conceptual tools, logical principles, and other resources to their own inquiry into ultimate questions.
* Articulate and reflect on their own worldview and practices in dialogue with different answers to ultimate questions, including answers in the Catholic tradition.


# Course Description

**PHIL 1700 - The Examined Life: Ultimate Questions**
**Credits(s): 3 Credits**

This course invites students to explore enduring philosophical questions and to reflectively evaluate the various answers given them by thinkers from a range of social, historical, and religious contexts. Students will tackle ultimate questions in a range of philosophical domains, including issues such as the nature of self and ultimate reality, morality and human meaning, rationality and the pursuit of truth. The aim of the course is to give students an opportunity to critically examine their own beliefs and commitments in dialogue with each other and with great thinkers past and present. (Offered Fall, Spring, and Summer)

# Course Learning Outcomes 

The purpose of this course is to provide an introduction to some of the most historically important philosophical texts, ideas, and thinkers as well as to the distinctive activity of philosophy itself. Over the course of the semester, students will: 
 
1. Learn what great thinkers have to say in response to enduring philosophical questions and how their answers represent philosophically and dialectically distinct answers to such questions. Students will consider a range of philosophical voices and perspectives--including classic texts from Plato and Aristotle, texts from thinkers in the Catholic tradition, and texts by thinkers historically underrepresented in the western canon. In reading and discussing such thinkers and texts students will be encouraged to consider and assess both the philosophical merits and costs of the various views they encounter.
 
2. Learn to explain, analyze, and evaluate arguments for philosophical answers to ultimate questions. Students will learn to give a close reading of philosophical texts with a view toward being able to explain and analyze the arguments they contain. By the end of the semester, students should be able to (i) identify the key premises, assumptions, and conclusions present the texts they encounter and (ii) explain the content of the arguments premises in a way that (iii) illuminates how these premises support an inference to the conclusion. Finally, students will learn to evaluate the arguments they encounter by, among other things, assessing them according to logical notions of validity and soundness.

3. Begin to shape their own answers to ultimate questions by applying distinctively logical and philosophical ways of thinking to them. To this end, students will learn to raise philosophical questions, to identify unexamined presuppositions, and to reflect on their own assumptions and commitments. Students will also work at philosophically articulating their own views by learning how to offer evidence, arguments, and responses to objections to their own answers to ultimate questions. 
 
4. Learn to articulate their own worldview and practices in dialogue with different answers to ultimate questions. Students will be provided with opportunities to reflect on the way in which their own commitments, values, and practices may overlap with or diverge from the perspectives they encounter in their readings, in lectures, and in dialogue with one another.

# Communications

## Office Hours

You do not need an appointment to come in during office hours. Please just drop on by to ask
questions, clarify lecture or readings, or just to chat. In addition to the posted office hours, you can make
an appointment with me. (Just email me or talk with me before or after class to set it up.) Outside of
office hours, you can always stop by my office, but while I will try to be there and available, I can’t
guarantee that I will be able to meet with you. It never hurts to try, but I may ask to schedule a meeting
at another time. You can of course always contact me by email.

## Official Communications

I will from time to time wish to communicate with you outside of class hours with important class
related information. I will use your school-supplied email. Because these communications are important,
I expect that you will check (and read!) your email at least once a day, Monday through Friday.

## Email

The best way to reach me is by email. I will do my best to respond to emails in a timely manner—usually
within 24 hours—but I will probably not answer emails between 5pm and 9am and on weekends. I am
much more likely to answer emails during weekdays.
Please remember that email communications are a type of formal communication. You should always
feel free to email me, but you should not treat an email to me like texting. As is the case with any formal
communication, your email should contain a greeting—like “Dear Professor Jacobs,” or “Jon,”—a fully
explained description of what you are trying to inform me of or ask me about, an ending with at least
your first and last name, and an informative subject line beginning with the Course, number and semester, e.g., PHIL 1700-02 Spring. I’m not asking you to be overly formal, but
simply to observe some commonly expected norms of communication. As you no doubt already know,
this is how formal communication—in academics and in “the real world”—works.

# Required Readings

In addition to materials that will be posted on canvas, the course textbook is listed below:

```{r, echo = FALSE, results = "asis"}

library(RefManageR)
library(knitcitations)
library(rcrossref)

bib <- ReadBib("/home/reynoldsmf/1-2021-22-Projects-2/my-library/my-library.bib")
myopts <- BibOptions(bib.style = "authoryear", style="latex", first.inits=FALSE, max.names = 20)

bib["dec21"]
bib["ayer36"]

```

# Class Schedule

## Logic, Argumentation, and Epistemology 

### `r advdate(mon, 1)`: 

* Introductory Disppute (PTSFS)
* LTL, 
* Logic Handout (Canvas)
* Book of Job Chapter 1
* Saadia's Commentary on Job



## Ethics

### `r advdate(mon, 2)`: 

* Ethics of Ability and Enhancement
* Excerpt from Theuth
* The New Book of the Dead

### `r advdate(mon, 3)`: 

* Monsters and Solidiers
* Out of the Dragon's Womb

### `r advdate(mon, 4)`: 

* Plato, The Apology
* Plato, The Republic (Allegory of the Line

## Metaphysics

### `r advdate(mon, 5)`: 

* Plato, Allegory of the Cave
* Nicomachean Ethics Books I--II


* Nicomachean Ethics X. 

### `r advdate(mon, 6)`:

* Transfiguring the Unborn
* Nussabum, Vulnerability of the Good Life: relational goods (Handout)

### `r advdate(mon, 7)`: 

* Flawed Crystals
* The Eye of the Needle

### `r advdate(mon, 8)`:

* Saadia, The error of the Christians in basing their doctrine of the Trinity on these three attributes

# Grading and Evaluation

Because this is a shorter course, I have intended that each of the assignments consecutively (structured) complement the other. The low stakes small exercises below will give you the practice necessary to complete the group project at the end. The argument development should be a component part of the group project. Because the group project consists of 3 parts with 2 students each part, I recommend that you split each part into two and I will grade each component separately.

## Low-stakes Small Exercises 15% of total grade

The small exercises should be no more than 500 words and  are assigned weekly, except for the end of semester. They are marked either as pass/fail. If you’ve done the assignment it should be a pass (awarded the full score). See detailed schedule for what these assignments look like. The deadline is always Sunday 11:00 PM of the week of the assignment. You need to submit these to a shared Canvas Module that will be available to everyone who takes this course.

Each of the following assignments will be due the Wednesday at midnight on the week specified for that assignment.

## Argument Development, 25% of total grade

Due: `r advdate(mon, 3)`

You will explain or analyze (identifying the premises/conclusions) what you think is the philosophical content in a work of fiction, e.g., a novel, short story, television series, to be determined at a later date. Respond to this argument, specifying its strengths and weaknesses, stating whether it is valid and sound. The object can be anything, from any time period, but it will likely be related to one of the assigned readings of this course.

## Develop your own philosophical piece of fiction, 35% of total grade

Due: `r advdate(mon, 5)`

Write a song lyric, poem, or game narrative, anywhere between 1500 and 3000 words consisting of philosophical fiction. E.g., you might also creatively retell a philosophical thought experiment (e.g., Plato’s cave, the trolley problem) in an evocative and creative way in about 500 words. Then retell it again, but use a different point of view. Then retell it a third time, again using a different point of view. For example, you could write the trolley problem in the first person, limited third person, omniscient narrator. Try to ask yourself as you do this: how does changing the viewpoint change our appreciation of this thought experiment?

## Group Project: 25% of total grade

You will select your group members by the second week of classes: `r advdate(mon, 2)`

Assignment Due: `r advdate(mon, 8)`

Your group project will be comprised of 3 parts, 2 persons each, and each group will be comprised of 6 students. If groups cannot be split evenly into groups of 6, then one group will receive special instructions for its project. Each student will be graded on one part of the project, making each group member’s grade (potentially) different. Students will separate into groups by the second week of the semester, `r advdate(mon, 2)`, and decide which student will be responsible for which portion of the project. I will provide an opportunity for each each class member to get to know one another and select your groups. If this proves difficult, please contact me and we will figure out a solution. 

## Grading Scale

||||
|---|---|---|---|
|A|(4.0)|94--1000|
|A-|(3.7)|90--94|
|B+|(3.3)|87--90|
|B|(3.0)|83--87|
|B-|(2.7)|80--87|
|C+|(2.3)|77--80|
|C|(2.0)|73--77|
|C-|(1.7)|70--73|
|D|(1.0|60--70|
|F|(0.0)|0--6|

# Missing or late Work/Exams

## Extensions

There may be moments wherein situations arise and you cannot fulfill a particular commitment that you've made to yourself, such as completing a given assignment by a given date. I understand that sometimes, despite our best efforts, things don’t go according to plan. The printer breaks, you get a cold, the idea didn't work out and you had to go back to the drawing board. As I've learned from other professors here at SLU, it is acceptable to offer grace for such moments. If you need an extension for any reason, I will automatically grant one for three days (72 hours). You must email me by midnight the *day before* it is due. If you email before then and ask for the extension, I will grant it. You do not need to specify the reason you are asking for the extension. If you need an extension for more than three days, your situation is likely serious enough that you should be in contact with the Office of the Dean or the Student Health Center. In such cases, I will be happy to be in contact with those offices to arrange a schedule for you to complete your work. If an extension is granted but you do not turn in the paper after three days, the penalty will be 10% for each 24 hours after the deadline.

## Extra Credit

There will be no opportunities for “extra credit” to improve grades that have already been earned.
Bargaining for grades (“I need a B because...”) is not acceptable. The only ways to achieve the grade that
you need are to do well on the quizzes and discussion boards and to write excellent essays and argument
evaluations.

## Withdrawals and Incompletes

Withdrawals and incompletes will be given only in accordance with University policy. In particular, you
should note that an incomplete is given only in extraordinary circumstances.

## Expectations for Discussion Boards and Group Projects/Presentations

Discussion is vital to a successful class and learning experience. Your choice to participate in the class will ultimately determine your ability to succeed in this class. If you are being extremely disruptive in class, you will be asked to leave. Often, discussions may be on controversial topics. This does not license anyone to yell at another student or be in any way rude or ill-willed toward another student (or to the instructor). I reserve the right to ask anyone to leave at any time for being rude or disruptive.

# University Policies

## ELECTRONIC DEVICE POLICY

This is an asynchronous. This means that you will be ultimately responsible for your own time. This includes what readings you will do each week and when you will do those readings. Although this course is only an eight week course, because it offers the same number of credits as a full sixteen week course, there will be a lot of work due each week. Perhaps seemingly more than a standard sixteen week course.

## ACADEMIC INTEGRITY SYLLABUS STATEMENT

 Academic integrity is honest, truthful and responsible conduct in all academic endeavors. The mission of Saint Louis University is “the pursuit of truth for the greater glory of God and for the service of humanity.” Accordingly, all acts of falsehood demean and compromise the corporate endeavors of teaching, research, health care, and community service through which SLU fulfills its mission. The University strives to prepare students for lives of personal and professional integrity, and therefore regards all breaches of academic integrity as matters of serious concern. The full University-level Academic Integrity Policy can be found on the Provost's Office website at: https://www.slu.edu/provost/policies/academic-and-course/policy_academic-integrity_6-26-2015.pdf. 
 
Additionally, each SLU College, School, and Center has its own academic integrity policies, available on their respective websites.

The University reserves the right to penalize any student whose academic conduct at any time is, in its judgment, detrimental to the University. Such conduct shall include cases of plagiarism, collusion, cheating, giving or receiving or offering or soliciting information in examinations, or the use of previously prepared material in examinations or quizzes in which such material had been banned. Violations should be reported to your course instructor, who will investigate and adjudicate them according to the policy on academic honesty of the College of Arts and Sciences. If the charges are found to be true, the student may be liable for academic or disciplinary probation, suspension, or expulsion by the University. Students should review the College of Arts and Sciences policy at

http://www.slu.edu/colleges/AS/languages/department/files/AcademicHonestyPolicy.pdf

## STUDENT SUCCESS CENTER SYLLABUS STATEMENT

In recognition that people learn in a variety of ways and that learning is influenced by multiple
factors (e.g., prior experience, study skills, learning disability), resources to support student
success are available on campus. The Student Success Center assists students with academic and
career related services, and it is located in the Busch Student Center (Suite, 331) and the School of Nursing (Suite, 114). Students can visit the website listed below to learn more about:

• Course-level support (e.g., faculty member, departmental resources, etc.) by asking
one’s instructor.
• University-level support (e.g., tutoring services, university writing services,
disability services, academic coaching, career services, and/or facets of curriculum
panning).

http://www.slu.edu/life-at-slu/student-success-center/index.php


## ACCESSIBILITY AND DISABILITY RESOURCES ACADEMIC ACCOMMODATIONS SYLLABUS STATEMENT

Students with a documented disability who wish to request academic accommodations must formally register their disability with the University. Once successfully registered, students also must notify their course instructor that they wish to use their approved accommodations in the course.

Please contact the Center for Accessibility and Disability Resources (CADR) to schedule an appointment to discuss accommodation requests and eligibility requirements. Most students on the St. Louis campus will contact CADR, located in the Student Success Center and available by email at accessibility_disability@slu.edu or by phone at 314.977.3484. Once approved, information about a student’s eligibility for academic accommodations will be shared with course instructors by email from CADR and within the instructor’s official course roster. Students who do not have a documented disability but who think they may have one also are encouraged to contact to CADR. Confidentiality will be observed in all inquiries.

## TITLE IX SYLLABUS STATEMENT

Saint Louis University and its faculty are committed to supporting our students and seeking an environment that is free of bias, discrimination, and harassment. If you have encountered any form of sexual harassment, including sexual assault, stalking, domestic or dating violence, we encourage you to report this to the University. If you speak with a faculty member about an incident that involves a Title IX matter, that faculty member must notify SLU’s Title IX Coordinator and share the basic facts of your experience. This is true even if you ask the faculty member not to disclose the incident. The Title IX Coordinator will then be available to assist you in understanding all of your options and in connecting you with all possible resources on and off campus.

Anna Kratky is the Title IX Coordinator at Saint Louis University (DuBourg Hall, room 36; anna.kratky@slu.edu; 314-977-3886). If you wish to speak with a confidential source, you may contact the counselors at the University Counseling Center at 314-977-TALK or make an anonymous report through SLU’s Integrity Hotline by calling 1-877-525-5669 or online at http://www.lighthouse-services.com/slu. To view SLU’s policies, and for resources, please visit the following web addresses: https://www.slu.edu/about/safety/sexual-assault-resources/index.php and https://www.slu.edu/general-counsel.

IMPORTANT UPDATE: SLU’s Title IX Policy (formerly called the Sexual Misconduct Policy) has been significantly revised to adhere to a new federal law governing Title IX that was released on May 6, 2020. Please take a moment to review the new policy and information at the following web address: https://www.slu.edu/about/safety/sexual-assault-resources/index.php. Please contact Anna Kratky, the Title IX Coordinator, with any questions or concerns.

## CONTENT DISCLAIMER

In this course, students may be required to read text or view materials that they may consider
offensive. The ideas expressed in any given text do not necessarily reflect the views of the
instructor, the Philosophy Department, or Saint Louis University. Course materials are selected
for their historical and/or cultural relevance, or as an example of stylistic and/or rhetorical
strategies and techniques. They are meant to be examined in the context of intellectual inquiry of
the sort encountered at the university level.

## WRITING CENTER

I encourage you to take advantage of the writing services in the Student Success Center by obtaining feedback benefits for writers at all skill levels. Trained writing consultants can help with any writing, multimedia project, or oral presentation. During the one-on-one consultations, you can work on everything from brainstorming and developing ideas to crafting strong sentences and documenting sources. These services do fill up, so please make an appointment! For more information, or to make, change, or cancel an appointment, call 977-3484 or visit

https://www.slu.edu/life-at-slu/student-success-center/academic-support/university-writing-services/index.php

## BASIC NEEDS SECURITY

Students in personal or academic distress and/or who may be specifically experiencing challenges such as securing food or difficulty navigating campus resources, and who believe this may affect their performance in the course, are encouraged to contact the Dean of Students Office (deanofstudents@slu.edu or 314-977-9378) for support. Furthermore, please notify the instructor if you are comfortable in doing so, as this will enable instructors to assist you with finding the resources you may need.
