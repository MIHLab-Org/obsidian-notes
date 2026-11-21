---
output:
  pdf_document:
    keep_tex: true
    fig_caption: yes
    latex_engine: pdflatex
    template: /home/redapemusic35/data_storage/svm-latex-syllabus.tex
    citation_package: default
geometry: margin=1in
#bibliography: ["/home/mreynolds/my-lib.bib"]
biblio-style: musuos
title: "Phil 1700-02 and 03: The Examined Life: Ultimate Questions (Philosophy)"
author: Montaque Reynolds
date: "FALL 2023"
email: "montaque.reynolds@slu.edu"
web: "montaque-reynolds.com"
officehours: "Tuesday 11am --- 1pm"
office: "Adorjan Hall Rm. 235"
classroom: "Virtual"
classhours: Asychronous
fontfamily: mathpazo
fontsize: 11pt
table: true
graphics: yes
header-includes:
  - \usepackage{graphicx}
  - \usepackage{float}
---

```{r setup, include=FALSE, cache=F, message=F, warning=F, results="hide"}
knitr::opts_chunk$set(cache=TRUE)
knitr::opts_chunk$set(fig.path='figs/')
knitr::opts_chunk$set(cache.path='_cache/')
knitr::opts_chunk$set(warning=F, message=F)
# knitr::opts_knit$get(kable.force.latex = TRUE)

```


```{r dates, include=FALSE}

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
mon <- as.Date("2016-08-15")

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

#googledrive::drive_auth(email = "redapemusic35@gmail.com")
#gs4_deauth()
#gargle::oauth_app_from_json("~/client_secret_978965312205-cmufahb6r2sul4mopks4e7ka3n0iqtrv.apps.googleusercontent.com.json")
library(kableExtra)
options(kableExtra.latex.load_packages = TRUE)
# the following section is for collaboration work. see "https://github.com/ClaudioZandonella/trackdown"
# first time, uncomment "upload_file" and comment out the others; "render", "download", "update" etc.
# the script will look for a pdf file that has not been created yet
# once it runs through once, you can then uncomment the "hide_code" and "path_output" and "pagedown" portions
# therefore leave "gpath" and "gfile" uncommented, but "hide_code", "path_output", and "pagedown" commented out the first time through.
# make sure the final parenthesis remains uncommented
#
#gargle::gargle_oauth_sitrep()

```

# Course Description

**PHIL 1700 - The Examined Life: Ultimate Questions**
**Credits(s): 3 Credits**

This course invites students to explore enduring philosophical questions and to reflectively evaluate the various answers given them by thinkers from a range of social, historical, and religious contexts. Students will tackle ultimate questions in a range of philosophical domains, including issues such as the nature of self and ultimate reality, morality and human meaning, rationality and the pursuit of truth. The aim of the course is to give students an opportunity to critically examine their own beliefs and commitments in dialogue with each other and with great thinkers past and present. (Offered Fall, Spring, and Summer)

# Course Learning Outcomes

The purpose of this course is to provide an introduction to some of the most historically important philosophical texts, ideas, and thinkers as well as to the distinctive activity of philosophy itself. Over the course of the semester, students will:

•	What is law?
•	Do laws have moral content?
•	What is the proper role of judges in interpreting the law?
•	Is there an obligation to obey the law?
•	How can rules give us reasons?
•	What, if anything, justifies punishment by the state?
•	When are we morally responsible for what we do?
•	What rights should/do our laws protect?
•	When, if ever, is paternalistic interference by the state into the lives of its citizens justified?
•	What special moral problems do lawyers face?

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

bib <- ReadBib("/home/redapemusic35/data_storage/Exported-Items.bib")
myopts <- BibOptions(bib.style = "authoryear", style="latex", first.inits=FALSE, max.names = 20)

