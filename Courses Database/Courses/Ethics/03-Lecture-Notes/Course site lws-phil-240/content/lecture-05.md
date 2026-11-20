---
date: 2016-03-08T21:07:13+01:00
title: Lectue 05 - The Distribution of Random Variables
weight: 24
---

## Meta
![](https://img.shields.io/badge/semester-fall%202018-orange.svg) ![](https://img.shields.io/badge/release-lecture-brightgreen.svg) [![](https://img.shields.io/badge/last%20update-2018--09--24-brightgreen.svg)](https://github.com/slu-soc5050/lecture-03/blob/master/NEWS_SITE.md)

## Key Topics
[{{< keyword name="Binomial distribution" >}}](/topic-index/#a-d)
[{{< keyword name="Gaussian distribution" >}}](/topic-index/#e-h)
[{{< keyword name="Hypothesis testing" >}}](/topic-index/#e-h)
[{{< package name="ggplot2" >}}](/topic-index/#e-h)
[{{< package name="moments" >}}](/topic-index/#m-p)
[{{< keyword name="Normality testing" >}}](/topic-index/#m-p)
[{{< package name="nortest" >}}](/topic-index/#m-p)
[{{< keyword name="Poisson distribution" >}}](/topic-index/#m-p)
[{{< tool name="R" >}}](/topic-index/#q-t)
[{{< keyword name="Random variables" >}}](/topic-index/#q-t)
[{{< keyword name="Statistical significance" >}}](/topic-index/#q-t)
[{{< package name="stats" >}}](/topic-index/#q-t)

## Resources

{{< syllabus "slu-soc5050" "lecture-05-the-distribution-of-random-variables" >}}
{{< github "slu-soc5050" "lecture-05" >}}
{{< lecture "https://slu.tegrity.com/#/recording/a3589505-ed8c-4b4f-9694-e4640d0a01a1" >}}
{{< button "Equations" "https://github.com/slu-soc5050/lecture-05/blob/master/handouts/lecture-05-equations.pdf" >}}
{{< button "Functions" "https://github.com/slu-soc5050/lecture-05/blob/master/handouts/lecture-05-functions.pdf" >}}
{{< button "Lab 04" "https://github.com/slu-soc5050/lecture-05/blob/master/assignments/lab-04.pdf" >}}
{{< button "Lab 04 Replication" "https://github.com/slu-soc5050/lecture-05/blob/master/assignments/lab-04-replication/" >}}
{{< button "Problem Set 02" "https://github.com/slu-soc5050/lecture-05/blob/master/assignments/ps-02.pdf" >}}

## Lecture Slides
<p> </p>
{{< speakerdeck c497c75aad794d199096758b6050c489 >}}

## Grappling with p-values
Here are a couple of links for digging further into what p-values are and how we explain them:

* American Statistical Association's [Statement on p-values](http://amstat.tandfonline.com/doi/abs/10.1080/00031305.2016.1154108)
* [``Mission Improbable: A Concise and Precise Definition of P-Value''](http://www.sciencemag.org/news/2009/10/mission-improbable-concise-and-precise-definition-p-value) - Science Magazine interview with [Victor De Gruttola](https://www.hsph.harvard.edu/victor-de-gruttola/)
* [``Science Isn't Broken''](https://fivethirtyeight.com/features/science-isnt-broken/?ex_cid=endlink#part1) - FiveThirtyEight article on p-values
* [``Not Even Scientists Can Easily Explain P-values''](http://fivethirtyeight.com/features/not-even-scientists-can-easily-explain-p-values/) - FiveThirtyEight article on p-values, includes the video I mentioned in class
* [Andrew Gelman's](http://andrewgelman.com/) [views on p-values](http://www.stat.columbia.edu/~gelman/research/published/asa_pvalues.pdf)
* [``Abandon Statistical Significance''](http://www.stat.columbia.edu/~gelman/research/unpublished/abandon.pdf) - Andrew Gelman and others
* Gelman and John Carlin [suggest some solutions for the ``p-value communication problem''](http://www.stat.columbia.edu/~gelman/research/published/jasa_signif_2.pdf)
* [``It will be much harder to call new findings ‘significant’ if this team gets its way''](http://www.sciencemag.org/news/2017/07/it-will-be-much-harder-call-new-findings-significant-if-team-gets-its-way) - Science Magazine article on changing culture around p-values

## Histograms with the Normal Distribution Overlaid in `ggplot2`
I introduced the idea of a histogram with a normal distribution overlaid during this week's lecture, but purposely did not include the syntax on our quick reference sheet for `R` functions. If you are interested in playing with the syntax, it is included below. We make one key change to the initial `ggplot()` call - the aesthetic mapping is included in the initial `ggplot()` function rather than in a specific geom. We also covert the `hwy` variable's representation from frequency to density, and layer on top of this our normal distribution by using the `stat_function()` function. Make sure to update the arguments for `stat_function()` if you want to adjust this example, and note that we have to specify the data frame *and* the variable name separated by a `$`.
```r
library(ggplot2)

ggplot(data = mpg, mapping = aes(hwy)) +
  geom_histogram(mapping = aes(y = ..density..)) +
  stat_function(fun = dnorm, color = "red",
    args=list(mean=mean(mpg$hwy), sd=sd(mpg$hwy)))
```
![histogramNormal.png](https://raw.githubusercontent.com/slu-soc5050/Core-Documents/sources/Week-05/histogramNormal.png)

## Performing Calculations
During class this week, I briefly described how to perform calculations and save results in `R`. You can use standard mathematical operators `+`, `-`, `/`, and `*` to add, subtract, divide, and multiply (respectively). These are reviewed in the `week-02-lecture-03-rQuickref.pdf` file in the [`Week-02` repo on GitHub](https://github.com/slu-soc5050/Week-02/blob/master/Functions/week-02-lecture-03-rQuickref.pdf). Quickly, we can calculate a value like lambda within `R`, save it as an object, and reference the object in later calculations:

```r
> lambda <- 100000 * .00004
> dpois(6, lambda = lambda)
[1] 0.1041956
```

## Reading in Arbitrary Vectors to `R`
Problem Set 04 asks you to find the variance of an arbitrary set of values in a vector (list) of numbers. These can easily be read into `R` so that you do not have to calculate the variance by hand. You can use the same technique to check your work as you calculate skew and kurtosis by hand.

To begin:
Let x = 2, 4, 6, 8, 10

```r
x <- c(2, 4, 6, 8, 10)
```

Once you add these values into `R`'s memory, you will be able to see them in your environment tab and will be able to include them in calculations:

```r
> mean(x)
[1] 6
```

## Extra Information
This week, I mentioned a number of important statisticians. If you want more information, you can check out these Wikipedia pages:

* [Jacob Bernoulli](https://en.wikipedia.org/wiki/Jacob_Bernoulli)
* [Ladislaus Bortkiewicz](https://en.wikipedia.org/wiki/Ladislaus_Bortkiewicz)
* [Abraham de Moivre](https://en.wikipedia.org/wiki/Abraham_de_Moivre)
* [Ronald Fisher](https://en.wikipedia.org/wiki/Ronald_Fisher)
* [Francis Galton](https://en.wikipedia.org/wiki/Francis_Galton)
* [Carl Friedrich Gauss](https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss)
* [Pierre-Simon Laplace](https://en.wikipedia.org/wiki/Pierre-Simon_Laplace)
* [Blaise Pascal](https://en.wikipedia.org/wiki/Blaise_Pascal)
* [Karl Pearson](https://en.wikipedia.org/wiki/Karl_Pearson)
* [Siméon Denis Poisson](https://en.wikipedia.org/wiki/Siméon_Denis_Poisson)

Additionally, here is the link to the [quincunx simulation](http://goo.gl/qKUTsx) we talked about in class!
