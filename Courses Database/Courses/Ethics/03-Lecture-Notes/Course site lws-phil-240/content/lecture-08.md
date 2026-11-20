---
date: 2016-03-08T21:07:13+01:00
title: Lecture 08 - Difference of Means (Part 2)
weight: 27
---

## Meta
![](https://img.shields.io/badge/semester-fall%202018-orange.svg) ![](https://img.shields.io/badge/release-lecture-orange.svg) [![](https://img.shields.io/badge/last%20update-2018--10--12-brightgreen.svg)](https://github.com/slu-soc5050/lecture-06/blob/master/NEWS_SITE.md)

## Key Topics
[{{< package name="broom" >}}](/topic-index/#a-d)
[{{< package name="car" >}}](/topic-index/#a-d)
[{{< keyword name="Cohen's D" >}}](/topic-index/#a-d)
[{{< keyword name="Difference of Mean Tests" >}}](/topic-index/#a-d)
[{{< package name="effsize" >}}](/topic-index/#e-h)
[{{< package name="ggplot2" >}}](/topic-index/#e-h)
[{{< package name="ggridges" >}}](/topic-index/#e-h)
[{{< package name="ggstatsplot" >}}](/topic-index/#e-h)
[{{< keyword name="Power Analyses" >}}](/topic-index/#m-p)
[{{< package name="pwr" >}}](/topic-index/#m-p)
[{{< tool name="R" >}}](/topic-index/#q-t)
[{{< package name="readr" >}}](/topic-index/#q-t)
[{{< package name="Reshaping Data" >}}](/topic-index/#q-t)
[{{< package name="stats" >}}](/topic-index/#q-t)
[{{< package name="tidyr" >}}](/topic-index/#q-t)

## Resources

{{< syllabus "slu-soc5050" "lecture-08-difference-of-means-part-2" >}}
{{< github "slu-soc5050" "lecture-08" >}}
{{< button "Functions" "https://github.com/slu-soc5050/lecture-08/blob/master/handouts/lecture-08-functions.pdf" >}}
{{< button "Lab-07" "https://github.com/slu-soc5050/lecture-08/blob/master/assignments/lab-07.pdf" >}}
{{< button "LP-08" "https://github.com/slu-soc5050/lecture-08/blob/master/assignments/lp-08.pdf" >}}

## Lecture Slides
{{< speakerdeck 6f5a77f5d7144394b05b2f08f6e0d844 >}}

## Tips for Working with Paired Data
The lab and the problem set for this week both include paired data, and you may run into a couple of issues that I want to hight. 

### Issues with Plots
The first issue that may arise is related to plotting data that are long. Following the examples from class, you may be tempted to use the `year` variable, unedited, to your plot. It will produce the following plot:
![image](/images/week-08-img01.png)

Even those we specified that `year` should be the `x` variable, it does not provide two boxes on the plot. This ibecause the `x` variable, `year` in this case, is numeric. To do this correctly, we need toeither (a) include a third option in our aesthetic mapping called `group` that is set equal to our `year` variable or (b) convert `year` to a factor or a string. Once we do, `ggplot2` will produce the following plot:
![image](/images/week-08-img03.png)

### Issues with Variable Names
When we convert `incomeLong` to `incomeWide`, the variable names become `2010` and `2015`. Trying to call a function with these variable names (like `mean(incomeWide$2010)`) will produce an error. You must wrap numeric variable names in back ticks, like so: 

```r
mean(incomeWide$`2010`)
```

This will allow the code to execute properly.