```

# READING SCHEDULE	TOPICS	READINGS

## 1	Introduction

### I: What is Law?

### 2–3	What is the difference between laws and commands? `r advdate(mon, 1)`

[Schauer] Austin, John. Selections from Lectures I, V, and VI of

“The Province of Jurisprudence Determined and the Uses of the Study of Jurisprudence.”

See the Reading Notes

[Feinberg] Hart, H. L. A. “Law as the Union of Primary and Secondary Rules.”

Also available in:

———. The Concept of Law. 2nd ed. Edited by Penelope Bulloch and Joseph Raz. Oxford University Press, 1997. ISBN: 9780198761235.

See the Reading Notes

### 4	How do we determine the content of laws? Do laws have moral content? `r advdate(mon, 2)`

[Schauer] Dworkin, Ronald. Selections from Chapters 2 and 4 of “Taking Rights Seriously.”

See the Reading Notes

### 5–6	How should judges interpret the law? `r advdate(mon, 3)`

[Schauer] Dworkin, Ronald. Selections from Chapters 7 and 11 of “Law’s Empire.”

See the Reading Notes

[Feinberg] Scalia, Antonin. “Common-Law Courts in a Civil-Law System: The Role of United States Federal Courts in Interpreting the Constitution and Laws.”

See the Reading Notes

[Feinberg] Dworkin, Ronald. “Comment.”

See the Reading Notes

## II: The Obligation to Obey the Law

### 7–8	Is there an obligation to obey the law? Skepticism about political obligation… `r advdate(mon, 4)`

Wolff, Robert Paul. “The Conflict Between Authority and Autonomy.” In In Defense of Anarchism. University of California Press, 1998. ISBN: 9780520215733.

See the Reading Notes

Smith, M. B. E. “Is There a Prima Facie Obligation to Obey the Law?” The Yale Law Journal 82, no. 5 (1973): 950–76.

See the Reading Notes

### 9–10	Optimism about political obligation… `r advdate(mon, 5)`

Dworkin, Ronald. Selections from Law’s Empire. Belknap Press of Harvard University Press, 1986, pp. 190–215. ISBN: 9780674518360.

See the Reading Notes

Raz, Joseph. “Authority and Justification.” Philosophy and Public Affairs 14, no. 1 (1985): 3–29.

See the Reading Notes

### 11	Should we sometimes disobey the law? `r advdate(mon, 6)`

[Schauer] Rawls, John. “The Justification of Civil Disobedience.”

See the Reading Notes

Optional Reading

[Feinberg] King, Martin Luther, Jr. “Letter from Birmingham Jail.”

## III: Responsibility and Punishment

### 12	When exactly does an act cause harm? `r advdate(mon, 7)`

[Schauer] Hart, H. L. A., and Tony Honore. Selections from “Causation In The Law"

See the Reading Notes

### 13	Where does the burden of proof lie? `r advdate(mon, 8)`

[Schauer] Kaplan, John. “Decision Theory and the Factfinding Process.”

See the Reading Notes

### 14	What counts as evidence of guilt / liability? `r advdate(mon, 9)`

[Schauer] Thomson, Judith Jarvis. “Liability and Individualized Evidence.”

See the Reading Notes

### 15–16	Is it appropriate to punish acts that “successfully” cause harm (e.g., murder, vehicular manslaughter) more severely than similar acts which, merely as a matter of good luck, do not? `r advdate(mon, 10)`

Cushman, Fiery. “Crime and Punishment:

Distinguishing the Roles of Causal and Intentional Analyses in Moral Judgment.” Cognition 108, no. 2 (2008): 353–80.

See the Reading Notes

Lewis, David. “The Punishment That Leaves Something to Chance.” Philosophy and Public Affairs 18, no. 1 (1989): 53–67.

See the Reading Notes

### 17–18	What, if anything, justifies punishment of offenders by the state? `r advdate(mon, 11)`

[Schauer] Bentham, Jeremy. Chapter 1 (Sections 1–11), and Chapters 13–14 from “An Introduction to The Principles of Morals and Legislation.”

See the Reading Notes

Rawls, John. “Two Concepts of Rules.” The Philosophical Review 64, no. 1 (1955): 3–32.

See the Reading Notes

## IV: Harm, Liberties, and the Law

### 19–20	When is the state justified in interfering in the lives of its citizens? `r advdate(mon, 12)`

[Feinberg] Mill, John Stuart. “The Liberal Argument from On Liberty.” Excerpts from Chapters 1 and 2, and Chapter IV.

See the Reading Notes

[Feinberg] Dworkin, Gerald. “Paternalism.”

See the Reading Notes

### 21–22	What are the justifications for and limits of freedom of speech? `r advdate(mon, 13)`

Scanlon, Thomas. “A Theory of Freedom of Expression.” Philosophy and Public Affairs 1, no. 2 (1972): 204–26.

See the Reading Notes

Langton, Rae. “Speech Acts and Unspeakable Acts.” Philosophy and Public Affairs 22, no. 4 (1993): 293–330.

See the Reading Notes

### 23	Can we harm people by bringing them into existence, and should we be liable for that harm? `r advdate(mon, 14)`

Shiffrin, Seana Valentine.

“Wrongful Life, Procreative Responsibility, and the Significance of Harm.” (PDF) Legal Theory 5 (1999): 117–48.

See the Reading Notes

## V: Legal Ethics

### 24–26	What special ethical problems do lawyers face? `r advdate(mon, 15)`

Wasserstrom, Richard. “Lawyers as Professionals: Some Moral Issues.” Human Rights Quarterly 5, no. 1 (1975): 105–28.

See the Reading Notes

Applbaum, Arthur. “Professional Detachment: The Executioner of Paris.” Harvard Law Review 109, no. 2 (1995): 458–86.

See the Reading Notes


# Grading and Evaluation

Because this is a shorter course, I have intended that each of the assignments consecutively (structured) complement the other. The low stakes small exercises below will give you the practice necessary to complete the group project at the end. The argument development should be a component part of the group project. Because the group project consists of 3 parts with 2 students each part, I recommend that you split each part into two and I will grade each component separately.

## Low-stakes Small Exercises 15% of total grade

The small exercises should be no more than 500 words and  are assigned weekly, except for the end of semester. These are potentially worth 0-5 points for up to 15% of your total grade. If you’ve done the assignment it should be a pass (awarded the full score). See detailed accompanying documentation for what these assignments look like and the assignment rubric. The deadline is always Sunday 11:00 PM of the week of the assignment. You need to submit these to a shared Canvas Module that will be available to everyone who takes this course.

Each of the following assignments will be due the Wednesday at midnight on the week specified for that assignment.

## Philosophical Music Criticism - Annotation Assignment 35%

Due: `r advdate(mon, 3)`

Sentiment analysis is a form of data analysis that focuses on extracting meaningful content from language artifacts, e.g. news paper articles, novels, online reviews. Although sentiment typically refers to extracting linguistic content that is emotionally meaningful, in this project, we will focus on extracting philosophical content from public documents that you have selected. In this case, these will be popular entertainment media, namely music lyrics. There are two parts to this project. First, select a favorite musical performance artist. Choose 5 songs by that artist on genius.com. Reading through the lyrics you've chosen, copy every clause you find that you think corresponds with a particular philosophical theory, in epistemology, metaphysics, ethics, etc. Paste these into a separate word document line by line. In the next part, you will select one of your annotations and defend your annotation choice. First, articulate the philosophical foundation which you think that particular annotation corresponds with, or is implied. Then tell the reader why you think this is the case. I will be looking for quotations of one or our readings which discusses that philosophical foundation. More instruction and examples will be provided in the related documents on canvas.

## Develop your own philosophical piece of fiction, 30% of total grade

Due: `r advdate(mon, 5)`

Choose a song lyric, poem, rom-com, or game narrative, anywhere between 1500 and 3000 words and re-write it in such a way to highlight its philosophical content (or do a fan fiction and change it in such a way that it motivates philosophical discussion). E.g., you might turn it into a philosophical thought experiment (e.g., Plato’s cave, the trolley problem) in an evocative and creative way. Then retell it again, but use a different point of view. Then retell it a third time, again using a different point of view. For example, you could write the trolley problem in the first person, limited third person, omniscient narrator. Try to ask yourself as you do this: how does changing the viewpoint change our appreciation of this thought experiment?

## Group Project: 20% of total grade

You will select your group members by the second week of classes: `r advdate(mon, 2)`

Assignment Due: `r advdate(mon, 8)`

For your group project, choose a piece of fiction from one of your members. If anyone is not comfortable sharing theirs, let me know (I will let you write one as a group. This could be very tricky however) The project will be comprised of 3 parts, 2 persons each part, and each group will be comprised of 6 students. If groups cannot be split evenly into groups of 6, then one group will receive special instructions for its project. Each student will be graded on one part of the project, making each group member’s grade (potentially) different. Students will separate into groups by the second week of the semester, `r advdate(mon, 2)`, and decide which student will be responsible for which portion of the project. I will provide an opportunity for each each class member to get to know one another and select your groups. If this proves difficult, please contact me and we will figure out a solution.

## Grading Scale

||||
|---|---|---|---|
|A|(4.0)|94--100|
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
