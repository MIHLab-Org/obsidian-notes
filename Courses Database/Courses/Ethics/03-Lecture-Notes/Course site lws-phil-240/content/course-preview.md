---
date: 2016-03-09T00:11:02+01:00
title: Course Preview
weight: 12
---

## Meta 

![](https://img.shields.io/badge/semester-fall%202018-orange.svg) ![](https://img.shields.io/badge/release-updated-brightgreen.svg) 
![](https://img.shields.io/badge/last%20update-2018--08--10-brightgreen.svg)

## Key Topics
[{{< keyword name="Analysis development" >}}](/topic-index/#a-d)
[{{< tool name="GitHub" >}}](/topic-index/#e-h)
[{{< tool name="R" >}}](/topic-index/#q-t)
[{{< keyword name="RMarkdown" >}}](/topic-index/#q-t)
[{{< keyword name="Reproducibility" >}}](/topic-index/#q-t)
[{{< keyword name="Version Control" >}}](/topic-index/#u-z)
[{{< keyword name="Workflow" >}}](/topic-index/#u-z)

## Resources

{{< syllabus "slu-soc5050" "course-preview" >}}

## Overview
To set the stage for this semester, please watch the two videos below. These will take approximately 45 minutes to view. Once you have finished these videos, follow the link at the bottom of the page to answer a few short questions about what you saw. Before you begin, please make sure you have completed the [course onboarding](/course-onboarding/) process and Lecture Prep 01! You won't need any of the [course software](/course-software/) for this Course Preview, however, so there is no need to have installed software at this stage.

## Plain Text Science
To begin, read the {{< link "introductory" "http://plain-text.co">}} "chapter" (it is quite short!) to Duke University sociologist {{< link "Kieran Healy's" "http://kieranhealy.org">}} primer *{{< link "The Plain Person's Guide to Plain Text Social Science" "http://plain-text.co">}}*. This gives a great taste of some of the tools we'll be using this semester (like RMarkdown) as well as some of the ideas we'll be thinking about (like reproducibility).

Once you've ready the Kieran's intro, please watch the first few sections of a recent talk by {{< link "Hadley Wickham" "https://en.wikipedia.org/wiki/Hadley_Wickham">}}. He is the Chief Scientist for RStudio and developer of the `{{< link "tidyverse" "http://tidyverse.org">}}`, which is a family of packages we'll be using this semester. In fact, the original name of this family of packages was the `hadleyverse`. Hadley is also the author of *{{< link "R for Data Science" "http://r4ds.had.co.nz">}}*, one of the books we'll be reading this semester. In this video, Hadley speaks about why using a programming language to express yourself for data science and statistical work can be so valuable. Please watch up to 18:30, when the "Why Program in R?" slide comes up.

<p> </p>
{{< youtube cpbtcsGE0OA >}}
<p> </p>

For the uninitiated, here is a description of what a {{< link "GUI" "https://en.wikipedia.org/wiki/Graphical_user_interface">}} is.

Here are links to the two GitHub repositories Hadley referenced during the talk:

- {{< link "BC Population Indicator" "https://github.com/bcgov/bc-population-indicator">}}
    - The history that Wickham references can be viewed {{< link "here" "https://github.com/bcgov/bc-population-indicator/commits/master">}}, and you can click on any of the commit messages or numbers to view how specific files have changed. {{< link "This" "https://github.com/bcgov/bc-population-indicator/commit/53608ab2142f541d6794c26144e1f868bdec37db">}} is one example from March 2018. Red text indicates deletions, and green text indicates additions.
- {{< link "Calaveras Jumping Frog Jubilee" "https://github.com/jennybc/frogs">}}

Many (but not all of you) will have experienced some parts of these processes before. Perhaps you've used Microsoft Excel to organize some information or used SPSS to analyze some quantitative data. We won't be using those tools. Instead, this course will emphasize the use of other tools that support reproducible, accurate, and collaborative data analysis. Throughout the semester, we'll discuss why these tools are important and the advantages they have over other products that are out there. 

The tools we use are also incredibly flexible and therefore powerful. `R` and Markdown, for example, were used exclusively to create this website and the **{{< link "Syllabus" "https://slu-soc5050.github.io/syllabus/">}}**. Both websites are hosted using GitHub. Learning these tools therefore opens up doors not only for managing data and data analyses, but also for communicating your findings.

## Analysis Development
The workflow that Hadley introduced in the first video, and the idea that you cannot do data science in a GUI, is opinionated - there is a strong premise that underlies the workflow about the ways in which spatial data (and data more generally) should be obtained, stored, modified, and mapped. Hilary Parker is a data scientist at {{< link "Stichfix" "http://stitchfix.com">}} and also runs a data science podcast called {{< link "Not So Standard Deviations" "http://nssdeviations.com">}}. She has been speaking recently about an idea called opinionated analysis development. The {{< link "video" "https://www.rstudio.com/resources/videos/opinionated-analysis-development/">}} linked to below is a 25 minute talk she gave on this idea last year, and she now has a {{< link "draft paper" "https://peerj.com/preprints/3210/">}} out on the topic as well. Our workflow for this semester is closely linked to the ideas she discusses in this talk.

<p> </p>

[![opinionatedAnalysis](/images/opinionatedAnalysis.png)](https://www.rstudio.com/resources/videos/opinionated-analysis-development/)

<p> </p>

Inspired by Hilary's idea of opinionated analysis development, our goal each week will be to focus on the *processes* that can be used to increase the reproducibility and accuracy of our statistical work.

## Lecture Prep 02
The lecture prep for the first week asks three follow-up questions about these videos. Please answer these questions and submit them before class on **August 27th**. Answers **must** be submitted through {{< link "Google Forms" "https://goo.gl/forms/yjn69cn5ZeSBuRA43">}} and each response should be three to four sentences in length. The questions are provided here for reference:

1. Based on the typology presented by Kieran Healy, are you an "office type" or an "engineering type"? Why?
2. Hadley Wickham introduces the idea of a workflow. In your own words, describe what you think a workflow is.
3. What are some of the advantages of using plain text for a data analysis that Hadley and Kieran cite?
4. In your own words, what are the key aspects of opinionated analysis development as described by Hilary Parker?
