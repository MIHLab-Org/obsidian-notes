---
notion-id: 3738935b-cf8a-806f-baff-f9c48bf13bd6
base: "[[Projects.base]]"
Area: Courses
Next Action: ""
📚 Courses Database: []
Events Calendar: []
Publications: []
Course: []
Experiments Plan: []
Target Journal: ""
Project Lead: []
Publications Count: []
Team members: []
Status: Outline
Section: []
TW Project: ""
Instructor: []
Type: []
Course Code: ""
Abstract / Thesis: ""
Abstract/Thesis: ""
Tasks: []
---
## The Logic of Deciding what to Do

![[Topics In Bayesian Decision Theory.base]]

This course uses the simulation hypothesis to explore perennial questions in philosophy. I use the term perennial here because many of the questions in philosophy are enduring, enduring, recurring, long lasting, etc. The simulation hypothesis is one of these questions as we will see. Although it is famously depicted in the Matrix movies, where what seems to be an ordinary physical world turns out to be the result of connecting human brains to a giant bank of computers, the concept itself extends back thousands of years, albeit without computers of course. How can we trust what our senses tell us? Could you be in a virtual world right now? Philosophy translates as love of wisdom, one of the most frustrating aspects in a philosophy course, is that we ask questions rather than provide answers. There are other disciplines for that. Philosophers are like the little kid who keeps asking, Why? or What is that? or How do you know? or What does that mean? or Why should I do that? Ask those questions a few times in a row and you rapidly reach the foundations. You’re examining the assumptions that underlie things we take for granted.

The objectives of this project are:
	1.  First, I want to use technology to address some of the oldest questions in philosophy, especially the problem of the external world.
	2.  We’ll also use technology to illuminate traditional questions about the mind: How do mind and body interact?
	3.  We also use technology to illuminate traditional questions about value and ethics.

We will also use technology to ask:
	1. Is there a God?
	2. What is the universe made of? 
	3. How does language describe reality?
	4. What does science tell us about reality?

![[Courses Database/Course The Slow Existential Death of a Spaceman Other Worldly Redemption, Virtual Love, and Real Sanctification/Class Discussion Notes/Class Discussion Notes.base|Class Discussion Notes.base]]
## Course Overview

This course teaches you to deeply understand Sam Carter's "Planning for Mistakes" and develop a substantive research response. The paper challenges orthodox decision theory's central claim that agents should maximize expected value. To respond to it, you'll need to master decision-theoretic foundations, Lewis's causal theory framework, Carter's formal innovation, his key arguments, and the broader landscape of contemporary decision theory scholarship.

**Estimated Duration:** 10-12 weeks (5-7 hours/week)

**Assumed Background:** Philosophy degree or equivalent; comfort with formal reasoning

**Learning Outcome:** Ability to write a 6,000-8,000 word research response engaging with Carter's central claims

---

## Module 0: Foundations - Lewis on Causal Decision Theory

**Why start here?** Carter's entire framework is built on and responds to debates initiated by David Lewis. Understanding Lewis is prerequisite to understanding Carter. Lewis's 1981 paper "Causal Decision Theory" establishes the formal apparatus that Carter extends.

### 0.1 The Basic Problem: Newcomb's Paradox

**Setting:** This famous thought experiment motivates causal decision theory.

