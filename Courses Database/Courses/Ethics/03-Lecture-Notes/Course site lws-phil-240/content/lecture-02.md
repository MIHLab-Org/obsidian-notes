---
date: 2016-03-08T21:07:13+01:00
title: Lecture 02 - Working with Data
weight: 21
---

## Meta
![](https://img.shields.io/badge/semester-fall%202018-orange.svg) ![](https://img.shields.io/badge/release-full-brightgreen.svg) [![](https://img.shields.io/badge/last%20update-2018--09--06-brightgreen.svg)](https://github.com/slu-soc5050/lecture-02/blob/master/NEWS_SITE.md)

## Key Topics
[{{< keyword name="Analysis development" >}}](/topic-index/#a-d)
[{{< keyword name="Data cleaning" >}}](/topic-index/#a-d)
[{{< package name="base" >}}](/topic-index/#a-d)
[{{< package name="dplyr" >}}](/topic-index/#a-d)
[{{< package name="ggplot2" >}}](/topic-index/#e-h)
[{{< package name="knitr" >}}](/topic-index/#i-l)
[{{< package name="magrittr" >}}](/topic-index/#m-p)
[{{< keyword name="Notebooks" >}}](/topic-index/#m-p)
[{{< keyword name="Plotting and visualization" >}}](/topic-index/#m-p)
[{{< tool name="R" >}}](/topic-index/#q-t)
[{{< package name="rmarkdown" >}}](/topic-index/#q-t)
[{{< package name="testDriveR" >}}](/topic-index/#q-t)
[{{< package name="utils" >}}](/topic-index/#u-z)

## Resources

{{< syllabus "slu-soc5050" "lecture-02-working-with-data" >}}
{{< github "slu-soc5050" "lecture-02" >}}
{{< button "Example Code" "https://github.com/slu-soc5050/lecture-02/blob/master/examples/" >}}
{{< button "Functions" "https://github.com/slu-soc5050/lecture-02/blob/master/handouts/lecture-02-functions.pdf" >}}
{{< button "Lab-01" "https://github.com/slu-soc5050/lecture-02/blob/master/assignments/lab-01.pdf" >}}
{{< button "Lab-01 Replication" "https://github.com/slu-soc5050/lecture-02/tree/master/assignments/lab-01-replication" >}}
{{< button "Starter Notebook" "https://github.com/slu-soc5050/lecture-02/blob/master/extras/starterNotebook.Rmd" >}}

## A Quick Note
The lectures are dated for 2017 but not updates are planned to the videos or slides for this year. Please watch them in order, and take the time to practice along with the examples in *R for Data Science*. I will have my office hours as usual on Wednesday should questions come up, and will be available on Slack all week.

## Lecture 02a - Introducing `ggplot2`
### Slides
<p> </p>
{{< speakerdeck 235fdb303a2e40f4a24f9961f166cbea >}}

### Video Lecture
<p> </p>
{{< youtube eT_6tw4fWRE >}}

## Lecture 02b - Grammar of Graphics
### Slides
<p> </p>
{{< speakerdeck 8c95934676fe4601bcadcfd45011632c >}}

### Video Lecture
<p> </p>
{{< youtube EHZ2JtVCDCQ >}}

## Lecture 02c - Verbs for Cleaning Data
*Note:* The video is titled "Lecture 3" - this is not a mixup, just a holdover from a past semester!

### Slides
<p> </p>
{{< speakerdeck cc90cd776dbb49c5a285aaa464abc4a8 >}}

### Video Lecture
<p> </p>
{{< youtube txSNKb6Akgs >}}

## Lecture 02d - Structuring Notebooks
*Note:* The video is titled "Lecture 4" - this is not a mixup, just a holdover from a past semester!

### Slides
<p> </p>
{{< speakerdeck eda0ada395544af7bb08b271ce7dbf67 >}}

### Video Lecture
<p> </p>
{{< youtube Rb1jsVRsnbk >}}

## Slack Discussions <i class="fab fa-slack"></i>

* <a href="https://slu-soc5050.slack.com/archives/C2BRR3RU4/p1536008390000100" target="_blank">Lecture Release</a>
* <a href="https://slu-soc5050.slack.com/archives/C2BRR3RU4/p1536003390000100" target="_blank">`testDriveR` updates</a>
* <a href="https://slu-soc5050.slack.com/archives/C6U4BB8RJ/p1536164338000100" target="_blank">Final Project questions</a>
* <a href="https://slu-soc5050.slack.com/archives/C6U4BB8RJ/p1536191174000100" target="_blank">General coursework questions</a>
* <a href="https://slu-soc5050.slack.com/archives/C6U6HJ421/p1536191749000100" target="_blank">Error messages in `R` and package installation</a>
* <a href="https://slu-soc5050.slack.com/archives/C6U0C90D9/p1536261800000100" target="_blank">Notebook structure</a>

## Data for Assignments
The data that you need for many of the assignments this semester is available as an `R` package named `testDriveR`. On the initial course software instructions, you were told to download and install it from GitHub. As of September 1, I am happy to annouce that `testDriveR` is on CRAN. Please re-install the package:

```r
install.packages("testDriveR")
```

## Starter Notebook
Based on a <a href="https://slu-soc5050.slack.com/archives/C6U0C90D9/p1536261800000100" target="_blank">question from a student</a>, I've posted <a href="https://github.com/slu-soc5050/lecture-02/blob/master/extras/starterNotebook.Rmd" target="_blank">an empty notebook structure</a> that you can use to start your assignments. If you click on the `Raw` button, or follow <a href="https://raw.githubusercontent.com/slu-soc5050/lecture-02/master/extras/starterNotebook.Rmd" target="_blank">this link</a>, you'll get plain text that you can copy into RStudio.

## Cheatsheets
RStudio offers a number of cheatsheets that you may find useful. FYI - they offer *way* more detail than what I provide. This is intentional on my part. So, if you feeling confident and are looking to build upon what a particular week covers, check them out!

* [`ggplot2`](https://github.com/rstudio/cheatsheets/raw/master/source/pdfs/ggplot2-cheatsheet-2.1.pdf)
* [`dplyr`](https://github.com/rstudio/cheatsheets/raw/master/source/pdfs/data-transformation-cheatsheet.pdf)
* [`rmarkdown`](https://github.com/rstudio/cheatsheets/raw/master/source/pdfs/rmarkdown-cheatsheet-2.0.pdf)

## Extra Information
This week, I mentioned a number of important figures. If you want more information, you can check out these Wikipedia pages:

* [René Descartes](https://en.wikipedia.org/wiki/René_Descartes)
* [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)
* [George Boole](https://en.wikipedia.org/wiki/George_Boole)
