---
subtitle: "PHIL104Q -- Logical validity, Propositions, forms, and connectives"
title: "<font style='font-size:1em;'>🗓️ Week 04<br/> Informal to Formal Logic</font>"
author: Prof. [Reynolds](#)
institute: '[Stetson University](#)'
date: 02 September 2026
date-meta: 14 March 2023
date-format: "MMM DD YYYY"
toc: false
toc-depth: 1
toc-title: "Logical validity, props and forms, connectives"
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
    footer: 'PHIL104Q -- Informal to Formal Logic'
---

# Logical Validity

* logically valid arguments are deductively valid
* but not all deductively valid arguments are logically valid

---

::: {.r-fit-text}

1. Vocabulary such as: 'all' and 'some', 'and' and 'or' and 'if', that does not refer to specific things, properties or relations, are topic-neutral
2. An inference step is logically valid iff it is deductively valid
   * given how the topic-neutral notions occur in the premisses and conclusion
   * ***and*** some premisses logically entail a certain conclusion if the inference form premisses to conclusion is logically valid.
3. A proposition is logically necessary iff it is necessarily true, in virtue of how topic-neutral notions feature in it.
4. We only need to concern ourselves with validity which depends on uncontroversially topic-neutral vocabulary: 'all', 'some', 'and' and 'or' etc.
5. We will accept that our given definitions of validity lead to strange arguments

:::

---

We will accept that our given definitions of validity lead to strange arguments

> Jack is married. Jack is not married. So th eworld will end tomorrow!

* The above is logically valid given our definition in 2.1:

* An inference step is *valid* iff there is no possible situation in which its premises would be true and its conclusion false.

---

* Deductive Validity: An inference step is *valid* iff there is no possible situation in which its premises would be true and its conclusion false.
* Logical Validity: Arguments whose load-bearing principles of inference can be laid out using only topic-neutral notions.
* Logical Validity: Patterns of reasoning that can be used when talking about any subject matter at all.
* Logical Validity: Universally applicable patterns of reasoning

---

Therefore:

* An inference step is logically valid if and only if it is deductively valid in
virtue of the way that topic-neutral notions occur in the premisses and
conclusion.

## Topic Neutral Terminology

Vocabulary like 'all' and 'some' and 'or', 'not' and 'if' etc.

* does not refer to specific things, properties or relations,
* useful for discussing any topic (topic neutral)

---

Deductively Valid:

1. Jill is a mother
2. So, Jill is a parent

---

Logically Valid:

1. Anything that is a mother is a parent
2. Jill is a mother
2. So, Jill is a parent

---

Consider:


1. Any *m* is a *p*
2. [Jill] is a *m*
2. So, [Jill] is a *p*

---

1. Any *m* is a *p*
2. Bob is a mother
3. So Bob is a parent

---

1. Jack is a bachelor
2. So Jack is unmarried

---

> How can we show that an unobviously valid inference is logically valid? By
a suitable proof, of course – meaning a proof where the pattern of inference used
at each step can be displayed using a purely logical schema.

---

Logically Valid:

1. Anything that is a mother is a parent
2. Jill is a mother
2. So, Jill is a parent

---

Consider:


1. Any *m* is a *p*
2. [Jill] is a *m*
2. So, [Jill] is a *p*

---

1. Any *m* is a *p*
2. Bob is a *m*
3. So Bob is a *p*

---

1. Jack is a bachelor
2. So Jack is unmarried

---

Proof:

1. A bachelor is an unmarried male
2. Jack is a bachelor
3. So Jack is a male (from 2)
4. So Jack is unmarried (from 1, 2, 3)

---

1. A *b* is a (*u* and *m*)
2. Jack is a *b*
3. So Jack is a (*u* and *m*)

---

# Exercises

(1) Only [logicians] are [wise]. (premiss)
(2) Some [philosophers] are not [logicians]. (premiss)
(3) All [who love Aristotle] are [wise]. (premiss)
(4) All [who love Aristotle] are [logicians]. (from 1, 3)
(5) Some [philosophers] do not [love Aristotle]. (from 2, 5)
(6) Some of those [who don’t love Aristotle] are [philosophers]. (from 6)

---

(1) Only l's are w. (premiss)
(2) Some p's are not l's. (premiss)
(3) All who A are w. (premiss)
(4) If w then l (from 1)
(5) All who A are l's. (from 1, 3)
(6) Some p's are not A. (from 2, 4)
(7) Some who are not A are p's. (from 5)

---

1. The Battle of Hastings happened before the Battle of Waterloo.
2. The Battle of Marathon happened before the Battle of Hastings.
3. Hence the Battle of Marathon happened before the Battle of Waterloo.

---

1. The H before the W.
2. The M before the H.
3. The M before the W.

---

1. Jane is no taller than Jill.
2. Jill is no taller than Jo.
3. Jo is no taller than Jane.
4. So Jane, Jill and Jo are the same height.

---

1. Jane is taller than Jill.
2. Jill is taller than Jo
3. Jo is taller than Jane.
4. So Jane, Jill and Jo are the same height.

---

::: {.r-text-fit}

1. J is [more t than] I.
2. I is [more t than] O.
3. O is [more t than] J.
4. J is [more t than] O. (from 1, 2)
5. J is [more t than] J. (say what?! That's insane!)
6. But is it though?
7. Depends on what [more t than] means.
8. So not deductively valid and therefore not logically valid.

:::

---

Why?

'is [more t than]' is a predicate:

![Predicate](./../../../figures/logic/predicate.png)

---

Is 'is' a predicate?

John 'is' tall.

---

1. Someone loves Alex.
2. But Alex loves no-one.
3. The person who loves Dr Jones, if anyone does, is Dr Jones.
4. So Alex isn’t Dr Jones.

---

1. Someone l's A.
2. But A l's n.
3. The p who l's D, if anyone does, is D.
4. If anyone l's D, then D l's D. (from 3)
  1. If any *x* l's D, then D l's D. (from 4)
5. A does not l any *x* (from 2)
6. A does not l D.
7. A is not D (4, 6)

---

1. Whoever respects Socrates respects Plato too.
2. All who respect Euclid respect Aristotle.
3. No one who respects Plato respects Aristotle.
4. Therefore Jo respects Euclid if she doesn’t respect Socrates.

---

1. Whoever respects Socrates respects Plato too.
2. All who respect Euclid respect Aristotle.
3. No one who respects Plato respects Aristotle.

---

1. All respects S respects P too.
2. All who respect E respect A.
3. No one who respects P respects A.

---

1. All S's are P's.
2. All E's are A's.
3. No P's are A's.
4. No S's are A's. (from 1 and 3)
5. No S's are E's (from 2, and 4)
6. Therefore, if S than not E (from 5)

---

But look at the original conclusion:

1. Whoever respects Socrates respects Plato too.
2. All who respect Euclid respect Aristotle.
3. No one who respects Plato respects Aristotle.
4. Therefore Jo respects Euclid if she doesn’t respect Socrates.

---

::: {.r-text-fit}

In other words:

1. All S's are P's.
2. All E's are A's.
3. No P's are A's.
4. No S's are A's. (from 1 and 3)
5. No S's are E's (from 2, and 4)
6. Therefore, E if not S
7. (Or rather) If not S then E (from 6)
8. (not this) If S than not E

:::

---

::: {.r-text-fit}

1. Whoever respects Socrates respects Plato too.
2. All who respect Euclid respect Aristotle.
3. No one who respects Plato respects Aristotle.
4. No one who respects Socrates respects A
5. No one who respects Socrates respects Euclid
6. Therefore, Jo respects Euclid if she doesn’t respect Socrates.
7. (Or rather) Therefore, If Jo does not respect Socrates, then she respects Euclid.

:::

---

![](./../../../figures/logic/6-answer.png)

---

1. Jill is a good logician only if she admires either Gödel or Gentzen.
2. Jill admires Gödel only if she understands his incompleteness theorem.
3. Whoever admires Gentzen must understand his proof of the consistency of arithmetic.
4. No one can understand Gentzen’s proof of the consistency of arithmetic without also understanding Gödel’s incompleteness theorem.
5. So if Jill is a good logician, then she understands Gödel’s incompleteness theorem.

---

1. Jill is a good logician only if she admires either Gödel or Gentzen.
2. Jill admires Gödel only if she understands his incompleteness theorem.
3. Whoever admires Gentzen must understand his proof of the consistency of arithmetic.
4. No one can understand Gentzen’s proof of the consistency of arithmetic without also understanding Gödel’s incompleteness theorem.

---

1. [Jill is a good logician] only if [either (Jill admires Gödel) or (Jill admires Gentzen).]
2. [L] only if [either (O or E)]
3. Therefore, if L then either (O or E).

---

1. If L then either (O or E).
2. Jill admires Gödel only if she understands his incompleteness theorem.

---

1. Jill admires Gödel only if she understands his incompleteness theorem.
2. [Jill admires Gödel] only if [she understands his incompleteness theorem.]
3. O only if I
4. If O then I

---

1. If L then either (O or E).
2. If O then I.

---

1. [Jill is a good logician] only if [she admires either Gödel or Gentzen.]
2. [Jill admires Gödel] only if [she understands his incompleteness theorem.]
3. Whoever [admires Gentzen] must [understand his proof of the consistency of arithmetic.]
4. No one can [understand Gentzen’s proof of the consistency of arithmetic] without also [understanding Gödel’s incompleteness theorem.]

---

1. Whoever [admires Gentzen] must [understand his proof of the consistency of arithmetic.]
2. If E then P

---

1. If L then either (O or E).
2. If O then I.
3. If E then P
4. No one can [understand Gentzen’s proof of the consistency of arithmetic] without also [understanding Gödel’s incompleteness theorem.]

---

1. No one can [understand Gentzen’s proof of the consistency of arithmetic] without also [understanding Gödel’s incompleteness theorem.]
2. No one can P and not I
3. If P then I

---

1. If L then either (O or E).
2. If O then I.
3. If E then P
4. If P then I

---

Looking at the conclusion:

1. So if Jill is a good logician, then she understands Gödel’s incompleteness theorem.
2. If Jill L's then Jill I's.
3. If L then I.

---

Recreating the argument:

1. If L then either (O or E).
2. If O then I.
3. If E then P
4. If P then I
5. If L then I

---

Creating Our Proof:

1. If L then either (O or E). (Premise)
2. If O then I. (Premise)
3. If E then P. (Premise)
4. If P then I. (Premise)
5. If E then I. (from 3 and 4)
6. If L then (I or I). (from 1, 2, and 5)
7. Therefore, if L then I. (from 6)

---

1. All the Brontë sisters supported one another.
2. The Brontë sisters were Anne, Charlotte and Emily.
3. Hence Anne, Charlotte and Emily supported one another.

---

1. There are exactly two logicians at the party.
2. There is just one literary theorist at the party.
3. No logician is a literary theorist.
4. Therefore, of the party-goers, there are exactly three who are either logicians or literary theorists.

---

1. There are exactly two [logicians at the party.]
2. There is just one [literary theorist at the party.]
3. No [logician] is [a literary theorist.]
4. Therefore, of the party-goers, there are exactly three (who are either) [logicians or literary theorists.]

---

1. There are 2 P's.
2. There is 1 T's.
3. P is not T.
4. Therefore P and P and T

# Connectives

(1) Either Jill is in the library or she is in the coffee bar.
(2) Jill isn’t in the library.
(3) Therefore, Jill is in the coffee bar.

---

(1) Either [Jill is in the library] or [Jill is in the coffee bar.]
(2) It is not the case that [Jill isn’t in the library.]
(3) Therefore, [Jill is in the coffee bar.]
(4) Either (L or C)
(5) Not L
(6) So C

---

It is easier:

1. L or C
2. Not L
3. So, C

---

1. L $\lor$ C
2. $\neg$ L
3. C

---

(1) It’s not the case that [Jack (played lots of football) and (also did well in his exams.)]
(2) [Jack played lots of football.]
(3) So [Jack did not do well in his exams.]

---

1. $\neg$ (F and E)
2. F
3. $\neg$ E

---


1. $\neg$ (F $\land$ E) (Premise)
2. F (Premise)
3. F $\lor$ E (from 1)
3. $\neg$ E (From 2, and 3)

