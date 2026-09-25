---
notion-id: 3e28935b-cf8a-813f-ab63-fa3a9546455d
base: "[[New Projects Page.base]]"
Extra: ""
Date: ""
Project Status: To Find
Theoretical/Conceptual Framework: ""
Title: ""
Problem or Purpose: ""
zotero library: []
Authors: ""
Series Title: ""
Philosophy Resources Spec Sheet: []
Abstract: ""
Full Citation: ""
Relevance: ""
Editors: ""
Place: ""
Tags: []
Related References: []
Citation Key: ""
My Comments: ""
File Path: ""
In-Text Citation: ""
Methods: ""
Sample: ""
Proceedings Title: ""
Recommendations: ""
Publication: ""
Key Findings: ""
Short Title: ""
Collections: []
Discipline: []
---
`{r include=FALSE} # automatically create a bib database for R packages knitr::write_bib(c(   .packages(), 'bookdown', 'knitr', 'rmarkdown' ), 'packages.bib')`

# Methodology

## Building the Data Frame

`{r setup, include=TRUE} options(width = 999) knitr::opts_chunk$set(echo = TRUE, warning = FALSE, message = FALSE) #library(devtools) #install_github("holtzy/epuRate") library(epuRate) library(rmarkdown)`

## Packages

```{r message=FALSE}
## load required libraries
library(dplyr)
library(factoextra)
library(ggdendro)
library(ggraph)
library(ggrepel)
library(gridExtra)
library(lexicon)
library(lattice)
library(pacman)
p_load(“seededlda”,
“quanteda”,
“LDAvis”
)
library(quanteda)
library(quanteda.sentiment)
library(quanteda.textplots)
library(quanteda.textmodels)
library(quanteda.textstats)
library(readr)
library(readtext)
library(reshape2)
library(sentimentr)
library(seededlda)
library(spacyr)
#spacy_install()
spacy_initialize(model = “en_core_web_sm”)
library(stringi)
library(tidyverse)
library(tm)

## clean workspace

rm(list=ls())

```plain text

## Import data

For the time being, I will be using a dataframe consisting non-representative samples. These consist of songs from the Christian hip-hop artist Alex Jean, the Commercial rap artist Juice WRLD, and various country artists.

### If you work with your own corpus

I did this by combining a three tables of song data. My country song data had more columns than the other datasets. Because I wanted to combine them, I needed change some of the column headings.

```{r}
# skip some columns in country
col_types <- cols(
  song_title = col_character(),
  lyrics = col_character(),
  track_id = col_skip(),
  artist_name = col_character(),
  status = col_skip(),
  artist_genre = col_skip(),
  dominant_genre = col_skip(),
)
```

I now port in the datasets.

```{r eval=TRUE}
# input our data
juice_wrld <- read_delim(“/home/redapemusic35/data_storage/juice_wrld/juice_wrld.csv”, delim = ‘;’)
alex_jean <- read_delim(“/home/redapemusic35/data_storage/alex_jean/alex_jean_lyrics.csv”, delim = ‘;’)
country <- read_delim(“./data/country_songs_2.csv”, delim = ‘,’, col_types = col_types)

```plain text

View the data

```{r}
head(country)
head(alex_jean)
head(juice_wrld)
```

I am adding an “artist_name” column and “genre” column to the other datasets.

```{r}
# then add genre and other columns
juice_wrld$artist_name <- “Juice WRLD”

juice_wrld$genre <- "commercial_rap"
#juice_wrld$track_id <- “NA”
#juice_wrld$status <- "clean"
#juice_wrld$artist_genre <- “NA”

head(juice_wrld)

```plain text

```{r}

alex_jean$artist_name <- "Alex Jean"
alex_jean$genre <- "christian_rap"
#alex_jean$track_id <- "NA"
#alex_jean$status <- "clean"
#alex_jean$artist_genre <- "NA"

country$genre <- "country"
country$artist_name <- country$artist_name
#songsdf_2 <- names(country)
#songsdf_2

#songsdf_2 <- names(country)
#songsdf_2

print(colnames(country))

country <- country %>%
    select(song_title, lyrics, artist_name, genre)

colnames(country)

country <- country %>%
    rename(title = song_title)
```

```{r}

# view the data

summary(juice_wrld) %>% head # shows that has 100 rows
summary(alex_jean) %>% head # shows that has 15
summary(country) %>% head
View(juice_wrld) %>% head
View(country) %>% head
View(alex_jean) %>% head

```plain text

```{r}
# combine our three data frames
songs <- rbind(juice_wrld, alex_jean, country)
head(songs)
```

`{r} songs_df <- data.frame(songs, text_field = "lyrics") # combined 115 rows songs_df %>% head() songs_df %>% tail()`

```{r}
songs_df %>% head
name_variable <- songs_df$title

```plain text

```{r}
# summary view of the data
summary(songs_df)
# turn into corpus

if (!require("tm")) install.packages("tm")
library(tm)

# Assuming your data frame is named 'data_df' and the text column is 'text_column'
# Replace 'text_column' with the actual name of your text column

# Create a vector source
#sfe_vector <- VectorSource(filtered_data)

# Assuming your data frame is named 'data_df'
# Replace 'text_column' with the name of your text field
# Replace 'id_column' with the name of your document ID field

# Create a vector source from the text field
#songs_vector <- VectorSource(songs_df)

#songs_vcorp <- VCorpus(songs_vector)
```

Loading the data above will import a pre-built corpus object into R, which is called `sfe`.

## Inspect data

`{r} # Create a corpus sfe <- corpus(songs_df, text_field = "lyrics") docnames(sfe) <- name_variable # Now 'text_corpus' is a corpus created from your data frame ## then ## how does the corpus object look like? sfe ## summary statistics summary(sfe) %>% head ## available variables docvars(sfe)`

Familiarize yourself a little more with the data.

## Prep

```{r eval=TRUE}
## tokenization
toks <- tokens(sfe, what = ‘word’,
remove_punct = T, remove_symbols = T, padding = F,
remove_numbers = T, remove_url = T)
#?tokens
## to lower
toks <- tokens_tolower(toks)
## lemmatizing
toks <- tokens_replace(toks,
pattern = lexicon::hash_lemmas$token,
                       replacement = lexicon::hash_lemmas$lemma)
## remove stopwords
toks <- tokens_select(toks, pattern = stopwords(“en”), selection = “remove”)
## remove noise
toks <- tokens_select(toks, pattern = ‘[0-9]+|^.$’, valuetype = ‘regex’, selection = ‘remove’)
toks <- tokens_select(toks, pattern = ‘oh|um’, valuetype = ‘regex’, selection = ‘remove’)
toks <- tokens_select(toks, pattern = ‘Embed’, valuetype = ‘regex’, selection = ‘remove’)
toks <- tokens_select(toks, pattern = ‘Contributors’, valuetype = ‘regex’, selection = ‘remove’)

```plain text

# Prepare Lyrics for Processing

```{r}

# Your text data - assuming it's a character vector where each element is a document.

lyrics <- juice_wrld$lyrics

# Use spacy_parse to tokenize and identify sentences
parsed_text <- spacy_parse(lyrics, dependency = TRUE, sentence_id = TRUE)

# Simple post-processing to handle contractions
parsed_text <- parsed_text %>%
  mutate(token = ifelse(token == "n't", "not", token),
         token = ifelse(token == "ai", "am", token),
     token = ifelse(token == "ca", "can", token),
     token = ifelse(token == "'ve", "have", token),
     token = ifelse(token == "can't", "cannot", token),
     token = ifelse(token == "ain't", "am not", token))


# Aggregate tokens back into sentences, adding punctuation
reconstructed_text <- aggregate(token ~ sentence_id + doc_id,
                                data = parsed_text,
                                FUN = function(x) paste(x, collapse = " "))
reconstructed_text$token <- paste0(reconstructed_text$token, ".")

# Final formatting (e.g., capitalizing each sentence)
reconstructed_text$token <- sapply(reconstructed_text$token, tools::toTitleCase)

reconstructed_text$token %>% head

#### Preprocessing and Tokenization

# Performing a social network analysis based on the number of times words co-occur in sentences within a text corpus is an intriguing way to explore linguistic patterns. In this case, the "social network" is built from words as nodes and their co-occurrences as edges. Here's a step-by-step guide to achieve this in R:
## Step 1: Prepare Your Text Data

# First, you need a text corpus. This might be a collection of documents, speeches, lyrics, etc. Ensure your data is in a format suitable for analysis (typically a dataframe or a vector of text).

#### Step 2: Tokenize Text into Sentences and Words

# Use text processing tools to break down your text into individual sentences and then into words.

library(tidytext)
library(dplyr)

# Assuming 'text_data' is your corpus, a vector where each element is a document.
alex_df <- data.frame(text = alex_jean$lyrics, id = seq_along(alex_jean$title))

# Tokenize into sentences and then words
word_df <- alex_df %>%
  unnest_tokens(sentence, text, token = "sentences") %>%
  unnest_tokens(word, sentence) %>%
  filter(word != "embed") %>%
  filter(word != "Embed") %>%
  filter(word != "yes") %>%
  filter(word != "woah") %>%
  filter(word != "uh") %>%
  filter(word != "woah") %>%
  filter(word != "uh-huh") %>%
  filter(word != "ayy") %>%
  filter(word != "huh") %>%
  filter(word != "ep") %>%
  anti_join(stop_words)
word_df

# Assuming 'text_data' is your corpus, a vector where each element is a document.
juice_df <- data.frame(text = reconstructed_text$token, id = seq_along(reconstructed_text$token))

# Tokenize into sentences and then words
wrld_df <- juice_df %>%
  unnest_tokens(sentence, text, token = "sentences") %>%
  unnest_tokens(word, sentence) %>%
  filter(word != "embed") %>%
  filter(word != "Embed") %>%
  anti_join(stop_words)
wrld_df

#### Step 3: Create a Co-occurrence Matrix

#Determine word co-occurrences within each sentence. The widyr package is useful for this.

library(widyr)

co_occurrence_jean <- word_df %>%
  pairwise_count(word, id, sort = TRUE)

co_occurrence_wrld <- wrld_df %>%
  pairwise_count(word, id, sort = TRUE)
co_occurrence_wrld
co_occurrence_jean


#### Step 4: Create a Network Graph

## Transform the co-occurrence data into a graph using the igraph package.

library(igraph)

# Convert to a graph
graph_jean <- graph_from_data_frame(co_occurrence_jean)
graph_wrld <- graph_from_data_frame(co_occurrence_wrld)

# Function to censor words
censor_word <- function(word) {
  paste0(substr(word, 1, 1), strrep("*", nchar(word) - 1))
}

# List of offensive words
offensive_words <- c("bitch", "niggas", "nigga", "shit", "fuck", "bitches", "dick", "fuckin")

# Censor node labels for offensive words
V(graph_wrld)$label <- sapply(V(graph_wrld)$name, function(word) {
  if (word %in% offensive_words) censor_word(word) else word
})
```

# Scope and Purpose

## Goal

Some critical race theorists have objected to characterizations of African American men as weak and African American women as too strong. However, as noted in emerging work on country music, identity is socially constructed through the narrative of country music. Therefore, correspondingly, we might think that there is a missed opportunity in the existing literature on race to remark on the importance of personhood from within social identities, and these through narrative, for instance in the identities of African American women as strong and men as weak. Such responses to these arguments fail to recognize the dynamic forces of personhood grounded in human agency. While it is no longer the case that conceptions of social identity preclude attributions of personhood, it remains to be seen to what extent modern conceptions of personhood situated within constructions of social identity necessarily entail human agency more broadly, or whether they do so dynamically, ascribing more attributions of personhood to some individuals rather than others, is another matter. For instance where person A’s agency, rather than B’s is cited as an explanation of B’s circumstances.

> Helping to deflect attention away from the major structural changes of the new racism, African American men and women are encouraged to blame one another for economic, political, and social problems within African American communities. Patricia Hill Collins. Black Sexual Politics : African Americans, Gender, and the New Racism. Routledge, 2004.

Such distinctions are not as important for non-personal conceptions of identity, for instance if we only view identity as a kind of psychological continuity over time [See @parf87; and @alts21], but rather can act as a kind of constraint on human action including those central to moral responsibility. In other words, narrative and agency are important for one’s own sense of identity, known as autobiographical narratives, and in turn can imply constraints on human agency. There are three kinds of narratives that contribute to a narrative account of personhood. Those that are autobiographical, those that are biographical, and those that are literary which can act as source or motivation for the autobiographical and biographical. It has been argued that those which are biographical and autobiographical are important for social identities and social identity for moral responsibility. However, the nature of biographical narratives in regards to their relationship to autobiographical ones is unclear, namely, how can biographical narratives undermine or contribute to human agency. In lived experience, what are biographical narratives and how do they contribute to one’s autobiographical narratives [@mcle15b]? Here I consider some plausible approaches to the view that biographical narratives are situated in literary narratives. Following, some have previously attempted to explain human agency as a central aspect of personal identity by narratives, both autobiographical and biographical [@mcle15b; @book22a; @brun90; @alts21; @vell05a]. This project continues that work. I ask what contributions do these make in the construction of social identities.

