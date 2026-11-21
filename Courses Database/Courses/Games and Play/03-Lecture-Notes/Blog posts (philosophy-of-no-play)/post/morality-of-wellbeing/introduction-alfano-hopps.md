---
title: "Introduction to Alfano & Hopps"
date: 2024-06-10T10:31:19-05:00
draft: true
cascade:
  type: docs
sidebar:
  open: true
bibFile: bib.json
weight: 2
---

The moral foundations dictionary developed by Mark Alfano is a natural language process that is intended to detect foundational terms in moral cooperation. According to the ethical theory *morality as cooperation*, humans over time have faced a number of problems necessitating the need for cooperation. In response to these needs, we have developed various methods for cooperation that act as solutions to these problems. As the theory continues, across all societies, we can identity traits that evolved in humans in light of these needs. The forms these evolved characteristics take are cooperative behaviors that resemble: character traits, strategies, dispositions, behaviors, rules, norms, institutions, and technologies.

@curr16 has argued there are seven:

1. family values

> Kin selection explains why we love and care for our families, why parents feel a duty of care to their offspring, why we feel a special obligation to help our extended families, and why we abhor incest (Hamilton, 1964; Lieberman, Tooby, & Cosmides, 2003).

2. group loyalty

> Mutualism explains why we coordinate our activities to pursue projects of mutual interest, why we form groups, clubs, and coalitions (there is strength and safety in numbers), why we value these groups, their members, and our membership in them, why we adopt local norms and conventions, why we feel a special obligation to come to the aid of group members, and why we value loyalty, unity and solidarity (Lewis, 1969; Royce, 1908).

3. reciprocity

> Social exchange explains why we seek opportunities for mutually-beneficial trade, and why we feel we ought to trust others, return favours (positive reciprocity), keep promises, pay debts, fulfil contracts, be grateful for favours received, feel guilty for favours not returned, avenge injuries (negative reciprocity), punish cheats, apologise for causing injuries, and forgive those who apologise (Cosmides & Tooby, 2005;Trivers, 1971).

4. heroism
5. defense

> Conflict resolution explains why we minimise the mutual costs of disputes by engaging in ritual contests: why we proudly display cues of power and high status (‘excellences’, including bravery and generosity); and, when bested, why we express humility, and respect, defer, and submit to our superiors (Curry, 2007; Sznycer et al., 2017).

6. fairness

> Conflict resolution also explains why we resolve disputes over divisible resources by dividing or sharing them (often resulting in equal shares), and hence why we feel an obligation to negotiate, seek a compromise, and be fair (Messick, 1993; Skyrms, 1996).

7. property rights

> Conflict resolution also explains why we resolve disputes by recognising prior possession, hence why we feel we ought to respect others’ property and territory, and refrain from theft (Gintis, 2007).

The morality as cooperation view predicts that there will be the same number of types of morality as there are of cooperation   (Curry et al, 2019b). They test this hypothesis using a content analysis of 600 ethnographic accounts of 60 societies chosen at random from the electronic Human Relations Area Files (*eHRAF*). Alfano predicts that they can use natural language processing, more specifically the Linguistic Inquiry and Word Count method developed by @penn2015 [Also see @penn2011] to test this hypothesis rather than the hand code holographic method (Otterbein 1978; Ember and Ember 2009) used by Curry *et al*. LIWC combs through a text and counts the number of words belonging to a given category. For instance, LIWC has been used to count the number of first person pronouns, psychological processes such as positive and negative emotions, and discreet emotions. LIWC relies on a given dictionary provided by the user which instructs what kinds of words to be counted.

Moral corpora is typically used by LIWC users to count moral terms using the *Moral Foundations Dictionary* [MFD], for instance Hoover et all use MFD to comb tweets for 5 domains and Padfield and Buchanan (2020) use MFD to characterize the moral lean of US news organizations. However, MFD is limited in a number of ways, not having foundations for family values, reciprocity, heroism, or property rights. In addition, there are interrater reliability issues. Given these issues, Alfano *et al* created the *Morality as Cooperation Dictionary* (MAC-D).

