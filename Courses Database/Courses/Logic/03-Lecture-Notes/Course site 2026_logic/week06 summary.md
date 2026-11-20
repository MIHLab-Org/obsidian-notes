# Study Guide for Wednesday February 11

The exam will have 10 questions on it. It will cover chapters 1, 2, 3, 4, 8 and 9.

## 1.1 What is An Argument? (p. 1)

By ‘argument’ we mean a chain of reasoning, short or long, in support of some conclusion.

## 1.2 Kinds of Evaluation (p. 1)

Logic, then, is concerned with evaluating stretches of reasoning. First, we can ask whether this argument’s premisses A(1) and A(2) are
true. Second, we can ask about the quality of the inference step, the move which takes you from the premisses A(1) and A(2) to the conclusion A(3).

### Argument A:

(1) All philosophers are eccentric.
(2) Jack is a philosopher.
(3) Jack is eccentric.

(a) Argument A’s inference step is absolutely compelling: if A’s premisses are true, then its conclusion is guaranteed to be true too.

### Argument B:

(1) Either Jill is in the library or she is in the bookshop.
(2) Jill isn’t in the library. So
(3) Jill is in the bookshop.

Who knows whether the initial assumptions, the two premisses, are true or not? But we can immediately see that the inference step from 1 and 2 to 3, is again completely watertight.

> If an inference step from premisses to a conclusion is completely watertight, i.e. if the truth of the premisses absolutely guarantees the truth of the conclusion, then we say that this inference step is deductively valid. Equivalently, when an inference step is deductively valid, we will say that its premisses deductively entail its conclusion.

## 1.3 Deduction vs. Induction (p. 2)

### Argument A:

(1) All philosophers are eccentric.
(2) Jack is a philosopher.
(3) Jack is eccentric.

(a) Argument A’s inference step is absolutely compelling: if A’s premisses are true, then its conclusion is guaranteed to be true too.

### Argument B:

(1) Either Jill is in the library or she is in the bookshop.
(2) Jill isn’t in the library. So
(3) Jill is in the bookshop.

Who knows whether the initial assumptions, the two premisses, are true or not? But we can immediately see that the inference step from 1 and 2 to 3, is again completely watertight.

> If an inference step from premisses to a conclusion is completely watertight, i.e. if the truth of the premisses absolutely guarantees the truth of the conclusion, then we say that this inference step is deductively valid. Equivalently, when an inference step is deductively valid, we will say that its premisses deductively entail its conclusion.

## 1.5 General Forms (p. 5)

Any inference step of the form

(a) All F are G
(b) n is F
(c) So: n is G

Is reliable

### A\'

(1) All logicians are cool.
(2) Russell is a logician.
(3) Therefore, Russell is cool.

### A\''

(1) All robins have red breasts.
(2) Tweety is a robin.
(3) Therefore, Tweety has a red breast.

### A\'''

(1) All post-modernists write nonsense.
(2) Derrida is a post-modernist.
(3) Therefore, Derrida writes nonsense.

However, this is not reliable:

(a) Most G are H
(b) Most H are K
(c) So: At least some G are K.

## Exercises

What are the premisses, inference markers, and conclusions of the following arguments? Which of these arguments do you suppose involve deductively valid reasoning? Which involve inductive reasoning?

(1) Most politicians are corrupt. After all, most ordinary people are corrupt – and politicians
are ordinary people.
(2) Anyone who is well prepared for the exam, even if she doesn’t get an A grade, will at
least get a B. Jane is well prepared, so she will get at least a B grade.
(3) John is taller than Mary and Jane is shorter than Mary. So John is taller than Jane.
(4) At eleven, Fred is always either in the library or in the coffee bar. And assuming he’s in
the coffee bar, he’s drinking an espresso. Fred was not in the library at eleven. So he was
drinking an espresso then.
(5) The Democrats will win the election. There’s only a week to go. The polls put them 20
points ahead, and a lead of 20 points with only a week to go to polling day can’t be
overturned.
(6) Dogs have four legs. Fido is a dog. Therefore Fido has four legs.

# 2 Validity and Soundness (p. 9)

This chapter explores this notion of validity/entailment a bit further, though still in an informal way. We also emphasize the special centrality of deductive reasoning in serious inquiry.

## 2.1 Validity Defined More Carefully (p. 9)

> We said in §1.3 that an inference step is deductively valid if it is completely watertight – in other words, assuming that the inference’s premisses are true, its conclusion is absolutely guaranteed to be true as well.But talk of an inference being ‘watertight’ and talk of a conclusion being ‘guaranteed’ to be true is too metaphorical for comfort.

Therefore:

> An inference step is valid if and only if there is no possible situation in which its premisses would be true and its conclusion false. Equivalently, in such a case, we will say that the inference’s premisses entail its conclusion.

::: {.callout-note}

It is necessarily true that C if and only if it is true that C in every possible situation, in our most inclusive sense of ‘possible’.

:::

