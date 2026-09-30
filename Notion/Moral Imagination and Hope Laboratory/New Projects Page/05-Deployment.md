---
notion-id: 3e28935b-cf8a-81bf-b542-cbcf72f9fcc3
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
```