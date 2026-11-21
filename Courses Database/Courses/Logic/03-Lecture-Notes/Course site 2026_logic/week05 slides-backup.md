---
subtitle: "PHIL104Q -- Classical Propositional Logic, (Semantics)"
title: "<font style='font-size:1em;'>🗓️ Week 03<br/> Introduction</font>"
author: Prof. [Reynolds](#)
institute: '[Stetson University](#)'
date: 02 September 2026
date-meta: 14 March 2023
date-format: "MMM DD YYYY"
toc: false
toc-depth: 1
toc-title: "Argument Forms, Formalization, Formation Rules:"
center-title-slide: false
from: markdown+emoji
format:
  revealjs:
    theme: moon
    fig-responsive: true
    slide-number: true
    incremental: true
    scrollable: true
    mouse-wheel: false
    preview-links: auto
    logo: /figures/icons/course_favicon.png
    css: /css/styles_slides.css
    footer: 'PHIL104Q -- Introduction to Logic'
---

# Semantics

> We start our more formal work by looking at length at a very restricted class of arguments, namely those whose relevant logical structure turns simply on the presence in premisses and/or conclusions of ‘and’, ‘or’, and ‘not’ (used as so-called sentential or propositional connectives).

## Syntatic Rules for PL Languages

Three stages for defining well-formed formulas

![](../../../readings/wff-definition.png)

(a) we fix the alphabet of symbols we
can use in a PL language;
(b) we stipulate what count as the ‘atomic’ wffs of a
given language; finally,
(c) we explain how other, ‘molecular’, wffs are built up
from the atoms.

---

![](./../../../readings/pl-languages.png)

---

![](./../../../readings/atomic-wffs.png)

---

## Three Connectives

| | | | | |
|---|---|---|---|---|
| And | | $\land$ | \* | & |
| Or | | $\lor$ | | |
| Not | | $\neg$ | \~ | |

---

![](./../../../readings/jack-jill-pl.png)

---

::: {.r-text-fit}

Then let’s render the following into this miniature formalized language:

(1) Jack doesn’t love Jill.
(2) Jack is wise and he loves Jill.
(3) Either Jack loves Jill or Jo does.
(4) Jack and Jill love each other.
(5) Neither Jack loves Jill nor does Jo.
(6) It isn’t the case that Jack loves Jill nor does Jill love Jack.
(7) Either Jack is not wise or both he and Jo love Jill.
(8) It isn’t the case that either Jack loves Jill or Jill loves Jack.

:::

---

# Valuation Rules

These can be stated as the truth conditions for each of the logical connectives.

::: {.nonincremental}

1. Negation
   * V($\neg\phi$) = T iff V ($\phi$) $\neq$ T;
   * V($\neg\phi$) = F iff V($\phi$) = T.

2. Conjunction
   * V($\phi$ $\land$ $\psi$) = T iff both V($\phi$) = T and V($\psi$) = T;
   * V($\phi$ $\land$ $\psi$) = F iff either V($\phi$) $\neq$ T or V($\psi$) $\neq$ T, or both

:::

---

::: {.nonincremental}

3. Disjunction
   * V($\phi$ $\lor$ $\psi$) = T iff either V($\phi$) = T or V($\psi$) = T, or both;
   * V($\phi$ $\lor$ $\psi$) = F iff both V($\phi$) $\neq$ T and V($\psi$) $\neq$ T

4. Material Conditional
   * V($\phi$ $\rightarrow$ $\psi$) = T iff either V($\phi$) $\neq$ T or V($\psi$) = T, or both;
   * V($\phi$ $\rightarrow$ $\psi$) = F iff both V($\phi$) = T and V($\psi$) $\neq$ T.

5. Biconditional
   * V($\phi$ $\Leftrightarrow$ $\psi$) = T iff either V($\phi$) = T and V($\psi$) = T, or V($\phi$) $\neq$ T and V($\psi$) $\neq$ T;
   * V($\phi$ $\Leftrightarrow$ $\psi$) = F iff either V($\phi$) = T and V($\psi$) $\neq$ T, or V($\psi$) $\neq$ T and V($\psi$) = T

:::

# Multi-Propositional Sequents, an Exercise

## When an argument form has more than 2 letters

> If either the peasants or the slaves revolt and the queen hesitates, then the revolution will succeed.

> If the peasants revolt but the slaves don't, the revolution will not succeed, and if both the peasants and slaves revolt, the revolution will
succeed.

---

1. P = The peasants revolt
2. S = The slaves revolt
3. R = The revolution succeeds
4. Q = The queen hesitates

---

>  Where the number of sentence letters in a sequent is n, the number of valuations of the sequent, and the number of lines on its truth table is 2n.  Thus a sequent containing only one sentence letter has 21 = 2 valuations, a sequent containing three has 2$^3$ = 8 valuations, a sequent containing four has 2$^4$ = 16 valuations, and so on.

---


| | Type of formula Definition | Truth Table Indication |
|-|-|-|
| Valid (Tautologous) | True on all valuations | Column under main operator contains only 'T's |
| Contingent  | True on at least one but not all valuations | Column under main operator contains both 'T's and 'F's |
| Inconsistent | True on no valuations | Column under main operator contains only 'F's |

---

## 1. **Type of set:** Consistent

::: {.nonincremental}

* **Definition:**  There is at least one valuation on which all formulas in the set are true

* **Truth Table Indication:** Horizontal line on which all formulas in the set have 'T's under their main operators

:::

## 2. **Type of set:** Inconsistent

::: {.nonincremental}
* **Definition:** There is no valuation on which all formulas in the set are true

* **Truth Table Indication:** There is no horizontal line on which all formulas in the set have 'T's under their main operators
:::

---

## Logically Equivalent Formulas

| | | | | | | | | | | | | |
|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
| P | Q | ~ | ( | P | v | Q | ) | ~ | P | & | ~ | Q |
| T | T | F | | T | T | T | | F | | F | | F  |
| T | F | F | | T | T | F | | F | | F | | T  |
| F | T | F | | F | T | T | | T | | F | | F  |
| F | F | T | | F | F | F | | T | | T | | T  |
