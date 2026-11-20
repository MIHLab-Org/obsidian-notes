---
output: 
  pdf_document:
    keep_tex: true
    fig_caption: yes
    latex_engine: pdflatex 
    citation_package: biblatex
geometry: margin=1in
bibliography: ["/home/redapemusic35/1-2021-22-Projects/references.bib"]
biblio-style: musuos 
fontfamily: mathpazo
fontsize: 11pt
header-includes:
    - \usepackage{booktabs}
    - \usepackage{longtable}
    - \usepackage{array}
    - \usepackage{multirow}
    - \usepackage{wrapfig}
    - \usepackage{float}
    - \usepackage{colortbl}
    - \usepackage{pdflscape}
    - \usepackage{tabu}
    - \usepackage{threeparttable}
    - \usepackage{threeparttablex}
    - \usepackage[normalem]{ulem}
    - \usepackage{makecell}
    - \usepackage{xcolor}
---

```{r setup, include=FALSE, cache=F, message=F, warning=F, results="hide"}
knitr::opts_chunk$set(cache=TRUE)
knitr::opts_chunk$set(fig.path='figs/')
knitr::opts_chunk$set(cache.path='_cache/')
knitr::opts_chunk$set(warning=F, message=F)
# knitr::opts_knit$get(kable.force.latex = TRUE)
```



```{r echo=FALSE, messages=FALSE}
options(knitr.kable.NA = '')
options(knitr.table.format = "latex")
library(tidyverse)
library(readr)
library(knitr)
library(huxtable)


library(googlesheets4)

reading_schedule <- "https://docs.google.com/spreadsheets/d/1_Lhl00n5N-8b49lv72k8Z8uzgwF0X8R_F0MLHY7dYv4/edit#gid=0"

new_cal <- reading_schedule %>%
	range_read(range = "Sheet1")

new_cal_hux <- as_hux(new_cal)

formed_new_cal <- hux(new_cal_hux) %>%
	set_font_size(8) %>%
	set_italic(1, everywhere) %>%
	set_bold(row = 1, col = everywhere) %>%
	set_background_color(evens, everywhere, "grey80") %>%
	set_align(1, everywhere, "center") %>%
	set_all_padding(10) %>%
	set_background_color(odds, everywhere, "grey90") %>%
	set_all_borders(brdr(0.4, "solid", "white")) %>%
	set_background_color(evens, everywhere, "grey80") %>%
	set_background_color(odds, everywhere, "grey90") %>%
	set_width(1.2)

split_formed <- split_across(formed_new_cal, c(8, 16))
split_formed[[1]] %>% set_caption("Reading Table")
split_formed[[2]] %>% set_caption("Reading Table")
split_formed[[3]] %>% set_caption("Reading Table")

```