First they brainstormed words aligning with the seven basic moral principles hypothesized by Curry *et al*. These include loving your family, being loyal to your group, returning favours, exercising courage and generosity, showing deference to superiors, being fair in the distribution of resources, and respecting property. They next used the software program WordNet, which is a large English language lexical database. When given a word or phase, Wordnet generates synsets that can be used to search related terms according to a given category: synonyms, hyponyms, antonyms, hypernyms, etc. The resulting object, is a dictionary of terms belonging to each of the foundations.

```{r, echo=FALSE, message=FALSE, warning=FALSE}
library(lingmatch)

read.dic("./macdvirtue.dic", type = "asis") %>% head()

#head(macdvirtue)
```
### eHRAF

eHRAF is an archive of thousands of full text ethnographies (Lagace 1979). Alfano *et al* also relied on these ethnographic accounts to test the terms in MAC-D. To do so, they extracted 331 paragraphs from eHRAF that were labeled as *ethics* resulting in 1,620,644 words from 9,653, paragraphs, from 1,389 documents, covering 256 societies, 8 cultural regions, following 9 subsistence strategies. They then used the MAC dictionary to calculate the percentage of words from each paragraph that was found in one or more of the seven foundation dictionaries.

## Building a Dataset

I have several datasets comprised of Taylor Swift song lyrics. One of these is organized by year. A good question that is available to us using this dataset, is whether there are computationally significant differences between Swift's earlier songs and more recent ones. One kind of difference we can discern could be whether her moral commitments changed according to the MAC-D. For instance, does she make more references to family values in her earlier stuff than she does her later.

```{r eval=TRUE, message=FALSE, echo=FALSE, warning=FALSE}
library(tidyverse)
library(stringr)
library(quanteda)
library(quanteda.dictionaries)
library(tm)
library(readtext)

#macd_virtue <- dictionary("/home/redapemusic35/data_storage/macdvirtue.dic")

macdvir <- quanteda:::dictionary(file="./macdvirtue.dic", format="LIWC")

macdvic <- quanteda:::dictionary(file="./macdvice.dic", format="LIWC")

swift_l <- read.csv2("./swift_ordered.csv", sep = ";")


swift_lyrics <- swift_l$lyrics
swift_names <- swift_l$year

swift_lyrics <- str_remove_all(swift_lyrics, "Embed")
swift_lyrics <- str_remove_all(swift_lyrics, "Lyrics")
swift_lyrics <- removeNumbers(swift_lyrics)

swift_lyrics

corp_inaug <- corpus(swift_lyrics, text_field = "lyrics")

docid <- paste(swift_l$year,
               sep = ";")
docnames(corp_inaug) <- docid

swift_virtue_foundations <- liwcalike(corp_inaug, dictionary = macdvir, tolower = TRUE,
 verbose = TRUE)

swift_vice_foundations <- liwcalike(corp_inaug, dictionary = macdvic, tolower = TRUE,
 verbose = TRUE)

#macd <- liwcalike(swift_l, dictionary = "/home/redapemusic35/data_storage/macdvirtue.dic")
#swift_l$year
swift_virtue_foundations

swift_vice_foundations
```

## Explanation

We began by extracting [song lyrics] labeled according to the year they were recorded by TSwift using [JatanJay's CorpusGenius](https://github.com/redapemusic35/CorpusGenius). This resulted in 17 years worth of song lyrics recorded by TSwift from 2002 to 2022. There were some questionable lyrics object, notably the first songs in the 2004, 2005, 2006, 2007, rows are the same. It is not likely that Swift recorded separate versions for the same song four years in a row.

We then used @alfa18's MAC-D to calculate the percentage of words in each paragraph that was present in each of the seven moral foundations. (A score of ‘10%’ for ‘heroism’, for example, means that 10% of the words in a given paragraph are in the heroism dictionary.).

Looking at the family moral foundations, at 14%, 2010 contains the highest consentration of words from that foundation.

`r swift_virtue_foundations$family`
