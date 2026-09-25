---
notion-id: 3e28935b-cf8a-8142-a8fb-f2210126431c
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