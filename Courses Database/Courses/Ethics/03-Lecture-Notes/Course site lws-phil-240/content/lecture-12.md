---
date: 2016-03-08T21:07:13+01:00
title: Lecture 12 - OLS Regression (1)
weight: 31
---
## Meta
![](https://img.shields.io/badge/semester-fall%202018-orange.svg) ![](https://img.shields.io/badge/release-lecture-orange.svg) [![](https://img.shields.io/badge/last%20update-2018--11--08-brightgreen.svg)](https://github.com/slu-soc5050/lecture-09/blob/master/NEWS_SITE.md)

## Key Topics
[{{< package name="ggplot2" >}}](/topic-index/#e-h)
[{{< package name="ggthemes" >}}](/topic-index/#e-h)
[{{< keyword name="Plot Design" >}}](/topic-index/#m-p)
[{{< tool name="R" >}}](/topic-index/#q-t)
[{{< keyword name="Regression" >}}](/topic-index/#q-t)
[{{< package name="RColorBrewer" >}}](/topic-index/#q-t)
[{{< package name="stats" >}}](/topic-index/#q-t)

## Resources

{{< syllabus "slu-soc5050" "lecture-12-ols-regression-part-1" >}}
{{< github "slu-soc5050" "lecture-12" >}}
{{< button "Functions" "https://github.com/slu-soc5050/lecture-12/blob/master/handouts/lecture-12-functions.pdf" >}}
{{< button "Lab-11" "https://github.com/slu-soc5050/lecture-12/blob/master/assignments/lab-11.pdf" >}}
{{< button "LaTeX" "https://github.com/slu-soc5050/lecture-12/blob/master/handouts/lecture-12-latex.pdf" >}}

## Lecture Slides
<p> </p>
{{< speakerdeck f870f78829704a1eb67e01eb26f58cbe >}}

## More on Plots
### Line Breaks in Plot Text
We discussed this informally in class, and I wanted to clarify the technique for adding line breaks here. In situations where the size of the text has been increased or the quantity of text is quite large (a lengthy caption, for example), it is easy for the text to run off the sides of the plot. You can force a line break in text within `ggplot2` using the `\n` operator:

```
library(ggplot2)

ggplot(data = mpg, mapping = aes(x = displ, y = hwy)) +
  geom_point(mapping = aes(color = as.factor(cyl)), size = 2, position = "jitter") +
  geom_smooth(method = "lm") +
  labs(
    title = "Fuel Efficiency and Engine Size \nof Consumer Automobiles",
    subtitle = "Select Vehicles Sold in the United States",
    x = "Engine Displacement (litres)",
    y = "Highway Fuel Efficiency (mpg)"
  )
```
![image](/images/week-12-image01.png)

This example clearly does not call for the line break, since the text would not have run off the side of the plot. Adding the break here therefore only serves to sacrifice the amount of space that can be dedicated to the data themselves because it shrinks the available real estate for the main portion of the plot. 