Roman Altshuler develops a conception of narrative agency rooted in one’s emotional experiences upon a retelling of their life story. More specifically, a narrative can motivate feelings of regret towards actions that one did or did not do. However, the nature of biographical narratives in regard to their relationship to autobiographical ones is unclear, namely, how can biographical narrative undermine human agency. How do we recognize biographical narratives in the wild and how do they contribute to one’s autobiographical narratives [@mcle15b] in a way that supports or undermines human agency? This is part of a larger project where I consider a plausible form of biographical narratives situated in literary narratives. I ask what contributions do these make in the construction of social identities and in turn, how do these social identities constrain the behaviors of those under such identities. Here, using an R package named *sentimentr*, I measure the emotional valences in several genres of music, notably non-religious hip-hip, religious hip-hop (christian) and country music.

## Targeted Audience

### Country Music

### Christian Hip-Hip

### Commercial Hip-Hop

## create dfm

```{r}

dfm_sfe <- dfm(toks) %>%
dfm_trim(min_termfreq = 0.5, termfreq_type = “quantile”,
max_docfreq = 0.6, docfreq_type = “prop”)
#?dfm_trim

```plain text

```{r}
dfm_sfe

tail(dfm_sfe)

View(dfm_sfe)
```

Check whether there is still some noise in the data and remove it. Hint: Scan through the topfeatures.

`{r eval=TRUE} topfeatures(dfm_sfe, n=30) ## remove additional words #toks <- tokens_select(toks, pattern = 'many|much', valuetype = 'regex', selection = 'remove') ## create dfm dfm_sfe <- dfm(toks) %>%             dfm_trim(min_termfreq = 0.1, termfreq_type = "quantile",                     max_docfreq = 0.9, docfreq_type = "prop")`

## Scaling: correspondence analysis

`{r eval=TRUE} ## compute model sfe_ca <- textmodel_ca(dfm_sfe, nd = 2, sparse = FALSE, residual_floor = .1){r echo=FALSE} save(sfe_ca, file = '/home/redapemusic35/dh4morpsy/data/ca.RDS') load('/home/redapemusic35/dh4morpsy/data/ca.RDS'){r fig.height=5, fig.width=10, fig.align='center'} ## coerce model coefficients to dataframe str(sfe_ca) sfe_ca <- data.frame(dim1 = coef(sfe_ca, doc_dim = 1)$coef_document,                       dim2 = coef(sfe_ca, doc_dim = 2)$coef_document) str(sfe_ca) sfe_ca$name <- gsub('\\.csv.*', '', rownames(sfe_ca)) head(sfe_ca) ## plot full data with branch annotation ggplot(sfe_ca, aes(x=dim1, y=dim2, label=name)) +   geom_point(aes(color=dim1-dim2), alpha = 0.6) +   # plot 0.2 of all labels, using a repel function   geom_text_repel(data = dplyr::sample_frac(sfe_ca, 0.6), max.overlaps = 10, seed = 17495) +   theme_bw() +   theme(plot.title = element_text(face='bold')) +   labs(title = 'Correspondence Analysis: Full Data') ## plot parts of the data ggplot(sfe_ca, aes(x=dim1, y=dim2, label=name)) +   geom_point(aes(color=dim1-dim2), alpha = 0.2) +   # plot 0.2 of all labels, using a repel function   geom_text_repel(data = dplyr::sample_frac(sfe_ca, 0.2), max.overlaps = 9, seed = 6734) +   scale_y_continuous(limits=c(-2,0)) +   scale_x_continuous(limits=c(-1,1)) +   theme_bw() +   theme(plot.title = element_text(face='bold')) +   labs(title = 'Correspondence Analysis: Zoom')`

`{r echo=TRUE} save(dfm_sfe, file = '/home/redapemusic35/dh4morpsy/data/dfm_initial.RDS') load('/home/redapemusic35/dh4morpsy/data/dfm_initial.RDS')`

```{r}
dfm_sfe

tail(dfm_sfe)

```plain text

#### > Exercise {.tabset .tabset-fade}
##### Task
Check whether there is still some noise in the data and remove it. Hint: Scan through the topfeatures.

##### Solution
```{r eval=TRUE}
topfeatures(dfm_sfe, n=20)
## remove additional words
#toks <- tokens_select(toks, pattern = 'many|much', valuetype = 'regex', selection = 'remove')
## create dfm
dfm_sfe <- dfm(toks) %>%
           dfm_trim(min_termfreq = 0.1, termfreq_type = "quantile",
                    max_docfreq = 0.9, docfreq_type = "prop")
```

# Building a Dataset

Retrieve popular music charts by year. Then build a csv file with lyrics.

## Year-end Billboard Charts

1. Hot 100
2. Billboard 200
3. Streaming Songs
4. Radio Songs
5. Digital Song Sales
6. Pop
7. Country
8. Rock and Alternative
9. R&B/Hip-Hop
10. Rap
11. Christian
12. Gospel
- Why these?
- I think that they contain the most semantic content regarding what western music listeners have to say.

For instance, what values do westerners hold? The hope here is that we can distinguish between values held by western Christians (i.e., Christian and Gospel), generally westerners who listen to country music. Pop and rock may be sets to contrast against. For instance, people listen to rock and pop not so much for the semantic content as those who listen to Gospel and Christian.

## Downloading a chart

### Using [guoguo12/billboard charts:](https://github.com/guoguo12/billboard-charts?tab=readme-ov-file)

```plain text
Use the ChartData constructor to download a chart:

ChartData(name, date=None, year=None, fetch=True, timeout=25)

The arguments are:

    name – The chart name, e.g. 'hot-100' or 'pop-songs'.
    date – The chart date as a string, in YYYY-MM-DD format. By default, the latest chart is fetched.
    year – The chart year, if requesting a year-end chart. Must be a string in YYYY format. Cannot supply both date and year.
    fetch – A boolean indicating whether to fetch the chart data from Billboard.com immediately (at instantiation time). If False, the chart data can be populated at a later time using the fetchEntries() method.
    max_retries – The max number of times to retry when requesting data (default: 5).
    timeout – The number of seconds to wait for a server response. If None, no timeout is applied.

For example, to download the Alternative Songs year-end chart for 2006:
```

```plain text

>>> chart = billboard.ChartData('alternative-songs', year=2006)
```

```plain text

Accessing chart entries

If chart is a ChartData instance, we can ask for its entries attribute to get the chart entries (see below) as a list.

For convenience, chart[x] is equivalent to chart.entries[x], and ChartData instances are iterable.
Chart entry attributes

A chart entry (typically a single track) is of type ChartEntry. A ChartEntry instance has the following attributes:

    title – The title of the track.
    artist – The name of the artist, as formatted on Billboard.com.
    image – The URL of the image for the track.
    peakPos – The track's peak position on the chart as of the chart date, as an int (or None if the chart does not include this information).
    lastPos – The track's position on the previous week's chart, as an int (or None if the chart does not include this information). This value is 0 if the track was not on the previous week's chart.
    weeks – The number of weeks the track has been or was on the chart, including future dates (up until the present time).
    rank – The track's current position on the chart.
    isNew – Whether the track is new to the chart.

More resources

For additional documentation, look at the file billboard.py, or use Python's interactive help feature.

Think you found a bug? Create an issue here.
```

## Lyrics 2 Methods

