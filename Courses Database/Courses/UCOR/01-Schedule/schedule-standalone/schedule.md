---
output: 
  pdf_document:
    keep_tex: true
    fig_caption: yes
    latex_engine: xelatex 
    template: /home/reynoldsmf/1-2021-22-Projects-2/templates/svm-latex-syllabus.tex
    citation_package: default 
geometry: margin=1in
bibliography: ["/home/reynoldsmf/1-2021-22-Projects-2/my-library/my-library.bib"]
biblio-style: musuos 
title: "Phil 1700-02: The Examined Life: Ultimate Questions (Philosophy)"
author: Montaque Reynolds 
date: "Spring 2023"
email: "montaque.reynolds@slu.edu"
web: "m-reynol.com"
officehours: "Tuesday 2pm---3pm"
office: "Adorjan Hall Rm. 235"
classroom: "Virtual"
classhours: Asychronous
fontfamily: mathpazo
fontsize: 11pt
table: true
graphics: yes
---

```{r setup, include=FALSE, cache=F, message=F, warning=F, results="hide"}
knitr::opts_chunk$set(cache=TRUE)
knitr::opts_chunk$set(fig.path='figs/')
knitr::opts_chunk$set(cache.path='_cache/')
knitr::opts_chunk$set(warning=F, message=F)
# knitr::opts_knit$get(kable.force.latex = TRUE)

```

```{r dates_bib, include=FALSE}
knitr::opts_chunk$set(cache=FALSE, dev='pdf')
mon <- as.Date("2021-01-17")
# fri <- as.Date("2016-01-08")

advdate <- function(obj, adv) {
 tmon <- obj + 7*(adv-1)
 tfri <- obj + 4 + 7*(adv-1)
 tmon <- format(tmon, format="%m/%d")
 tfri <- format(tfri, format="%m/%d")
 zadv <- sprintf("%02d", adv)
 tmp <- paste("Week ",zadv,sep='',", ", tmon," - ",tfri)
 return(tmp)
}

library(extrafont)
```

