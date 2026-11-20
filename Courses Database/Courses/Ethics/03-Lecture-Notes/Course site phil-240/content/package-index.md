---
date: 2016-03-09T00:11:02+01:00
title: Package Index
weight: 42
---

## Meta 

![](https://img.shields.io/badge/semester-fall%202018-orange.svg) ![](https://img.shields.io/badge/release-updated-brightgreen.svg) 
![](https://img.shields.io/badge/last%20update-2018--09--03-brightgreen.svg)

The following is a list of packages used during the semester along with links to additional resources. This list does not include dependencies that may be installed for these packages to work. Unless otherwise noted, packages are available via CRAN and can be installed using `base::install.packages("packageName")`.

### Icon reference

- <i class="pgkIndex"><i class="fas fa-list"></i></i> - Topic index
- <i class="pkgResource"><i class="fas fa-database"></i></i> - CRAN site
- <i class="pkgResource"><i class="fab fa-github"></i></i> - GitHub repo
- <i class="pkgResource"><i class="fas fa-home"></i></i> - Website
- <i class="pkgResource"><i class="fas fa-file"></i></i> - RStudio Cheatsheet
- <i class="pkgResource"><i class="fas fa-book"></i></i> - Book

## Base `R` Packages
- `base` - base functions &emsp; {{< pkgIndex "#q-t" >}} {{< pkgWeb "https://stat.ethz.ch/R-manual/R-patched/library/base/html/00Index.html" >}}
- `datasets` - Teaching data that comes with `base R` &emsp; {{< pkgIndex "#a-d" >}} {{< pkgCran "datasets" >}}
- `stats` - statistical functions &emsp; {{< pkgIndex "#q-t" >}} {{< pkgWeb "https://stat.ethz.ch/R-manual/R-patched/library/stats/html/00Index.html"  >}}
- `utils` - utility functions &emsp; {{< pkgIndex "#u-z" >}} {{< pkgWeb "https://stat.ethz.ch/R-manual/R-patched/library/utils/html/00Index.html" >}}

## Data Packages
- `gapminder` - Teaching data from Gapminder project &emsp; {{< pkgIndex "#e-h" >}} {{< pkgCran "gapminder" >}} {{< pkgGitHub "jennybc/gapminder" >}}
- `testDriveR` - Data sets for teaching &emsp; {{< pkgIndex "#q-t" >}} {{< pkgCran "testDriveR" >}} {{< pkgGitHub "chris-prener/testDriveR" >}} {{< pkgWeb "https://chris-prener.github.io/testDriveR" >}}

## Tidyverse Packages

### Core Tidyverse Packages
Use `install.packages("tidyverse")` to install these for convenience!

- `broom` - creation of tidy output &emsp; {{< pkgIndex "#a-d" >}} {{< pkgCran "broom" >}} {{< pkgGitHub "tidyverse/broom" >}}
- `dplyr` - data wrangling &emsp; {{< pkgIndex "#a-d" >}} {{< pkgCran "dplyr" >}} {{< pkgGitHub "tidyverse/dplyr" >}} {{< pkgWeb "http://dplyr.tidyverse.org/" >}} {{< pkgSheet "https://github.com/rstudio/cheatsheets/raw/master/data-transformation.pdf" >}} {{< pkgBook "http://r4ds.had.co.nz/transform.html" >}}
- `forcats` - factors &emsp; {{< pkgIndex "#e-h" >}} {{< pkgCran "forcats" >}} {{< pkgGitHub "tidyverse/forcats" >}} {{< pkgWeb "http://forcats.tidyverse.org/" >}} {{< pkgBook "http://r4ds.had.co.nz/factors.html" >}}
- `ggplot2` - data plotting &emsp; {{< pkgIndex "#e-h" >}} {{< pkgCran "ggplot2" >}} {{< pkgGitHub "tidyverse/ggplot2" >}} {{< pkgWeb "http://ggplot2.tidyverse.org/" >}} {{< pkgSheet "https://github.com/rstudio/cheatsheets/raw/master/data-visualization-2.1.pdf" >}} {{< pkgBook "http://r4ds.had.co.nz/data-visualisation.html" >}}
- `magrittr` - pipe operator &emsp; {{< pkgIndex "#m-p" >}} {{< pkgCran "magrittr" >}} {{< pkgGitHub "tidyverse/magrittr" >}} {{< pkgWeb "http://magrittr.tidyverse.org/" >}} {{< pkgBook "http://r4ds.had.co.nz/pipes.html" >}}
- `tidyr` - data wrangling &emsp; {{< pkgIndex "#q-t" >}} {{< pkgCran "tidyr" >}} {{< pkgGitHub "tidyverse/tidyr" >}} {{< pkgWeb "http://tidyr.tidyverse.org/" >}} {{< pkgSheet "https://github.com/rstudio/cheatsheets/raw/master/data-transformation.pdf" >}} {{< pkgBook "http://r4ds.had.co.nz/relational-data.html" >}}

### Additional Tidyverse Packages
These must be installed independently!

- `reprex` - reproducible examples &emsp; {{< pkgIndex "#q-t" >}} {{< pkgCran "reprex" >}} {{< pkgGitHub "tidyverse/reprex" >}} {{< pkgWeb "http://reprex.tidyverse.org/" >}}

## Statistical Packages
- `car` - variety of statistical functions &emsp; {{< pkgIndex "#a-d" >}} {{< pkgCran "car" >}}
- `effsize` - effect size calculations &emsp; {{< pkgIndex "#e-h" >}} {{< pkgCran "effsize" >}} {{< pkgGitHub "mtorchiano/effsize" >}}
- `Hmisc` - variety of statistical functions, including correlations &emsp; {{< pkgIndex "#e-h" >}} {{< pkgCran "Hmisc" >}} {{< pkgGitHub "harrelfe/Hmisc" >}}
- `lmtest` - assumption and fit tests for OLS models &emsp; {{< pkgIndex "#i-l" >}} {{< pkgCran "lmtest" >}}
- `moments` - normality testing &emsp; {{< pkgIndex "#m-p" >}} {{< pkgCran "moments" >}}
- `naniar` - missing data analysis &emsp; {{< pkgIndex "#m-p" >}} {{< pkgCran "naniar" >}} {{< pkgGitHub "njtierney/naniar" >}} {{< pkgWeb "http://naniar.njtierney.com" >}}
- `nortest` - normality testing &emsp; {{< pkgIndex "#m-p" >}} {{< pkgCran "nortest" >}}
- `psych` - Cronbach's alpha &emsp; {{< pkgIndex "#m-p" >}} {{< pkgCran "psych" >}}
- `pwr` - power analysis calculations &emsp; {{< pkgIndex "#m-p" >}} {{< pkgCran "pwr" >}} {{< pkgGitHub "heliosdrm/pwr" >}}
- `skimr` - descriptive statistics &emsp; {{< pkgIndex "#q-t" >}} {{< pkgCran "skimr" >}} {{< pkgGitHub "ropenscilabs/skimr" >}}

## Data Output Packages
- `ggridges` - ridge plots &emsp; {{< pkgIndex "#e-h" >}} {{< pkgCran "ggridges" >}} {{< pkgGitHub "clauswilke/ggridges" >}}
- `ggstatsplot` - statistical plots &emsp; {{< pkgIndex "#e-h" >}} {{< pkgCran "ggstatsplot" >}} {{< pkgGitHub "IndrajeetPatil/ggstatsplot" >}} {{< pkgWeb "https://indrajeetpatil.github.io/ggstatsplot/" >}}
- `ggthemes` - plot themes &emsp; {{< pkgIndex "#e-h" >}} {{< pkgCran "ggthemes" >}} {{< pkgGitHub "jrnold/ggthemes" >}}
- `heplots` - diagnostic plots &emsp; {{< pkgIndex "#e-h" >}} {{< pkgCran "heplots" >}} {{< pkgGitHub "friendly/heplots" >}} {{< pkgWeb "http://friendly.github.io/heplots/" >}}
- `janitor` - data wrangling and tables &emsp; {{< pkgIndex "#e-h" >}} {{< pkgCran "janitor" >}} {{< pkgGitHub "sfirke/janitor" >}}
- `knitr` - dynamic documents in `R` &emsp; {{< pkgIndex "#i-l" >}} {{< pkgCran "knitr" >}} {{< pkgGitHub "yihui/knitr" >}} {{< pkgWeb "https://yihui.name/knitr/" >}} {{< pkgSheet "https://github.com/rstudio/cheatsheets/raw/master/rmarkdown-2.0.pdf" >}}
- `RMarkdown` - markdown syntax for `R` &emsp; {{< pkgIndex "#q-t" >}} {{< pkgCran "RMarkdown" >}} {{< pkgGitHub "rstudio/rmarkdown" >}} {{< pkgWeb "http://rmarkdown.rstudio.com/" >}} {{< pkgSheet "https://github.com/rstudio/cheatsheets/raw/master/rmarkdown-2.0.pdf" >}}

## Other Utility Packages
- `cowsay` - fun ASCII characters {{< pkgIndex "#a-d" >}} {{< pkgCran "cowsay" >}}
- `here` - working directory management &emsp; {{< pkgIndex "#e-h" >}} {{< pkgCran "here" >}} {{< pkgGitHub "krlmlr/here" >}}
- `remotes` - install packages from GitHub &emsp; {{< pkgIndex "#q-t" >}} {{< pkgCran "remotes" >}}
