---
title: "A Brief Primer on Kant"
runningheader: "Brief Primer" # only for pdf output
subtitle: "Preface and Section 1" # only for html output
author: "Montaque Reynolds"
date: "`r Sys.Date()`"
output:
  tufte::tufte_handout:
    citation_package: natbib
    latex_engine: xelatex
  tufte::tufte_html: default
  tufte::tufte_book:
    citation_package: natbib
    latex_engine: xelatex
bibliography: ["/home/reynoldsmf/1-2021-22-Projects-2/my-library/my-library.bib"]
link-citations: yes
---

```{r setup, include=FALSE}
library(tufte)
# invalidate cache when the tufte version changes
knitr::opts_chunk$set(cache.extra = packageVersion('tufte'))
options(htmltools.dir.version = FALSE)
```

```{r setup_google, message=FALSE, warning=FALSE, include=FALSE}
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
trackdown::upload_file("./paper.Rmd",
#		gpath = "Projects/RESEARCH/X-PHI-FEM-COLLAB/")
#trackdown::render_file("./paper.Rmd",
#trackdown::download_file("./paper.Rmd", 
#trackdown::update_file("paper.Rmd",
		gpath = "Projects/COURSES/UQ1700/WEEK_1/",
		gfile = "notes_1",
		hide_code = TRUE,
#		path_output = "paper.pdf"
)
	
#pagedown::chrome_print("paper.pdf")
#pagedown::chrome_print("presentation.pptx")


```


# Language

In the early part of the twentieth century, there was a lot of scientific and other advancement in the academic disciplines. Contributing to these advances, where scientists, mathematicians and others who initially began their studies in philosophy and then defected to begin work in these new more focused subfields. As such, a central question would arise, what was philosophy without these other academic disciplines?

The logical positivists were one such group. Those who held membership in this group were academics in various interdisciplinary fields that included mathematicians, social scientists and philosophers to name a few. They would go on to argue in favor of a reform in the way people thought about things. The new ways of thinking would eschew what they thought of as unfounded metaphysical assertions, assertions which could not be proven using the scientific method for instance. 

Sometimes called logical empiricism, other times called logical positivism, there are three groups whose members are accredited the most with its development of what would come to be known more broadly as *analytic philosophy*: (1) the Vienna Circle, (2) the Berlin Society of Empirical Philosophy, and others around the world who engaged with these members.

One proposal that was already rejected in light of the increasing analytic turn in philosophy, was that philosophy affords us knowledge of a transcendent reality. Meaning, lets imagine for a moment that there are often assertions that people make, but that these cannot be grounded by any type of empirical observations. There is absolutely no sort of test, which would enable a curious mind to determine whether the assertion itself is grounded in fact or fantasy. Some assertions of this kind include: all men are mortal, angels are six feet tall, the Mona Lisa is the greatest painting ever created, etc.

There are two ways of rejecting the statement:

1. The statement is wrong because it ignores the limits of the human understanding (Kant)
2. The statement is wrong because it disobeys the rules which govern the significant use of language. (Ayer)

To end such disputes, Alfred Ayer proposed that “the surest way to end them is to establish beyond question what should be the purpose and method of a philosophical inquiry” [@ayer36, 13]. The answer to this question would be that a true philosophical inquiry is one wherein its answer can be empirically verified.


# Conclusion

# References {-}
\setlength{\parindent}{-0.2in}
\setlength{\leftskip}{0.2in}
\setlength{\parskip}{8pt}
\noindent