## 2.2 Consistency and equivalence (p. 11)

We need a term for the kind of thing that can feature as a premiss or conclusion in an argument – let’s use the traditional ‘proposition’. We will return in §§7.3–7.5 to consider the tricky question of the nature of propositions: for the moment, we just assume that propositions can sensibly be said to be true or false in various situations (unlike commands, questions, etc.).

::: {.callout-note}

***Inconsistency***: One or more propositions (statement that is either true or false) are (jointly) inconsistent if and only if there is no possible situation in which these propositions are all true together.

***Consistency***: Or to put it another way, some propositions are (jointly) consistent if and only
if there is a possible situation in which they are all true together.

:::

## 2.3 Validity, Truth, and the Invalidity Principle

::: {.callout-tip}

(a) To assess whether an inference step is deductively valid, it is usually not enough to look at what is the case in the actual world; we also need to consider alternative possible situations, alternative ways things might conceivably have been – or, as some say, alternative possible worlds.

:::

### Argument B:

(1) No Welshman is a great poet.
(2) Shakespeare is a Welshman.
(3) So, Shakespeare is not a great poet.

> The propositions here are all false about the actual world. But that doesn’t settle whether the premisses of B entail its conclusion. In fact, the inference step here is valid; there is no situation at all – even a merely possible one, in the weakest sense – in which the premisses would be true and the conclusion false.

## Forms of Inference

We saw in the first chapter how arguments can come in families which share the same type or pattern or form of inference step. Evaluating this shareable form of inference for reliability will then simultaneously give a verdict on a whole range of arguments depending on the same sort of inferential move.

All F are G \
*n* is F \
So *n* is G.

No F is G \
n is F \
So: n is not G

Some F are R to every G \
No F is R to any H \
So: No G is H.

For the moment, let’s just note three more examples of deductively reliable forms of inference, involving different numbers of premisses:

No F is G \
So: No G is F \

All F are H \
No G is H \
So: No F is G

All F are either G or H \
All G are K \
All H are K \
So: All F are K.

## Exercises 3

::: {.callout-note}

(a) Which of the following patterns of inference are deductively reliable, meaning that all their instances are valid? (Here ‘F ’, ‘G’, and ‘H’ hold the places for general terms.) If you suspect an inference pattern is unreliable, find an instance which has to be invalid because it has true premisses and a false conclusion.

:::

(1) Some F are G; no G is H; so, some F are not H.
(2) Some F are G; some H are F ; so, some G are H.
(3) All F are G; some F are H; so, some H are G.
(4) No F is G; some G are H; so, some H are not F.
(5) No F is G; no H is G; so, some F are not H.
(6) All F are G; no G is H; so, no H is F.

# Chapter 4 Proofs (28)

::: {.callout-tip}

We now move on to consider the following question: how can we establish that a not-obviously-valid inference is in fact valid? One answer, in headline terms, is: by giving a multi-step argument that takes us from that inference’s premisses to its conclusion by simple, plainly valid steps – in other words, by giving a derivation or proof. This chapter explains.

:::

## 4.1 Proofs: first examples (28)

(1) Babies are illogical. (premiss)
(2) Nobody is despised who can manage a crocodile. (premiss)
(3) Illogical persons are despised. (premiss)
(4) Babies are despised. (from 1, 3)
(5) Babies cannot manage a crocodile. (from 2, 4)

::: {.callout-note}

We can therefore get from the initial premisses to the final conclusion by a necessarily truth-preserving route.

One way of demonstrating that an inferential leap from some premisses to a given conclusion is valid is by breaking down the big leap into smaller inference steps, each one of which is clearly valid.

:::

## 4.2 Fully annotated proofs (30)

::: {.callout-tip}

 In our first two examples of proofs, we have indicated at each new step which earlier statements the inference depended on. But we can do even better by also explicitly indicating what type or form of inference move is being invoked at each stage.

:::

Consider:

### R:

No F is G \
n is F \
So: n is not G

and

### S

No F is G \
So: No G is F

And the argument:

(1) No logician is bad at abstract thought. (premiss)
(2) Jo is bad at abstract thought. (premiss)
(3) No one bad at abstract thought is a logician. (from 1 by S)
(4) Jo is not a logician. (from 3, 2 by R)

In form:

(1) No F is G. (premiss)
(2) *n* is G. (premiss)
(3) No G is F. (from 1 by S)
(4) So *n* is not F. (from 3, 2 by R)

Another one:

(a) Anyone who understands human nature is clever
(b) every true poet can stir the heart
(c) Shakespeare wrote Hamlet
(c) no one who does not understand human nature can stir the heart
(d) no one who is not a true poet wrote Hamlet
(e) a true poet wrote Hamlet
(f) whoever wrote Hamlet can stir the heart
(g) Shakespeare can stir the heart
(g) whoever can stir the heart understands human nature
(h) Shakespeare understands human nature
(i) so Shakespeare is clever.

Consider example 8 from the book

