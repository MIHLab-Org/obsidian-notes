---
date: 2016-03-09T00:11:02+01:00
title: Course Software
weight: 11
---

## Meta 

![](https://img.shields.io/badge/semester-fall%202018-orange.svg) ![](https://img.shields.io/badge/release-updated-brightgreen.svg) 
![](https://img.shields.io/badge/last%20update-2018--09--03-brightgreen.svg)

## Overview

This course is built primarily around a trio of software applications - the programming language `R`, the graphical user interface for `R` called RStudio, and GitHub Desktop. As I noted on the [course onboarding page](/course-onboarding/#course-software), there are two choices for *accessing* software. Please read through the [course onboarding page](/course-onboarding/#course-software) page carefully and make the decisions you think are best for you - either using your own computer or using a lab computer. Feel free to shoot me a message on Slack or via email if you have questions about which approach is best.

## Installing `R` and RStudio

### Software Downloads
There are two applications you will need to initially download and install to get `R` up and running..

1. The computing language `R` needs to be downloaded and installed. You can download it from {{< link "R's website" "https://cloud.r-project.org">}}. Choose "Download R for (Mac) OS X" or "Download R for Windows". Windows users should look for text that says "install R for the first time" and click the `base` to the left of that text. Both macOS and Windows users should install `R` version `3.5.1`, known as "Feather Spray".[^1]

2. RStudio is a graphical user interface for `R` that will make learning the language and using it much, much easier. You should download the *free* version of RStudio from {{< link "their website" "https://www.rstudio.com/products/rstudio/download/#download">}}. Choose the appropriate installer for your platform. Make sure `R` is already installed before installing RStudio. As of August 10, 2018, the current version of RStudio is `v1.1.456`.

If you already have these installed, please check to make sure you are running the latest versions! If you are not running the latest versions, the installation instructions here will also work to update both applications

### Install `R` Packages
There are a number of `R` packages that you will need for this semester. If you feel feel comfortable, go ahead and take care of this before the semester starts. If not, we'll go over how to do this type of installation on the first day of class! **All students, regardless of whether you are using RStudio on a lab computer or your own machine will need to do this.**

The following code snipped can be pasted into your `R` console to install all of these required packages.

```r
install.packages(c("tidyverse", "car", "cowsay",
    "effsize", "heplots", "Hmisc",
    "knitr", "gapminder", "ggridges", "ggstatsplot",
    "ggthemes", "janitor", "lmtest", "moments", 
    "naniar", "nortest",  "psych", "pwr", 
    "remotes", "reprex", "rmarkdown",
    "sandwich", "skimr", "testDriveR"))
```

Depending on your version of `R` and your operating system, there will be other dependencies that are required and the number of packages installed will be considerably larger. The installation process has not been extensively tested on different operating system and hardware configurations, and though it is unlikely, you may encounter issues. If you do, please let Chris know!

{{< warning title="Change in testDriveR" >}}
As of September 1, 2018, the testDriveR package is available on CRAN. Please re-install it using install.packages("testDriveR") before proceeding with coursework!
{{< /warning >}}

## GitHub Desktop
In addition to the applications above, everyone will need a local installation of GitHub Desktop, which is a graphical user interface for accessing Git and GitHub.com. It can be downloaded for free from the {{< link "application's website" "https://desktop.github.com">}}. You will need to download and run the installer. Once it is complete, you will need to login to the application with your [GitHub.com username and password](/course-onboarding/#account-signups). 

If you already have GitHub Desktop installed, you should check to make sure you are running the latest version of GitHub Desktop. As of August 10, 2018, the latest version is `v1.3.2`. If you need to update GitHub Desktop, you should also {{< link "download" "https://git-scm.com/downloads">}} and install the latest version of Git.

[^1]: All of `R`'s version names are taken from the {{< link "Peanuts comic strip" "http://livefreeordichotomize.com/2017/09/28/r-release-names/">}}.
