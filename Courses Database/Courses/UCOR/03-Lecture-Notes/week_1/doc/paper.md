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
		gpath = "Projects/COURSES/UQ1700/WEEK_1/",
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

# Eliminating Metaphysics

 Sometimes called logical empiricism, other times called logical positivism, there are three groups whose members are accredited the most with its development of what would come to be known more broadly as *analytic philosophy*: (1) the Vienna Circle, (2) the Berlin Society of Empirical Philosophy, and others around the world who engaged with these members.

Logical empiricism/postivism was a movement which flourished primarily on the continent of Europe between the 1920's and 30's. I say *primarily*, WWII would cause many of the main participants to relocate to more stable parts of the world, including the United States, Britain and South America.

In the early part of the twentieth century, there was a lot of scientific and other advancements in the academic disciplines. Early philosophers wrote treatises exploring the nature of biological plant matter, mathematics, and the heavens. However, these individuals would eventually go on to define themselves and the nature of their work in terms of these more narrow subfields.^[See @crea11, "tne long-term process with profound implications was the steady departure of the various sciences from philosophy to form autonomous disciplines. By early in the twentieth century mathematics, physics, chemistry, biology, and the social sciences were all pursued professionally and independently from philosophy."] Therefore, contributing to these advances were scientists, mathematicians and others who initially began their studies in philosophy and then defected to begin work in these new more focused subfields. As such, it would become increasingly less clear what a philosopher was. A central question would arise then, what was philosophy without these other academic disciplines?

The logical positivists would go on to argue in favor of a reform in the way people *thought* about things. To them, these new academic subfields expressed a need to look at the world in a new light. One proposal that was already rejected in light of the increasing analytic turn in philosophy, was that philosophy affords us knowledge of a transcendent reality. This would include questions such as the nature and existence of God, value propositions such as "it is good for husbands to love their wives", and can even include such questions about metaphysical reality, for instance: "all men are mortal".
The new ways of thinking would eschew what they sometimes called: metaphysical assertions; assertions which could not be proven using empirical methods of observation.

There are two ways of rejecting such statements:

1. The statement is wrong because it ignores the limits of the human understanding (Kant)-NO
2. The statement is wrong because it disobeys the rules which govern the significant use of language. (Ayer)

To end such disputes, Alfred Ayer proposed that “the surest way to end them is to establish beyond question what should be the purpose and method of a philosophical inquiry” [@ayer36, 13]. The answer to this question would be that a true philosophical inquiry is one wherein its answer can be empirically verified.

# References {-}
\setlength{\parindent}{-0.2in}
\setlength{\leftskip}{0.2in}
\setlength{\parskip}{8pt}
\noindent