(a) Either the butler or the cook committed the murder.
(b) The victim died from poison if the cook was the murderer.
(c) The butler carried out the murder only if the victim was stabbed.
(d) The victim didn’t die from poison.
(e) So, the victim was stabbed.

There are two ways to complete this exercise. The book gives us:

Another valid argument. We could argue like this (careful with the ‘if’s and ‘only if’s):

(1) Either the butler or the cook committed the murder. premiss
(2) The victim died from poison if the cook did the murder. premiss
(3) The butler did the murder only if the victim was stabbed. premiss
(4) The victim didn’t die from poison. premiss
(5) The cook committed the murder. supposition (Let's suppose the cook committed the murder)
(6) The victim died from poison. (If the cook committed the murder, then from 2, 5)
(7) Contradiction (from 4, 6, but the victim did not die from poison)
(8) The cook didn’t commit the murder. (from 5–7, by RAA, so the cook did not commit the murder)
(9) The butler committed the murder. (from 1, 8, if the cook did not commit the murder, then the butler did)
(10) The victim was stabbed. (from 3, 9, if the butler did commit the murder, then the victim was stabbed)

But watch this shorter way:

(a) Either the butler or the cook committed the murder.
(b) The victim died from poison if the cook was the murderer.
(c) The butler carried out the murder only if the victim was stabbed.
(d) The victim didn’t die from poison.
(e) Either the victim was stabbed or the victim died from poison (from a, b, and c)
(e) So, the victim was stabbed. (from d and e)

### Exercise Set 4, problem 5

(a) Every event is causally determined. (premise)
(b) No action should be punished if the agent isn’t responsible for it. (premise)
(c) Agents are only responsible for actions they can avoid doing. (premise)
(d) If an events are causally determined, then an agent cannot avoid doing it. (premise)
(d) Agents should only be punished for actions they can avoid doing. (from b and c)
(e) Agents cannot avoid doing any actions. (from d and a)
(d) Hence no action should be punished. (d and e)

# Chapter 8 Three Connectives (p. 61)

> We start our more formal work by looking at length at a very restricted class of arguments, namely those whose relevant logical structure turns simply on the presence in premisses and/or conclusions of ‘and’, ‘or’, and ‘not’ (used as so-called sentential or propositional connectives).

## 8.1 Two Simple Arguments

A

(1) Either Jill is in the library or she is in the coffee bar.
(2) Jill isn’t in the library.
So (3) Jill is in the coffee bar.

We can represent this as having the form

Either A or B \
Not-A \
So: B.

Here is another valid argument:

### B

(1) It’s not the case that Jack played lots of football and also did well in his exams.
(2) Jack played lots of football.
(3) So, Jack did not do well in his exams.

This also instantiates a reliable pattern of inference, which we might represent:

Not-(A and B) \
A \
So: Not-B.

## 8.2 'And' (p. 62)

::: {.callout-note}

For example, take the sentences ‘Lyon is in France’ and ‘Turin is in Italy’; we can conjoin them to get ‘Lyon is in France and Turin is in Italy’.

:::

## 8.3 'Or' (p. 63)

::: {.callout-note}

This is true if Jack didn’t work, and also true if Jack is not good at abstract thought. But I don’t mean to rule out that he is both a slacker and hopelessly illogical. The ‘or’ here is inclusive.

:::

## 8.4 'Not' (p. 64)

::: {.callout-note}

 To deny a claim A outright is equivalent to asserting some strict negation of A (meaning a sentence which is true when A is false and false when A is true).

:::

## 8.5 Scope (p. 65)

::: {.callout-note}

When it comes to considering sentences with multiple connectives in logical contexts, we evidently need some device to block scope ambiguities.

:::

::: {.callout-tip}

We will sidestep the complexities of natural language by reformulating the arguments we want to discuss; we will render them into more austere and regimented formalized languages, languages which are designed from the start to be very well-behaved, entirely clear and quite free of ambiguities and shifting meanings – at least as far as their logical apparatus is concerned.

:::

| | |
|---|---|
| 'Or' | = $\lor$ |
| 'And' | = $\land$ or & |
| 'Not' | = $\neg$ or \~ |

## Exercise 8

Give negations of the following in natural English:

(1) It is not the case that both Jack and Jill went up the hill.
(2) Neither Jack nor Jill went up the hill.
(3) No one loves Jack.
(4) Only tall men love Jill.
(5) Everyone who loves Jack admires Jill.
(6) Someone loves both Jack and Jill

Render the following as best you can into the PL language with the following glossary:

P: Jack loves Jill. \
Q: Jill loves Jack. \
R: Jo loves Jill. \
S: Jack is wise.

(1) Jack is unwise and loves Jill. (¬S ∧ P)
(2) Jack and Jo both love Jill. (P ∧ R)
(3) It isn’t true that Jack doesn’t love Jill. ¬¬P
(4) Jack loves Jill but Jo doesn’t. (P ∧ ¬R)
(5) Jack doesn’t love Jill, neither is he wise.