```{r dates, include=FALSE}
knitr::opts_chunk$set(cache=FALSE, dev='pdf')

advdate <- function(obj, adv) {
 tmon <- obj + 7*(adv-1)
 tfri <- obj + 4 + 7*(adv-1)
 tmon <- format(tmon, format="%m/%d")
 tfri <- format(tfri, format="%m/%d")
 zadv <- sprintf("%02d", adv)
 tmp <- paste("Week ",zadv,sep='',", ", tmon," - ",tfri)
 return(tmp)
}

options(scipen=999)
library(tidyverse)
library(stevemisc)
library(ggpmisc)
library(anonymizer)
library(ggcal)
library(stringr)
library(kfigr)
library(broom)
library(lubridate)
library(ggplot2)
library(googlesheets4)

#googledrive::drive_auth(email = "redapemusic35@gmail.com")
gs4_deauth()
#gargle::oauth_app_from_json("~/client_secret_978965312205-cmufahb6r2sul4mopks4e7ka3n0iqtrv.apps.googleusercontent.com.json")
library(kableExtra)
options(kableExtra.latex.load_packages = TRUE)
# the following section is for collaboration work. see "https://github.com/ClaudioZandonella/trackdown"
# first time, uncomment "upload_file" and comment out the others; "render", "download", "update" etc.
# the script will look for a pdf file that has not been created yet
# once it runs through once, you can then uncomment the "hide_code" and "path_output" and "pagedown" portions
# therefore leave "gpath" and "gfile" uncommented, but "hide_code", "path_output", and "pagedown" commented out the first time through.
# make sure the final parenthesis remains uncommented
#
#gargle::gargle_oauth_sitrep()

trackdown::upload_file("./schedule.Rmd",
#		gpath = "/home/reynoldsmf/1-2021-22-Projects-2/COURSES/UQ1700/syllabus.Rmd")
#trackdown::render_file("./paper.Rmd",
#trackdown::download_file("./paper.Rmd", 
#trackdown::update_file("./schedule.Rmd",
		gpath = "Projects/COURSES/UQ1700/",
		gfile = "schedule-3-9-23",
		hide_code = TRUE,
#		path_output = "./syllabus-1.pdf"
)
#
#pagedown::chrome_print("./syllabus-1.pdf")
#pagedown::chrome_print("presentation.pptx")
#
# Create a calendar for your syllabus ----
# Source: http://svmiller.com/blog/2020/08/a-ggplot-calendar-for-your-semester/

# 1) what is the first Monday of the semester?
# Any number of ways to identify dates in R, but we'll use {lubridate} and the ymd() function here.
# Format: YYYYMMDD. In this example, 4 January 2021.

mon <- ymd(20230313)
wed <- ymd(20230315)
fri <- ymd(20230317)

# What are some dates you won't be here? In this example, I had a conference on 7 January 2021.
# Spring Break was 15 March 2021 to 19 March 2021.
not_here_dates <- c(
  # spring break 03-13, 03-17,
#  ymd(20220117),
  # Spring Break
  seq(
	  ymd(20230313),ymd(20230317), by=1
	  ),
  # Easter break 
  seq(
	  ymd(20230406), ymd(20230410), by=1
  )
  # Easter Break
#  ymd(20220418)
)

# Last day of classes
lastday <- ymd(20230507)

# Spring study day (Tues)
# springstudy <- ymd(20220510)

# Spring study day (Tues)
#lastwithdraw <- ymd(20230510)

# spring final exams
# springexams <- c(seq(ymd(20230510),ymd(20230516), by=1)) 

# You can adjust this as you see fit. Basically: add assignment types (e.g. papers, quizzes).
# My intro class was fairly simple: just papers, presentations, and final reflection paper.
## Spring 2023, reflections on reading (alternate endings, etc 8), what is the moral? Do you agree or 
# disagree? What is a possible alternate ending, for the sake of argument, assume that you disagree?

exam_dates <- c(
				  ymd(20230320), 
				  ymd(20230327), 
				  ymd(20230403), 
				  ymd(20230410), 
				  ymd(20230417), 
				  ymd(20230424), 
				  ymd(20230501), 
				  ymd(20220415), 
				  ymd(20220520)	
)

# What are the full dates of the semester? Here, I'll exclude exam week as I like to do.
# In this case: 6 January to 23 April
semester_dates <- seq(ymd(20230313), ymd(20230507), by=1)

# Custom function for treating the first day of the month as the first week 
# of the month up until the first Sunday (unless Sunday was the start of the month)
wom <- function(date) {
    first <- wday(as.Date(paste(year(date),month(date),1,sep="-")))
    return((mday(date)+(first-2)) %/% 7+1)
  }

# Create a data frame of dates, assign to Cal
tibble(date = seq(ymd(20220116), ymd(20220517), by=1))  %>%
  mutate(mon = lubridate::month(date, label=T, abbr=F), # get month label
         wkdy = weekdays(date, abbreviate=T), # get weekday label
         wkdy = fct_relevel(wkdy, "Sun", "Mon", "Tue", "Wed", "Thu","Fri","Sat"), # make sure Sunday comes first
         semester = ifelse(date %in% semester_dates, 1, 0), # is date part of the semester?
         exams = ifelse(date %in% exam_dates, 1, 0), # is it an exam?
         not_here = ifelse(date %in% not_here_dates, 1, 0), # is it a day off?
         day = lubridate::mday(date), # get day of month to add later as a label
         # Below: our custom wom() function
         week = wom(date)) -> Cal

# Create a category variable, for filling.
# I can probably make this a case_when(), but this will work.

Cal %>%
  mutate(category = NA,
         category = ifelse(semester == 1, "Semester", category),
         category = ifelse(semester == 1 & wkdy %in% c("Mon", "Wed", "Fri"), "Class Day", category),
         category = ifelse(exams == 1, "Exams", category),
         category = ifelse(is.na(category) | (semester == 1 & not_here == 1), "NA", category)) -> Cal 

Cal %>% 
  ggplot(.,aes(wkdy, week)) +
  # custom theme stuff below
  # theme_steve_web() + 
  theme_bw() +
  theme(panel.grid.major.x = element_blank()) +
  # geom_tile and facet_wrap will do all the heavy lifting
  geom_tile(alpha=0.8, aes(fill=category), color="black", size=.45) +
  facet_wrap(~mon, scales="free", ncol=3) +
  # fill in tiles to make it look more "calendary" (sic)
  geom_text(aes(label=day),family="Open Sans") +
  # put your y-axis down, flip it, and reverse it
  scale_y_reverse(breaks=NULL) +
  # manually fill scale colors to something you like...
  scale_fill_manual(values=c("Class Day"="steelblue", 
                             "Semester"="lightsteelblue",
                             "NA" = "darkgrey", # I like these whited out...
                             "Exams"="indianred4"),
                    #... but also suppress a label for a non-class semester day
                    breaks=c("Class Day","Exams")) +
  labs(fill = "", x="", y="",
       caption = "Notable dates: Holidays (April 6-10), Spring Break (March 13-17), Classes End (May 7)")  -> class_cal

```

# Class Schedule

```{r, echo = F, messages = F}
options(knitr.kable.NA = '')

#library(googlesheets4)

reading_schedule <- "https://docs.google.com/spreadsheets/d/1_Lhl00n5N-8b49lv72k8Z8uzgwF0X8R_F0MLHY7dYv4/edit#gid=1874083410"

new_cal <- reading_schedule %>%
	range_read(range = "Sheet2!C1:F60")

kable(new_cal, format = "latex", longtable = TRUE, booktabs = T, caption = "Reading Schedule") %>%
	kable_styling("striped", "repeat_header", font_size = 8, "scale_down", stripe_color = "gray!6", full_width = T, position = "center") %>%	
	column_spec(1:4, width = "35mm")
```


