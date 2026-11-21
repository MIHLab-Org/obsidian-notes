---
subtitle: "PHIL104Q -- Proofs, Counter Examples and Logical Validity"
title: "<font style='font-size:1em;'>🗓️ Week 03<br/> Introduction to Logic</font>"
author: Prof. [Reynolds](#)
institute: '[Stetson University](#)'
date: 14 Jan 2026
date-meta: 14 Jan 2026
date-format: "MMM DD YYYY"
toc: false
toc-depth: 1
toc-title: "Proofs, Counter Examples and Logical Validity"
center-title-slide: false
from: markdown+emoji
format:
  revealjs:
    theme: moon
    html-math-method: mathjax
    fig-responsive: true
    slide-number: true
    incremental: true
    scrollable: true
    mouse-wheel: false
    preview-links: auto
    logo: /figures/icons/course_favicon.png
    css: /css/styles_slides.css
    footer: 'PHIL104Q -- Introduction to Logic'
    include-in-header:
      - text: |
          <script>
          window.MathJax = {
            loader: {load: ['[tex]/bussproofs']},
            tex: {packages: {'[+]': ['bussproofs', '[tableaux]/prooftrees']}}
          };
          </script>
code-annotations: below
---

# Proofs

## First Examples

:::: {.columns}

::: {.column width="10%"}

***A***

:::

::: {.column width="6%"}

:::

::: {.column width="70%"}

Babies are illogical; nobody is despised who can manage a crocodile; illogical persons are despised; so babies cannot manage a crocodile.

:::

::::

## Derivations and Validity

:::: {.columns}

::: {.column width="5%"}

***A'***

:::

::: {.column width="70%"}

(1) Babies are illogical

(2) Nobody is despised who can manage a crocodile

(3) Illogical persons are despised

(4) Babies are despised

(5) Babies cannot manage a crocodile

:::

::: {.column width="20%"}

(premiss)

(Premiss)

(premiss)

(from 1, 3)

(from 2, 4)

:::

::::

## Exercises


:::: {.columns}

::: {.column width="5%"}

***A'***

:::

::: {.column width="70%"}

(1) No philosopher is illogical.
(2) Jones keeps making argumentative mistakes.
(3) No logical person keeps making argumentative mistakes.
(4) All existentialists are philosophers.
(5) Jones is illogical
(6) Jones is not a philosopher
(7) Jones is not an existentialist

:::

::: {.column width="20%"}

(1) (premiss)

(2) (Premiss)

(3) (premiss)

(4) (premiss)

(5) from 2, 3

(6) from 1, 5

(7) from 4, 6

:::

::::

## Fully annotated proofs

---

### Two types of valid argument forms

:::: {.columns}

::: {.column width="15%"}

R

:::

::: {.column width="20%"}

No *F* is *G*

*n* is *F*

So: *n* is not *G*

:::

::: {.column width="5%"}

:::

::: {.column width="5%"}

:::

::: {.column width="15%"}

S

:::

::: {.column width="20%"}

No *F* is *G*

So: *G* is *F*

:::

::: {.column width="100%"}

1. No [ . . . ] is [ . . .]

2. [ some *x* ] is [ . . .]

3. So: [ some *x* ] is *not* [ . . .]

:::

::::

---

:::: {.columns}

::: {.column width="5%"}

***C***

:::

::: {.column width="95%"}

No logician is bad at abstract thought. Jo is bad at abstract thought. So Jo is not a logician

:::

::::


:::: {.columns}

::: {.column width="5%"}

***C'***

:::

::: {.column width="95%"}

1. No logician is bad at abstract thought. (premiss)
2. Jo is bad at abstract thought. (premiss)
3. No one bad at abstract thought is a logician (from 1 by ***S***)
4. So Jo is not a logician (from 3, 2 by ***R***)

:::

::::

---

:::: {.columns}

::: {.column width="5%"}

***D***

:::

::: {.column width="95%"}

Anyone who understand human nature is clever; every true poet can stir the heart; Shakespeare wrote Hamlet; no one who does not understand human nature can stir the heart; no one who is not a true poet wrote Hamlet: so Shakespeare is clever.

:::

::::

---


:::: {.columns}

::: {.column width="5%"}

***D'***

:::

::: {.column width="85%"}

1. Anyone who understands human nature is clever.
2. Every true poet can stir the heart.
3. Shakespeare wrote Hamlet.
4. No one who does not understand human nature can stir the heart.
5. No one who is not a true poet wrote Hamlet.
6.
11. So Shakespeare is clever.

:::

::: {.column width="10%"}

:::

::::


