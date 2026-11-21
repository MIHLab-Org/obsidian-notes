---
subtitle: "PHIL104Q -- Connectives, PL Syntax"
title: "<font style='font-size:1em;'>🗓️ Week 4<br/> Review of Chapter 6, Chapters 8 and 9</font>"
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
    header-includes:
      - \usepackage{mathpartir}
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

# 10 - PL Semantics

> Having described the syntax of PL languages, we now turn to consider their
semantics; in other words, we discuss questions of meaning and of truth. In
particular, we introduce the crucial notion of a truth-value valuation. [@smit21, 81]

---

(P): Alun loves Bethan. \
(Q): Bethan is Welsh. \
(R): Alun is married to Bethan.

1. We specify the senses of a PL language’s atoms by a glossary that fixes the
atoms’ truth-conditions.

---

(1) ‘∧’ invariably forms a conjunction, no more and no less; it translates as ‘and’ (or ‘and also’ or ‘both . . . and . . . ’), so long as it is clear – perhaps from contextual clues – that the English rendition should be read as forming a bare conjunction (and not as meaning e.g. ‘and then’).
(2) ‘∨’ invariably forms an inclusive disjunction, no more and no less; it translates as ‘either . . . or . . . or both’, or ‘and/or’ – or indeed as plain ‘or’, so long as context again makes it clear that the disjunction is to be understood as inclusive.
(3) ‘¬’ invariably negates the whole wff that follows; it can be translated by ‘It is not the case that . . . ’, or often by a judiciously
inserted ‘not’.

---

1. (R ∨ ¬Q) : Either Alun is married to Bethan or she isn’t Welsh. \
2. (Q ∧ ¬P) : Bethan is Welsh and Alun doesn’t love her. \
3. ((R ∧ P) ∧ ¬Q) : Alun is married to Bethan and he loves her, and she isn’t Welsh. \
4. ¬(¬P ∧ R) : It’s not the case that Alun both doesn’t love Bethan and yet also is married to her. \
5. ¬¬Q : It isn’t the case that Bethan is not Welsh.

## 10.3 Atomic wffs are true or false

> But having fixed the meaning by settling which Jack and Jill are in question, etc., and therefore fixed the conditions under which ‘P’ is true, it is then up to how things are in the world whether ‘P’ is true (or if you prefer, whether what ‘P’ expresses is true). If Jack did take Jill to the party, then ‘P’ is true; if not, ‘P’ is false. [84]

---

::: {.callout-important collapse=false}

*Determinacy 1* For any PL language, once we have stipulated the senses
of its atoms – fixed their truth-conditions – each of these atoms will be
determinately true or determinately false in any possible situation.

*Determinacy 2* The atoms of a PL language are to be interpreted so that
they have determinate truth values, exactly one of T and F, in any possible
situation

:::

::: {.callout-important collapse=false}

If a wff (or indeed a sentence of an ordinary language) is true in a given
situation, we say it then has the truth value true; and if it is false, it then
has the truth value false. For brevity, we denote these truth values by simply
‘T’ and ‘F’.

We call an assignment of truth values to some wffs of a PL language a
valuation of those wffs.

:::

---

It is useful to have some brisk notation – added to logicians’ English – to talk
about the assignment of a truth value to a wff. So we will write

P := T, Q := F, (P ∧ Q) := F, ((P ∧ ¬Q) ∨ (¬P ∧ Q)) := T, . . .

to say that the value of ‘P’ is T, the value of ‘Q’ is F, the value of ‘(P ∧ Q)’ is
F, etc. (The symbol ‘:=’ suggests itself because it is used in some programming
languages for the assignment of values.)

---

::: {.callout-note callapse=false}

If α := T and β := T, then (α ∧ β) := T. \
If α := T and β := F, then (α ∧ β) := F. \
If α := F and β := T, then (α ∧ β) := F. \
If α := F and β := F, then (α ∧ β) := F. \

:::

::: {.callout-note callapse=false}

If α := T and β := T, then (α ∨ β) := T. \
If α := T and β := F, then (α ∨ β) := T. \
If α := F and β := T, then (α ∨ β) := T. \
If α := F and β := F, then (α ∨ β) := F.

:::

---

(1) P := T. (premiss)
(2) Q := T. (premiss)
(3) R := F. (premiss)
(4) (P ∨ Q) := T, (from 1, 2 by the table for ‘∨’)
(5) ¬Q := F. (from 2 by the table for ‘¬’)
(6) (¬Q ∨ R) := F. (from 5, 2 by the table for ‘∨’)
(7) ¬(¬Q ∨ R) := T. (from 6 the table for ‘¬’)
(8) ((P ∨ Q) ∧ ¬(¬Q ∨ R)) := T. (from 4, 7 by the table for ‘∧’)
(9) ¬((P ∨ Q) ∧ ¬(¬Q ∨ R)) := F. (from 8 by the table for ‘¬’)

