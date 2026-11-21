---
date: 2016-03-09T00:11:02+01:00
title: Docker Overview
weight: 11
---

**This was intended langauge for the course software page!**

## Overview

This course is built primarily around a trio of software applications - the programming language `R`, the graphical user interface for `R` called RStudio, and GitHub Desktop. As I noted on the [course onboarding page](/getting-started/#course-software), there are two choices for *accessing* software and two choices for *installing* software. Please read through the [course onboarding page](/getting-started/#course-software) page carefully and make the decisions you think are best for you. Feel free to shoot me a message on Slack or via email if you have questions about which approach is best.

Additionally, **all students** regardless of their installation choices for `R` and RStudio will need to make sure their own computer or lab desktop has [GitHub Desktop installed](/course-software/#github-desktop). Lab computers will not have this pre-installed for you.

## Coursework with Docker
Using Docker is the easiest, most straightforward way to access `R` and RStudio for this class. Using Docker allows you to install and access `R` and RStudio as well as all of the required packages with a single, streamlined insallation process.

### Installing Docker
If you decide to use Docker's virtual installation, there are a couple of steps you will have to complete if you are using your own computer. If you are using a lab computer, you can skip the first two installation steps but will still need to complete step 3.

1. You will need to download and install the appropriate version [Docker Community Edition](https://store.docker.com/search?type=edition&offering=community) for your operating system.

2. The easiest way to use Docker is with its Docker's graphical user interface [Kitematic](https://github.com/docker/kitematic/). Download the latest version from [Kitematic's GitHub page](https://github.com/docker/kitematic/releases/latest).

3. Once Kitematic is installed, make sure Docker is **running** before you open Kitematic. Skip the log-in process if you are prompted to do so. Search for the `slu-soc-stats` image in the search bar and click "Create" when you have found it. 

### Using Docker for Coursework
Additional details about using Docker with Kitematic (recommended) and, alteratively, using the command line (a more advanced technique) can be found at the following links:

<p> </p>
{{< buttonDocker "Using Docker with Kitematic" "/course-software/docker-kitematic" >}} {{< buttonDocker "Using Docker with the Command Line" "/course-software/docker-cl" >}}

## Coursework with Local Installations of `R`
If you decide to manage your own local installation of `R` this semester, which is the more advanced way to set-up the course software, you'll need to download both of the applications we're using, `R` and RStudio, install them, and then install the relevant packages.