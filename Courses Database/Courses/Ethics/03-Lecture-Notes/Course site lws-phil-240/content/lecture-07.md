---
date: 2016-03-08T21:07:13+01:00
title: Lecture 07 - Difference of Means (Part 1)
weight: 26
---

## Meta
![](https://img.shields.io/badge/semester-fall%202018-orange.svg) ![](https://img.shields.io/badge/release-lecture-orange.svg) [![](https://img.shields.io/badge/last%20update-2018--10--12-brightgreen.svg)](https://github.com/slu-soc5050/lecture-06/blob/master/NEWS_SITE.md)

## Key Topics
[{{< keyword name="Cohen's D" >}}](/topic-index/#a-d)
[{{< keyword name="Difference of Mean Tests" >}}](/topic-index/#a-d)
[{{< package name="Reshaping Data" >}}](/topic-index/#q-t)

## Resources

{{< syllabus "slu-soc5050" "lecture-07-difference-of-means-part-1" >}}
{{< github "slu-soc5050" "lecture-07" >}}
{{< button "Equations" "https://github.com/slu-soc5050/lecture-07/blob/v18.2.0/handouts/lecture-07-equations.pdf" >}}
{{< button "Function, Assignment" "https://github.com/slu-soc5050/lecture-07/blob/master/examples/probt_general.R" >}}
{{< button "Function, Lecture" "https://github.com/slu-soc5050/lecture-07/blob/master/examples/probt.R" >}}
{{< button "Functions" "https://github.com/slu-soc5050/lecture-07/blob/master/handouts/lecture-07-functions.pdf" >}}
{{< button "Lab-06" "https://github.com/slu-soc5050/lecture-07/blob/master/assignments/lab-06.pdf" >}}
{{< button "LP-07" "https://github.com/slu-soc5050/lecture-07/blob/master/assignments/lp-07.pdf" >}}
{{< button "T-test Workflow" "https://github.com/slu-soc5050/lecture-07/blob/master/handouts/t-test_workflow.pdf" >}}

## Lecture Slides
<p> </p>
{{< speakerdeck cc160bd374244d7c90f71d86d2bf9c6f >}}

## Lecture Prep Replication
<p> </p>
{{< youtube elqbSD1dGy8 >}}

A notebook based on the replication video is available [on GitHub](https://github.com/slu-soc5050/lecture-07/tree/master/assignments/lp-07-replication/docs).

## Cohen's D Animations
The website rpsychologist contains some excellent [Cohen's *d* visualizations](http://rpsychologist.com/d3/cohend/) that I find particularly useful for thinking about how different effect sizes look.

## Probability Under the t Distribution
This "gist" contains the code we wrote together in class, which also appears on the back of the functions handout for this lecture.

<p> </p>
<script data-gist-id="ed226f96a70382ca96ab319dae2d7c2c"></script>

This script works very well for one-tailed t tests, but needs some modification for our assignment this week. For assignments, please use this more general version of the function:

<p> </p>
<script data-gist-id="31832be0d94cd8f4b72e04b3bc37f76c"></script>
