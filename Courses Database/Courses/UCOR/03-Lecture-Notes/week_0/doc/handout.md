---
title: "A Brief Primer on Kant"
runningheader: "Brief Primer" # only for pdf output
subtitle: "Preface and Section 1" # only for html output
author: "Montaque Reynolds"
date: "`r Sys.Date()`"
output:
  tufte::tufte_handout:
    latex_engine: xelatex
  tufte::tufte_html: default
  tufte::tufte_book:
    latex_engine: xelatex
bibliography: "/home/reynoldsmf/1-2021-22-Projects-2/my-library/my-library.bib"
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
#trackdown::upload_file("./paper.Rmd",
#		gpath = "Projects/RESEARCH/X-PHI-FEM-COLLAB/")
#trackdown::render_file("./paper.Rmd",
#trackdown::download_file("./paper.Rmd", 
trackdown::update_file("paper.Rmd",
		gpath = "Projects/COURSES/UQ1700/WEEK_1/",
		gfile = "notes_1",
		hide_code = TRUE,
#		path_output = "paper.pdf"
)
	
#pagedown::chrome_print("paper.pdf")
#pagedown::chrome_print("presentation.pptx")


```


# Eliminating Metaphysics 

In the early part of the twentieth century, there was a lot of scientific and other advancement in the academic disciplines. Contributing to these advances, where scientists, mathematicians and others who initially began their studies in philosophy and then defected to begin work in these new more focused subfields. As such, a central question would arise, what was philosophy without these other academic disciplines?

The logical positivists argued that would go on to argue in favor of a reform in the way people thought about things. The new ways of thinking would eschew metaphysical assertions, assertions which could not be proven using the scientific method for instance. Sometimes called logical empiricism, other times called logical positivism, there are three groups whose members are accredited the most with its development of what would come to be known more broadly as *analytic philosophy*: (1) the Vienna Circle, (2) the Berlin Society of Empirical Philosophy, and others around the world who engaged with these members.

One proposal that was already rejected in light of the increasing analytic turn in philosophy, was that philosophy affords us knowledge of a transcendent reality.

There are two ways of rejecting the statement:

1. The statement is wrong because it ignores the limits of the human understanding (Kant)
2. The statement is wrong because it disobeys the rules which govern the significant use of language. (Ayer)


To end such disputes, Alfred Ayer proposed that "the surest way to end them is to establish beyond question what should be the purpose and method of a philosophical inquiry" [@ayer36, 13]. The answer to this question would be that a true philosophical inquiry is one wherein its answer can be empirically verified.

Some Candidates:

1. Does God, heaven or hell, angels, exist?
2. Should I lie to my parents, partner, children?
3. What is goodness? What is truth?
4. Am I pretty? Does my life have meaning, am I important?
5. What is the best Country, hip-hop, soul, album of all time?
6. Did you like that story? Is it true that that story was good?
 
## Criterion of Verifiability

Consider the above candidates for points of philosophical inquiry. They probably look merely like normal questions.

Now lets consider possible answers:

1. You are pretty
2. I am valuable, my life has meaning, I am a VIP
3. You should never lie to your parents, partner, children
4. *He Stopped Loving Her Today* by George Jones is the best country song of all time.

Ayer proposed that in order for a sentence to be true, it must be first be factually significant. A sentence is factually significant to any given person if and only if (iff):

1. the person knows how to verify the proposition which it purports to express:
   1. what observations would lead him, under certain conditions, to accept the proposition as being true or reject it as being false
2. if truth or falsehood is grounded in experience:
   1. either tautologous or "pseudo-proposition"

First, considering 1, in order to determine my worth, for example, as a human person, I must first be able to identify those observations that would lead me, under certain conditions, to accept the proposition as being true or reject it as being false.

I might say something like "in order to determine my worth as a human person, I need to first ask my dad because he knows all true and false propositions."


## For a statement of fact to be genuine some possible observations must be relevant to the determination of its truth or falsehood

## Examples of assertions that are ruled out by the above

## Metaphysical sentences defined as sentences which express neither tautologies nor empirical hypotheses

## Metaphysics and Poetry

# Truth and Probability

## What is truth

## Propositions

## True and False functions

## How do we validate propositions?

## Validity is not purely formal

## The non-certainty of empirical propositions

## Observation

## The un-compelling nature of experience


# Conclusion

# References {-}
\setlength{\parindent}{-0.2in}
\setlength{\leftskip}{0.2in}
\setlength{\parskip}{8pt}
\noindent