[Genius.com api via johnwmillr/LyricsGenius](https://github.com/johnwmillr/LyricsGenius)

### Setup

`lyricsgenius` provides a simple interface to the song, artist, and lyrics data stored on [Genius.com](https://www.genius.com/).

The full documentation for `lyricsgenius` is available online at [Read the Docs](https://lyricsgenius.readthedocs.io/en/master/).

Before using this package you’ll need to sign up for a (free) account that authorizes access to [the Genius API](http://genius.com/api-clients). The Genius account provides a access_token that is required by the package. See [the Usage section](https://github.com/johnwmillr/LyricsGenius#usage) below for examples.

Installation

`lyricsgenius` requires Python 3.

Use pip to install the package from PyPI:

```plain text
pip install lyricsgenius
```

Or, install the latest version of the package from GitHub:

```plain text
pip install git+https://github.com/johnwmillr/LyricsGenius.git
```

Usage

Import the package and initiate Genius:

```plain text
import lyricsgenius
genius = lyricsgenius.Genius(token)
```

If you don’t pass a token to the Genius class, `lyricsgenus` will look for an environment variable called `GENIUS_ACCESS_TOKEN` and attempt to use that for authentication.

```plain text
genius = Genius()
```

Search for songs by a given artist:

```plain text
artist = genius.search_artist("Andy Shauf", max_songs=3, sort="title")
print(artist.songs)
```

By default, the `search_artist()` only returns songs where the given artist is the primary artist. However, there may be instances where it is desirable to get all of the songs that the artist appears on. You can do this by setting the `include_features` argument to True.

```plain text
artist = genius.search_artist("Andy Shauf", max_songs=3, sort="title", include_features=True)
print(artist.songs)
```

Search for a single song by the same artist:

```plain text
song = artist.song("To You")
# or:
# song = genius.search_song("To You", artist.name)
print(song.lyrics)
```

Add the song to the artist object:

```plain text
artist.add_song(song)
# the Artist object also accepts song names:
# artist.add_song("To You")
```

Save the artist’s songs to a `JSON` file:

```plain text
artist.save_lyrics()
```

Searching for an album and saving it:

```plain text
album = genius.search_album("The Party", "Andy Shauf")
album.save_lyrics()
```

There are various options configurable as parameters within the Genius class:

```plain text
genius.verbose = False # Turn off status messages
genius.remove_section_headers = True # Remove section headers (e.g. [Chorus]) from lyrics when searching
genius.skip_non_songs = False # Include hits thought to be non-songs (e.g. track lists)
genius.excluded_terms = ["(Remix)", "(Live)"] # Exclude songs with these words in their title
```

You can also call the package from the command line:

```plain text
export GENIUS_ACCESS_TOKEN="my_access_token_here"
python3 -m lyricsgenius --help
```

Search for and save lyrics to a given song and album:

```plain text
python3 -m lyricsgenius song "Begin Again" "Andy Shauf" --save
python3 -m lyricsgenius album "The Party" "Andy Shauf" --save
```

Search for five songs by ‘The Beatles’ and save the lyrics:

```plain text
python3 -m lyricsgenius artist "The Beatles" --max-songs 5 --save
```

Example projects

[Trucks and Beer: A textual analysis of popular country music](http://www.johnwmillr.com/trucks-and-beer/)[Neural machine translation: Explaining the Meaning Behind Lyrics](https://github.com/tsandefer/dsi_capstone_3)[What makes some blink-182 songs more popular than others?](http://jdaytn.com/posts/download-blink-182-data/)[Sentiment analysis on hip-hop lyrics](https://github.com/Hugo-Nattagh/2017-Hip-Hop)[Does Country Music Drink More Than Other Genres?](https://towardsdatascience.com/does-country-music-drink-more-than-other-genres-a21db901940b)[49 Years of Lyrics: Why So Angry?](https://towardsdatascience.com/49-years-of-lyrics-why-so-angry-1adf0a3fa2b4)

Contributing

Please contribute! If you want to fix a bug, suggest improvements, or add new features to the project, just open an issue or send me a pull request.

```plain text
import requests
from bs4 import BeautifulSoup as Parse

def make_soup(url):
    """
    Parse a web page info html
     """
    user_agent = {
        'User-Agent': "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"
    }
    r = requests.get(url, headers=user_agent)
    html = Parse(r.content, "html.parser")
    return html

def format_url(string):
    """
    Replace les spaces with '%20'
    """
    return string.replace(" ", "%20")

def get_song_url(html):
    song_url = html.find("a", {"class": "title"})["href"]
    return song_url

def find_Lyrics(titre, artiste):
        url = f"https://www.musixmatch.com/fr/search/{artiste}%20{titre}/tracks"

        url = format_url(url)
        pageweb = make_soup(url)

        # Recupere le lien de la chanson
        song_url = pageweb.find("a", {"class": "title"})["href"]
        song_url = "https://www.musixmatch.com" + song_url

        # Recupere les paroles
        pageweb = make_soup(song_url)
        paroles = list()
        for span in pageweb.find_all("span", {"class" : "lyrics__content__ok"}):
            print(span.text)

find_Lyrics("title","artist")
```

# Visualize the network with ggraph. You can adjust node sizes based on word frequencies or degrees.

```{r}

# Filter nodes by degree to reduce graph size

# Remove edges with weight below a certain threshold

graph_jean <- delete.vertices(graph_jean, which(degree(graph_jean) < 300))
graph_wrld <- delete.vertices(graph_wrld, which(degree(graph_wrld) < 300))

# Calculate word frequencies or degrees for sizing

V(graph_jean)$degree <- degree(graph_jean)
# Calculate word frequencies or degrees for sizing
V(graph_wrld)$degree <- degree(graph_wrld)

```plain text

```{r, echo=F, message=F}
# Plot
ggraph(graph_jean, layout = "fr") +
  geom_edge_link(aes(width = n), color = "blue", alpha = 0.1) +
  geom_node_point(aes(size = degree), color = "pink", alpha = 1) +
  scale_size_continuous(range = c(-20, 20)) +
  geom_node_text(aes(label = name), color = "black", alpha = 10, repel = TRUE, size = 3) +
  theme_void()
```

```{r, echo=F, message=F}

ggraph(graph_wrld, layout = “fr”) +
geom_edge_link(aes(width = n), color = “blue”, alpha = 0.1) +
geom_node_point(aes(size = degree), color = “pink”, alpha = 1) +
scale_size_continuous(range = c(-20, 20)) +
geom_node_text(aes(label = label), color = “black”, alpha = 10, repel = TRUE, size = 3) +
theme_void()

```plain text

```{r, message=F, echo=F}

ggraph(graph_jean, layout = "kk") +
  geom_edge_link(aes(width = n), color = "blue", alpha = 0.1) +
  geom_node_point(aes(size = degree), color = "pink", alpha = 1) +
  scale_size_continuous(range = c(-20, 20)) +
  geom_node_text(aes(label = name), color = "black", alpha = 10, repel = TRUE, size = 3) +
  theme_void()
```

```{r, echo=F, message=F}

ggraph(graph_wrld, layout = “kk”) +
geom_edge_link(aes(width = n), color = “blue”, alpha = 0.1) +
geom_node_point(aes(size = degree), color = “pink”, alpha = 1) +
scale_size_continuous(range = c(-20, 20)) +
geom_node_text(aes(label = label), color = “black”, alpha = 10, repel = TRUE, size = 3) +
theme_void()

```plain text

```{r}
#load('/home/mreynolds/PAPERS/moral-priviledge-topic-analysis/input/steps/comment_dfm_initial.RDS')

# Install and load the quanteda package

# Assuming your dataset is already a quanteda corpus object named 'dataset_corpus'
# If not, you'll need to create one from your data

# Read the dictionary file
terms <- readLines("/home/redapemusic35/data_storage/liwcdic/macdvirtue-terms.dic")

# Load spacyr
# Initialize spacyr - this will prompt you to install spaCy and the language model in Python
spacy_initialize(model = "en_core_web_sm")
# Your text data - assuming it's a character vector where each element is a document.
alex_lyrics <- alex_jean$lyrics
# Use spacy_parse to tokenize and identify sentences
parsed_text <- spacy_parse(alex_lyrics, dependency = TRUE, sentence_id = TRUE)
# Aggregate tokens back into sentences, adding punctuation
reconstructed_text <- aggregate(token ~ sentence_id + doc_id,
                                data = parsed_text,
                                FUN = function(x) paste(x, collapse = " "))
reconstructed_text$token <- paste0(reconstructed_text$token, ".")
reconstructed_text %>% head
alex_corpus2 <- corpus(reconstructed_text$token)

alex_sent <- tokens(alex_corpus2, what = "sentence")
alex_sent %>% head
dataset_corpus <- alex_sent %>%
  tokens_tolower() %>%
  tokens_remove(stopwords("en"))

dataset_corpus %>% head
# Find sentences containing the specified terms using kwic
results <- kwic(dataset_corpus, pattern = phrase(terms))

# Convert the results to a data frame for easier handling
sub_dataset <- as.data.frame(results)

# View or further process the sub-dataset
#print(sub_dataset)

#wrld_lyrics <- juice_wrld$lyrics
#wrld_corpus2 <- corpus(wrld_lyrics)

#wrld_sent <- tokens(wrld_corpus2, what = "sentence")

#wrld_corpus <- wrld_sent %>%
#  tokens_tolower() %>%
#  tokens_remove(stopwords("en"))

# Find sentences containing the specified terms using kwic
#wrld_results <- kwic(wrld_sent, pattern = phrase(terms))

# Convert the results to a data frame for easier handling
#wrld_sub_dataset <- as.data.frame(wrld_results)

# View or further process the sub-dataset
#print(wrld_sub_dataset)
```

# Visualize the network with ggraph. You can adjust node sizes based on word frequencies or degrees.

```{r}

# Filter nodes by degree to reduce graph size

# Remove edges with weight below a certain threshold

graph_jean <- delete.vertices(graph_jean, which(degree(graph_jean) < 300))
graph_wrld <- delete.vertices(graph_wrld, which(degree(graph_wrld) < 300))

# Calculate word frequencies or degrees for sizing

V(graph_jean)$degree <- degree(graph_jean)
# Calculate word frequencies or degrees for sizing
V(graph_wrld)$degree <- degree(graph_wrld)

```plain text

```{r, echo=F, message=F}
# Plot
ggraph(graph_jean, layout = "fr") +
  geom_edge_link(aes(width = n), color = "blue", alpha = 0.1) +
  geom_node_point(aes(size = degree), color = "pink", alpha = 1) +
  scale_size_continuous(range = c(-20, 20)) +
  geom_node_text(aes(label = name), color = "black", alpha = 10, repel = TRUE, size = 3) +
  theme_void()
```

```{r, echo=F, message=F}

ggraph(graph_wrld, layout = “fr”) +
geom_edge_link(aes(width = n), color = “blue”, alpha = 0.1) +
geom_node_point(aes(size = degree), color = “pink”, alpha = 1) +
scale_size_continuous(range = c(-20, 20)) +
geom_node_text(aes(label = label), color = “black”, alpha = 10, repel = TRUE, size = 3) +
theme_void()

```plain text

```{r, message=F, echo=F}

ggraph(graph_jean, layout = "kk") +
  geom_edge_link(aes(width = n), color = "blue", alpha = 0.1) +
  geom_node_point(aes(size = degree), color = "pink", alpha = 1) +
  scale_size_continuous(range = c(-20, 20)) +
  geom_node_text(aes(label = name), color = "black", alpha = 10, repel = TRUE, size = 3) +
  theme_void()
```

```{r, echo=F, message=F}

ggraph(graph_wrld, layout = “kk”) +
geom_edge_link(aes(width = n), color = “blue”, alpha = 0.1) +
geom_node_point(aes(size = degree), color = “pink”, alpha = 1) +
scale_size_continuous(range = c(-20, 20)) +
geom_node_text(aes(label = label), color = “black”, alpha = 10, repel = TRUE, size = 3) +
theme_void()

```plain text

```{r}
#load('/home/mreynolds/PAPERS/moral-priviledge-topic-analysis/input/steps/comment_dfm_initial.RDS')

# Install and load the quanteda package

# Assuming your dataset is already a quanteda corpus object named 'dataset_corpus'
# If not, you'll need to create one from your data

# Read the dictionary file
terms <- readLines("/home/redapemusic35/data_storage/liwcdic/macdvirtue-terms.dic")

# Load spacyr
# Your text data - assuming it's a character vector where each element is a document.
alex_lyrics <- alex_jean$lyrics
# Use spacy_parse to tokenize and identify sentences
parsed_text <- spacy_parse(alex_lyrics, dependency = TRUE, sentence_id = TRUE)
# Aggregate tokens back into sentences, adding punctuation
reconstructed_text <- aggregate(token ~ sentence_id + doc_id,
                                data = parsed_text,
                                FUN = function(x) paste(x, collapse = " "))
reconstructed_text$token <- paste0(reconstructed_text$token, ".")
reconstructed_text %>% head
alex_corpus2 <- corpus(reconstructed_text$token)

alex_sent <- tokens(alex_corpus2, what = "sentence")
alex_sent %>% head
dataset_corpus <- alex_sent %>%
  tokens_tolower() %>%
  tokens_remove(stopwords("en"))

dataset_corpus %>% head
# Find sentences containing the specified terms using kwic
results <- kwic(dataset_corpus, pattern = phrase(terms))

# Convert the results to a data frame for easier handling
sub_dataset <- as.data.frame(results)

# View or further process the sub-dataset
#print(sub_dataset)

#wrld_lyrics <- juice_wrld$lyrics
#wrld_corpus2 <- corpus(wrld_lyrics)

#wrld_sent <- tokens(wrld_corpus2, what = "sentence")

#wrld_corpus <- wrld_sent %>%
#  tokens_tolower() %>%
#  tokens_remove(stopwords("en"))

# Find sentences containing the specified terms using kwic
#wrld_results <- kwic(wrld_sent, pattern = phrase(terms))

# Convert the results to a data frame for easier handling
#wrld_sub_dataset <- as.data.frame(wrld_results)

# View or further process the sub-dataset
#print(wrld_sub_dataset)
```

# If you work with your own corpus

## Scaling: correspondence analysis

`{r eval=TRUE} docnames(dfm_sfe) <- name_variable ## compute model sfe_ca <- quanteda.textmodels::textmodel_ca(dfm_sfe, sparse = TRUE, residual_floor = 0.8) sfe_ca`

`{r echo=TRUE} save(sfe_ca, file = '/home/redapemusic35/dh4morpsy/data/topic-ca.RDS') load('/home/redapemusic35/dh4morpsy/data/topic-ca.RDS')`

```{r fig.height=5, fig.width=10, fig.align=‘center’}
## coerce model coefficients to dataframe

str(sfe_ca)
sfe_ca <- data.frame(dim1 = coef(sfe_ca, doc_dim = 1)$coef_document,
                     dim2 = coef(sfe_ca, doc_dim = 2)$coef_document)
str(sfe_ca)
sfe_ca$name <- gsub(’\.csv.*‘,’‘, rownames(sfe_ca))
head(sfe_ca)
## plot full data with branch annotation
ggplot(sfe_ca, aes(x=dim1, y=dim2, label=name)) +
geom_point(aes(color=dim1-dim2), alpha = 0.6) +
# plot 0.2 of all labels, using a repel function
geom_text_repel(data = dplyr::sample_frac(sfe_ca, 0.6), max.overlaps = 10, seed = 17495) +
theme_bw() +
theme(plot.title = element_text(face=’bold’)) +
labs(title = ‘Correspondence Analysis: Full Data’)
## plot parts of the data
ggplot(sfe_ca, aes(x=dim1, y=dim2, label=name)) +
geom_point(aes(color=dim1-dim2), alpha = 0.2) +
# plot 0.2 of all labels, using a repel function
geom_text_repel(data = dplyr::sample_frac(sfe_ca, 0.2), max.overlaps = 9, seed = 6734) +
scale_y_continuous(limits=c(-2,0)) +
scale_x_continuous(limits=c(-1,1)) +
theme_bw() +
theme(plot.title = element_text(face=‘bold’)) +
labs(title = ‘Correspondence Analysis: Zoom’)

```plain text

## Unsupervised LDA

```{r eval = FALSE}

dic <- dictionary(file = "/home/redapemusic35/data_storage/liwcdic/macdvirtue.dic")

## run naive unsupervised topic model with 10 topics
sfe_lda <- textmodel_lda(dfm_sfe, k = 30)
sfe_lda

sfe_seeded <- textmodel_seededlda(
  dfm_sfe,
  dic,
  valuetype = c("glob", "regex", "fixed"),
  case_insensitive = TRUE,
  residual = FALSE,
  weight = 0.01,
  max_iter = 2000,
  alpha = 200,
  beta = 1000,
  verbose = quanteda_options("verbose")
)

json <- createJSON(phi = sfe_seeded$phi,
                    theta = sfe_seeded$theta,
                    doc.length = rowSums(dfm_sfe),
                    vocab = colnames(dfm_sfe),
                    term.frequency = colSums(dfm_sfe)
)

serVis(json)
```

```{r}

non_seeded <- createJSON(phi = sfe_lda$phi,
                    theta = sfe_lda$theta,
doc.length = rowSums(dfm_sfe),
vocab = colnames(dfm_sfe),
term.frequency = colSums(dfm_sfe)
)

serVis(non_seeded)

```plain text

```{r}


ggplot(dfm_sfe, aes(x=dim1, y=dim2, color=genre)) +
  geom_point(alpha = 19, shape = '.') +
  geom_density_2d(alpha = 19) +
  theme_bw() +
  theme(plot.title = element_text(face='bold')) +
  labs(title = 'Correspondence Analysis with Topic Annotation (k=10)')


#?textmodel_lda
```

```{r fig.height=5, fig.width=10}
## print top 20 terms per topic
terms(sfe_lda, 10)
## plot the topics over the correspondence analysis data
sfe_ca$genre <- topics(sfe_lda)

ggplot(sfe_ca, aes(x=dim1, y=dim2, color=genre)) +
geom_point(alpha = 19, shape = ‘.’) +
geom_density_2d(alpha = 19) +
theme_bw() +
theme(plot.title = element_text(face=‘bold’)) +
labs(title = ‘Correspondence Analysis with Topic Annotation (k=10)’)

```plain text

```{r echo = FALSE}
save(sfe_lda, '/home/redapemusic35/dh4morpsy/data/lda_k10.RDS')
load('/home/redapemusic35/dh4morpsy/data/lda_k10.RDS')
```

Change the names of the topics (to some meaningful description) before plotting.

## PoS-tagging - leaving the sandbox

`{r} ## set seed set.seed(48621) ## draw a random sample of 20 documents sfe_sub <- sfe[sample(1:length(sfe), 3)] sfe_sub ## PoS-tagging sfe_pos <- spacy_parse(sfe_sub, pos = T, tag = T, lemma = T, entity = T, dependency = T) sfe_pos`

## Augment your sandbox

`{r} ## aggregate tokens and pos-tags back to documents sfe_pos <- sfe_pos %>% rowwise %>% mutate(token_pos = paste0(token,'__', pos))  sfe_pos sfe_pos <- sfe_pos %>%    group_by(doc_id) %>%    summarise(text = paste0(token_pos, collapse = ' ')) sfe_pos ## import it to quanteda and add metadata sfe_pos <- corpus(sfe_pos) docvars(sfe_pos) <- docvars(sfe_sub) sfe_pos ## get all the nouns preceded by the adjective ' rational_noun <- stri_match_all(sfe_pos, regex = '(?<=love__ADJ\\s)[A-z]+__NOUN') names(rational_noun) <- docnames(sfe_pos) rational_noun rational_noun <- data.frame(match = do.call(rbind, rational_noun),        doc_id = rep(names(rational_noun), lengths(rational_noun))) rational_noun ## count them rational_noun %>%    na.omit %>%    group_by(doc_id, match) %>%    summarise(n = n()) %>%    arrange(doc_id, desc(n)) %>%    print(n=200)`

## Additional material

### Hierarchical clustering

```{r fig.height=5, fig.width=10, fig.align=‘center’}
## hierarchical clustering - get distances on normalized dfm
sfe_dist_mat <- dfm_weight(dfm_sfe, scheme = “prop”) %>%
textstat_dist(method = “euclidean”) %>%
as.dist()
## hiarchical clustering the distance object
sfe_cluster <- hclust(sfe_dist_mat, method = ‘ward.D’)
# label with document names
#sfe_cluster$name <- gsub(‘\.csv(\.[0-9])?’, ’’, docnames(dfm_sfe))
## determine best numbers of clusters
#fviz_nbclust(as.matrix(sfe_dist_mat), FUN = hcut, method = “wss”)
## cut tree into four groups
#clusters <- cutree(sfe_cluster, k = 4)
#names(clusters)
#names(sfe_ca)
#summary(clusters)
#summary(sfe_ca)

## add cluster-data to the correspondence analysis

#sfe_ca_hcl <- left_join(sfe_ca, data.frame(clusters), by = sfe_ca$name)
## plot
#ggplot(sfe_ca_hcl, aes(x=dim1, y=dim2, label=id)) +
# geom_point(aes(color=as.factor(cluster)), alpha = 0.2) +
# facet_grid(~as.factor(cluster))
## hierarchical clustering doesn’t provide discrete cluster along
## the dimensions of the correspondance analysis

```plain text



<!--chapter:end:05-Deployment.Rmd-->

# Blocks

## Equations

Here is an equation.

\begin{equation}
  f\left(k\right) = \binom{n}{k} p^k\left(1-p\right)^{n-k}
  (\#eq:binom)
\end{equation}

You may refer to using `\@ref(eq:binom)`, like see Equation \@ref(eq:binom).


## Theorems and proofs

Labeled theorems can be referenced in text using `\@ref(thm:tri)`, for example, check out this smart theorem \@ref(thm:tri).

::: {.theorem #tri}
For a right triangle, if $c$ denotes the *length* of the hypotenuse
and $a$ and $b$ denote the lengths of the **other** two sides, we have
$$a^2 + b^2 = c^2$$
:::

Read more here <https://bookdown.org/yihui/bookdown/markdown-extensions-by-bookdown.html>.

## Callout blocks


The R Markdown Cookbook provides more help on how to use custom blocks to design your own callouts: https://bookdown.org/yihui/rmarkdown-cookbook/custom-blocks.html

<!--chapter:end:06-Evaluation.Rmd-->

# Sharing your book

## Publishing

HTML books can be published online, see: https://bookdown.org/yihui/bookdown/publishing.html

## 404 pages

By default, users will be directed to a 404 page if they try to access a webpage that cannot be found. If you'd like to customize your 404 page instead of using the default, you may add either a `_404.Rmd` or `_404.md` file to your project root and use code and/or Markdown syntax.

## Metadata for sharing

Bookdown HTML books will provide HTML metadata for social sharing on platforms like Twitter, Facebook, and LinkedIn, using information you provide in the `index.Rmd` YAML. To setup, set the `url` for your book and the path to your `cover-image` file. Your book's `title` and `description` are also used.



This `gitbook` uses the same social sharing data across all chapters in your book- all links shared will look the same.

Specify your book's source repository on GitHub using the `edit` key under the configuration options in the `_output.yml` file, which allows users to suggest an edit by linking to a chapter's source file.

Read more about the features of this output format here:

https://pkgs.rstudio.com/bookdown/reference/gitbook.html

Or use:

```{r eval=FALSE}
?bookdown::gitbook
```

# If you work with your own corpus

## Scaling: correspondence analysis

`{r eval=TRUE} docnames(dfm_sfe) <- name_variable ## compute model sfe_ca <- quanteda.textmodels::textmodel_ca(dfm_sfe, sparse = TRUE, residual_floor = 0.8) sfe_ca`

`{r echo=TRUE} save(sfe_ca, file = '/home/redapemusic35/dh4morpsy/data/topic-ca.RDS') load('/home/redapemusic35/dh4morpsy/data/topic-ca.RDS')`

```{r fig.height=5, fig.width=10, fig.align=‘center’}
## coerce model coefficients to dataframe

str(sfe_ca)
sfe_ca <- data.frame(dim1 = coef(sfe_ca, doc_dim = 1)$coef_document,
                     dim2 = coef(sfe_ca, doc_dim = 2)$coef_document)
str(sfe_ca)
sfe_ca$name <- gsub(’\.csv.*‘,’‘, rownames(sfe_ca))
head(sfe_ca)
## plot full data with branch annotation
ggplot(sfe_ca, aes(x=dim1, y=dim2, label=name)) +
geom_point(aes(color=dim1-dim2), alpha = 0.6) +
# plot 0.2 of all labels, using a repel function
geom_text_repel(data = dplyr::sample_frac(sfe_ca, 0.6), max.overlaps = 10, seed = 17495) +
theme_bw() +
theme(plot.title = element_text(face=’bold’)) +
labs(title = ‘Correspondence Analysis: Full Data’)
## plot parts of the data
ggplot(sfe_ca, aes(x=dim1, y=dim2, label=name)) +
geom_point(aes(color=dim1-dim2), alpha = 0.2) +
# plot 0.2 of all labels, using a repel function
geom_text_repel(data = dplyr::sample_frac(sfe_ca, 0.2), max.overlaps = 9, seed = 6734) +
scale_y_continuous(limits=c(-2,0)) +
scale_x_continuous(limits=c(-1,1)) +
theme_bw() +
theme(plot.title = element_text(face=‘bold’)) +
labs(title = ‘Correspondence Analysis: Zoom’)

```plain text

## Unsupervised LDA

```{r eval = FALSE}

dic <- dictionary(file = "/home/redapemusic35/data_storage/liwcdic/macdvirtue.dic")
dic
```

```{r}
## run naive unsupervised topic model with 10 topics
sfe_lda <- textmodel_lda(dfm_sfe, k = 30)
sfe_lda

sfe_seeded <- textmodel_seededlda(
dfm_sfe,
dic,
valuetype = c(“glob”, “regex”, “fixed”),
case_insensitive = TRUE,
residual = FALSE,
weight = 0.01,
max_iter = 2000,
alpha = 200,
beta = 1000,
verbose = quanteda_options(“verbose”)
)

json <- createJSON(phi = sfe_seeded$phi,
                    theta = sfe_seeded$theta,
doc.length = rowSums(dfm_sfe),
vocab = colnames(dfm_sfe),
term.frequency = colSums(dfm_sfe)
)

serVis(json)

```plain text

```{r}

non_seeded <- createJSON(phi = sfe_lda$phi,
                    theta = sfe_lda$theta,
                    doc.length = rowSums(dfm_sfe),
                    vocab = colnames(dfm_sfe),
                    term.frequency = colSums(dfm_sfe)
)

serVis(non_seeded)
```

```{r}

ggplot(dfm_sfe, aes(x=dim1, y=dim2, color=genre)) +
geom_point(alpha = 19, shape = ‘.’) +
geom_density_2d(alpha = 19) +
theme_bw() +
theme(plot.title = element_text(face=‘bold’)) +
labs(title = ‘Correspondence Analysis with Topic Annotation (k=10)’)

#?textmodel_lda

```plain text

```{r fig.height=5, fig.width=10}
## print top 20 terms per topic
terms(sfe_lda, 10)
## plot the topics over the correspondence analysis data
sfe_ca$genre <- topics(sfe_lda)

ggplot(sfe_ca, aes(x=dim1, y=dim2, color=genre)) +
  geom_point(alpha = 19, shape = '.') +
  geom_density_2d(alpha = 19) +
  theme_bw() +
  theme(plot.title = element_text(face='bold')) +
  labs(title = 'Correspondence Analysis with Topic Annotation (k=10)')
```

`{r echo = FALSE} save(sfe_lda, '/home/redapemusic35/dh4morpsy/data/lda_k10.RDS') load('/home/redapemusic35/dh4morpsy/data/lda_k10.RDS')`

Change the names of the topics (to some meaningful description) before plotting.

## PoS-tagging - leaving the sandbox

`{r} ## set seed set.seed(48621) ## draw a random sample of 20 documents sfe_sub <- sfe[sample(1:length(sfe), 3)] sfe_sub ## PoS-tagging sfe_pos <- spacy_parse(sfe_sub, pos = T, tag = T, lemma = T, entity = T, dependency = T) sfe_pos`

## Augment your sandbox

`{r} ## aggregate tokens and pos-tags back to documents sfe_pos <- sfe_pos %>% rowwise %>% mutate(token_pos = paste0(token,'__', pos))  sfe_pos sfe_pos <- sfe_pos %>%    group_by(doc_id) %>%    summarise(text = paste0(token_pos, collapse = ' ')) sfe_pos ## import it to quanteda and add metadata sfe_pos <- corpus(sfe_pos) docvars(sfe_pos) <- docvars(sfe_sub) sfe_pos ## get all the nouns preceded by the adjective ' rational_noun <- stri_match_all(sfe_pos, regex = '(?<=love__ADJ\\s)[A-z]+__NOUN') names(rational_noun) <- docnames(sfe_pos) rational_noun rational_noun <- data.frame(match = do.call(rbind, rational_noun),        doc_id = rep(names(rational_noun), lengths(rational_noun))) rational_noun ## count them rational_noun %>%    na.omit %>%    group_by(doc_id, match) %>%    summarise(n = n()) %>%    arrange(doc_id, desc(n)) %>%    print(n=200)`

## Additional material

### Hierarchical clustering

```{r fig.height=5, fig.width=10, fig.align=‘center’}
## hierarchical clustering - get distances on normalized dfm
sfe_dist_mat <- dfm_weight(dfm_sfe, scheme = “prop”) %>%
textstat_dist(method = “euclidean”) %>%
as.dist()
## hiarchical clustering the distance object
sfe_cluster <- hclust(sfe_dist_mat, method = ‘ward.D’)
# label with document names
#sfe_cluster$name <- gsub(‘\.csv(\.[0-9])?’, ’’, docnames(dfm_sfe))
## determine best numbers of clusters
#fviz_nbclust(as.matrix(sfe_dist_mat), FUN = hcut, method = “wss”)
## cut tree into four groups
#clusters <- cutree(sfe_cluster, k = 4)
#names(clusters)
#names(sfe_ca)
#summary(clusters)
#summary(sfe_ca)

## add cluster-data to the correspondence analysis

#sfe_ca_hcl <- left_join(sfe_ca, data.frame(clusters), by = sfe_ca$name)
## plot
#ggplot(sfe_ca_hcl, aes(x=dim1, y=dim2, label=id)) +
# geom_point(aes(color=as.factor(cluster)), alpha = 0.2) +
# facet_grid(~as.factor(cluster))
## hierarchical clustering doesn’t provide discrete cluster along
## the dimensions of the correspondance analysis

```plain text



<!--chapter:end:05-Deployment.Rmd-->

# Blocks

## Equations

Here is an equation.

\begin{equation}
  f\left(k\right) = \binom{n}{k} p^k\left(1-p\right)^{n-k}
  (\#eq:binom)
\end{equation}

You may refer to using `\@ref(eq:binom)`, like see Equation \@ref(eq:binom).


## Theorems and proofs

Labeled theorems can be referenced in text using `\@ref(thm:tri)`, for example, check out this smart theorem \@ref(thm:tri).

::: {.theorem #tri}
For a right triangle, if $c$ denotes the *length* of the hypotenuse
and $a$ and $b$ denote the lengths of the **other** two sides, we have
$$a^2 + b^2 = c^2$$
:::

Read more here <https://bookdown.org/yihui/bookdown/markdown-extensions-by-bookdown.html>.

## Callout blocks


The R Markdown Cookbook provides more help on how to use custom blocks to design your own callouts: https://bookdown.org/yihui/rmarkdown-cookbook/custom-blocks.html

<!--chapter:end:06-Evaluation.Rmd-->

# Sharing your book

## Publishing

HTML books can be published online, see: https://bookdown.org/yihui/bookdown/publishing.html

## 404 pages

By default, users will be directed to a 404 page if they try to access a webpage that cannot be found. If you'd like to customize your 404 page instead of using the default, you may add either a `_404.Rmd` or `_404.md` file to your project root and use code and/or Markdown syntax.

## Metadata for sharing

Bookdown HTML books will provide HTML metadata for social sharing on platforms like Twitter, Facebook, and LinkedIn, using information you provide in the `index.Rmd` YAML. To setup, set the `url` for your book and the path to your `cover-image` file. Your book's `title` and `description` are also used.



This `gitbook` uses the same social sharing data across all chapters in your book- all links shared will look the same.

Specify your book's source repository on GitHub using the `edit` key under the configuration options in the `_output.yml` file, which allows users to suggest an edit by linking to a chapter's source file.

Read more about the features of this output format here:

https://pkgs.rstudio.com/bookdown/reference/gitbook.html

Or use:

```{r eval=FALSE}
?bookdown::gitbook
```

`{r include=FALSE} # automatically create a bib database for R packages knitr::write_bib(c(   .packages(), 'bookdown', 'knitr', 'rmarkdown' ), 'packages.bib')`

# Methodology

## Building the Data Frame

`{r setup1, include=TRUE} options(width = 999) knitr::opts_chunk$set(echo = TRUE, warning = FALSE, message = FALSE) #library(devtools) #install_github("holtzy/epuRate") library(epuRate) library(rmarkdown)`

## Packages

```{r message=FALSE}
## load required libraries
library(dplyr)
library(factoextra)
library(ggdendro)
library(ggraph)
library(ggrepel)
library(gridExtra)
library(lexicon)
library(lattice)
library(pacman)
p_load(“seededlda”,
“quanteda”,
“LDAvis”
)
library(quanteda)
library(quanteda.sentiment)
library(quanteda.textplots)
library(quanteda.textmodels)
library(quanteda.textstats)
library(readr)
library(readtext)
library(reshape2)
library(sentimentr)
library(seededlda)
library(spacyr)
#spacy_install()
spacy_initialize(model = “en_core_web_sm”)
library(stringi)
library(tidyverse)
library(tm)

## clean workspace

rm(list=ls())

```plain text

## Import data

For the time being, I will be using a dataframe consisting non-representative samples. These consist of songs from the Christian hip-hop artist Alex Jean, the Commercial rap artist Juice WRLD, and various country artists.

### If you work with your own corpus

I did this by combining a three tables of song data. My country song data had more columns than the other datasets. Because I wanted to combine them, I needed change some of the column headings.

```{r}
# skip some columns in country
col_types <- cols(
  song_title = col_character(),
  lyrics = col_character(),
  track_id = col_skip(),
  artist_name = col_character(),
  status = col_skip(),
  artist_genre = col_skip(),
  dominant_genre = col_skip(),
)
```

I now port in the datasets.

```{r eval=TRUE}
# input our data
juice_wrld <- read_delim(“/home/redapemusic35/data_storage/juice_wrld/juice_wrld.csv”, delim = ‘;’)
alex_jean <- read_delim(“/home/redapemusic35/data_storage/alex_jean/alex_jean_lyrics.csv”, delim = ‘;’)
country <- read_delim(“./data/country_songs_2.csv”, delim = ‘,’, col_types = col_types)

```plain text

View the data

```{r}
head(country)
head(alex_jean)
head(juice_wrld)
```

I am adding an “artist_name” column and “genre” column to the other datasets.

```{r}
# then add genre and other columns
juice_wrld$artist_name <- “Juice WRLD”

juice_wrld$genre <- "commercial_rap"
#juice_wrld$track_id <- “NA”
#juice_wrld$status <- "clean"
#juice_wrld$artist_genre <- “NA”

head(juice_wrld)

```plain text

```{r}

alex_jean$artist_name <- "Alex Jean"
alex_jean$genre <- "christian_rap"
#alex_jean$track_id <- "NA"
#alex_jean$status <- "clean"
#alex_jean$artist_genre <- "NA"

country$genre <- "country"
country$artist_name <- country$artist_name
#songsdf_2 <- names(country)
#songsdf_2

#songsdf_2 <- names(country)
#songsdf_2

print(colnames(country))

country <- country %>%
    select(song_title, lyrics, artist_name, genre)

colnames(country)

country <- country %>%
    rename(title = song_title)
```

```{r}

# view the data

summary(juice_wrld) %>% head # shows that has 100 rows
summary(alex_jean) %>% head # shows that has 15
summary(country) %>% head
View(juice_wrld) %>% head
View(country) %>% head
View(alex_jean) %>% head

```plain text

```{r}
# combine our three data frames
songs <- rbind(juice_wrld, alex_jean, country)
head(songs)
```

`{r} songs_df <- data.frame(songs, text_field = "lyrics") # combined 115 rows songs_df %>% head() songs_df %>% tail()`

```{r}
songs_df %>% head
name_variable <- songs_df$title

```plain text

```{r}
# summary view of the data
summary(songs_df)
# turn into corpus

if (!require("tm")) install.packages("tm")
library(tm)

# Assuming your data frame is named 'data_df' and the text column is 'text_column'
# Replace 'text_column' with the actual name of your text column

# Create a vector source
#sfe_vector <- VectorSource(filtered_data)

# Assuming your data frame is named 'data_df'
# Replace 'text_column' with the name of your text field
# Replace 'id_column' with the name of your document ID field

# Create a vector source from the text field
#songs_vector <- VectorSource(songs_df)

#songs_vcorp <- VCorpus(songs_vector)
```

Loading the data above will import a pre-built corpus object into R, which is called `sfe`.

## Inspect data

`{r} # Create a corpus sfe <- corpus(songs_df, text_field = "lyrics") docnames(sfe) <- name_variable # Now 'text_corpus' is a corpus created from your data frame ## then ## how does the corpus object look like? sfe ## summary statistics summary(sfe) %>% head ## available variables docvars(sfe)`

Familiarize yourself a little more with the data.

## Prep

```{r eval=TRUE}
## tokenization
toks <- tokens(sfe, what = ‘word’,
remove_punct = T, remove_symbols = T, padding = F,
remove_numbers = T, remove_url = T)
#?tokens
## to lower
toks <- tokens_tolower(toks)
## lemmatizing
toks <- tokens_replace(toks,
pattern = lexicon::hash_lemmas$token,
                       replacement = lexicon::hash_lemmas$lemma)
## remove stopwords
toks <- tokens_select(toks, pattern = stopwords(“en”), selection = “remove”)
## remove noise
toks <- tokens_select(toks, pattern = ‘[0-9]+|^.$’, valuetype = ‘regex’, selection = ‘remove’)
toks <- tokens_select(toks, pattern = ‘oh|um’, valuetype = ‘regex’, selection = ‘remove’)
toks <- tokens_select(toks, pattern = ‘Embed’, valuetype = ‘regex’, selection = ‘remove’)
toks <- tokens_select(toks, pattern = ‘Contributors’, valuetype = ‘regex’, selection = ‘remove’)

```plain text

# Prepare Lyrics for Processing

```{r}

# Your text data - assuming it's a character vector where each element is a document.

lyrics <- juice_wrld$lyrics

# Use spacy_parse to tokenize and identify sentences
parsed_text <- spacy_parse(lyrics, dependency = TRUE, sentence_id = TRUE)

# Simple post-processing to handle contractions
parsed_text <- parsed_text %>%
  mutate(token = ifelse(token == "n't", "not", token),
         token = ifelse(token == "ai", "am", token),
     token = ifelse(token == "ca", "can", token),
     token = ifelse(token == "'ve", "have", token),
     token = ifelse(token == "can't", "cannot", token),
     token = ifelse(token == "ain't", "am not", token))


# Aggregate tokens back into sentences, adding punctuation
reconstructed_text <- aggregate(token ~ sentence_id + doc_id,
                                data = parsed_text,
                                FUN = function(x) paste(x, collapse = " "))
reconstructed_text$token <- paste0(reconstructed_text$token, ".")

# Final formatting (e.g., capitalizing each sentence)
reconstructed_text$token <- sapply(reconstructed_text$token, tools::toTitleCase)

reconstructed_text$token %>% head

#### Preprocessing and Tokenization

# Performing a social network analysis based on the number of times words co-occur in sentences within a text corpus is an intriguing way to explore linguistic patterns. In this case, the "social network" is built from words as nodes and their co-occurrences as edges. Here's a step-by-step guide to achieve this in R:
## Step 1: Prepare Your Text Data

# First, you need a text corpus. This might be a collection of documents, speeches, lyrics, etc. Ensure your data is in a format suitable for analysis (typically a dataframe or a vector of text).

#### Step 2: Tokenize Text into Sentences and Words

# Use text processing tools to break down your text into individual sentences and then into words.

library(tidytext)
library(dplyr)

# Assuming 'text_data' is your corpus, a vector where each element is a document.
alex_df <- data.frame(text = alex_jean$lyrics, id = seq_along(alex_jean$title))

# Tokenize into sentences and then words
word_df <- alex_df %>%
  unnest_tokens(sentence, text, token = "sentences") %>%
  unnest_tokens(word, sentence) %>%
  filter(word != "embed") %>%
  filter(word != "Embed") %>%
  filter(word != "yes") %>%
  filter(word != "woah") %>%
  filter(word != "uh") %>%
  filter(word != "woah") %>%
  filter(word != "uh-huh") %>%
  filter(word != "ayy") %>%
  filter(word != "huh") %>%
  filter(word != "ep") %>%
  anti_join(stop_words)
word_df

# Assuming 'text_data' is your corpus, a vector where each element is a document.
juice_df <- data.frame(text = reconstructed_text$token, id = seq_along(reconstructed_text$token))

# Tokenize into sentences and then words
wrld_df <- juice_df %>%
  unnest_tokens(sentence, text, token = "sentences") %>%
  unnest_tokens(word, sentence) %>%
  filter(word != "embed") %>%
  filter(word != "Embed") %>%
  anti_join(stop_words)
wrld_df

#### Step 3: Create a Co-occurrence Matrix

#Determine word co-occurrences within each sentence. The widyr package is useful for this.

library(widyr)

co_occurrence_jean <- word_df %>%
  pairwise_count(word, id, sort = TRUE)

co_occurrence_wrld <- wrld_df %>%
  pairwise_count(word, id, sort = TRUE)
co_occurrence_wrld
co_occurrence_jean


#### Step 4: Create a Network Graph

## Transform the co-occurrence data into a graph using the igraph package.

library(igraph)

# Convert to a graph
graph_jean <- graph_from_data_frame(co_occurrence_jean)
graph_wrld <- graph_from_data_frame(co_occurrence_wrld)

# Function to censor words
censor_word <- function(word) {
  paste0(substr(word, 1, 1), strrep("*", nchar(word) - 1))
}

# List of offensive words
offensive_words <- c("bitch", "niggas", "nigga", "shit", "fuck", "bitches", "dick", "fuckin")

# Censor node labels for offensive words
V(graph_wrld)$label <- sapply(V(graph_wrld)$name, function(word) {
  if (word %in% offensive_words) censor_word(word) else word
})
```

# Scope and Purpose

## Goal

Some critical race theorists have objected to characterizations of African American men as weak and African American women as too strong. However, as noted in emerging work on country music, identity is socially constructed through the narrative of country music. Therefore, correspondingly, we might think that there is a missed opportunity in the existing literature on race to remark on the importance of personhood from within social identities, and these through narrative, for instance in the identities of African American women as strong and men as weak. Such responses to these arguments fail to recognize the dynamic forces of personhood grounded in human agency. While it is no longer the case that conceptions of social identity preclude attributions of personhood, it remains to be seen to what extent modern conceptions of personhood situated within constructions of social identity necessarily entail human agency more broadly, or whether they do so dynamically, ascribing more attributions of personhood to some individuals rather than others, is another matter. For instance where person A’s agency, rather than B’s is cited as an explanation of B’s circumstances.

> Helping to deflect attention away from the major structural changes of the new racism, African American men and women are encouraged to blame one another for economic, political, and social problems within African American communities. Patricia Hill Collins. Black Sexual Politics : African Americans, Gender, and the New Racism. Routledge, 2004.

Such distinctions are not as important for non-personal conceptions of identity, for instance if we only view identity as a kind of psychological continuity over time [See @parf87; and @alts21], but rather can act as a kind of constraint on human action including those central to moral responsibility. In other words, narrative and agency are important for one’s own sense of identity, known as autobiographical narratives, and in turn can imply constraints on human agency. There are three kinds of narratives that contribute to a narrative account of personhood. Those that are autobiographical, those that are biographical, and those that are literary which can act as source or motivation for the autobiographical and biographical. It has been argued that those which are biographical and autobiographical are important for social identities and social identity for moral responsibility. However, the nature of biographical narratives in regards to their relationship to autobiographical ones is unclear, namely, how can biographical narratives undermine or contribute to human agency. In lived experience, what are biographical narratives and how do they contribute to one’s autobiographical narratives [@mcle15b]? Here I consider some plausible approaches to the view that biographical narratives are situated in literary narratives. Following, some have previously attempted to explain human agency as a central aspect of personal identity by narratives, both autobiographical and biographical [@mcle15b; @book22a; @brun90; @alts21; @vell05a]. This project continues that work. I ask what contributions do these make in the construction of social identities.

Roman Altshuler develops a conception of narrative agency rooted in one’s emotional experiences upon a retelling of their life story. More specifically, a narrative can motivate feelings of regret towards actions that one did or did not do. However, the nature of biographical narratives in regard to their relationship to autobiographical ones is unclear, namely, how can biographical narrative undermine human agency. How do we recognize biographical narratives in the wild and how do they contribute to one’s autobiographical narratives [@mcle15b] in a way that supports or undermines human agency? This is part of a larger project where I consider a plausible form of biographical narratives situated in literary narratives. I ask what contributions do these make in the construction of social identities and in turn, how do these social identities constrain the behaviors of those under such identities. Here, using an R package named *sentimentr*, I measure the emotional valences in several genres of music, notably non-religious hip-hip, religious hip-hop (christian) and country music.

## Targeted Audience

### Country Music

### Christian Hip-Hip

### Commercial Hip-Hop

## create dfm

```{r}

dfm_sfe <- dfm(toks) %>%
dfm_trim(min_termfreq = 0.5, termfreq_type = “quantile”,
max_docfreq = 0.6, docfreq_type = “prop”)
#?dfm_trim

```plain text

```{r}
dfm_sfe

tail(dfm_sfe)

View(dfm_sfe)
```

Check whether there is still some noise in the data and remove it. Hint: Scan through the topfeatures.

`{r eval=TRUE} topfeatures(dfm_sfe, n=30) ## remove additional words #toks <- tokens_select(toks, pattern = 'many|much', valuetype = 'regex', selection = 'remove') ## create dfm dfm_sfe <- dfm(toks) %>%             dfm_trim(min_termfreq = 0.1, termfreq_type = "quantile",                     max_docfreq = 0.9, docfreq_type = "prop")`

## Scaling: correspondence analysis

`{r eval=TRUE} ## compute model sfe_ca <- textmodel_ca(dfm_sfe, nd = 2, sparse = FALSE, residual_floor = .1){r echo=FALSE} save(sfe_ca, file = '/home/redapemusic35/dh4morpsy/data/ca.RDS') load('/home/redapemusic35/dh4morpsy/data/ca.RDS'){r fig.height=5, fig.width=10, fig.align='center'} ## coerce model coefficients to dataframe str(sfe_ca) sfe_ca <- data.frame(dim1 = coef(sfe_ca, doc_dim = 1)$coef_document,                       dim2 = coef(sfe_ca, doc_dim = 2)$coef_document) str(sfe_ca) sfe_ca$name <- gsub('\\.csv.*', '', rownames(sfe_ca)) head(sfe_ca) ## plot full data with branch annotation ggplot(sfe_ca, aes(x=dim1, y=dim2, label=name)) +   geom_point(aes(color=dim1-dim2), alpha = 0.6) +   # plot 0.2 of all labels, using a repel function   geom_text_repel(data = dplyr::sample_frac(sfe_ca, 0.6), max.overlaps = 10, seed = 17495) +   theme_bw() +   theme(plot.title = element_text(face='bold')) +   labs(title = 'Correspondence Analysis: Full Data') ## plot parts of the data ggplot(sfe_ca, aes(x=dim1, y=dim2, label=name)) +   geom_point(aes(color=dim1-dim2), alpha = 0.2) +   # plot 0.2 of all labels, using a repel function   geom_text_repel(data = dplyr::sample_frac(sfe_ca, 0.2), max.overlaps = 9, seed = 6734) +   scale_y_continuous(limits=c(-2,0)) +   scale_x_continuous(limits=c(-1,1)) +   theme_bw() +   theme(plot.title = element_text(face='bold')) +   labs(title = 'Correspondence Analysis: Zoom')`

`{r echo=TRUE} save(dfm_sfe, file = '/home/redapemusic35/dh4morpsy/data/dfm_initial.RDS') load('/home/redapemusic35/dh4morpsy/data/dfm_initial.RDS')`

```{r}
dfm_sfe

tail(dfm_sfe)

```plain text

#### > Exercise {.tabset .tabset-fade}
##### Task
Check whether there is still some noise in the data and remove it. Hint: Scan through the topfeatures.

##### Solution
```{r eval=TRUE}
topfeatures(dfm_sfe, n=20)
## remove additional words
#toks <- tokens_select(toks, pattern = 'many|much', valuetype = 'regex', selection = 'remove')
## create dfm
dfm_sfe <- dfm(toks) %>%
           dfm_trim(min_termfreq = 0.1, termfreq_type = "quantile",
                    max_docfreq = 0.9, docfreq_type = "prop")
```

# Building a Dataset

Retrieve popular music charts by year. Then build a csv file with lyrics.

## Year-end Billboard Charts

13. Hot 100
14. Billboard 200
15. Streaming Songs
16. Radio Songs
17. Digital Song Sales
18. Pop
19. Country
20. Rock and Alternative
21. R&B/Hip-Hop
22. Rap
23. Christian
24. Gospel
- Why these?
- I think that they contain the most semantic content regarding what western music listeners have to say.

For instance, what values do westerners hold? The hope here is that we can distinguish between values held by western Christians (i.e., Christian and Gospel), generally westerners who listen to country music. Pop and rock may be sets to contrast against. For instance, people listen to rock and pop not so much for the semantic content as those who listen to Gospel and Christian.

## Downloading a chart

### Using [guoguo12/billboard charts:](https://github.com/guoguo12/billboard-charts?tab=readme-ov-file)

```plain text
Use the ChartData constructor to download a chart:

ChartData(name, date=None, year=None, fetch=True, timeout=25)

The arguments are:

    name – The chart name, e.g. 'hot-100' or 'pop-songs'.
    date – The chart date as a string, in YYYY-MM-DD format. By default, the latest chart is fetched.
    year – The chart year, if requesting a year-end chart. Must be a string in YYYY format. Cannot supply both date and year.
    fetch – A boolean indicating whether to fetch the chart data from Billboard.com immediately (at instantiation time). If False, the chart data can be populated at a later time using the fetchEntries() method.
    max_retries – The max number of times to retry when requesting data (default: 5).
    timeout – The number of seconds to wait for a server response. If None, no timeout is applied.

For example, to download the Alternative Songs year-end chart for 2006:
```

```plain text

>>> chart = billboard.ChartData('alternative-songs', year=2006)
```

```plain text

Accessing chart entries

If chart is a ChartData instance, we can ask for its entries attribute to get the chart entries (see below) as a list.

For convenience, chart[x] is equivalent to chart.entries[x], and ChartData instances are iterable.
Chart entry attributes

A chart entry (typically a single track) is of type ChartEntry. A ChartEntry instance has the following attributes:

    title – The title of the track.
    artist – The name of the artist, as formatted on Billboard.com.
    image – The URL of the image for the track.
    peakPos – The track's peak position on the chart as of the chart date, as an int (or None if the chart does not include this information).
    lastPos – The track's position on the previous week's chart, as an int (or None if the chart does not include this information). This value is 0 if the track was not on the previous week's chart.
    weeks – The number of weeks the track has been or was on the chart, including future dates (up until the present time).
    rank – The track's current position on the chart.
    isNew – Whether the track is new to the chart.

More resources

For additional documentation, look at the file billboard.py, or use Python's interactive help feature.

Think you found a bug? Create an issue here.
```

## Lyrics 2 Methods

[Genius.com api via johnwmillr/LyricsGenius](https://github.com/johnwmillr/LyricsGenius)

### Setup

`lyricsgenius` provides a simple interface to the song, artist, and lyrics data stored on [Genius.com](https://www.genius.com/).

The full documentation for `lyricsgenius` is available online at [Read the Docs](https://lyricsgenius.readthedocs.io/en/master/).

Before using this package you’ll need to sign up for a (free) account that authorizes access to [the Genius API](http://genius.com/api-clients). The Genius account provides a access_token that is required by the package. See [the Usage section](https://github.com/johnwmillr/LyricsGenius#usage) below for examples.

Installation

`lyricsgenius` requires Python 3.

Use pip to install the package from PyPI:

```plain text
pip install lyricsgenius
```

Or, install the latest version of the package from GitHub:

```plain text
pip install git+https://github.com/johnwmillr/LyricsGenius.git
```

Usage

Import the package and initiate Genius:

```plain text
import lyricsgenius
genius = lyricsgenius.Genius(token)
```

If you don’t pass a token to the Genius class, `lyricsgenus` will look for an environment variable called `GENIUS_ACCESS_TOKEN` and attempt to use that for authentication.

```plain text
genius = Genius()
```

Search for songs by a given artist:

```plain text
artist = genius.search_artist("Andy Shauf", max_songs=3, sort="title")
print(artist.songs)
```

By default, the `search_artist()` only returns songs where the given artist is the primary artist. However, there may be instances where it is desirable to get all of the songs that the artist appears on. You can do this by setting the `include_features` argument to True.

```plain text
artist = genius.search_artist("Andy Shauf", max_songs=3, sort="title", include_features=True)
print(artist.songs)
```

Search for a single song by the same artist:

```plain text
song = artist.song("To You")
# or:
# song = genius.search_song("To You", artist.name)
print(song.lyrics)
```

Add the song to the artist object:

```plain text
artist.add_song(song)
# the Artist object also accepts song names:
# artist.add_song("To You")
```

Save the artist’s songs to a `JSON` file:

```plain text
artist.save_lyrics()
```

Searching for an album and saving it:

```plain text
album = genius.search_album("The Party", "Andy Shauf")
album.save_lyrics()
```

There are various options configurable as parameters within the Genius class:

```plain text
genius.verbose = False # Turn off status messages
genius.remove_section_headers = True # Remove section headers (e.g. [Chorus]) from lyrics when searching
genius.skip_non_songs = False # Include hits thought to be non-songs (e.g. track lists)
genius.excluded_terms = ["(Remix)", "(Live)"] # Exclude songs with these words in their title
```

You can also call the package from the command line:

```plain text
export GENIUS_ACCESS_TOKEN="my_access_token_here"
python3 -m lyricsgenius --help
```

Search for and save lyrics to a given song and album:

```plain text
python3 -m lyricsgenius song "Begin Again" "Andy Shauf" --save
python3 -m lyricsgenius album "The Party" "Andy Shauf" --save
```

Search for five songs by ‘The Beatles’ and save the lyrics:

```plain text
python3 -m lyricsgenius artist "The Beatles" --max-songs 5 --save
```

Example projects

[Trucks and Beer: A textual analysis of popular country music](http://www.johnwmillr.com/trucks-and-beer/)[Neural machine translation: Explaining the Meaning Behind Lyrics](https://github.com/tsandefer/dsi_capstone_3)[What makes some blink-182 songs more popular than others?](http://jdaytn.com/posts/download-blink-182-data/)[Sentiment analysis on hip-hop lyrics](https://github.com/Hugo-Nattagh/2017-Hip-Hop)[Does Country Music Drink More Than Other Genres?](https://towardsdatascience.com/does-country-music-drink-more-than-other-genres-a21db901940b)[49 Years of Lyrics: Why So Angry?](https://towardsdatascience.com/49-years-of-lyrics-why-so-angry-1adf0a3fa2b4)

Contributing

Please contribute! If you want to fix a bug, suggest improvements, or add new features to the project, just open an issue or send me a pull request.

```plain text
import requests
from bs4 import BeautifulSoup as Parse

def make_soup(url):
    """
    Parse a web page info html
     """
    user_agent = {
        'User-Agent': "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"
    }
    r = requests.get(url, headers=user_agent)
    html = Parse(r.content, "html.parser")
    return html

def format_url(string):
    """
    Replace les spaces with '%20'
    """
    return string.replace(" ", "%20")

def get_song_url(html):
    song_url = html.find("a", {"class": "title"})["href"]
    return song_url

def find_Lyrics(titre, artiste):
        url = f"https://www.musixmatch.com/fr/search/{artiste}%20{titre}/tracks"

        url = format_url(url)
        pageweb = make_soup(url)

        # Recupere le lien de la chanson
        song_url = pageweb.find("a", {"class": "title"})["href"]
        song_url = "https://www.musixmatch.com" + song_url

        # Recupere les paroles
        pageweb = make_soup(song_url)
        paroles = list()
        for span in pageweb.find_all("span", {"class" : "lyrics__content__ok"}):
            print(span.text)

find_Lyrics("title","artist")
```

# Visualize the network with ggraph. You can adjust node sizes based on word frequencies or degrees.

```{r}

# Filter nodes by degree to reduce graph size

# Remove edges with weight below a certain threshold

graph_jean <- delete.vertices(graph_jean, which(degree(graph_jean) < 300))
graph_wrld <- delete.vertices(graph_wrld, which(degree(graph_wrld) < 300))

# Calculate word frequencies or degrees for sizing

V(graph_jean)$degree <- degree(graph_jean)
# Calculate word frequencies or degrees for sizing
V(graph_wrld)$degree <- degree(graph_wrld)

```plain text

```{r, echo=F, message=F}
# Plot
ggraph(graph_jean, layout = "fr") +
  geom_edge_link(aes(width = n), color = "blue", alpha = 0.1) +
  geom_node_point(aes(size = degree), color = "pink", alpha = 1) +
  scale_size_continuous(range = c(-20, 20)) +
  geom_node_text(aes(label = name), color = "black", alpha = 10, repel = TRUE, size = 3) +
  theme_void()
```

```{r, echo=F, message=F}

ggraph(graph_wrld, layout = “fr”) +
geom_edge_link(aes(width = n), color = “blue”, alpha = 0.1) +
geom_node_point(aes(size = degree), color = “pink”, alpha = 1) +
scale_size_continuous(range = c(-20, 20)) +
geom_node_text(aes(label = label), color = “black”, alpha = 10, repel = TRUE, size = 3) +
theme_void()

```plain text

```{r, message=F, echo=F}

ggraph(graph_jean, layout = "kk") +
  geom_edge_link(aes(width = n), color = "blue", alpha = 0.1) +
  geom_node_point(aes(size = degree), color = "pink", alpha = 1) +
  scale_size_continuous(range = c(-20, 20)) +
  geom_node_text(aes(label = name), color = "black", alpha = 10, repel = TRUE, size = 3) +
  theme_void()
```

```{r, echo=F, message=F}

ggraph(graph_wrld, layout = “kk”) +
geom_edge_link(aes(width = n), color = “blue”, alpha = 0.1) +
geom_node_point(aes(size = degree), color = “pink”, alpha = 1) +
scale_size_continuous(range = c(-20, 20)) +
geom_node_text(aes(label = label), color = “black”, alpha = 10, repel = TRUE, size = 3) +
theme_void()

```plain text

```{r}
#load('/home/mreynolds/PAPERS/moral-priviledge-topic-analysis/input/steps/comment_dfm_initial.RDS')

# Install and load the quanteda package

# Assuming your dataset is already a quanteda corpus object named 'dataset_corpus'
# If not, you'll need to create one from your data

# Read the dictionary file
terms <- readLines("/home/redapemusic35/data_storage/liwcdic/macdvirtue-terms.dic")

# Load spacyr
# Initialize spacyr - this will prompt you to install spaCy and the language model in Python
spacy_initialize(model = "en_core_web_sm")
# Your text data - assuming it's a character vector where each element is a document.
alex_lyrics <- alex_jean$lyrics
# Use spacy_parse to tokenize and identify sentences
parsed_text <- spacy_parse(alex_lyrics, dependency = TRUE, sentence_id = TRUE)
# Aggregate tokens back into sentences, adding punctuation
reconstructed_text <- aggregate(token ~ sentence_id + doc_id,
                                data = parsed_text,
                                FUN = function(x) paste(x, collapse = " "))
reconstructed_text$token <- paste0(reconstructed_text$token, ".")
reconstructed_text %>% head
alex_corpus2 <- corpus(reconstructed_text$token)

alex_sent <- tokens(alex_corpus2, what = "sentence")
alex_sent %>% head
dataset_corpus <- alex_sent %>%
  tokens_tolower() %>%
  tokens_remove(stopwords("en"))

dataset_corpus %>% head
# Find sentences containing the specified terms using kwic
results <- kwic(dataset_corpus, pattern = phrase(terms))

# Convert the results to a data frame for easier handling
sub_dataset <- as.data.frame(results)

# View or further process the sub-dataset
#print(sub_dataset)

#wrld_lyrics <- juice_wrld$lyrics
#wrld_corpus2 <- corpus(wrld_lyrics)

#wrld_sent <- tokens(wrld_corpus2, what = "sentence")

#wrld_corpus <- wrld_sent %>%
#  tokens_tolower() %>%
#  tokens_remove(stopwords("en"))

# Find sentences containing the specified terms using kwic
#wrld_results <- kwic(wrld_sent, pattern = phrase(terms))

# Convert the results to a data frame for easier handling
#wrld_sub_dataset <- as.data.frame(wrld_results)

# View or further process the sub-dataset
#print(wrld_sub_dataset)
```

# Visualize the network with ggraph. You can adjust node sizes based on word frequencies or degrees.

```{r}

# Filter nodes by degree to reduce graph size

# Remove edges with weight below a certain threshold

graph_jean <- delete.vertices(graph_jean, which(degree(graph_jean) < 300))
graph_wrld <- delete.vertices(graph_wrld, which(degree(graph_wrld) < 300))

# Calculate word frequencies or degrees for sizing

V(graph_jean)$degree <- degree(graph_jean)
# Calculate word frequencies or degrees for sizing
V(graph_wrld)$degree <- degree(graph_wrld)

```plain text

```{r, echo=F, message=F}
# Plot
ggraph(graph_jean, layout = "fr") +
  geom_edge_link(aes(width = n), color = "blue", alpha = 0.1) +
  geom_node_point(aes(size = degree), color = "pink", alpha = 1) +
  scale_size_continuous(range = c(-20, 20)) +
  geom_node_text(aes(label = name), color = "black", alpha = 10, repel = TRUE, size = 3) +
  theme_void()
```

```{r, echo=F, message=F}

ggraph(graph_wrld, layout = “fr”) +
geom_edge_link(aes(width = n), color = “blue”, alpha = 0.1) +
geom_node_point(aes(size = degree), color = “pink”, alpha = 1) +
scale_size_continuous(range = c(-20, 20)) +
geom_node_text(aes(label = label), color = “black”, alpha = 10, repel = TRUE, size = 3) +
theme_void()

```plain text

```{r, message=F, echo=F}

ggraph(graph_jean, layout = "kk") +
  geom_edge_link(aes(width = n), color = "blue", alpha = 0.1) +
  geom_node_point(aes(size = degree), color = "pink", alpha = 1) +
  scale_size_continuous(range = c(-20, 20)) +
  geom_node_text(aes(label = name), color = "black", alpha = 10, repel = TRUE, size = 3) +
  theme_void()
```

```{r, echo=F, message=F}

ggraph(graph_wrld, layout = “kk”) +
geom_edge_link(aes(width = n), color = “blue”, alpha = 0.1) +
geom_node_point(aes(size = degree), color = “pink”, alpha = 1) +
scale_size_continuous(range = c(-20, 20)) +
geom_node_text(aes(label = label), color = “black”, alpha = 10, repel = TRUE, size = 3) +
theme_void()

```plain text

```{r}
#load('/home/mreynolds/PAPERS/moral-priviledge-topic-analysis/input/steps/comment_dfm_initial.RDS')

# Install and load the quanteda package

# Assuming your dataset is already a quanteda corpus object named 'dataset_corpus'
# If not, you'll need to create one from your data

# Read the dictionary file
terms <- readLines("/home/redapemusic35/data_storage/liwcdic/macdvirtue-terms.dic")

# Load spacyr
# Your text data - assuming it's a character vector where each element is a document.
alex_lyrics <- alex_jean$lyrics
# Use spacy_parse to tokenize and identify sentences
parsed_text <- spacy_parse(alex_lyrics, dependency = TRUE, sentence_id = TRUE)
# Aggregate tokens back into sentences, adding punctuation
reconstructed_text <- aggregate(token ~ sentence_id + doc_id,
                                data = parsed_text,
                                FUN = function(x) paste(x, collapse = " "))
reconstructed_text$token <- paste0(reconstructed_text$token, ".")
reconstructed_text %>% head
alex_corpus2 <- corpus(reconstructed_text$token)

alex_sent <- tokens(alex_corpus2, what = "sentence")
alex_sent %>% head
dataset_corpus <- alex_sent %>%
  tokens_tolower() %>%
  tokens_remove(stopwords("en"))

dataset_corpus %>% head
# Find sentences containing the specified terms using kwic
results <- kwic(dataset_corpus, pattern = phrase(terms))

# Convert the results to a data frame for easier handling
sub_dataset <- as.data.frame(results)

# View or further process the sub-dataset
#print(sub_dataset)

#wrld_lyrics <- juice_wrld$lyrics
#wrld_corpus2 <- corpus(wrld_lyrics)

#wrld_sent <- tokens(wrld_corpus2, what = "sentence")

#wrld_corpus <- wrld_sent %>%
#  tokens_tolower() %>%
#  tokens_remove(stopwords("en"))

# Find sentences containing the specified terms using kwic
#wrld_results <- kwic(wrld_sent, pattern = phrase(terms))

# Convert the results to a data frame for easier handling
#wrld_sub_dataset <- as.data.frame(wrld_results)

# View or further process the sub-dataset
#print(wrld_sub_dataset)
```

# If you work with your own corpus

## Scaling: correspondence analysis

`{r eval=TRUE} docnames(dfm_sfe) <- name_variable ## compute model sfe_ca <- quanteda.textmodels::textmodel_ca(dfm_sfe, sparse = TRUE, residual_floor = 0.8) sfe_ca`

`{r echo=TRUE} save(sfe_ca, file = '/home/redapemusic35/dh4morpsy/data/topic-ca.RDS') load('/home/redapemusic35/dh4morpsy/data/topic-ca.RDS')`

```{r fig.height=5, fig.width=10, fig.align=‘center’}
## coerce model coefficients to dataframe

str(sfe_ca)
sfe_ca <- data.frame(dim1 = coef(sfe_ca, doc_dim = 1)$coef_document,
                     dim2 = coef(sfe_ca, doc_dim = 2)$coef_document)
str(sfe_ca)
sfe_ca$name <- gsub(’\.csv.*‘,’‘, rownames(sfe_ca))
head(sfe_ca)
## plot full data with branch annotation
ggplot(sfe_ca, aes(x=dim1, y=dim2, label=name)) +
geom_point(aes(color=dim1-dim2), alpha = 0.6) +
# plot 0.2 of all labels, using a repel function
geom_text_repel(data = dplyr::sample_frac(sfe_ca, 0.6), max.overlaps = 10, seed = 17495) +
theme_bw() +
theme(plot.title = element_text(face=’bold’)) +
labs(title = ‘Correspondence Analysis: Full Data’)
## plot parts of the data
ggplot(sfe_ca, aes(x=dim1, y=dim2, label=name)) +
geom_point(aes(color=dim1-dim2), alpha = 0.2) +
# plot 0.2 of all labels, using a repel function
geom_text_repel(data = dplyr::sample_frac(sfe_ca, 0.2), max.overlaps = 9, seed = 6734) +
scale_y_continuous(limits=c(-2,0)) +
scale_x_continuous(limits=c(-1,1)) +
theme_bw() +
theme(plot.title = element_text(face=‘bold’)) +
labs(title = ‘Correspondence Analysis: Zoom’)

```plain text

## Unsupervised LDA

```{r eval = FALSE}

dic <- dictionary(file = "/home/redapemusic35/data_storage/liwcdic/macdvirtue.dic")
dic
```

```{r}
## run naive unsupervised topic model with 10 topics
sfe_lda <- textmodel_lda(dfm_sfe, k = 30)
sfe_lda

sfe_seeded <- textmodel_seededlda(
dfm_sfe,
dic,
valuetype = c(“glob”, “regex”, “fixed”),
case_insensitive = TRUE,
residual = FALSE,
weight = 0.01,
max_iter = 2000,
alpha = 200,
beta = 1000,
verbose = quanteda_options(“verbose”)
)

json <- createJSON(phi = sfe_seeded$phi,
                    theta = sfe_seeded$theta,
doc.length = rowSums(dfm_sfe),
vocab = colnames(dfm_sfe),
term.frequency = colSums(dfm_sfe)
)

serVis(json)

```plain text

```{r}

non_seeded <- createJSON(phi = sfe_lda$phi,
                    theta = sfe_lda$theta,
                    doc.length = rowSums(dfm_sfe),
                    vocab = colnames(dfm_sfe),
                    term.frequency = colSums(dfm_sfe)
)

serVis(non_seeded)
```

```{r}

ggplot(dfm_sfe, aes(x=dim1, y=dim2, color=genre)) +
geom_point(alpha = 19, shape = ‘.’) +
geom_density_2d(alpha = 19) +
theme_bw() +
theme(plot.title = element_text(face=‘bold’)) +
labs(title = ‘Correspondence Analysis with Topic Annotation (k=10)’)

#?textmodel_lda

```plain text

```{r fig.height=5, fig.width=10}
## print top 20 terms per topic
terms(sfe_lda, 10)
## plot the topics over the correspondence analysis data
sfe_ca$genre <- topics(sfe_lda)

ggplot(sfe_ca, aes(x=dim1, y=dim2, color=genre)) +
  geom_point(alpha = 19, shape = '.') +
  geom_density_2d(alpha = 19) +
  theme_bw() +
  theme(plot.title = element_text(face='bold')) +
  labs(title = 'Correspondence Analysis with Topic Annotation (k=10)')
```

`{r echo = FALSE} save(sfe_lda, '/home/redapemusic35/dh4morpsy/data/lda_k10.RDS') load('/home/redapemusic35/dh4morpsy/data/lda_k10.RDS')`

Change the names of the topics (to some meaningful description) before plotting.

## PoS-tagging - leaving the sandbox

`{r} ## set seed set.seed(48621) ## draw a random sample of 20 documents sfe_sub <- sfe[sample(1:length(sfe), 3)] sfe_sub ## PoS-tagging sfe_pos <- spacy_parse(sfe_sub, pos = T, tag = T, lemma = T, entity = T, dependency = T) sfe_pos`

## Augment your sandbox

`{r} ## aggregate tokens and pos-tags back to documents sfe_pos <- sfe_pos %>% rowwise %>% mutate(token_pos = paste0(token,'__', pos))  sfe_pos sfe_pos <- sfe_pos %>%    group_by(doc_id) %>%    summarise(text = paste0(token_pos, collapse = ' ')) sfe_pos ## import it to quanteda and add metadata sfe_pos <- corpus(sfe_pos) docvars(sfe_pos) <- docvars(sfe_sub) sfe_pos ## get all the nouns preceded by the adjective ' rational_noun <- stri_match_all(sfe_pos, regex = '(?<=love__ADJ\\s)[A-z]+__NOUN') names(rational_noun) <- docnames(sfe_pos) rational_noun rational_noun <- data.frame(match = do.call(rbind, rational_noun),        doc_id = rep(names(rational_noun), lengths(rational_noun))) rational_noun ## count them rational_noun %>%    na.omit %>%    group_by(doc_id, match) %>%    summarise(n = n()) %>%    arrange(doc_id, desc(n)) %>%    print(n=200)`

## Additional material

### Hierarchical clustering

```{r fig.height=5, fig.width=10, fig.align=‘center’}
## hierarchical clustering - get distances on normalized dfm
sfe_dist_mat <- dfm_weight(dfm_sfe, scheme = “prop”) %>%
textstat_dist(method = “euclidean”) %>%
as.dist()
## hiarchical clustering the distance object
sfe_cluster <- hclust(sfe_dist_mat, method = ‘ward.D’)
# label with document names
#sfe_cluster$name <- gsub(‘\.csv(\.[0-9])?’, ’’, docnames(dfm_sfe))
## determine best numbers of clusters
#fviz_nbclust(as.matrix(sfe_dist_mat), FUN = hcut, method = “wss”)
## cut tree into four groups
#clusters <- cutree(sfe_cluster, k = 4)
#names(clusters)
#names(sfe_ca)
#summary(clusters)
#summary(sfe_ca)

## add cluster-data to the correspondence analysis

#sfe_ca_hcl <- left_join(sfe_ca, data.frame(clusters), by = sfe_ca$name)
## plot
#ggplot(sfe_ca_hcl, aes(x=dim1, y=dim2, label=id)) +
# geom_point(aes(color=as.factor(cluster)), alpha = 0.2) +
# facet_grid(~as.factor(cluster))
## hierarchical clustering doesn’t provide discrete cluster along
## the dimensions of the correspondance analysis

```plain text



<!--chapter:end:05-Deployment.Rmd-->

# Blocks

## Equations

Here is an equation.

\begin{equation}
  f\left(k\right) = \binom{n}{k} p^k\left(1-p\right)^{n-k}
  (\#eq:binom)
\end{equation}

You may refer to using `\@ref(eq:binom)`, like see Equation \@ref(eq:binom).


## Theorems and proofs

Labeled theorems can be referenced in text using `\@ref(thm:tri)`, for example, check out this smart theorem \@ref(thm:tri).

::: {.theorem #tri}
For a right triangle, if $c$ denotes the *length* of the hypotenuse
and $a$ and $b$ denote the lengths of the **other** two sides, we have
$$a^2 + b^2 = c^2$$
:::

Read more here <https://bookdown.org/yihui/bookdown/markdown-extensions-by-bookdown.html>.

## Callout blocks


The R Markdown Cookbook provides more help on how to use custom blocks to design your own callouts: https://bookdown.org/yihui/rmarkdown-cookbook/custom-blocks.html

<!--chapter:end:06-Evaluation.Rmd-->

# Sharing your book

## Publishing

HTML books can be published online, see: https://bookdown.org/yihui/bookdown/publishing.html

## 404 pages

By default, users will be directed to a 404 page if they try to access a webpage that cannot be found. If you'd like to customize your 404 page instead of using the default, you may add either a `_404.Rmd` or `_404.md` file to your project root and use code and/or Markdown syntax.

## Metadata for sharing

Bookdown HTML books will provide HTML metadata for social sharing on platforms like Twitter, Facebook, and LinkedIn, using information you provide in the `index.Rmd` YAML. To setup, set the `url` for your book and the path to your `cover-image` file. Your book's `title` and `description` are also used.



This `gitbook` uses the same social sharing data across all chapters in your book- all links shared will look the same.

Specify your book's source repository on GitHub using the `edit` key under the configuration options in the `_output.yml` file, which allows users to suggest an edit by linking to a chapter's source file.

Read more about the features of this output format here:

https://pkgs.rstudio.com/bookdown/reference/gitbook.html

Or use:

```{r eval=FALSE}
?bookdown::gitbook
```

# If you work with your own corpus

## Scaling: correspondence analysis

`{r eval=TRUE} docnames(dfm_sfe) <- name_variable ## compute model sfe_ca <- quanteda.textmodels::textmodel_ca(dfm_sfe, sparse = TRUE, residual_floor = 0.8) sfe_ca`

`{r echo=TRUE} save(sfe_ca, file = '/home/redapemusic35/dh4morpsy/data/topic-ca.RDS') load('/home/redapemusic35/dh4morpsy/data/topic-ca.RDS')`

```{r fig.height=5, fig.width=10, fig.align=‘center’}
## coerce model coefficients to dataframe

str(sfe_ca)
sfe_ca <- data.frame(dim1 = coef(sfe_ca, doc_dim = 1)$coef_document,
                     dim2 = coef(sfe_ca, doc_dim = 2)$coef_document)
str(sfe_ca)
sfe_ca$name <- gsub(’\.csv.*‘,’‘, rownames(sfe_ca))
head(sfe_ca)
## plot full data with branch annotation
ggplot(sfe_ca, aes(x=dim1, y=dim2, label=name)) +
geom_point(aes(color=dim1-dim2), alpha = 0.6) +
# plot 0.2 of all labels, using a repel function
geom_text_repel(data = dplyr::sample_frac(sfe_ca, 0.6), max.overlaps = 10, seed = 17495) +
theme_bw() +
theme(plot.title = element_text(face=’bold’)) +
labs(title = ‘Correspondence Analysis: Full Data’)
## plot parts of the data
ggplot(sfe_ca, aes(x=dim1, y=dim2, label=name)) +
geom_point(aes(color=dim1-dim2), alpha = 0.2) +
# plot 0.2 of all labels, using a repel function
geom_text_repel(data = dplyr::sample_frac(sfe_ca, 0.2), max.overlaps = 9, seed = 6734) +
scale_y_continuous(limits=c(-2,0)) +
scale_x_continuous(limits=c(-1,1)) +
theme_bw() +
theme(plot.title = element_text(face=‘bold’)) +
labs(title = ‘Correspondence Analysis: Zoom’)

```plain text

## Unsupervised LDA

```{r eval = FALSE}

dic <- dictionary(file = "/home/redapemusic35/data_storage/liwcdic/macdvirtue.dic")
dic
```

```{r}
## run naive unsupervised topic model with 10 topics
sfe_lda <- textmodel_lda(dfm_sfe, k = 30)
sfe_lda

sfe_seeded <- textmodel_seededlda(
dfm_sfe,
dic,
valuetype = c(“glob”, “regex”, “fixed”),
case_insensitive = TRUE,
residual = FALSE,
weight = 0.01,
max_iter = 2000,
alpha = 200,
beta = 1000,
verbose = quanteda_options(“verbose”)
)

json <- createJSON(phi = sfe_seeded$phi,
                    theta = sfe_seeded$theta,
doc.length = rowSums(dfm_sfe),
vocab = colnames(dfm_sfe),
term.frequency = colSums(dfm_sfe)
)

serVis(json)

```plain text

```{r}

non_seeded <- createJSON(phi = sfe_lda$phi,
                    theta = sfe_lda$theta,
                    doc.length = rowSums(dfm_sfe),
                    vocab = colnames(dfm_sfe),
                    term.frequency = colSums(dfm_sfe)
)

serVis(non_seeded)
```

```{r}

ggplot(dfm_sfe, aes(x=dim1, y=dim2, color=genre)) +
geom_point(alpha = 19, shape = ‘.’) +
geom_density_2d(alpha = 19) +
theme_bw() +
theme(plot.title = element_text(face=‘bold’)) +
labs(title = ‘Correspondence Analysis with Topic Annotation (k=10)’)

#?textmodel_lda

```plain text

```{r fig.height=5, fig.width=10}
## print top 20 terms per topic
terms(sfe_lda, 10)
## plot the topics over the correspondence analysis data
sfe_ca$genre <- topics(sfe_lda)

ggplot(sfe_ca, aes(x=dim1, y=dim2, color=genre)) +
  geom_point(alpha = 19, shape = '.') +
  geom_density_2d(alpha = 19) +
  theme_bw() +
  theme(plot.title = element_text(face='bold')) +
  labs(title = 'Correspondence Analysis with Topic Annotation (k=10)')
```

`{r echo = FALSE} save(sfe_lda, '/home/redapemusic35/dh4morpsy/data/lda_k10.RDS') load('/home/redapemusic35/dh4morpsy/data/lda_k10.RDS')`

Change the names of the topics (to some meaningful description) before plotting.

## PoS-tagging - leaving the sandbox

`{r} ## set seed set.seed(48621) ## draw a random sample of 20 documents sfe_sub <- sfe[sample(1:length(sfe), 3)] sfe_sub ## PoS-tagging sfe_pos <- spacy_parse(sfe_sub, pos = T, tag = T, lemma = T, entity = T, dependency = T) sfe_pos`

## Augment your sandbox

`{r} ## aggregate tokens and pos-tags back to documents sfe_pos <- sfe_pos %>% rowwise %>% mutate(token_pos = paste0(token,'__', pos))  sfe_pos sfe_pos <- sfe_pos %>%    group_by(doc_id) %>%    summarise(text = paste0(token_pos, collapse = ' ')) sfe_pos ## import it to quanteda and add metadata sfe_pos <- corpus(sfe_pos) docvars(sfe_pos) <- docvars(sfe_sub) sfe_pos ## get all the nouns preceded by the adjective ' rational_noun <- stri_match_all(sfe_pos, regex = '(?<=love__ADJ\\s)[A-z]+__NOUN') names(rational_noun) <- docnames(sfe_pos) rational_noun rational_noun <- data.frame(match = do.call(rbind, rational_noun),        doc_id = rep(names(rational_noun), lengths(rational_noun))) rational_noun ## count them rational_noun %>%    na.omit %>%    group_by(doc_id, match) %>%    summarise(n = n()) %>%    arrange(doc_id, desc(n)) %>%    print(n=200)`

## Additional material

### Hierarchical clustering

```{r fig.height=5, fig.width=10, fig.align=‘center’}
## hierarchical clustering - get distances on normalized dfm
sfe_dist_mat <- dfm_weight(dfm_sfe, scheme = “prop”) %>%
textstat_dist(method = “euclidean”) %>%
as.dist()
## hiarchical clustering the distance object
sfe_cluster <- hclust(sfe_dist_mat, method = ‘ward.D’)
# label with document names
#sfe_cluster$name <- gsub(‘\.csv(\.[0-9])?’, ’’, docnames(dfm_sfe))
## determine best numbers of clusters
#fviz_nbclust(as.matrix(sfe_dist_mat), FUN = hcut, method = “wss”)
## cut tree into four groups
#clusters <- cutree(sfe_cluster, k = 4)
#names(clusters)
#names(sfe_ca)
#summary(clusters)
#summary(sfe_ca)

## add cluster-data to the correspondence analysis

#sfe_ca_hcl <- left_join(sfe_ca, data.frame(clusters), by = sfe_ca$name)
## plot
#ggplot(sfe_ca_hcl, aes(x=dim1, y=dim2, label=id)) +
# geom_point(aes(color=as.factor(cluster)), alpha = 0.2) +
# facet_grid(~as.factor(cluster))
## hierarchical clustering doesn’t provide discrete cluster along
## the dimensions of the correspondance analysis

```plain text



<!--chapter:end:05-Deployment.Rmd-->

# Blocks

## Equations

Here is an equation.

\begin{equation}
  f\left(k\right) = \binom{n}{k} p^k\left(1-p\right)^{n-k}
  (\#eq:binom)
\end{equation}

You may refer to using `\@ref(eq:binom)`, like see Equation \@ref(eq:binom).


## Theorems and proofs

Labeled theorems can be referenced in text using `\@ref(thm:tri)`, for example, check out this smart theorem \@ref(thm:tri).

::: {.theorem #tri}
For a right triangle, if $c$ denotes the *length* of the hypotenuse
and $a$ and $b$ denote the lengths of the **other** two sides, we have
$$a^2 + b^2 = c^2$$
:::

Read more here <https://bookdown.org/yihui/bookdown/markdown-extensions-by-bookdown.html>.

## Callout blocks


The R Markdown Cookbook provides more help on how to use custom blocks to design your own callouts: https://bookdown.org/yihui/rmarkdown-cookbook/custom-blocks.html

<!--chapter:end:06-Evaluation.Rmd-->

# Sharing your book

## Publishing

HTML books can be published online, see: https://bookdown.org/yihui/bookdown/publishing.html

## 404 pages

By default, users will be directed to a 404 page if they try to access a webpage that cannot be found. If you'd like to customize your 404 page instead of using the default, you may add either a `_404.Rmd` or `_404.md` file to your project root and use code and/or Markdown syntax.

## Metadata for sharing

Bookdown HTML books will provide HTML metadata for social sharing on platforms like Twitter, Facebook, and LinkedIn, using information you provide in the `index.Rmd` YAML. To setup, set the `url` for your book and the path to your `cover-image` file. Your book's `title` and `description` are also used.



This `gitbook` uses the same social sharing data across all chapters in your book- all links shared will look the same.

Specify your book's source repository on GitHub using the `edit` key under the configuration options in the `_output.yml` file, which allows users to suggest an edit by linking to a chapter's source file.

Read more about the features of this output format here:

https://pkgs.rstudio.com/bookdown/reference/gitbook.html

Or use:

```{r eval=FALSE}
?bookdown::gitbook
```