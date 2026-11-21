---
output: 
  pdf_document:
    keep_tex: true
    fig_caption: yes
    latex_engine: pdflatex 
    citation_package: biblatex
geometry: margin=1in
bibliography: ["/home/reynoldsmf/1-2021-22-Projects-2/my-library/my-library.bib"]
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



```{r, echo = F, messages = F}
options(knitr.kable.NA = '')

library(googlesheets4)

reading_schedule <- "https://docs.google.com/spreadsheets/d/1_Lhl00n5N-8b49lv72k8Z8uzgwF0X8R_F0MLHY7dYv4/edit#gid=1874083410"

new_cal <- reading_schedule %>%
	range_read(range = "Sheet2!D1:F57")

kable(new_cal, format = "latex", longtable = T, booktabs = T, caption = "Reading Schedule") %>%
	kable_styling("striped", "repeat_header", font_size = 8, "scale_down", stripe_color = "gray!6", full_width = T, position = "center") %>%	
	column_spec(1:3, width = "35mm") %>%
	landscape()
```





