---
notion-id: 3e28935b-cf8a-8188-ac96-c5a4780de97c
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