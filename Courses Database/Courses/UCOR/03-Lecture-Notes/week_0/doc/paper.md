---
title: |
  | Logical Positivism and the Vienna Circle: 
  | Rejecting metaphysics, validating language \vspace{1cm}
author: |
  | Montaque Reynolds
  | Department of Philosophy
  | Walter J. Ong Digital Humanities Department 
  | Saint Louis University 
  | montaque.reynolds@slu.edu
  | digitalhumanities@slu.edu
date: |
  | `r loc <- Sys.getlocale(category = "LC_TIME"); Sys.setlocale("LC_TIME", "C"); fdate <- format(Sys.time(), '%B %e, %Y'); Sys.setlocale("LC_TIME", loc); fdate` \vspace{1cm} 
abstract: |
  | What is true philosophical discussion? Logical positivism is a philosophical theory developed by a group of scientists, mathematicians, and scientifically trained philosophers, known as The Vienna Circle, Ernst Mach Society, and Berlin Society for Empirical Philosophy and others, who more or less who met regularly during a time of great upheaval and change in Europe. Their projects each were grounded in the view that such change proved disruptive owing to the inability of many, to adapt to the emerging change. Adaption, according to the logical positivists required that we adopt more rigorous, scientifically grounded ways of reasoning. 
  | \vspace{6cm}
bibliography: "/home/reynoldsmf/1-2021-22-Projects-2/my-library/my-library.bib" 
biblio-style: apsr
output:
# if word doc is needed, uncomment "word_document" and "reference_docx"
#    word_document:
#        reference_docx: "./svm-word-docx-example.docx"
# if pdf is needed, comment out "word_document" and "reference_docx" and uncomment "pdf_document" and "number_sections"
    pdf_document:
        number_sections: true
