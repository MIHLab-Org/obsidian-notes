---
subtitle: "PHIL104Q -- Introduction to Logic"
title: "<font style='font-size:1em;'>🗓️ Week 01/02<br/> Introduction</font>"
author: Prof. [Reynolds](#)
institute: '[Stetson University](#)'
date: 14 Jan 2026
date-meta: 14 Jan 2026
date-format: "DD MMM YYYY"
toc: false
toc-depth: 1
toc-title: "What is deductive logic, Validity and Soundness, Inference"
center-title-slide: false
from: markdown+emoji
format:
  revealjs:
    theme: moon
    fig-responsive: true
    incremental: true
    slide-number: true
    mouse-wheel: false
    preview-links: auto
    logo: /figures/icons/course_favicon.png
    css: /css/styles_slides.css
    footer: 'PHIL104Q -- Introduction to Logic'
---

| Unit | Topic | Pages |
|---|---|---|
|1 | What is deductive logic? | 1-8 |
|2 | Validity and soundness | 9-19 |
| 3 | Forms of inference | 20 |

# Chapter 1: Deductive Logic

## What is an argument?

* How can we determine the premises of an argument?
* What is an inference marker and what are some examples?
* How do we tell whether a given statement is the premise of an argument, or the conclusion?

::: {.notes}

As I mentioned previously, the most important component of this course, is being able to evaluate arguments for *internal* cogency.

But before we evaluate arguments for *internal* cogency, we must be able to recognize something as an argument.

:::

## Some Examples

::: {.r-fit-text}

We are going to reorganize the following statements into arguments.

1. Most doctors are caring. After all, most ordinary people are caring --- and politicians are ordinary people.
2. Anyone who knows how to pole vault, even if she doesn’t get a gold medal in the olympics, will at least get toned arms and abdomen. Jane knows how to pole vault, so she at least has toned arms and abdomen.
3. Peter is shorter than Paul and Jim is taller than Paul. So Peter is shorter than Jim.
4. At 12am, Fred is always either bartending, or at home. And assuming he's at home, he's building his model train set. Fred was not bartending at midnight. So he was building his model train set.
5. Kermit is green all over. Hence Kermit is not red all over.
6. Every letter is in a pigeon hole. There are more letters than there are pigeon holes. So some pigeon hole contains more than one letter.
7. Miracles cannot happen. Since, by definition, a miracle is an event incompatible with the laws of nature. And everything that happens is always consistent with the laws of nature.
:::

::: {.notes}

There is more than one kind of internal cogency however. We will be talking about ***logical validity***. Internal cogency and logical validity are what underlie the kinds "systematic" evaluations of arguments that we will learn about in this course. Once again, there are more than one of these.

Consider the following:

1. Most doctors are caring. After all, most ordinary people are caring --- and doctors are ordinary people.
   1. Most ordinary people are caring
   2. Doctors are ordinary people
   3. Most Doctors are caring
2. Anyone who knows how to pole vault, even if she doesn’t get a gold medal in the olympics, will at least have toned arms and abdomen. Jane knows how to pole vault, so she at least has toned arms and abdomen.
   1. Anyone who knows how to pole vault, even if she doesn't get a gold medal in the olympics, will at least get toned arms and abdomen.
   2. Jane knows how to pole vault.
   3. Jane will at least have toned arms and abdomen.
3. Peter is shorter than Paul and Jim is taller than Paul. So Peter is shorter than Jim.
   1. Peter is shorter than Paul and Jim is taller than Paul.
   2. So Peter is shorter than Jim.
4. At 12am, Fred is always either bartending, or at home. And assuming he's at home, he's building his model train set. Fred was not bartending at midnight. So he was building his model train set.
   1. At 12am, Fred is always either bartending, or at home.
   2. Assuming he's at home, he's building his model train set.
   3. Fred was not bartending at midnight.
   4. So Fred was building his model train set at midnight.
5. Kermit is green all over. Hence Kermit is not red all over.
   1. Kermit is green all over.
   2. Hence Kermit is not red all over.
6. Every letter is in a pigeon hole. There are more letters than there are pigeon holes. So some pigeon hole contains more than one letter.
   1. Every letter is in a pigeon hole.
   2. There are more letters than there are pigeon holes.
   3. So some pigeon hole contains more than one letter.
7. Miracles cannot happen. Since, by definition, a miracle is an event incompatible with the laws of nature. And everything that happens is always consistent with the laws of nature.
   1. A miracle is an event that is incompatible with the laws of nature.
   2. Everything that happens is always consistent with the laws of nature.
   3. Therefore miracles cannot happen.

:::

## Kinds of Evaluation

* Are the premises supporting the conclusion true?
* Is the inference from the premises to the conclusion lock-tight?

::: {.notes}

* How do we determine whether the inference step is lock-tight?

* Assume the truth of the premises

:::

## Deduction and Induction

::: {.callout-important collapse=false}
## 📢 Important

> If an inference step from premises to a conclusion is complletely watertight, i.e. if the truth of the premises absolutely guarantee the truth of the conclusion, then we say that this inference step is *deductively valid*.

> Equivalently, when an inference step is deductively valid, we will say that its premises deductively entail its conclusion. [@smit94, 4]

:::

## Argument Patterns, or Generalizing

::: {.r-fit-text}

Lewis Carroll: No interesting poems are unpopular among people of real taste. No modern
poetry is free from affectation. All your poems are on the subject of soap bubbles. No affected
poetry is popular among people of real taste. Only a modern poem would be on the subject of
soap bubbles. Therefore none of your poems are interesting.

:::

---

::: {.fragments .highlight-red .r-fit-text}

> No interesting poems are unpopular among people of real taste. No modern
poetry is free from affectation. All your poems are on the subject of soap bubbles. No affected
poetry is popular among people of real taste. Only a modern poem would be on the subject of
soap bubbles. Therefore none of your poems are interesting.

* ***Conclusion:*** None of your poems are interesting

* (1)  No interesting poems are unpopular among people of real taste. (premiss)

* (2)  No modern poetry is free from affectation. (premiss)

* (3) All your poems are on the subject of soap bubbles. (premiss)

* (4) No affected poetry is popular among people of real taste. (premiss)

* (5) Only a modern poem would be on the subject of soap bubbles. (premiss)

* (6) All your poems are modern poems. (from 3, 5)

* (7) All your poems are affected. (from 2, 6)

* (8) None of your poems are popular among people of real taste. (from 7, 4)

* (9) All interesting poems are popular among people of real taste. (from 1)

* (10) None of your poems are interesting. (from 8, 9)

:::

# Validity and Soundness

Covered So Far:

* Inference steps being deductively valid.
* Therefore some premises deductively entail a conclusion.
* This chapter informally explores validity and entailment

## Defining Validity

> An inference step is *valid* if and only if (iff) there is no possible situation in which its premises would be true and its conclusion false. Equivalently, in  such a case, we will say that the inference's premises *entail* its conclusion.

## Consistency and Equivalency

## What is a proposition?

> One or more propositions are (jointly) *inconsistent* if and only if there is no possible situation in which these propositions are all true together.

---

::: {.r-fit-text}

So what is a proposition?

Ayer, A. J. Language, Truth and Logic. Vol. 47. V. Gollancz, 1936.

> For, if I am right, it will also follow that any sentence, whether of the English or any other language, that is equivalent to *s* can be validly derived, in the language in question, from any sentence that is equivalent to *r*; and it this that my use of the word "proposition" indicates. (Page 7)

* First a sentence
* Next a statement (imperative, declarative, interrogative, exclamatory)
* Empirically Verifiable
* Therefore is always either true or false

:::

::: {.notes}

Notice which ones can be true or false? Imperative: Go to your room!, Interrogative: Did you have dinner with the victim the night of their murder? Exclamatory: Oh darn! or Declarative?

:::

---

Some Examples

If some propositions are consistent with each other, then adding a further true proposition to
them can’t make them inconsistent.

* Yes?
* No?

---

Consider:

* Socrates is a woman.
* No women are philosophers.
* Now consider:
  * Socrates is a philosopher

::: {.notes}

Can both be true?

Either inconsistent, or one is false.

:::

## Validity, Invalidity, and Truth

***The Invalidity Principle***

> The only combination ruled out by the definition of validity is a valid inference step’s having all true premisses and yet a false conclusion. Deductive
validity is about the necessary preservation of truth – and therefore a valid
inference step cannot take us from actually true premisses to an actually
false conclusion. [@smit94, 13]

---

* Either premises can be jointly consistent, if there is at least one situation where they can all be true together

* There are inconsistent if there is no possible situation in which all are true together in that situation.

***Or premises taken with with their conclusion:***

* Can the premises of an argument be true while at the same time, denying the truth of the conclusion?
  * Yes: Inconsistent
  * No: Consistent

---

### Equivalency

> Two propositions are equivalent iff they are true in exactly the same possible situations.

---

### Some Examples

(1) If A entails C, and C is equivalent to C
0
, then A entails C
0
.
(2) If A entails C, and A is equivalent to A0
, then A0
entails C.
(3) If A and B entail C, and A is equivalent to A0
, then A0 and B entail C.

# Ch. 3, Forms of Inference

1. Whatever Donald Trump says is true.
2. Donald Trump says that the Flying Spaghetti Monster exists.

So,

3. It is true that the Flying Spaghetti Monster exists.

---

::: {.r-fit-text}

Note three easy consequences of our definition of soundness:

1. any sound argument has a true conclusion;
2. no pair of sound arguments can have conclusions inconsistent with each
other;
3. no sound argument has inconsistent premisses.

Why do these claims hold? For the following reasons:

4. A sound argument starts from true premisses and involves a necessarily truth-preserving inference move – so it must end up with a true
conclusion.
5. Since a pair of sound arguments will have a pair of true conclusions,
this means that the conclusions are true together. If they actually are
true together, then of course they can be true together. And if they
can be true together then (by definition) the conclusions are consistent
with each other.
6. Since inconsistent premisses cannot all be true together, an argument
starting from those premisses cannot satisfy the first of the conditions
for being sound.

:::

## More Forms of Inference (Examples)
