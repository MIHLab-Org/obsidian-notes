---
date: 2016-03-08T21:07:13+01:00
title: Week 16 - Chi-Squared
weight: 35
---

## Meta
![](https://img.shields.io/badge/semester-fall%202018-orange.svg) ![](https://img.shields.io/badge/release-full-brightgreen.svg) [![](https://img.shields.io/badge/last%20update-2018--12--10-brightgreen.svg)](https://github.com/slu-soc5050/lecture-09/blob/master/NEWS_SITE.md)

## Key Topics
[{{< keyword name="Chi-Square" >}}](/topic-index/#a-d)
[{{< keyword name="Contingency Tables" >}}](/topic-index/#a-d)
[{{< package name="janitor" >}}](/topic-index/#i-l)
[{{< tool name="R" >}}](/topic-index/#q-t)
[{{< package name="stats" >}}](/topic-index/#q-t)

## Resources

{{< syllabus "slu-soc5050" "lecture-16-chi-squared" >}}
{{< github "slu-soc5050" "lecture-16" >}}
{{< button "Functions" "https://github.com/slu-soc5050/lecture-16/blob/master/handouts/lecture-16-functions.pdf" >}}
{{< button "Lab-15" "https://github.com/slu-soc5050/lecture-16/blob/master/assignments/lab-15.pdf" >}}
{{< button "Workflow - Chi-Square" "https://github.com/slu-soc5050/lecture-16/blob/master/handouts/lecture-16-workflow.pdf" >}}

## Lecture Slides
<p> </p>
{{< speakerdeck 408d974987844b0c9c75ae84e00e8c76 >}}

## Bar Plots
We covered bar plots very quickly during Week-02 of the semester. They are created using the `geom_bar()` geom in a `ggplot2` call:

```r
ggplot(data = mpg, mapping = aes(class)) +
  geom_bar()
```