---
title: |
  | Annotation Assignment: 
  | Comparing Crowd-Sourced Emotion Analysis with ChatGPT \vspace{1cm}
abstract: |
  | An apt emotion in a given context is grounded in recognition of the important value inherent in my relationships with others. My sadness over the failure of my marriage is apt just in case it is grounded in recognition of the importance this relationship held for my life. Yet, I may consume a fiction and aptly experience an opposite emotion in a similar context, for instance, my emotion states may cohere with Eazy Es as he happily enters and exits intimate relationships because of slight provocations. On the one hand, to understand a series of emotions expressed by a given corpus, we might crowd-source such annotations. A new technology called ChatGPT provides such annotations without the added expenses that usually accompany crowd-sourced annotation projects. In this project, we will compare and contrast our own annotations against those of ChatGPT.
  | \vspace{6cm}
bibliography: /home/reynoldsmf/1-2021-22-Projects-2/my-library/my-library.bib
biblio-style: apsr
documentclass: article 
latex_engine: xelatex
knit:pagedown::chrome_print:
output:
  pdf_document:
    includes:
      in_header: header.tex
      before_body: doc_prefix.tex
---

```{r setup, message=FALSE, warning=FALSE, include=FALSE}
library(tidyverse)
library(knitr)
library(ExPanDaR)
library(kableExtra)
opts_chunk$set(fig.pos = 'p') # Places figures on their own pages
opts_chunk$set(out.width = '100%', dpi=300)
opts_chunk$set(echo=FALSE, message=FALSE, warning=FALSE, cache = FALSE)
```

```{r, message=FALSE, warning=FALSE, include=FALSE}
#install.packages("tidyverse")
library(tidyverse)
library(knitr)
library(ExPanDaR)
library(kableExtra)
library(trackdown)
library(googlesheets4)
gs4_deauth()
#gs4_auth(email = "redapemusic35@gmail.com")
opts_chunk$set(fig.pos = 'p') # Places figures on their own pages
opts_chunk$set(out.width = '100%', dpi=300)
opts_chunk$set(echo=FALSE, message=FALSE, warning=FALSE, cache = FALSE)

trackdown::upload_file("paper.Rmd",
#trackdown::update_file("paper.Rmd",
#trackdown::download_file("paper.Rmd",
#trackdown::render_file("paper.Rmd",
		gpath = "Projects/COURSES/UQ1700/",
		gfile = "annotation-assignment-prompt",
		hide_code = TRUE,
		path_output = "paper.pdf"
)

#pagedown::chrome_print("paper.pdf")
```