A predictor (extremely reliable at guessing what you'll do) has already decided:

- If the predictor predicts you'll take both boxes: it puts nothing in box B
- If the predictor predicts you'll take only box A: it puts $1 million in box B

The predictor is never wrong. Now:

- Box A contains $1,000 (visible)
- Box B contains either $1,000,000 or nothing (sealed, depending on predictor)
- You choose: take both boxes, or only box B?

**Noncausal decision theory says:** Take both boxes!

- If B is full, you get $1,001,000 (better than $1,000,000)
- If B is empty, you get $1,000 (better than $0)
- Either way, taking both is better

**Your intuition screams:** Take only box B!

- If you take both, you'll "make the news" that you're the kind of person who takes both
- That news ensures B is empty
- So you'll end up with only $1,000
- If you only take B, you signal you're the kind of person the predictor predicted would do this
- So B will be full and you'll get $1,000,000

**The puzzle:** What's wrong with the noncausal argument? Why does "making the news" seem irrational?

**Lewis's answer:** Because it confuses evidential dependence with causal dependence.

---

### 0.2 Lewis's Formal Framework

Lewis distinguishes three formal concepts that noncausal theory conflates.

**Credence Function C:**

- C(W) = agent's degree of belief that world W is actual
- Scale: [0,1]
- Constraint: Σ_W C(W) = 1

**Value Function V:**

- V(W) = how satisfactory world W is to the agent
- Scale: arbitrary linear scale
- Different worlds have different values

**Propositions:**

- Sets of possible worlds
- C(X) = Σ_{W∈X} C(W) [sum of credences of worlds in X]
- C(X/Y) = C(X∩Y)/C(Y) [conditional credence]
- Notation: W and {W} used interchangeably

**Expected Value (Noncausal):**

$$
V(X) = df\sum_{\substack{w}} \in X\frac{C(W)}{C(X)}V(W) = \sum_{\substack{z}}C(Z/X)V(XZ)
$$

where the summation is over a partition Z.

This is a credence-weighted average of values within the proposition.

**Example:** If X = "I take both boxes"

- V(X) = C(B full | I take both) · V(both boxes, B full) + C(B empty | I take both) · V(both boxes, B empty)
- = 0.001 · $1,001,000 + 0.999 · $1,000
- ≈ $2,000

versus X = "I take only B"

- V(not taking both) = C(B full | I take only B) · V(only B, B full) + C(B empty | I take only B) · V(only B, B empty)
- = 0.999 · $1,000,000 + 0.001 · $0
- ≈ $999,000

**Noncausal decision rule (V-maximization):** Choose the option A that maximizes V(A).

This is what Lewis calls the "guideline intuition": maximize the expected value you'd discover if you learned the news that your option holds.

---

**The Issue:** C(B full | I take only B) is high not because taking only B *causes* B to be full, but because my taking only B is *evidence* that I'm the kind of agent the predictor predicted would do that, and thus *evidence* that the predictor put money in B.

**But:** The contents of B were already decided! My act now has zero causal effect on whether B is full. Only my nature (how I'm predictable) correlates with B's contents.

**Lewis's insight:** We need to separate:

1. Evidential relations (what my act is evidence for)
2. Causal relations (what my act causally affects)

Noncausal theory makes decisions based on evidential dependence. But **rational decision-making should be based on causal impacts**, not on what your act is evidence for.

**Why?** Because evidence of pre-determined facts can mislead you. The predictor already decided. Your act is mere evidence of that prior decision, not a cause of it.

---

### 0.3 Lewis's Solution: Causal Decision Theory Formalized

**Key Innovation:** Use counterfactual conditionals to formalize causal dependence.

**Causal Value of an Option:**

Instead of V(A) = expected value conditioned on A being true, use:

$$V_C(A) =_{df} \sum_W C(W \text{ if } A) \cdot V(W)$$

where "if A" is counterfactual (subjunctive) conditional, not material conditional.

**What this means:**

- "W holds if A" = in the nearest possible world where A holds, W holds
- C(W if A) = credence that W would hold *were* A to hold
- This asks: if I were to do A, what would the world look like?

**For Newcomb's Problem:**

Causal value of "take only B":

$V_C(\text{only B}) = C(\text{B full if I only take B}) \cdot V(\text{only B, B full}) + C(\text{B empty if I only take B}) \cdot V(\text{only B, B empty})$

Now:

- "If I take only B, is B full?" asks: in the nearest world where I take only B, did the predictor put money there?
- But the predictor's decision was made *before* my act
- So whether B is full is causally independent of my act
- Thus: C(B full if only take B) = C(B full) = 0.5 [or whatever the prior is]

**Similarly:**

- C(B full if take both) = C(B full) = 0.5

So both acts have the same causal value (approximately $500,500 each).

**But wait—this seems to give the wrong answer!**

---

### 0.4 The Sophistication: State-Dependency in Causal Theory

Lewis adds crucial complexity: credences about counterfactuals can depend on your state.

**Define:** A state S that specifies "all facts not causally affected by what you do now"

For Newcomb's problem, this includes:

- Whether the predictor predicted you'd take both (or just B)
- Whether B is full or empty
- Your own nature/dispositions (what you're actually going to do)

**Revised Causal Value:**

$$V_C(A) =_{df} \sum_S C(S) \sum_W C(W \text{ if } A & S) \cdot V(W)$$

$V_C(A) =_{df} \sum_S C(S) \sum_W C(W \text{ if } A & S) \cdot V(W)$

**For Newcomb:**

State S1: "Predictor predicted I'd take only B; B is full"

- V(take both | S1) = V(both boxes, B full) = $1,001,000
- V(take only B | S1) = V(only B, B full) = $1,000,000

State S2: "Predictor predicted I'd take only B; B empty"

- V(take both | S2) = V(both boxes, B empty) = $1,000
- V(take only B | S2) = V(only B, B empty) = $0

State S3: "Predictor predicted I'd take both; B empty"

- V(take both | S3) = V(both boxes, B empty) = $1,000
- V(take only B | S3) = V(only B, B empty) = $0

But here's the key: If I'm in state S1 (predictor predicted I'd take only B), then my taking both causes me to be contradicted by my nature. Lewis says this doesn't happen—I take only B. My acts must be consistent with the state that describes my nature.

So:
$$V_C(\text{take only B}) = C(S1) \cdot V(\text{only B, S1}) + C(S2) \cdot V(\text{only B, S2}) + C(S3) \cdot V(\text{only B, S3})$$
$$= 0.5 \cdot 1,000,000 + 0.5 \cdot 0 = 500,000$$

$$V_C(\text{take both}) = C(S3) \cdot V(\text{both, S3}) + 0 \cdot ... = 0.5 \cdot 1,000$$

Wait, this still seems wrong. Let me reconsider Lewis's formulation...

**Actually, Lewis is more careful.** He uses:

$$V_C(A) = \sum_Z C(Z) V(A & Z)$$

where Z ranges over "news vectors"—the most detailed specification of the world state that doesn't causally depend on your action.

The crucial insight: **If Z specifies that you'll do A (because you're the kind of agent who does A), then Z and A are not independent causally—your nature causes both the state description and your action.**

---

### 0.5 The Three Candidate Theories (Lewis Section 5)

Lewis compares three formalizations of causal value:

**Theory 1 (Gibbard & Harper):**
$$V_{GH}(A) = \sum_Z C(A & Z \text{ if } S) \cdot V(A & Z)$$

Condition on state S (things not under your control), then ask: if I do A and learn about the world-state, what's the expected value?

**Theory 2 (Lewis's preferred version):**
$$V_L(A) = \sum_Z C(Z) \cdot V(A & Z)$$

Sum over news-vectors Z, where each represents the complete state that would obtain if A were true, weighted by your credence that Z is the actual description.

**Theory 3 (Sobel's approach):**
Uses conditional credences and counterfactuals in specific ways to avoid decision instability.

**Key claim:** All three theories agree more than they differ. They're different formalizations of the same insight: **evaluate acts by their causal consequences, not their evidential correlates.**

---

### 0.6 Why This Matters for Carter

**Carter's problem:** Even once we accept causal decision theory, we face a new problem.

Lewis's framework assumes:

3. The agent has perfect introspective access to their own credences
4. The agent can reliably form conditional credences about counterfactuals
5. Credences and dispositions align (your credences about what you'll do match what you actually do)

**Carter shows:** These assumptions fail for agents like us. Even when using Lewis's causal framework, if you're uncertain about your own credences or dispositions, Maximize Expected Value might not be good advice.

**The connection:** Carter's "Alignment" condition and "Guidance" condition are requirements that credences and dispositions not come apart in problematic ways. Without these, even causal MEV fails as guidance.

---

### 0.7 Lewis's Formal Definitions (Summary)

| Concept | Definition | Intuition |
| --- | --- | --- |
| **Credence C(W)** | Degree of belief world W is actual | Subjective probability |
| **Value V(W)** | How satisfactory is world W | Utility; how good is this world |
| **Expected Value V(X)** | Σ_W C(W/X) V(W) | Average value, weighted by credence |
| **Conditional Credence C(X/Y)** | C(X∩Y)/C(Y) | Credence of X given Y |
| **Proposition** | Set of possible worlds | Factual claim that holds at some worlds |
| **Option A** | Element in partition of propositions | Distinct act the agent can perform |
| **Counterfactual Credence C(W if A)** | Credence W would hold if A held | Subjunctive conditional probability |
| **Causal Value V_C(A)** | Σ_Z C(Z) V(A & Z) | Expected value based on causal consequences |

---

### 0.8 Critical Questions

**Before moving to Carter, make sure you can answer:**

6. What is the difference between "if" (material conditional) and "if" (counterfactual)?
7. Why does noncausal theory recommend taking both boxes in Newcomb's problem?
8. Why does this seem irrational?
9. How does Lewis's causal value formula avoid this mistake?
10. What does it mean to "condition on a state S"? Why is this different from conditioning on the news that you did A?
11. What's the relationship between your actual dispositions and the state-space over which you sum in causal value calculations?

---

## Module 1: Foundations of Decision Theory (Original)

*This section continues from the earlier course outline. I'll integrate the formal Lewis material with the accessible exposition.*

### 1.1 What is Decision Theory?

Decision theory answers: *How should an agent decide what to do?*

**Key Concept:** A decision problem has:

- An agent facing uncertainty
- Multiple possible actions
- Multiple possible states of the world
- Outcomes depending on which action is taken in which state
- The agent's preferences over outcomes

**Reading:**

- Carter, Section 1 (Introduction) — 3 pages
- Lewis (1981), Sections 1-3 — foundational framework Carter builds on

**The Two Theories:**

12. **Noncausal Decision Theory** (Lewis's term for standard expected utility theory)
	- Recommended by: Jeffrey (1965), standard textbooks
	- Rule: Maximize V(A) = Σ_W C(W/A) V(W)
	- Problem: Makes decisions based on evidential correlations, not causal effects
13. **Causal Decision Theory** (Lewis's innovation)
	- Recommended by: Lewis (1981), Gibbard & Harper (1978), Skyrms (1980)
	- Rule: Maximize V_C(A) = Σ_Z C(Z) V(A & Z)
	- Advantage: Makes decisions based on what you can causally control
	- Problem (Carter's addition): Assumes perfect credence-disposition alignment

**Reading:**

- Lewis, Sections 1-4 — on Newcomb's problem and why noncausal theory fails
- Skyrms, B. (1982). "Causal Decision Theory" (alternate formulation)

---

### 1.2 Maximize Value vs. Maximize Expected Value

**Two Pieces of Advice:**

14. **Maximize Value (MV):** Do whatever has the most valuable outcome
	- Requires: Perfect knowledge of which act produces the best outcome
	- For Newcomb: "Take only box B" (assuming predictor is reliable)
	- Problem: You can't know which box the predictor actually filled
15. **Maximize Expected Value (MEV):** Do whatever has the highest expected value
	- Requires: Credences about which outcome each act will produce
	- For Newcomb (noncausal): Take both boxes (EV calculation as shown above)
	- For Newcomb (causal): Take only B (EV calculation respects causality)

**Critical distinction Lewis draws:** When you maximize MEV using noncausal methods, you're making your decision partly based on what your act is evidence for—whether the predictor already predicted you'd do it. But you can't change whether the predictor already decided. You can only change what you do now, which causally affects only future outcomes (if any).

**Reading:**

- Carter, Section 1, especially the definitions
- Lewis, Sections 2-3, on the formalization of V(A) and noncausal theory's intuition

---

### 1.3 The Standard Objection: Perfect Action-Guidingness

Why don't we just recommend MV?

**The Objection:** "Perfect action-guidingness is not a plausible requirement on good advice."

Implications:

- We should evaluate advice by how well things go for an agent who tries to follow it
- We must account for both failure rates AND what happens when agents fail
- Good advice needs to be feasible for the kinds of agents we are

**Lewis's response in "Causal Decision Theory":** Exactly right. We can't recommend MV because agents can't reliably discover which act maximizes V. But causal MEV is different from noncausal MEV because it respects the agent's actual causal powers. It tells you to maximize what you can causally affect, not what you're evidence for.

**Carter's response:** But even causal MEV requires perfect introspective access to your own credences and perfect reliability in acting on those credences. When these fail, causal MEV itself becomes infeasible advice.

---

### 1.4 The Central Questions

**Q0 (Lewis's question):** Should decision theory be causal or noncausal?

- Carter assumes causal theory (doesn't engage the broader debate)
- But understands Lewis's reasons for causality

**Q1 (Carter's question):** Can an agent always expect to do best by trying to follow Maximize Expected Value (even when suitably causal)?

Carter's answer: **No.** Even if we accept causal formulations, agents who are uncertain about their own credences and dispositions can't reliably follow MEV.

**Why this matters:**

- Lewis showed we need causality in decision theory
- Carter shows we need even more: we need to account for uncertainty about our own mental states
- Combining these: We need decision theory for agents who are epistemically imperfect about themselves

---

## Module 2: Understanding Error (Builds on Lewis)

### 2.1 Epistemic and Practical Imperfection

Carter's insight: Agents like us make two types of errors, and they interact in ways Lewis didn't fully theorize.

**Epistemic Imperfection:**

- Uncertainty about the world (what Lewis assumes)
- Uncertainty about your own uncertainty (what Lewis downplays; see his footnote 3)
- Example: You're uncertain whether B contains money. You're also uncertain whether you're 50% or 70% confident it does.

**Practical Imperfection:**

- You fail to do what you intend
- You might intend to choose A but end up choosing B
- Or: you intend to maximize causal value but fail to calculate it correctly

**Why Lewis's framework needs extension:**

Lewis says: "Ah, if the agent just conditions on true evidence, they'll have accurate credences about their own mental states going forward."

But Carter asks: "What if the agent is uncertain *about* their uncertainty during the decision? What if they can't reliably know their current credence function?"

This is what requires the extended framework.

---

### 2.2 The Marble Guessing Game Revisited (Lewis + Carter)

Imagine you must guess the number of marbles in a jar.

**Lewis's framework handles:**

- Uncertainty about actual number (external state)
- Calculation of causal value of each guess
- How your act doesn't causally affect the number

**Lewis's framework misses:**

- You're uncertain about whether you're 50% confident or 60% confident the jar contains 40 marbles
- This second-order uncertainty means you can't be certain whether you're following MEV
- If you try to follow "maximize causal value given my credences," you might fail because you're unsure about your credences

**Carter's solution:** Add layers to represent:

16. The actual state of the world
17. Your epistemic state (your first-order credences)
18. Your uncertainty about your epistemic state
19. Your dispositions to act given different epistemic states

---

### 2.3 Higher-Order Uncertainty (Connection to Lewis)

Lewis notes in his footnote 3 that he's ignoring "partial beliefs about who and where and when in the world one is." These are *de se* beliefs: beliefs about oneself rather than about external facts.

Carter extends this: **Add uncertainty about your own credences to this category.**

**Two types of de se uncertainty:**

20. **De se uncertainty about facts:** "Which world am I in? (as distinguished from other possible agents)"
21. **De se uncertainty about credences:** "What credences do I have about that world?"

Both matter for decision theory because both affect what act is rational.

---

### 2.4 How This Connects to Lewis's State-Dependency

Recall Lewis's formula:
$$V_C(A) = \sum_Z C(Z) \cdot V(A & Z)$$

where Z ranges over states that specify "everything not causally affected by your act."

**What counts as part of Z?**

- External world facts (which Lewis emphasizes)
- Your dispositions (which Lewis acknowledges)
- Your actual credence function (which Lewis treats as fixed)
- Your uncertainty about your credence function (which Lewis ignores)

**Carter's insight:** That last item is crucial. If you're uncertain about your credences, then you're uncertain about which Z you're in. And if you're uncertain which Z you're in, you can't calculate causal value accurately.

---

## Module 3: Carter's Formal Framework (With Lewis Background)

### 3.1 Opaque Decision Problems: Lewis Extended

**Standard Savage-style decision problem:**
$$\langle S, O, A, P_s, \nu \rangle$$

where:

- S = states (Lewis's Z's)
- O = outcomes
- A = acts
- P_s = probability function when in state s (Lewis's C(·/S))
- ν = value function (Lewis's V)

**Lewis's extension:** Include Z's (news vectors) that specify your dispositions and nature, not just external facts.

**Carter's further extension:** Make explicit that the agent is uncertain about their own posterior credence function.

**Opaque Decision Problem Δ̂:**
$$\langle \Omega, S, O, A, P, \nu \rangle$$

Same as Savage, but:

- P is now state-dependent in a new way
- P_s represents the agent's beliefs *when in state s* (after potentially learning evidence)
- The agent's prior credence about what P_s will be is represented separately

**Formally:**
Each state s includes:

22. External facts (which marble jar we're looking at)
23. The agent's posterior credence P_s (the credence function they have when in s)

So the agent's *prior* credence about what they'll believe is captured in the probability function P over enriched states.

---

### 3.2 Plans in Lewis's Sense

Lewis defines an option as a proposition the agent can make hold.

**Carter extends this:** A plan is a state-dependent strategy—for each state, which option to pursue.

**Why plans matter:**

Lewis worried that conditioning on "I do A" involves a subtle ambiguity:

- Do I mean: conditioning on the evidence that I'll do A?
- Or: considering the counterfactual of my doing A?

**Carter's solution:** By explicitly working with plans that are functions from states to acts, we make it clear:

- We're computing expected value over all possible states
- We're considering what you'd do in each state
- We're NOT conditioning on your doing A (which would mix evidence and causality)

**Connection to Lewis:**
$$V_C(A) = \sum_Z C(Z) V(A & Z)$$

becomes

$$EV(\pi) = \sum_{s \in S} P(s) \sum_{s' \in S} P([s']|s) \cdot \nu(\pi(s')(s))$$

Both separate:

- The state you're actually in (Z for Lewis; s for Carter)
- What you'd choose given that state (implicit in Lewis; explicit via π in Carter)
- The value of that outcome (V for Lewis; ν for Carter)

---

### 3.3 Enriched States and Lewis's News Vectors

Lewis uses "news vectors" Z to represent complete descriptions of worlds you might learn hold.

**Carter extends this:** Z is now a pair (s, [s']) meaning:

- You're actually in state s
- But you're acting as if you're in state s' (your disposition takes you there)

This makes explicit something Lewis left implicit: **agents can be disposed to act contrary to what they'd calculate.**

**Formal definition:**

An enriched state $\overline{s} = (s, [s'])$ represents:

- The actual state is s
- The agent acts as if s' (perhaps by mistake, or due to prior disposition)

**Enriched state space:**
$$\bar{S} = S \times {[s] : s \in S}$$

---

### 3.4 State-Independent Probability: The Prior Perspective

Lewis's C is a single credence function (the agent's actual beliefs).

**Carter's innovation:** P is a *prior* probability over enriched states, representing:

- How likely the agent antecedently thinks they are to be in each state
- How likely they think they are to act as if they're in each state

**Why this matters:**

$$EV(\pi) = \sum_{s \in S} P(s) \cdot \sum_{s' \in S} P([s']|s) \cdot \nu(\pi(s')(s))$$

P(s) = prior credence you're in state s
P([s']|s) = prior credence conditional on being in s that you'll act as if you're in s'

This allows the agent to account for their expected *susceptibility to error* when evaluating whether trying to follow plan π is a good idea.

**Connection to Lewis:** Lewis's C(Z) (credence in state Z) has to accommodate the agent's beliefs about their own dispositions, but Lewis treats dispositions as relatively fixed. Carter makes them variables, which requires tracking them probabilistically.

---

### 3.5 Credulity Check: Does This Make Sense?

**Good arguments for the framework:**

24. It makes explicit what Lewis left implicit (agent's dispositions)
25. It allows representing cases where credence and disposition come apart
26. It models second-order uncertainty about credences
27. It uses familiar decision-theoretic machinery (just extended)

**Potential concerns:**

28. The enriched state apparatus seems complex; is it necessary?
29. Do realistic agents really have second-order credences about their dispositions?
30. Is P (the prior) even well-defined if the agent is uncertain?
31. Does this framework still respect Lewis's insight about causality?

**Carter's response to concern 4:**

Yes. The framework is neutral about causal vs. noncausal theory. You can implement:

- Causal value: V_C(π(s')(s)) = Σ_Z C(Z at s') V(Z, π(s')(s))
- Noncausal value: V_NC(π(s')(s)) = Σ_Z C(Z | π(s')(s)) V(Z, π(s')(s))

The innovation is the framework for evaluating plans, not a choice about causality.

---

### 3.6 Comparing Lewis and Carter Formally

| Aspect | Lewis's Framework | Carter's Extension |
| --- | --- | --- |
| **Credence function** | Single C over worlds | State-dependent P_s; prior P |
| **States** | Include dispositions implicitly in Z | Explicitly represented via [s'] |
| **Uncertainty** | About world facts and Z | About world, credences, and dispositions |
| **Plans** | Implicit (which option to choose) | Explicit (function π: S → A) |
| **Evaluation** | V_C(A) from single perspective | EV(π) from prior perspective |
| **Purpose** | Solve Newcomb's problem | Solve credence-disposition misalignment |

---

## Module 4: The Alignment Condition (Lewis's Insights Extended)

### 4.1 Lewis on State-Dependence

Lewis argues that to properly apply causal decision theory, we must:

32. Identify the relevant state space Z
33. Condition on that state
34. Only then ask: what's the causal value of this act given this state?

**Key passage from Lewis:**
"We idealize by taking it that the agent's credence function might be stored in his head and might guide his behavior...but one who really did have these functions to guide him would not be so very different from us in his conduct, apart from his supernatural prowess at logic and mathematics and a priori knowledge generally."

**Translation:** Even Lewis admits that real agents can't reliably calculate causal value. But that's okay for his purposes because he's trying to say what's rational, not what's feasible.

**Carter's point:** But if we're giving advice—real advice that agents should try to follow—we need to account for feasibility.

---

### 4.2 Alignment and Lewis's State-Dependence

**Lewis's setup:** Partition states into:

- Z1: "I have dispositions D1"
- Z2: "I have dispositions D2"
- Etc.

For Newcomb's problem: States differ in whether the predictor predicted you'd take both boxes or just B.

**Lewis says:** Calculate V_C(A | Z_i) for each state, then average.

**Carter asks:** But what if your credences at different states don't match your prior credences about your dispositions?

**Alignment condition:**

An agent's prior and posterior credences are aligned at s iff:
$$\forall s' \in S: P_s(s') = P(s'|[s])$$

**What this means in Lewis's terms:**

Lewis needs: Your credence P_s(s') when in state s that you're in state s' must equal your prior credence P(s' | [s]) that you'd be in s' conditional on acting as if you're in s.

**Why Lewis needs this:**

If P_s(s') ≠ P(s' | [s]), then:

- What you believe when in state s doesn't match what you predicted beforehand you'd believe
- This creates a gap between trying to follow causal MEV (which uses P_s) and expecting to do well (which should use P)

---

### 4.3 Proportionality (Fact 1 in Appendix)

Given Guidance (dispositions perfectly reflect credences), Alignment is equivalent to Proportionality:

$$\forall s, s': \frac{P_s(s')}{P_{s'}(s)} = \frac{P(s')}{P(s)}$$

**Intuition:** Posterior credence ratios must match prior credence ratios.

**Connection to Lewis:**

- Lewis assumes conditional credences reflect evidence appropriately: C(X/Y) = C(X ∩ Y)/C(Y)
- Proportionality is a version of this: the *ratios* of credences between different states must be stable
- If they're not stable, then updating on evidence creates systematic bias

**Example where proportionality fails:**

- Prior: P(cumin) = P(caraway) = 1/2
- When you see what looks like cumin: P_cumin(cumin) = 3/4, P_cumin(caraway) = 1/4
- Ratio: 3/1

But:

- Prior credence you'd act as if cumin | actually cumin: P([cumin]|cumin) = 3/4
- Prior credence you'd act as if cumin | actually caraway: P([cumin]|caraway) = 1/4
- Ratio: 3/1 ✓ (matches!)

Wait—does it match or not? Carter's point is that it can fail. Let me reconsider his example...

**Counterfeit Canvas case:**

- When you see the real Rothko: your posterior P_real(real) = 3/4
- When you see the fake: your posterior P_fake(real) = 1/2
- So: P_real(real) / P_fake(real) = 3/2

But:

- Prior credence you'd act as if real | actually real: P([real]|real) = 3/4
- Prior credence you'd act as if real | actually fake: P([real]|fake) = 1/4
- So: P([real]|real) / P([real]|fake) = 3/1

These ratios don't match (3/2 ≠ 3/1), so Proportionality fails.

---

### 4.4 Lewis and Higher-Order Uncertainty

Lewis's footnote 3 discusses agents who are uncertain about their own epistemic situation. He says he's setting this aside.

**Carter's innovation:** Don't set it aside. Make it central.

**Why Lewis was justified in setting it aside:**

- For most ordinary decisions, you can assume you know your own evidence
- You can assume you know (roughly) what you believe
- The hard part is dealing with uncertainty about the external world

**Why Carter is right to bring it back:**

- For agents considering whether to follow advice, second-order uncertainty matters
- You might be uncertain whether you'll successfully follow MEV because you're uncertain about your own credences
- This uncertainty itself should be factored into which plan to adopt

---

## Module 5: Carter's Central Argument (With Lewis Background)

### 5.1 The Extended Alignment Problem

**Lewis shows:** Causal value requires proper state-dependence.

**Carter shows:** Proper state-dependence requires credence-disposition alignment.

**What this means together:**

Lewis's causal decision theory = good guidance when agents satisfy Alignment
Carter's contribution = showing that real agents often don't satisfy Alignment

**Why both are important:**

35. **For defense of causal theory:** Lewis shows causality matters. Carter isn't denying this; he's saying even causal MEV has limits.
36. **For philosophy of advice:** We can't just recommend "maximize causal expected value" without asking: can the agent reliably do this?
37. **For decision theory of imperfect agents:** We need frameworks (like Carter's) for agents whose credences and dispositions come apart.

---

### 5.2 Uneven Evidence Through Lewis's Lens

**The case (Lasonen-Aarnio, 2015):**

You're shown a painting. Either real or fake. If real, authenticity is obvious (75% confidence). If fake, you can't tell (50% confidence).

**Lewis's analysis (adapted):**

States Z1: "Real Rothko" and Z2: "Fake Rothko"

Noncausal value of accepting bet in Z1:
$$V_{NC}(\text{accept} | Z_1) = C(\text{real} | Z_1) \cdot 1.67 + C(\text{fake} | Z_1) \cdot (-1) = 0.75 \cdot 1.67 + 0.25 \cdot (-1) = 0.50$$

Noncausal value in Z2:
$$V_{NC}(\text{accept} | Z_2) = 0.5 \cdot 1.67 + 0.5 \cdot (-1) = 0.33$$

Average (noncausal):
$$V_{NC}(\text{accept}) = 0.5 \cdot 0.50 + 0.5 \cdot 0.33 = 0.42$$

So noncausal MEV recommends declining (EV of declining = 0).

**Causal value** (Lewis-style):

The key question: Does your act cause the painting to be real? No. So:

$$V_C(\text{accept}) = C(Z_1) V(\text{accept}, Z_1) + C(Z_2) V(\text{accept}, Z_2) = 0.5 \cdot 1.67 + 0.5 \cdot (-1) = 0.33$$

Still decline.

**But Carter's point:** If you think your dispositions outrun your credences (you act as if it's real more often than you believe it is), the plan-expected-value calculation can differ!

If when you see the real Rothko, you're 75% confident but 75% disposed to act real, and when fake, 50% confident but 50% disposed to act real—then Alignment holds and causal MEV is good advice.

But if when you see real, you're 75% confident AND disposed to bet, while when fake, you're 50% confident but also 50% disposed to bet, that's Alignment.

The case works as a counterexample to MEV only if Alignment fails.

---

### 5.3 Biased Evidence Through Lewis's Lens

**The case (Clockwise Compass):**

Your sense of direction has a *systematic clockwise bias*. You're certain you're facing the correct direction OR 90° clockwise.

**Lewis's analysis:**

States for each direction: North, East, South, West.

Your dispositions:

- When facing North: 50% act as if North, 50% as if East
- When facing East: 50% act as if East, 50% as if South
- Etc. (systematic pattern)

Your posterior credences:

- When facing North: 50% confident you face North, 50% confident you face East

**Alignment check:**

When facing North:

- P_North(North) = 0.5
- P(North | [North]) = Prior credence you'd act North | actually North

But your prior says: when I'm facing North, I'm 50% likely to act as if I face North. So:

- P(North | [North]) = P(you act as if North | you face North) = 0.5 ✓

Wait, this looks like Alignment holds!

**Actually, the subtlety:** Your credence that you're facing North (50%) doesn't distinguish between "actually North, but mistaken" and "actually East but mistaken." But your disposition does distinguish—you can only be off by 90°.

So there's a bias: you're equally unsure about the state, but your mistakes have structure (always clockwise).

**Lewis's response:** This is fine; that's what states are for. The state includes your dispositions.

**Carter's point:** But if your credences don't track your dispositions precisely, then there's a gap between what causal MEV recommends and what's actually best to try to do.

---

## Module 6: Quiz Blocks (Expanded with Lewis Material)

### 6.1 Comprehensive Knowledge Check: Lewis to Carter

**On Lewis's Framework:**

38. What is Newcomb's problem? Why does noncausal decision theory get it wrong?
39. State Lewis's causal value formula: V_C(A) = Σ_Z C(Z) V(A & Z). Explain each component.
40. What's the difference between:
	- C(X/Y) = conditional credence (evidential dependence)
	- C(X if A) = counterfactual credence (causal dependence)
41. In Newcomb's problem, show using Lewis's formula why causal MEV recommends taking only box B.
42. Lewis emphasizes that Z must include facts about your dispositions/nature. Why is this?
43. What does Lewis mean by "the news"? How does distinguishing news from causality help with Newcomb?

---

**Bridging Lewis to Carter:**

44. Carter's framework uses enriched states (s, [s']). How is this related to Lewis's inclusion of dispositions in Z?
45. What is the state-independent probability P in Carter's framework? What is it a probability over?
46. Explain the formula EV(π) = Σ_s P(s) · Σ_{s'} P([s']|s) · ν(π(s')(s)). How does this relate to Lewis's V_C(A)?
47. What new type of uncertainty does Carter add to Lewis's framework? Why does this require extending Lewis?

---

**On the Formal Concepts:**

48. Define formally: what does it mean for credences to be aligned at state s?
49. Given Guidance, when is Alignment equivalent to Proportionality?
50. In the Counterfeit Canvas case, show that:
	- Noncausal MEV recommends declining
	- Causal MEV (Lewis-style) recommends declining
	- But the optimal plan recommends accepting
51. Why does the clockwise bias case show Alignment failing, whereas a uniform 50-50 uncertainty might not?
52. What's the relationship between:
	- Lewis's "state-dependence" requirement
	- Carter's "Alignment" condition
	- The possibility of misalignment between credences and dispositions

---

### 6.2 Technical Calculation Exercise

**Working through a full example:**

Consider a simple decision problem:

**Setup:**

- States: {Real, Fake} (the painting is real or counterfeit)
- Acts: {Accept bet, Decline bet}
- Values: Real painting + correct guess = +$10; Real painting + wrong guess = -$1; Fake painting + any guess = -$1
- Prior credence: P(Real) = P(Fake) = 0.5

**Your credences and dispositions:**

- When facing real: You're 75% confident it's real, and 75% disposed to guess "real"
- When facing fake: You're 50% confident it's real, and 50% disposed to guess "real"
- You're certain of these facts about yourself

**Calculation 1: Noncausal MEV**

If you accept and guess real:

- EV = P(Real) · E[value | you guess real, it's real] + P(Fake) · E[value | you guess real, it's fake]
- = 0.5 · (0.75 · 10 + 0.25 · (-1)) + 0.5 · (0 · 10 + 1 · (-1))
- = 0.5 · 7.25 + 0.5 · (-1)
- = 3.125

If you decline:

- EV = 0

So noncausal MEV says: Accept and guess real.

---

**Calculation 2: Causal MEV (Lewis)**

Does your act cause the painting to be real? No. So:

If real and you accept/guess real: V = 10
If real and you accept/guess fake: V = -1
If fake and you accept/guess real: V = -1
If fake and you accept/guess fake: V = -1

If you accept and guess real:

- V_C = P(Real) · 10 + P(Fake) · (-1) = 0.5 · 10 + 0.5 · (-1) = 4.5

If you decline:

- V_C = 0

So causal MEV also says: Accept and guess real.

---

**Calculation 3: Plan Expected Value (Carter)**

Plan π1: If real, accept & guess real; if fake, accept & guess real
Plan π2: If real, accept & guess real; if fake, decline

For Plan π1:

When actually real:

- You're 75% confident it's real → act as if real → accept & guess real → V = 10
- You're 25% confident it's fake → act as if fake → accept & guess real → V = 10
- EV = 10

When actually fake:

- You're 50% confident it's real → act as if real → accept & guess real → V = -1
- You're 50% confident it's fake → act as if fake → accept & guess real → V = -1
- EV = -1

Overall: EV(π1) = 0.5 · 10 + 0.5 · (-1) = 4.5

For Plan π2:

When actually real:

- You're 75% disposed to act as if real → accept & guess real → V = 10
- You're 25% disposed to act as if fake → decline → V = 0
- EV = 0.75 · 10 + 0.25 · 0 = 7.5

When actually fake:

- You're 50% disposed to act as if real → accept & guess real → V = -1
- You're 50% disposed to act as if fake → decline → V = 0
- EV = 0.5 · (-1) + 0.5 · 0 = -0.5

Overall: EV(π2) = 0.5 · 7.5 + 0.5 · (-0.5) = 3.5

**Result:** Plan π1 > Plan π2 > Declining. Causal MEV and plan-MEV agree here.

But if credences and dispositions were misaligned, they could diverge!

---

## Module 7: The Broader Landscape (Lewis and Beyond)

### 7.1 How Lewis Frames the Debate

Lewis (1981) identifies three main versions of causal decision theory:

53. **Gibbard & Harper's approach:** Emphasizes counterfactuals and news
54. **Skyrms's approach:** Uses probability of causal dependencies
55. **Sobel's approach:** Adds stability requirements

**Lewis's conclusion:** They all agree more than they differ.

---

### 7.2 How Carter Extends the Debate

**Where Lewis left off:**

- Causal vs. noncausal theory is settled: causality matters
- The state-space needs to include dispositions
- Rational choice = maximize causal value

**Where Carter picks up:**

- But what if agents are uncertain about their own causal value calculations?
- What if credences and dispositions don't align?
- What if agents can't reliably access their own mental states?

**Synthesis:** Lewis provides the foundation (causality). Carter provides the extension (misalignment).

---

### 7.3 Additional Reading Guide (Lewis Priority)

**Essential:**

- Lewis (1981) "Causal Decision Theory" — foundational; read all
- Carter (2026) Sections 1-4 — Carter's main argument

**Very important:**

- Gibbard & Harper (1978) — Lewis compares with this; good formalization
- Lasonen-Aarnio (2015) — Introduces Uneven Evidence case
- Gallow (2021) — On updating rules respecting misalignment

**Important for context:**

- Skyrms (1982) — Alternative formalization of causality
- Schoenfield (2017) — On why standard updating fails under uncertainty
- Egan (2008) — On belief-action divergence

**Advanced (after you master Carter):**

- Hoek (2022) — On action and epistemology
- Isaacs & Russell (2023) — On decision theory without luminosity
- Elga & Rayo (2021) — On principled fragmentation

---

## Module 8: Constructing Your Response (Updated)

### 8.1 Positioning Relative to Lewis

Before developing your response to Carter, clarify: Are you defending Lewis's framework or extending it?

**Option A: Defend Lewis**
"Carter's framework is more complex than needed. Lewis already shows that causal decision theory handles these cases once we properly track dispositions."

**Option B: Accept Lewis + Carter**
"Carter is right that Lewis doesn't go far enough. We need explicit representation of credence uncertainty."

**Option C: Return to Lewis, critique Carter**
"Lewis shows causality is the right framework. Carter's apparatus makes it too complicated. We should simplify Carter's model while preserving his insights."

**Option D: Question Lewis, via Carter**
"Carter's problems suggest Lewis's framework itself is limited. We need a decision theory for agents with even more fundamental epistemic limitations."

---

### 8.2 Five Response Strategies (Lewis-Aware)

**Response Type A: Defend Lewis's Sufficiency**

Claim: Lewis's state-dependence already handles misalignment.

Arguments:

- Lewis says states include dispositions; that's what matters
- Carter's enriched states are just a formal way of making this explicit
- If agents carefully specify their state-space, Alignment holds
- Therefore, misalignment isn't a deep problem, just a formal oversight

How to develop:

- Show that Lewis's framework, properly formalized, implies Alignment when Z's are chosen correctly
- Argue Carter's cases involve improperly specified state-spaces
- Once Z's are complete, Alignment follows

Weakness: Carter explicitly allows agents to be uncertain about their complete state-space.

---

**Response Type B: Challenge Carter's Framework (from Lewis)**

Claim: Enriched states make the problem worse, not better.

Arguments:

- Lewis's C(W if A) already handles counterfactuals beautifully
- Adding [s'] layers introduces new uncertainty without clear value
- A more elegant solution: use Lewis's state-dependence more carefully
- Agents don't really need to model their own error-rates formally

How to develop:

- Show that simple Lewis setups (properly formulated) make Carter's cases disappear
- Critique enriched states as overcomplicating
- Defend Lewis's implicit treatment of dispositions

Weakness: Carter's point is that agents *are* uncertain about dispositions; ignoring this is unrealistic.

---

**Response Type C: Restrict MEV (preserving Lewis)**

Claim: Lewis and Carter both right; MEV holds for alignment cases.

Arguments:

- Lewis shows causality matters; he's right about that
- Carter shows alignment is required for MEV to be safe advice
- But alignment isn't rare or exotic; it's the normal case
- Exception cases are theoretically interesting but practically marginal
- Therefore: defend Lewis's causal MEV for the typical agent

How to develop:

- Show misalignment requires specific combinations of credence-patterns and dispositions
- Argue real agents usually have these aligned (why?)
- Concede Carter's logical point but deny practical importance

Weakness: Must defend why Alignment typically holds; isn't Carter showing it can fail in realistic cases?

---

**Response Type D: Improve Lewis's Framework (accepting Carter)**

Claim: Carter's right; we need to formalize credence-disposition alignment better.

Arguments:

- Lewis's insights about causality are sound
- But Lewis undertheorized the agent's uncertainty about their own model
- Carter's apparatus is a start, but can be simplified
- Better approach: incorporate credence-learning into the state-space
- This preserves Lewis while fixing Carter's complexity

How to develop:

- Propose a model that combines Lewis's elegance with Carter's insights
- Show it handles Carter's cases
- Argue it's more parsimonious than Carter's enriched states
- Connect to recent work on updating and self-knowledge

Strength: Shows deep engagement with both frameworks

Weakness: Requires defending your own novel approach

---

**Response Type E: Extend the Problem Beyond Carter**

Claim: Carter's problems suggest even deeper issues.

Arguments:

- Misalignment is just one form of agent imperfection
- Consider agents with systematic biases in their introspection
- Consider agents who can't even model their own error-rates
- Lewis and Carter both assume the agent can comprehend their full state-space
- But maybe fundamental limits prevent this
- This suggests decision theory must be even more localized than either Lewis or Carter suggests

How to develop:

- Identify additional failure-modes beyond misalignment
- Show they arise from similar sources (agent uncertainty about themselves)
- Suggest decision theory must give up on universal guidance
- Connect to themes in epistemic humility, bounded rationality

Strength: Original contribution; shows theoretical depth

Weakness: Risk of being too negative; must offer some positive guidance

---

## Module 9: Final Self-Assessment

Before submitting your response, verify:

**On Lewis:**

- [ ] I can explain Newcomb's problem and why noncausal theory fails
- [ ] I can state Lewis's causal value formula and what each term represents
- [ ] I understand the distinction between evidential and causal dependence
- [ ] I can show how Lewis's theory avoids the "make good news" problem
- [ ] I can relate Lewis's state-space to Carter's enriched states

**On Carter:**

- [ ] I can state the Alignment condition formally and intuitively
- [ ] I can work through Carter's main cases (Counterfeit Canvas, Clockwise Compass) with calculations
- [ ] I understand why Alignment fails in these cases
- [ ] I can explain the connection between Lewis's state-dependence and Carter's alignment
- [ ] I grasp the broader significance: we need decision theory for epistemically imperfect agents

**On the Synthesis:**

- [ ] I've chosen a clear response strategy
- [ ] I understand what Lewis-defender vs. Carter-acceptor positions would say about my approach
- [ ] I can anticipate the strongest objections
- [ ] My response engages with formal calculations, not just conceptual analysis
- [ ] I explain why the debate matters beyond academic interest

**On Writing Quality:**

- [ ] My introduction clearly states what I'm arguing
- [ ] I reconstruct both Lewis and Carter fairly before critiquing
- [ ] I use concrete examples alongside formal arguments
- [ ] I anticipate objections and respond
- [ ] My conclusion ties the argument together and suggests implications

---

## Suggestions for Improving This Expanded Course

### 1. Add Formal Proofs Section

- Walk through Lewis's proofs that causal value avoids Dutch books
- Work through Carter's Theorem 1 proof (Appendix)
- Students should verify key steps themselves

### 2. Create Comparison Charts

- Noncausal MEV vs. Causal MEV vs. Plan MEV (table of which recommends what)
- Lewis vs. Carter vocabulary (states, credences, plans, etc.)
- Different misalignment scenarios and their features

### 3. Include "Common Errors" Section

- Confusing C(X/Y) with C(X if Y)
- Treating enriched states as redundant
- Assuming Guidance must hold
- Miscalculating EV(π) by using posterior instead of prior

### 4. Add Interactive Calculators

- Spreadsheet template for computing EV(π) given credences/dispositions
- Tool for checking whether Alignment/Guidance/Proportionality hold in specific cases
- Simulation showing how misalignment affects outcomes

### 5. Create "Bridging Papers" Annotations

- Mark-up of Lewis showing where Carter's framework would extend him
- Mark-up of Carter showing where Lewis's concepts ground his
- Visual flow chart of conceptual dependencies

### 6. Expand Reading Guide by Debate Position

- If defending Lewis: which papers support your position?
- If accepting Carter: which papers deepen the problem?
- If extending both: which papers point toward synthesis?

### 7. Add "Teaching Exercises" for Each Module

- Design your own Newcomb-like case for Lewis's framework
- Construct a misalignment case and calculate whether MEV survives
- Reformulate Carter's definition in your own notation

---

## Course Conclusion

You now have a path from Lewis's foundational work on causality in decision theory through Carter's extension on credence-disposition misalignment.

**The intellectual progression:**

56. **Lewis (1981):** Decision theory must be causal, not merely evidential
57. **Carter (2026):** But even causal theory fails when credences and dispositions misalign
58. **Your contribution:** Either defend one position, extend both, or propose something new

**What you should be able to do:**

- Read Lewis fluently; understand his state-space formalism
- Read Carter fluently; work through his enriched state apparatus
- Construct your own decision problems and evaluate them both ways
- Identify which response strategy is most defensible
- Write a research response that engages substantively with both thinkers

**The stakes:** This debate concerns whether there can be fully general rational advice for decision-making. Lewis showed yes, but only if causality matters. Carter shows that even with causality, the answer is no—not for epistemically imperfect agents. The question now is: what should we conclude from this? That's for you to decide.

---

**Final Note:** The best research responses often come from taking seriously both what Carter says and what Lewis says, then asking: What does each philosopher get right, and where do they fail to see further? Your job isn't to defend orthodoxy or embrace radicalism, but to push the conversation forward.

---

**Course Version 2.0 (Expanded with Lewis) | Last Updated: January 2026**

# David Lewis's Formal Apparatus: Technical Supplement

## Complete Guide to Lewis's Formalism from "Causal Decision Theory" (1981)

---

## Part I: Basic Definitions and Notation

### Section 1: Possible Worlds and Credence Functions

**Definition 1.1: Possible World**

A possible world W is a complete specification of how things are—not just how things are in the world, but which world is the actual one, treated as having the property that exactly one world is actual.

In the context of a decision problem, we consider a finite or countable set of possible worlds:
$$\mathcal{W} = {W_1, W_2, ..., W_n}$$

**Definition 1.2: Credence Function**

A credence function C assigns to each possible world W a number C(W) ∈ [0,1] representing the agent's degree of belief that W is the actual world.

**Constraints on C:**

59. **Normalization:** $$\sum_{W \in \mathcal{W}} C(W) = 1$$
60. **Non-negativity:** C(W) ≥ 0 for all W
61. **Countable additivity:** For any countable partition {W_i}:
$$C\left(\bigcup_i W_i\right) = \sum_i C(W_i)$$

**Interpretation:** C represents the agent's subjective probability before receiving any evidence in this decision situation. It's the agent's prior credence.

---

### Section 2: Propositions and Extended Credence

**Definition 2.1: Proposition**

A proposition X is a set of possible worlds. We say X holds (or is true) at world W iff W ∈ X.

**Extended Credence Function:**

For propositions, extend C by summing over constituent worlds:
$$C(X) = \sum_{W \in X} C(W)$$

**Intuition:** The credence of a proposition is the sum of credences of worlds where it's true.

**Example:**
Suppose W = {W₁, W₂, W₃, W₄} and:

- C(W₁) = 0.2, C(W₂) = 0.3, C(W₃) = 0.25, C(W₄) = 0.25

If X = {W₁, W₂} (the proposition "it will rain"), then:
$$C(X) = C(W_1) + C(W_2) = 0.2 + 0.3 = 0.5$$

---

### Section 3: Value Functions

**Definition 3.1: Value Function**

A value function V assigns to each possible world W a real number V(W) representing how satisfactory or desirable that world is to the agent.

**Properties:**

- V has an arbitrary zero point and unit (like temperature in Celsius vs. Fahrenheit)
- V(W) can be positive, negative, or zero
- V need not be bounded
- The actual numerical value only matters relative to other worlds

**Extended Value:**

For a proposition X, define expected value as:
$$V(X) =*{df} \sum*{W \in X} \frac{C(W)}{C(X)} V(W) = \sum_{W \in X} C(W|X) V(W)$$

This is a credence-weighted average of values.

**Proof that this is well-defined:**

Given C(X) > 0, we can write:
$$V(X) = \frac{\sum_{W \in X} C(W) V(W)}{C(X)}$$

This is the weighted average where weights are C(W)/C(X) for W ∈ X, and:
$$\sum_{W \in X} \frac{C(W)}{C(X)} = \frac{1}{C(X)} \sum_{W \in X} C(W) = \frac{C(X)}{C(X)} = 1$$

So the weights sum to 1, making this a proper weighted average.

---

### Section 4: Conditional Credence

**Definition 4.1: Conditional Credence**

For propositions X and Y with C(Y) > 0:
$$C(X|Y) =_{df} \frac{C(X \cap Y)}{C(Y)}$$

**Interpretation:** C(X|Y) is the agent's credence that X is true, conditional on learning that Y is true (via appropriate conditionalization on evidence).

**Conditional Credence as a Credence Function:**

For fixed Y with C(Y) > 0, define:
$$C(-|Y)(W) = C(W|Y)$$

This defines a new credence function on worlds conditional on Y. We verify it's a proper credence function:

62. $\sum_W C(W|Y) = \sum_W \frac{C(W \cap Y)}{C(Y)} = \frac{C(Y)}{C(Y)} = 1$ ✓
63. C(W|Y) ≥ 0 for all W ✓

**Key insight:** Lewis treats conditional credence C(-|Y) as itself a credence function, which will be crucial for state-dependence.

---

## Part II: Decision Rules and Basic Concepts

### Section 5: Options and Partitions

**Definition 5.1: Partition**

A partition Π of (a subset of) possible worlds is a set of propositions such that:

64. **Mutual exclusivity:** For any two distinct X, Y ∈ Π, X ∩ Y = ∅
65. **Exhaustiveness:** ⋃_{X ∈ Π} X includes all worlds under consideration

**Definition 5.2: Option**

An option A is a member of a partition of possible worlds. The partition represents the agent's available options in the decision problem.

**Narrowest Options:**

Lewis defines the agent's options as the **narrowest options**—those that cannot be divided into finer sub-options under the agent's control.

**Example:** Partition for Newcomb's problem:

- A₁: Take only box B
- A₂: Take both boxes

These are the agent's options (assuming no finer divisions are available).

---

### Section 6: Realizing Options and the Object of Decision

**Definition 6.1: Realize an Option**

The agent realizes an option A iff the agent acts in such a way as to make A true (i.e., to make A hold).

**Definition 6.2: The Business of Decision Theory**

The business of decision theory is to specify which of the agent's alternative options it would be rational for him to realize.

**Rational Decision Rule:**

A decision rule specifies, for each decision problem, which option(s) are rational to realize. The main competitors are:

66. **Maximize Value (MV):** Realize an option that has the highest actual value (maximize V(A))
67. **Maximize Expected Value (MEV):** Realize an option that has the highest expected value (maximize the expected value of A, conditional on A)
68. **Maximize Causal Value:** Realize an option whose causal consequences have the highest expected value

---

## Part III: The Decision Rules Formally

### Section 7: Noncausal Decision Rule (V-Maximization)

**Definition 7.1: V-Maximal Option**

An option A is V-maximal (or MEV-maximal) iff there is no other option A' such that V(A') > V(A).

**Noncausal Decision Rule:**
$$\text{Maximize } V(A) = \sum_{W \in A} C(W|A) V(W)$$

or equivalently, using the partition form:
$$\text{Maximize } V(A) = \sum_{A_i \in \text{Partition}} C(A_i | A) V(A \cap A_i)$$

**Intuition (Lewis's formulation):**

"How would you like to find out that A holds? Your estimate of the value of the actual world would then be V(A), if you learn by conditionalizing on the news that A. So you would like best to find out that the V-maximal one of the A's holds (or one of the V-maximal ones, in case of a tie). But it's in your power to find out that whichever one you like holds, by realizing it. So go ahead—find out whichever you'd like best to find out!"

**Problem:** This rule "makes the news" you prefer, but the news might not correlate with good outcomes if the news is evidence of something beyond your control.

---

### Section 8: Counterfactual Conditionals and Causal Reasoning

Lewis's foundational insight: use counterfactual conditionals to formalize what we mean by "causal dependence."

**Definition 8.1: Counterfactual Conditional**

The counterfactual conditional "if it were that A, then it would be that B" is written A ⊳ B. This is not equivalent to the material conditional ¬A ∨ B.

**Lewis's Truth Condition for Counterfactuals:**

A ⊳ B is true iff B holds in all possible worlds closest to the actual world where A holds.

More precisely (in Lewis's semantics):
$$A \text{ ⊳ } B \text{ is true at } W \text{ iff } B \text{ holds in all } (A \text{-worlds})_W \text{ of maximum similarity to } W$$

where $(A\text{-worlds})_W$ = the set of worlds where A is true and which most closely resemble W.

**Interpretation for Decision Theory:**

When deciding whether to do A, we ask: in the closest possible world where I do A, what outcomes result? This avoids being misled by mere evidence.

---

### Section 9: Causal Value: Definition and Intuition

**Definition 9.1: Credence in a Counterfactual**

For counterfactual conditional A ⊳ B, define:
$$C(B \text{ if } A) = \text{Credence that } B \text{ would hold if } A \text{ were to hold}$$

Formally, this can be defined using imaging or other methods in the literature on counterfactuals, but Lewis treats it as primitive.

**Definition 9.2: Causal Value (Initial Version)**

$$V_C(A) =*{df} \sum*{W} C(W \text{ if } A) \cdot V(W)$$

**Intuition:** The causal value of an option is the credence-weighted average of values of worlds that would result if you were to perform that option.

**Key Contrast with Noncausal MEV:**

- Noncausal MEV: V(A) = Σ_W C(W|A) V(W) — uses conditional credence (evidence)
- Causal value: V_C(A) = Σ_W C(W if A) V(W) — uses counterfactual credence (causality)

The difference: C(W|A) asks "if I learn that A, what's my credence that W?" while C(W if A) asks "if I were to do A, what's my credence that W would result?"

---

## Part IV: State-Dependence and Sophistication

### Section 10: The Sophistication Lemma

Lewis's key move: the credence function itself can be state-dependent.

**Definition 10.1: State Space**

Define a state space S partitioning the worlds into states. Typically, S includes:

- Relevant external facts (which Newcomb predictor we're facing)
- Facts about the agent's nature/dispositions (would I take both boxes or just B?)
- Any other causally independent facts

**Intuition:** A state S is a complete specification of everything that won't be causally affected by what the agent does now.

**State-Dependent Credence Function:**

For each state S in the partition S, an agent might have a different conditional credence function:
$$C(-|S) \text{ or equivalently } P_S$$

where P_S represents the agent's credence function conditional on being in state S.

---

### Section 11: Sophisticated Causal Value

**Definition 11.1: Causal Value (Sophisticated Version)**

$$V_C(A) =*{df} \sum*{S \in \mathcal{S}} C(S) \sum_{W} C(W \text{ if } A & S | S) \cdot V(W)$$

or using notation P_S for C(-|S):

$$V_C(A) = \sum_{S \in \mathcal{S}} C(S) \sum_{W \in S} P_S(W \text{ if } A) \cdot V(W)$$

**Meaning:**

For each possible state S (weighted by your credence that you're in S):

69. Assume you're in state S
70. Among worlds in state S, weight them by the credence (conditional on S) that you'd be in them if you did A
71. Sum the values of those worlds
72. Average over all states, weighted by C(S)

---

### Section 12: News Vectors and State Specification

**Definition 12.1: News Vector**

A news vector Z is a maximally specific description of a state—the finest-grained partition of worlds that are causally independent of the agent's action.

**Lewis's formulation:**

$$V_C(A) = \sum_{Z} C(Z) V(A & Z)$$

where the sum is over all news vectors Z, and we compute:

- C(Z) = credence that news vector Z is the actual state
- V(A & Z) = value of the world resulting from doing A in state Z

**Relationship to state-dependent formulation:**

If we partition worlds finely enough, V(A & Z) is determined, and:
$$V_C(A) = \sum_Z C(Z) V(A & Z) = \sum_S C(S) [V(A & S) \text{ averaged over possible worlds in } S]$$

---

## Part V: Newcomb's Problem Analyzed Formally

### Section 13: Setting Up Newcomb's Problem

**Worlds and States:**

Define four types of worlds:

- W₁: Predictor predicted Both; B is empty; I take Both → value = $1,000
- W₂: Predictor predicted Only B; B is full; I take Only B → value = $1,000,000
- W₃: Predictor predicted Both; B is empty; I take Only B → value = $0
- W₄: Predictor predicted Only B; B is full; I take Both → value = $1,001,000

However, what *I can causally affect* is only what I do. The predictor's action is already determined.

**State Space (News Vectors):**

Define states as facts about what the predictor did:

- S₁: Predictor predicted Both; B is empty
- S₂: Predictor predicted Only B; B is full
- S₃: Predictor predicted Only B; B is empty (unusual, but possible)

Prior credences:

- C(S₁) = 0.5 (predictor predicts Both half the time)
- C(S₂) = 0.49 (predictor predicts Only B and correctly predicts our response, which happens 49% of the time)
- C(S₃) = 0.01 (predictor makes a rare mistake)

**Actions (Options):**

Partition:

- A₁: Take Only B
- A₂: Take Both

---

### Section 14: Noncausal MEV for Newcomb

**Value Calculation:**

V(Only B) = credence-weighted average value if you learn you took Only B
$$V(\text{Only B}) = C(S_2 | \text{Only B}) V(\text{Only B} & S_2) + \text{other terms}$$

Using Bayes' theorem:
$$C(S_2 | \text{Only B}) = \frac{C(\text{Only B} | S_2) C(S_2)}{C(\text{Only B})}$$

If predictor is reliable, C(Only B | S₂) ≈ 1 (if predictor predicted Only B, you probably did it).

Approximately:
$$V(\text{Only B}) \approx 0.49 \cdot 1,000,000 + 0.01 \cdot 0 + 0.5 \cdot 0 \approx 490,000$$

V(Both):
$$V(\text{Both}) = C(S_1 | \text{Both}) V(\text{Both} & S_1) + \text{other terms}$$

If reliable: C(Both | S₁) ≈ 1
$$V(\text{Both}) \approx 0.5 \cdot 1,000 + 0.49 \cdot 1,001,000 + 0.01 \cdot 1,000 \approx 490,500$$

**Noncausal Conclusion:** Take Both (slightly higher expected value).

**Problem:** This recommendation is based on evidence of what the predictor already did. The evidence is good news (if you take Both and still get money, the predictor gave you money). But it's *mere evidence*, not causation.

---

### Section 15: Causal Value for Newcomb

**Causal Analysis:**

Using the sophisticated causal value formula:
$$V_C(A) = \sum_S C(S) V(A & S)$$

For state S₁ (predictor predicted Both; B is empty):

- If I take Only B, the world is: I take Only B, get $0
- If I take Both, the world is: I take Both, get $1,000
- V(Only B & S₁) = 0
- V(Both & S₁) = 1,000

For state S₂ (predictor predicted Only B; B is full):

- If I take Only B, the world is: I take Only B, get $1,000,000
- If I take Both, the world is: I take Both, get $1,001,000
- V(Only B & S₂) = 1,000,000
- V(Both & S₂) = 1,001,000

For state S₃ (predictor predicted Only B; B is empty):

- V(Only B & S₃) = 0
- V(Both & S₃) = 1,000

**Crucial observation:** Given that I'm in state S₂ (predictor predicted Only B), whether I actually do "Only B" or not doesn't change whether B is full. The contents were already determined!

So:
$$V_C(\text{Only B}) = C(S_1) \cdot 0 + C(S_2) \cdot 1,000,000 + C(S_3) \cdot 0 = 0.49 \cdot 1,000,000 = 490,000$$

$$V_C(\text{Both}) = C(S_1) \cdot 1,000 + C(S_2) \cdot 1,001,000 + C(S_3) \cdot 1,000$$
$$= 0.5 \cdot 1,000 + 0.49 \cdot 1,001,000 + 0.01 \cdot 1,000 \approx 490,500$$

Wait, this still says Both! That's not right...

---

### Section 16: The Subtlety—Which State Am I Actually In?

**The Key Issue Lewis Addresses:**

There's a tension: If I'm the kind of agent the predictor predicted would take Both, then I will take Both. If I'm the kind of agent the predictor predicted would take Only B, then I will take Only B.

My *nature* (which the predictor detected) determines what I'll do. So the state I'm in includes facts about my nature.

**Revised State Space (Including My Nature):**

- S₁: Predictor predicted Both; I'm the kind of agent who takes Both; B is empty
- S₂: Predictor predicted Only B; I'm the kind of agent who takes Only B; B is full
- S₃: Predictor predicted Only B; I'm the kind of agent who takes Both; B is empty (agent beats predictor)

Given these states, what I do is (roughly) determined by my nature.

But here's the puzzle: How can my *choice* between Both and Only B be free if my nature determines it?

**Lewis's Resolution:**

The agent can still rationally choose. The choice is rational if it maximizes V_C(A). But the choice will also be determined by the agent's nature. There's no contradiction—just a deterministic agent making a rational choice.

**Refined Calculation:**

In this framework:

- If my nature is "take Both" (S₁), then no matter what I deliberate, I'll end up taking Both
- If my nature is "take Only B" (S₂), then I'll take Only B

Given this, the *only rational thing for me to do* depends on my nature:

- If in S₁: taking Both is rational (maximizes V_C)
- If in S₂: taking Only B is rational (maximizes V_C)

But since I am (let's say) in S₂ (the predictor correctly predicted I'd take Only B), the rational choice is Only B, and that's what I'll do.

---

## Part VI: Comparing Theories

### Section 17: Three Versions of Causal Decision Theory

Lewis compares three leading formulations, arguing they're more similar than they appear:

**Theory 1 (Gibbard & Harper):**

$$V_{GH}(A) = \sum_Z C(A & Z | U) \cdot V(A & Z)$$

where U is the agent's *entire evidence* or *epistemic situation*.

This asks: "Conditional on my epistemic situation U, if I were to do A, what would be the expected value?"

---

**Theory 2 (Lewis's version):**

$$V_L(A) = \sum_Z C(Z) \cdot V(A & Z)$$

This asks: "For each possible state of nature Z (weighted by my credence), if I do A in state Z, what's the value?"

**Relationship to Gibbard & Harper:**

If C(A & Z | U) = C(A & Z) (i.e., what you'll do is independent of your evidence, conditional on your nature), then the two formulas are equivalent.

---

**Theory 3 (Sobel's version):**

Adds stability conditions to avoid decision instability. For example, if making a choice causes you to update your credences, this could make different acts seem rational at different times. Sobel imposes constraints to prevent this pathology.

$$V_{Sobel}(A) = \sum_Z C(Z) \cdot [V(A & Z) \text{ relative to your attitudes at the time of choice}]$$

---

### Section 18: Lewis's Conclusion on the Theories

Lewis argues all three theories share one common idea:

**Core Insight:** Rational choice maximizes the expected value of outcomes, weighted by credence in the **causal consequences** of your action, not the **evidential correlates**.

The differences are mainly:

73. **Emphasis:** What aspects of the situation deserve emphasis?
74. **Formulation:** How to formally express the common insight?
75. **Stability:** Whether additional constraints are needed?

But they agree fundamentally: **causality, not mere evidence, should guide rational choice.**

---

## Part VII: Technical Proofs and Derivations

### Section 19: Additive and Averaging Rules

**Lemma 19.1 (Rule of Additivity for Credence):**

For any partition Z of propositions:
$$C(X) = \sum_Z C(X \cap Z)$$

**Proof:**

$$C(X) = \sum_{W \in X} C(W) = \sum_{W \in X} \sum_{Z: W \in Z} C(W) = \sum_Z \sum_{W \in X \cap Z} C(W) = \sum_Z C(X \cap Z)$$

(The middle step uses that Z is a partition, so each W is in exactly one element of Z.)

---

**Lemma 19.2 (Additivity for Products of Credence and Value):**

For any partition Z:
$$C(X) V(X) = \sum_Z C(X \cap Z) V(X \cap Z)$$

**Proof:**

$$C(X) V(X) = C(X) \sum_Z \frac{C(X \cap Z)}{C(X)} V(X \cap Z) = \sum_Z C(X \cap Z) V(X \cap Z)$$

(Uses the definition of V(X) as a weighted average.)

---

**Lemma 19.3 (Averaging Rule for Expected Value):**

For any partition Z:
$$V(X) = \sum_Z C(Z | X) V(X \cap Z)$$

**Proof:**

$$V(X) = \sum_{W \in X} \frac{C(W)}{C(X)} V(W) = \sum_Z \sum_{W \in X \cap Z} \frac{C(W)}{C(X)} V(W)$$

$$= \sum_Z \frac{C(X \cap Z)}{C(X)} \cdot \left( \sum_{W \in X \cap Z} \frac{C(W)}{C(X \cap Z)} V(W) \right)$$

$$= \sum_Z C(Z | X) \cdot V(X \cap Z)$$

---

### Section 20: Equivalence of Value Formulations

**Theorem 20.1:**

The following expressions for expected value are equivalent:

76. $$V(X) = \sum_{W \in X} C(W|X) V(W)$$
77. $$V(X) = \sum_Z C(Z|X) V(X \cap Z)$$ (where Z is a partition)
78. $$V(X) = \sum_v C([V=v]|X) \cdot v$$ (where [V=v] is the proposition that value equals v)

**Proof of equivalence:**

(1) ⟺ (2): By the Averaging Rule (Lemma 19.3).

(1) ⟹ (3): For any partition of value-levels:

$$V(X) = \sum_{W \in X} C(W|X) V(W) = \sum_v \sum_{W \in X: V(W)=v} C(W|X) \cdot v = \sum_v v \cdot C([V=v]|X)$$

(3) ⟹ (1): Reverse the calculation above.

**Significance:** These different formulations are mathematically equivalent, but each highlights different aspects:

- (1) emphasizes worlds
- (2) emphasizes states or partitions
- (3) emphasizes value levels

---

## Part VIII: Common Mistakes in Applying Lewis's Framework

### Section 21: Frequent Errors

**Error 1: Confusing C(W|A) with C(W if A)**

Mistake:
$$V(A) = \sum_W C(W \text{ if } A) \cdot V(W) \quad \text{[WRONG]}$$

should use conditional credence, not counterfactual:
$$V(A) = \sum_W C(W | A) \cdot V(W) \quad \text{[Correct for noncausal]}$$

Similarly, for causal value, use counterfactual:
$$V_C(A) = \sum_W C(W \text{ if } A) \cdot V(W) \quad \text{[Correct for causal]}$$

**Error 2: Forgetting to specify states**

Mistake: Treating V_C(A) as if acts causally affect everything.

Correct: Specify a state space S such that S contains all causally independent facts. Then:
$$V_C(A) = \sum_S C(S) V(A & S)$$

**Error 3: Using posterior when prior is needed**

Mistake: Computing V_C(A) using the agent's posterior credences P_s after updating on evidence.

Correct: Use the agent's *prior* credence C before the decision. The posterior is relevant for noncausal theory (which asks what good news you'd get), but causal theory evaluates causal consequences independent of what you learn.

**Error 4: Confusing states with acts**

Mistake: Treating the partition of states as the agent's options.

Correct: Options A form one partition (choices the agent makes). States S form another partition (facts about the world not causally affected by the choice). Both are relevant to decision theory; don't conflate them.

**Error 5: Assuming Newcomb's problem has a unique answer**

Mistake: Thinking Lewis's framework definitively settles what's rational in Newcomb's problem.

Correct: Lewis's framework shows that causal MEV recommends Only B (given appropriate state specification). But some philosophers *reject* the premise that only causal consequences matter. They maintain that evidential connections are rationally relevant. Lewis doesn't refute this position, only explains why a causal theorist thinks it's mistaken.

---

## Part IX: Extended Examples

### Section 22: Smoking Lesion Problem

Imagine: Smoking is correlated with lung cancer because a common lesion causes both. The lesion makes you want to smoke and causes cancer. Does smoke cause cancer?

**Setup:**

Worlds:

- W₁: Lesion present; I smoke; I get cancer; Value = -100 (enjoy smoking, but get cancer)
- W₂: Lesion present; I don't smoke; I don't get cancer directly, but still get the lesion's effects; Value = -50
- W₃: No lesion; I smoke; no cancer; Value = +10 (enjoy smoking, no health effects)
- W₄: No lesion; I don't smoke; no cancer; Value = 0

Prior credences:

- C(W₁) = 0.3 (likely to have lesion and smoke)
- C(W₂) = 0.2 (likely to have lesion, don't smoke)
- C(W₃) = 0.3 (likely no lesion, smoke)
- C(W₄) = 0.2 (likely no lesion, don't smoke)

**Noncausal MEV:**

If you're deciding whether to smoke, and you know smoking is evidence of a lesion:

C(Lesion | Smoke) is high (high credence you have lesion if you smoke)
C(Cancer | Smoke) is therefore high

So V(Smoke) is low, and noncausal MEV says: Don't smoke.

**Causal MEV (Lewis):**

States S (the causally independent facts):

- S₁: Lesion present
- S₂: No lesion

Causal value of smoking:
$$V_C(\text{Smoke}) = C(S_1) V(\text{Smoke} & S_1) + C(S_2) V(\text{Smoke} & S_2)$$
$$= 0.5 \cdot (-100) + 0.5 \cdot (+10) = -45$$

Causal value of not smoking:
$$V_C(\text{Don't Smoke}) = C(S_1) V(\text{Don't} & S_1) + C(S_2) V(\text{Don't} & S_2)$$
$$= 0.5 \cdot (-50) + 0.5 \cdot 0 = -25$$

**Causal Conclusion:** Don't smoke (expected value -25 is better than -45).

**Interpretation:** Smoking doesn't *cause* cancer in worlds W₃ and W₄ (where there's no lesion). But given that a lesion can cause both smoking and cancer, the expected value of smoking is low. The causal theorist recommends against smoking.

---

### Section 23: Medical Decision with Imperfect Test

**Scenario:**

You take a medical test for disease D.

- If you have D and test positive: You'll get treatment; prognosis is good; Value = +50
- If you have D and test negative: You won't get treatment; disease progresses; Value = -100
- If you don't have D and test positive: You'll get unnecessary treatment; minor side effects; Value = -10
- If you don't have D and test negative: No treatment; you're fine; Value = 0

**Credences:**

Prior: C(D) = 0.01 (disease is rare)
Test accuracy: P(+|D) = 0.95, P(−|¬D) = 0.99

You test positive. By Bayes' theorem:
$$C(D | +) = \frac{0.95 \cdot 0.01}{0.95 \cdot 0.01 + 0.01 \cdot 0.99} = \frac{0.0095}{0.0194} ≈ 0.49$$

So conditional on testing positive, you're about 49% confident you have the disease.

**Causal Decision:**

States (causally independent of whether you treat):

- S₁: You have D
- S₂: You don't have D

Given you tested positive:

Causal value of treating:
$$V_C(\text{Treat}) = C(D | +) \cdot 50 + C(¬D | +) \cdot (-10) = 0.49 \cdot 50 + 0.51 \cdot (-10) = 24.5 - 5.1 = 19.4$$

Causal value of not treating:
$$V_C(\text{Don't}) = C(D | +) \cdot (-100) + C(¬D | +) \cdot 0 = 0.49 \cdot (-100) = -49$$

**Causal Conclusion:** Treat (expected value 19.4 is much better than -49).

The test result is evidence about your disease state, but the causal question remains: given that you probably have the disease (conditional on testing positive), will treatment help? Yes, it will. So causal MEV recommends treating.

---

## Part X: Summary of Formal Apparatus

### Section 24: Key Formulas at a Glance

| Concept | Formula | Intuition |
| --- | --- | --- |
| **Credence of Proposition** | $C(X) = \sum_{W \in X} C(W)$ | Sum of credences of constituent worlds |
| **Conditional Credence** | $C(X|Y) = \frac{C(X \cap Y)}{C(Y)}$ | Credence of X given Y |
| **Expected Value (Noncausal)** | $V(X) = \sum_W C(W|X) V(W)$ | Credence-weighted value, conditional on X |
| **Partition Form** | $V(X) = \sum_Z C(Z|X) V(X \cap Z)$ | Average over partition, weighted by conditional credence |
| **Counterfactual Credence** | $C(W \text{ if } A)$ | Credence that W would result if you did A |
| **Causal Value (Simple)** | $V_C(A) = \sum_W C(W \text{ if } A) \cdot V(W)$ | Credence-weighted value of causal consequences |
| **Causal Value (Sophisticated)** | $V_C(A) = \sum_S C(S) V(A & S)$ | Average over states, weighted by prior credence |
| **Noncausal Decision Rule** | Choose A to maximize $V(A)$ | Maximize expected value conditional on act |
| **Causal Decision Rule** | Choose A to maximize $V_C(A)$ | Maximize expected value of causal consequences |

---

### Section 25: From Lewis to Carter

**How Carter extends Lewis's framework:**

79. **Lewis:** States S include dispositions; define causal value over states.
80. **Carter:** Agent is uncertain about their dispositions and credences; add enriched states (s, [s']).

**Lewis's state-dependent credence:**
$$C_S \text{ = agent's credence given they're in state } S$$

**Carter's prior probability over credence-disposition pairs:**
$$P(s) = \text{agent's prior credence they're in state } s$$
$$P([s'] | s) = \text{agent's prior credence they'll act as if in state } s' \text{ given actually in } s$$

**Consequence:** Even with Lewis's causal framework, if the agent is uncertain about their own credences and dispositions, maximizing causal MEV becomes infeasible advice.

---

## Appendix: Proof of Averaging Rule

**Claim:** V(X) = Σ_Z C(Z|X) V(X ∩ Z) for any partition Z

**Proof:**

Starting from the definition of expected value:

$$V(X) = \sum_{W \in X} \frac{C(W)}{C(X)} V(W)$$

Since Z is a partition, we can reorganize the sum by grouping worlds in each element of Z:

$$V(X) = \sum_Z \sum_{W \in X \cap Z} \frac{C(W)}{C(X)} V(W)$$

For each Z, factor out the conditional credence:

$$V(X) = \sum_Z \frac{1}{C(X)} \sum_{W \in X \cap Z} C(W) V(W)$$

$$= \sum_Z \frac{C(X \cap Z)}{C(X)} \cdot \frac{1}{C(X \cap Z)} \sum_{W \in X \cap Z} C(W) V(W)$$

The inner term is exactly the definition of expected value conditional on X ∩ Z:

$$\frac{1}{C(X \cap Z)} \sum_{W \in X \cap Z} C(W) V(W) = V(X \cap Z)$$

So:

$$V(X) = \sum_Z \frac{C(X \cap Z)}{C(X)} V(X \cap Z) = \sum_Z C(Z | X) V(X \cap Z)$$

**QED**

---

**End of Technical Supplement**
---


## Notes