fig_caption: yes
fontsize: 11pt
#always_allow_html: yes
indent: yes
header-includes:
  - \usepackage[nolists]{endfloat}    
  - \usepackage{setspace}\doublespacing
  - \setlength{\parindent}{4em}
  - \setlength{\parskip}{0em}
  - \usepackage[hang,flushmargin]{footmisc}
  - \usepackage{caption} 
  - \captionsetup[table]{skip=24pt,font=bf}
  - \usepackage{array}
  - \usepackage{threeparttable}
  - \usepackage{adjustbox}
  - \usepackage{graphicx}
  - \usepackage{csquotes}
  - \usepackage{tikz}
  - \usetikzlibrary{arrows,calc,patterns,positioning,shapes}
  - \usetikzlibrary{decorations.pathmorphing}
  - \tikzset{modal/.style={>=stealth',shorten >=1pt,shorten <=1pt,auto,node distance=1.5cm,semithick},world/.style={circle,draw,minimum size=1cm,fill=gray!15},point/.style={circle,draw,fill=black,inner sep=0.5mm},reflexive/.style={->,in=120,out=60,loop,looseness=#1},reflexive/.default={5},reflexive point/.style={->,in=135,out=45,loop,looseness=#1},reflexive point/.default={25},}
---

```{r setup, message=FALSE, warning=FALSE, include=FALSE}
library(tidyverse)
library(knitr)
library(ExPanDaR)
library(quanteda)
#library(quanteda.dictionaries)
#library(reticulate)
#use_condaenv("spacy_condaenv") # load reticulate package. This is for the python code chunk further down.
# if you do not need this, then do yourself a favor and comment it out
library(readtext)
library(googlesheets4)
gs4_deauth()
library(kableExtra)
library(spacyr)
opts_chunk$set(fig.pos = 'p') # Places figures on their own pages
opts_chunk$set(out.width = '100%', dpi=300)
opts_chunk$set(echo=FALSE, message=FALSE, warning=FALSE, cache = FALSE)
#
# the following section is for collaboration work. see "https://github.com/ClaudioZandonella/trackdown"
# first time, uncomment "upload_file" and comment out the others; "render", "download", "update" etc.
# the script will look for a pdf file that has not been created yet
# once it runs through once, you can then uncomment the "hide_code" and "path_output" and "pagedown" portions
# therefore leave "gpath" and "gfile" uncommented, but "hide_code", "path_output", and "pagedown" commented out the first time through.
# make sure the final parenthesis remains uncommented
#
#
#
#trackdown::upload_file("./paper.Rmd",
#		gpath = "Projects/RESEARCH/X-PHI-FEM-COLLAB/")
#trackdown::render_file("./paper.Rmd",
#trackdown::download_file("./paper.Rmd", 
trackdown::update_file("paper.Rmd",
		gpath = "Projects/COURSES/UQ1700/WEEK_0/",
		gfile = "notes_1",
		hide_code = TRUE,
		path_output = "paper.pdf"
)
	
pagedown::chrome_print("paper.pdf")
#pagedown::chrome_print("presentation.pptx")


```

```{r load_results, include=FALSE}
#load("~/1-RESEARCH/tswift_relations.rda")
#load("~/1-RESEARCH/corp_tswift.rda")

```

\pagebreak

# Introduction

Hi, welcome to philosophy 101. 

## Some Formal Class Objectives

* Examining one's own actions and vocations methods in the Catholic, Jesuit tradition.
* Integrating knowledge from multiple disciplines to address complex questions
* Drawing reasoned conclusions from available evidence

We will look at complex issues by evaluating and explaining argumentative attempts to address these issues from a wide array of philosophical backgrounds, including those in the Catholic tradition.

Some questions we will address include what is the nature of the self; what is reality; moral vs ethical; meaning and purpose; reason vs rationality; foundation of truth. The ultimate aims of address these questions are so that you will be able to critically reflect, assess, analyze, defend your own beliefs and commitments in dialogue with each other and with historical thinkers.

# Office Hours

You will not need an appointment to come in during office hours, just stop by. Reasons for coming to office hours include clarifying lecture points, assignments, if you want to bounce ideas off me for an approach to an assignment, that is also an option. 

## Some Specific objectives:

We will mostly be reading *Philosophy Through Science Fiction* edited by Helen De Cruz and Johan De Smedt. However, there is an open debate whether philosophy can be done rightfully through stories. This is primarily the reason why I thought that it would be interesting to begin an introductory class using a disputable method. However you will not get anything from our time together, I think, unless we also do philosophy the traditional way in addition. As such, each of our readings in PSF will be supplemented with what I am calling their formal counter parts. These will be formal philosophical queries by traditional authors, of the topics raised in the science fiction stories. For instance, there are a number of issues raised in *Excerpt from Theuth*. Principally, many of these involves questions such as the ethics of human enhancement, but also questions about what constitutes knowledge? Is it enough to merely be fed information and be capable of recalling that information? When does this no longer count as knowledge? For instance is knowledge based on the source? The ability of the source etc.

1. What is philosophical dialogue?:
   1. On the one hand, philosophical dialogue consists in argumentation, structured premises, conclusions which are necessarily entailed by their premises. Many people might say that there is a normative standard about what forms such dialogues should take. It is just this question which our first reading asks; whether it is plausible that philosophy takes other forms, can it be done through literature? Film?, Music? In order to answer this question however, we must first concern ourselves with another question, what exactly is philosophy?
   2. In this course, we will look at many examples of philosophy. We will also look at other forms of argument as well and ask the question whether or not these other forms fail the necessary and sufficient conditions of philosophical discourse? To do this, we will first have to determine what the argument being made is.
   3. Why is this important? One possible way to define philosophical dialogue, or the philosophical discipline, is to say that it is solely concerned with giving arguments and evaluating arguments. Why is this important? Because argument is primary point of human discourse. Further more, it is everywhere around us happening all the time. It is important to recognize when it is happening so that we may evaluate the arguments that are constantly thrown in our faces. As such, philosophy is not merely understanding how to have conversations traditionally conceived of as philosophical, e.g., the existence of God, problem of evil, what Aquinas said and didn't say, but we should also be able to evaluate arguments such as the moral justification of lockdowns, whether or not it is acceptable for media publications to display bias in their reporting? When is it permissible for private media platforms to silence political descent?
   4. In one of our earlier readings, we will look at possible distinctions between persuasion and argument. In the *Phaedros*, colloquially known as *The art of argument*, Socrates attempts to instruct Phaedrus on why a speech he receives from another individual named Lysias is not a convincing one. 

# Class Schedule

Hopefully the class schedule is fairly intuitive. This course is an 8 week course as opposed to a 16 week course. As such, the far left corner includes the week and broad topic for that week. The column after is obviously the date, and under topics are the more specific topics we will be covering that week. You can think of the more specific topics as questions we will be covering. The far right column includes the readings you will have read to prepare you for the assignments.

# References {-}
\setlength{\parindent}{-0.2in}
\setlength{\leftskip}{0.2in}
\setlength{\parskip}{8pt}
\noindent
