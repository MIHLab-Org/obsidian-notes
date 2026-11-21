---
notion-id: 3938935b-cf8a-80ce-8eba-c617d43883f6
---
- “Stacked your bread and bought your own Mercedes (Vroom, vroom). You your own boss, do it your way (Way)
- “All this stuntin’ couldn’t satisfy my soul (–oul), Got a hundred big places, but I’m still alone (–one)”

Which decision theory best addresses the non-luminosity of the agent’s states above?

Consider the following thought experiment:

Sam has been offered a lucrative recording contract that if he accepts, will require 200+ days of travel throughout the year. Sam is also in a long term relationship with Sarah. If Sam accepts the contract, then it is unlikely that he will marry Sarah whereas if he rejects the contract, then he will likely marry Sarah. There is an equal chance that Sam will either accept the contract as it is that he will not accept the contract.

Here I should point out that there are many factors that determine whether one should offer a marriage proposal. For instance, lets imagine that Sam does offer a marriage proposal and rejects the contract, doing so entails other consequences. Perhaps Sam had spent his youth cultivating his musical abilities, so much so that he is not good at anything else. As such, in rejecting the marriage proposal, Sam is resigning himself (and future spouse) to a life of financial struggle, i.e., will always worry about money, live modestly etc.

After having determined the probability that Sam gets married upon accepting the recording contract as shown below with the probability matrix on the left, it remains to be seen how desirable the consequences will be for each of Sam’s decisions. We use a desirability matrix on the right.

Probability

$$
\begin{matrix} & \text{Contract} & \neg\text{Contract} \\ \text{Marriage} & .5 & .5 \\ \neg\text{Marriage} & .5 & .5 \end{matrix}
$$

Desirability

$$
\begin{matrix} & \text{Contract} & \neg\text{Contract} \\ \text{Marriage} & 1 & 0 \\ \neg\text{Marriage} & 0 & -1 \end{matrix}
$$

Here, we want to estimate the desirability of each act, marriage or no marriage. We can do this by by multiplying corresponding entries in the probability and desirability matrices and then adding across each row.

$$
\begin{matrix} & \text{Contract} & \neg\text{Contract} \\ \text{Marriage} & (.5)(1) & (.5)(0) \\ \neg\text{Marriage} & (.5)(0) & (.5)(-1) \end{matrix} = \begin{matrix} & \text{Contract} & \neg\text{Contract} \\ \text{Marriage} & .5 & 0 \\ \neg\text{Marriage} & 0 & -.5 \end{matrix}
$$

This gives us (.5) + (0) = .5 as the desirability of the first act, Marriage and (0) + (-.5) = -.5 as the desirability of the second act, No Marriage. Therefore Sam should offer marriage whether or not he accepts the contract.

A set of worlds, $\Omega$.
A set of states, $S$.
A set of outcomes, $O$.
A set of acts, A $\subseteq$ $S$ $\rightarrow$ $O$.
A state-dependent probability function, P: $S$ $\rightarrow$ $(P(S)$ $\rightarrow$ [0,1]).
A value function, $\upsilon$: $O \rightarrow \R$

For opaque decision problem $\hat{\Delta}$: $\Pi = S \rightarrow A$ is the set of plans determined by $\hat\Delta$ where a plan is a function from states s, s',s'',s''',. . . $\in S$, and each s $\in S$, $\langle S, O, A, P-{s}, \upsilon \rangle$ is a standard Savage style decision problem that represents the agent's perspective at $s$ on the world.  Where a plan, $\pi, \pi ', \pi '', . . . \in \Pi$ are functions from states to acts. Given $\pi(s) = a$, we say that $a$ is the act recommended by $\pi$ in $s$.

Maximize expected value, $\Pi_{|MEV}$ is the set of plans to maximize expected value in $\hat{\Delta}$. $ev_{s}(a)$ is the expected value of $a$ at $s$ for any $s \in S$ and $s \in A$.

The expected value of an act form the perspective of $s$ is the sum of the values of the outcomes produced by the act at each state where each is weighted according to the probability assigned to that state from the perspective of $s$.

Suppose that you are an agent who understands what some advice plan recommends in any possible circumstance and that you fully intend to follow the advice plan that will maximize your expected value. However, you do not know what your internal value states will look like in the future and therefore you do not know what your "maximize expected value" will look like.]

## Decisions, Decisions

Imagine an agent that is trying to decide between pursuing material wealth, or a close relationship with someone.

$$
\begin{matrix} & \text{Wealth} & \neg\text{Wealth} \\ \text{Marriage} & .5 & .5 \\ \neg\text{Marriage} & .5 & .5 \end{matrix}
$$

$$
\begin{matrix} & \text{Wealth} & \neg\text{Wealth} \\ \text{Marriage} & 1 & 0 \\ \neg\text{Marriage} & 0 & -1 \end{matrix}
$$

This represents an opaque decision problem $\Delta$ = $\langle \text{S}^{\hat{\Delta}}, O^{\hat{\Delta}}, A^{\hat{\Delta}}, P^{\hat{\Delta}}, \upsilon^{\hat{\Delta}}\rangle$ which comprises:

A set of worlds, $\Omega$.
A set of states, $S$.
A set of outcomes, $O$.
A set of acts, A $\subseteq$ $S$ $\rightarrow$ $O$.
A state-dependent probability function, P: $S$ $\rightarrow$ $(P(S)$ $\rightarrow$ [0,1]).
A value function, $\upsilon$: $O \rightarrow \R$

## Setting Up the Expected Value Calculation

Using the probability matrix (all outcomes have probability .5) and the desirability values, I compute the expected value of each choice.

**Marriage:**

$$
EV(\text{Marriage}) = (.5)(1) + (.5)(0) = .5
$$

**¬Marriage:**

$$
EV(\neg\text{Marriage}) = (.5)(0) + (.5)(-1) = -.5
$$

## Conclusion

Since $EV(\text{Marriage}) = .5 > EV(\neg\text{Marriage}) = -.5$, the agent should pursue **Marriage** (the close relationship), which yields the higher expected value.

$$
\boxed{\text{Marriage},\ EV = 0.5}
$$

For opaque decision problem $\hat{\Delta}$: $\Pi = S \rightarrow A$ is the set of plans determined by $\hat\Delta$ where a plan is a function from states s, s',s'',s''',. . . $\in S$, and each s $\in S$, $\langle S, O, A, P-{s}, \upsilon \rangle$ is a standard Savage style decision problem that represents the agent's perspective at $s$ on the world.  Where a plan, $\pi, \pi ', \pi '', . . . \in \Pi$ are functions from states to acts. Given $\pi(s) = a$, we say that $a$ is the act recommended by $\pi$ in $s$.

Maximize expected value, $\Pi_{|MEV}$ is the set of plans to maximize expected value in $\hat{\Delta}$. $ev_{s}(a)$ is the expected value of $a$ at $s$ for any $s \in S$ and $s \in A$.

The expected value of an act form the perspective of $s$ is the sum of the values of the outcomes produced by the act at each state where each is weighted according to the probability assigned to that state from the perspective of $s$.

$$
\begin{equation}
ev_{s}(a) = \sum^{}_{s'\in S} \upsilon(a(s'))\bullet P_{s}(s')
\end{equation}
$$

Given $\Pi_{|MEV}$, then $\pi \in \Pi_{|MEV}$ iff for all $s \in S$ and $a \in A$:

$$
\begin{equation}
ev_{s}(\pi (s)) \geq ev_{s}(a)
\end{equation}
$$

Suppose that you are an agent who understands what some advice plan recommends in any possible circumstance and that you fully intend to follow the advice plan that will maximize your expected value. However, you do not know what your internal value states will look like in the future and therefore you do not know what your "maximize expected value" will look like.

Imagine an agent that is trying to decide between pursuing material wealth, or a close relationship with someone.

$$
\begin{matrix} & \text{Wealth} & \neg\text{Wealth} \\ \text{Marriage} & .5 & .5 \\ \neg\text{Marriage} & .5 & .5 \end{matrix}
$$

$$
\begin{matrix} & \text{Wealth} & \neg\text{Wealth} \\ \text{Marriage} & 1 & 0 \\ \neg\text{Marriage} & 0 & -1 \end{matrix}
$$

Using the above Bayesian style decision desirability and probability matrix, decide which choice would be more desirable for the agent. However, orthodox decision problems only represent an agent's perspective on the world, but not on their own credence. As such, we need to use an opaque decision style problem which represents an agent's perspective on both.

As agents, human beings have to decide what to do. Philosophers often use simple Bayesian statistics to issue guidance when relevant epistemic facts, such as an agent's credence at some future state, are unavailable.

Definition 1:

an opaque decision problem $\hat{\Delta}$ = $\langle \text{S}^{\hat{\Delta}}, O^{\hat{\Delta}}, A^{\hat{\Delta}}, P^{\hat{\Delta}}, \upsilon^{\hat{\Delta}}\rangle$ which comprises:

A set of worlds, $\Omega$.
A set of states, $S$.
A set of outcomes, $O$.
A set of acts, A $\subseteq$ $S$ $\rightarrow$ $O$.
A state-dependent probability function, P: $S$ $\rightarrow$ $(P(S)$ $\rightarrow$ [0,1]).
A value function, $\upsilon$: $O \rightarrow \R$

States, $s, s',s'',s''',. . . \in S$, are the objects of an agent's uncertainty. Outcomes, $o, ',o'',o''',. . . \in O$ are the objects of an agent's desires and Acts, $a, b,c,. . . \in A$ are the immediate object of the decision, a function from state to outcome. A standard Savage-style problem is $s \in S$, $\langle S, O, A, P_{s}, \upsilon \rangle$ which represents the agent's perspective at $s$ on the world. Opaque decision-style problems generalize over standard Savage-style problems.

Plans, definition 2.
for any opaque decision problem $\hat{\Delta}$: $\Pi = S \rightarrow A$ is the set of plans determined by $\hat{\Delta}$. Plans, $\pi, \pi', \pi'', . . . \in \Pi$ are functions form states to acts. Where $\pi(s) = a$, we say that $a$ is the act recommended by $\pi$ in $s$.

Definition 3, Maximize Expected Value. $\text{Let} \Pi_{|\text{MEV}}$ be the set of plans to maximize expected value in $\hat{\Delta}$. Let $ev_{s}(a)$ be the expected value of $a$ at $s$ (for any $s \in S$ and $s \in A$).

$$
\begin{equation}
ev_{s}(a) = \sum^{}_{s'\in S} \upsilon(a(s'))\bullet P_{s}(s')
\end{equation}
$$

Given $\Pi_{|MEV}$, then $\pi \in \Pi_{|MEV}$ iff for all $s \in S$ and $a \in A$:

$$
\begin{equation}
ev_{s}(\pi (s)) \geq ev_{s}(a)
\end{equation}
$$

Error
Earlier, we said that an agent's credences can be unknown to the agent. What this means is that sometimes an agent performs an act which their plan recommends at another state. As such, it is possible to understand susceptibility to error in terms of their underlying pattern of dispositions. To represent an agent's dispositions, we need to represent the state the agent is acting as if they were in

We use definition 4, (Enriched State Spaces)
For any opaque decision problem $\hat{\Delta}:[*]$ is a bijective function with domain $S$. we call the product of its domain and codomain, $\bar{S}_{[*]} = S \times \{[s] : s \in S\}$

At last, we introduce a state-independent probability function over the enriched state space that represents the agent's credences prior to funding themselves in the decision situation.

Definition 5 (State-Independent Probability).
For any $\hat{\Delta}$ and $[\cdot]$: a state-independent probability function, $P$, is a probability function over $P(\bar{S}_{[\cdot]})$. This probability funciton takes a stance on both what the world is like and how the agent will act as if the world is. $P$ indirectly encodes agent's perspective on their own susceptibility to error. For any $s,s': P([s']|s) = \frac{P((s,[s']))}{P(\{(s,[s'']) : s'' \in S)\})}$ is the agent's prior credence which is conditional on being in $s$.

$$
\sum\limits_{\underset{ \pi(s) \neq \pi(s')}  {s'}\in S} P([s']|s)
$$

## Setting Up the Bayesian Decision Matrix

Since we cannot know our future internal value states with certainty, we assign **probabilities** to each possible outcome and **desirability scores** (utilities) to each, then compute the **expected value (EV)** for each choice.

$$
EV = \sum_i P(\text{outcome}_i) \times D(\text{outcome}_i)
$$

### Choice A — Marry your childhood sweetheart

| Outcome | Probability $P$ | Desirability $D$ | $P \times D$ |
| --- | --- | --- | --- |
| Deep, lasting companionship & fulfillment | 0.70 | +100 | +70 |
| Marriage strains / unhappiness | 0.30 | −40 | −12 |
| **Expected Value** |   |   | **+58** |

### Choice B — Take the lucrative job (travel 300 days/year)

| Outcome | Probability $P$ | Desirability $D$ | $P \times D$ |
| --- | --- | --- | --- |
| Wealth & career success (but isolation) | 0.60 | +50 | +30 |
| Burnout, loneliness, regret | 0.40 | −30 | −12 |
| **Expected Value** |   |   | **+18** |

## Interpretation

Because the agent does not know its future value states, we rely on prior probabilities and expected desirability. The relationship option scores higher because:

- Its **peak desirability is greater** (enduring companionship tends to be more robustly satisfying than transient material gain).
- The **downside risk is comparable**, but the high-probability positive outcome dominates.

Comparing the two expected values:

$$
EV_{\text{marry}} = 58 \;>\; EV_{\text{job}} = 18
$$

## Conclusion

\boxed{\text{Marry your childhood sweetheart — it yields the higher expected value } (EV = 58 > 18).}

### Agent Test 3

## Setting Up the Bayesian Decision Matrix

Since we cannot know the agent's *future* value states with certainty, we assign **probabilities** to possible outcomes and **desirability values** (utilities) to each, then compute the **expected value (EV)** of each choice.

---

### Option A: Marry the Childhood Sweetheart

| Outcome (State of World) | Probability (P) | Desirability (D) | P × D |
| --- | --- | --- | --- |
| Happy, enduring marriage | 0.70 | +100 | +70 |
| Marriage sours / regret | 0.30 | −40 | −12 |

**EV(Marry)** = 70 − 12 = **+58**

---

### Option B: Take the Lucrative Job (300 travel days/year)

| Outcome (State of World) | Probability (P) | Desirability (D) | P × D |
| --- | --- | --- | --- |
| Wealth + career fulfillment | 0.10 | +80 | +8 |
| Wealth but isolation/loneliness | 0.60 | +50 | +30 |
| Burnout + relational regret | 0.30 | −30 | −9 |

**EV(Job)** = 8 + 30 − 9 = **+29**

---

## Decision Analysis

Comparing expected values:

$$
EV_{\text{Marry}} = +58 \quad > \quad EV_{\text{Job}} = +29
$$

The advice plan that **maximizes expected value** favors marriage. The key drivers:

- The job's high monetary reward is **diluted** by the strong probability (0.60) that near-constant travel (300 days/year) produces isolation, undermining the emotional value money cannot replace.
- Marriage carries a **higher probability mass** on the high-desirability outcome, and even its downside is bounded.

Because you intend to follow whichever plan maximizes expected value—*even without knowing your precise future internal states*—the rational recommendation is the option with the higher EV.

---

\boxed{\text{Marry the childhood sweetheart } (EV = +58 > +29 \text{ for the job})}

## Possible Solution from Planning

Suppose that you are an agent who understands what some advice plan recommends in any possible circumstance and that you fully intend to follow the advice plan that will maximize your expected value. However, you do not know what your internal value states will look like in the future and therefore you do not know what your "maximize expected value" will look like.

Imagine that you are trying to decide between pursuing a lucrative job opportunity, or marry your childhood sweetheart.

As agents, human beings have to decide what to do. Philosophers often use simple Bayesian statistics to issue guidance when relevant epistemic facts, such as an agent's credence at some future state, are unavailable.

Using a Bayesian style decision desirability and probability matrix, decide which choice would be more desirable for the agent, to marry your childhood sweetheart, or take a lucrative job offer that will require travel 300 days a year

The problem involves a desirability and probability condition. Opaque-style decision problem. The problem also includes a bijective function with domain S. State-independent probability function.

Step 1
Definition 1:

An opaque decision problem $\hat{\Delta}$ = $\langle \text{S}^{\hat{\Delta}}, O^{\hat{\Delta}}, A^{\hat{\Delta}}, P^{\hat{\Delta}}, \upsilon^{\hat{\Delta}}\rangle$ which comprises:

A set of worlds, $\Omega$.
A set of states, $S$.
A set of outcomes, $O$.
A set of acts, A $\subseteq$ $S$ $\rightarrow$ $O$.
A state-dependent probability function, P: $S$ $\rightarrow$ $(P(S)$ $\rightarrow$ [0,1]).
A value function, $\upsilon$: $O \rightarrow \R$

States, $s, s',s'',s''',. . . \in S$, are the objects of an agent's uncertainty. Outcomes, $o, ',o'',o''',. . . \in O$ are the objects of an agent's desires and Acts, $a, b,c,. . . \in A$ are the immediate object of the decision, a function from state to outcome. A standard Savage-style problem is $s \in S$, $\langle S, O, A, P_{s}, \upsilon \rangle$ which represents the agent's perspective at $s$ on the world. Opaque decision-style problems generalize over standard Savage-style problems.

Step 2
Plans, definition 2.
for any opaque decision problem $\hat{\Delta}$: $\Pi = S \rightarrow A$ is the set of plans determined by $\hat{\Delta}$. Plans, $\pi, \pi', \pi'', . . . \in \Pi$ are functions form states to acts. Where $\pi(s) = a$, we say that $a$ is the act recommended by $\pi$ in $s$.

Step 3

Definition 3, Maximize Expected Value. $\text{Let} \Pi_{|\text{MEV}}$ be the set of plans to maximize expected value in $\hat{\Delta}$. Let $ev_{s}(a)$ be the expected value of $a$ at $s$ (for any $s \in S$ and $s \in A$).

$$
\begin{equation}
ev_{s}(a) = \sum^{}_{s'\in S} \upsilon(a(s'))\bullet P_{s}(s')
\end{equation}
$$

Given $\Pi_{|MEV}$, then $\pi \in \Pi_{|MEV}$ iff for all $s \in S$ and $a \in A$:

$$
\begin{equation}
ev_{s}(\pi (s)) \geq ev_{s}(a)
\end{equation}
$$

Step 4
Error
Earlier, we said that an agent's credences can be unknown to the agent. What this means is that sometimes an agent performs an act which their plan recommends at another state. As such, it is possible to understand susceptibility to error in terms of their underlying pattern of dispositions. To represent an agent's dispositions, we need to represent the state the agent is acting as if they were in. For instance, for any state $s$, $[s]$ is the circumstances of an agent whose act may be determined according to what their plan recommends for $s$, or an agent's act may be in accordance with their plan's recommendation for $s$ while it is determined by an alternative state $s'$.

We use definition 4, (Enriched State Spaces)
For any opaque decision problem $\hat{\Delta}:[\cdot]$ is a bijective function with domain $S$. we call the product of its domain and codomain, $\bar{S}_{[\cdot]} = S \times \{[s] : s \in S\}$

An enriched state, $(s, [s'])$, is the circumstances of an agent who is in $s$, but whose act is determined according to what their plan recommends for $s'$. Sets of states in the enriched state space can be thought of as propositions: (i) what the world is like and (ii) what the agent will act as if the world is like. We use $s$ as shorthand for atomic states, ${s,[s']): s' \in S}$ and $[s]$ as short-hand for corresponding set of enriched states, ${(s', [s]): s' \in S}$. We also continue to refer to elements of $S$ as states, and elements of $\hat{S}_{[\cdot]}$ as enriched states.

Step 5

Definition 5 (State-Independent Probability).

At last, we introduce a state-independent probability function over the enriched state space that represents the agent's credences prior to finding themselves in the decision situation.

For any $\hat{\Delta}$ and $[\cdot]$: a state-independent probability function, $P$, is a probability function over $P(\bar{S}_{[\cdot]})$. This probability function takes a stance on both what the world is like and how the agent will act as if the world is. $P$ indirectly encodes agent's perspective on their own susceptibility to error. For any $s,s': P([s']|s) = \frac{P((s,[s']))}{P(\{(s,[s'']) : s'' \in S)\})}$ is the agent's prior credence which is conditional on being in $s$.

$$
\sum\limits_{\underset{ \pi(s) \neq \pi(s')}  {s'}\in S} P([s']|s)
$$

Step 6

Crucially, we want to know which plan an agent should follow, marry childhood sweetheart or accept lucrative job offer.

Definition 6 (Plan-Based Decision Problems)

A plan-based decision problem, $\Delta = \langle\hat{\Delta}, [\cdot], P\rangle$ is a tuple consisting of the following:

- An opaque decision prolem, $\hat{\Delta}$.
- A bijective function, $[\cdot]$, on $S^{\hat{\Delta}}$.
- A state-independent probability function, P, defined on $\hat{S}^{\hat{\Delta}}_{[\cdot]}$

With a given plan-based decision problem and plan, $\pi$, that is assigned an expected value $EV(\pi)$, we can evaluate advice since $EV(\pi)$ is the value an agent expects to produce by trying to follow $\pi$ as evaluated from their prior perspective. This is calculated as follows:

$$
EV(\pi) = \sum_{s \in S}P(s)\cdot\sum_{s' \in S}P([s']|s) \cdot \upsilon(\pi(s')(s)).
$$

To calculate the expected value of a plan we find, for any pair of states:

(i) your prior credence of being in the first state;
(ii) Your prior credence of acting as if you are in the second given that you are in the first;
(iii) The value of the outcome of the act your plan recommends in the second, when performed in the first.

Therefore, the expected value of a plan is the sum of the products of these three quantities, for each ordered pair of states. A plan $\pi$ is EV-optimal in a decision problem $\Delta$ iff for all $\pi' \in \Pi: EV(\pi) \ge EV(\pi')$

Step 7

Evaluating Advice

Suppose that you reliably outperform your level of confidence when it comes to big life decisions. For instance, you regularly underestimate your ability to make big decisions and assign equal credence to each act. If you are forced to choose, you do systematically better than chance at making the right decision however, for instance, when you had to choose which college to attend, you choose the less prestigious one that turned out to discover cutting edge research in the field you were in. In each case, you make good decisions around 75% of the time.

Let's imagine that you assign heads to marry and tails to career and flip a coin.  This situation corresponds to a simple plan-based decision problem with two atomic states: either you get married or you pursue the career. Using this set up, your prior and posterior credence functions will be as follows:

$$
\begin{matrix}
&  \text{Prior} & & \text{Posteriors} \\
& \text{[Marriage]} & \text{[Career]} &  \text{Marriage} & \text{Career} \\
 \text{Marriage} & \frac{3}{8} & \frac{1}{8} & P_{\text{Marriage}} & \frac{1}{2} & \frac{1}{2} \\
\\
\text{Career} & \frac{1}{8} & \frac{3}{8} & P_{\text{Career}} & \frac{1}{2} & \frac{1}{2} 
\end{matrix}
$$

Step 8

Lets imagine that you are now offered a one-dollar bet at 2:3 odds regarding whether you should marry or take the job. You have three acts available to you with the following numerical outcomes:

$$
\begin{matrix}
\text{Decline:} & 0 \\
\text{Marriage:} & \begin{cases} 0.67 & \text{if Marriage}; \\
-1 & \text{if Career} \end{cases} \\
\text{Career:} & \begin{cases} \\  -1 & \text{if Marriage}; \\ 0.67 & \text{if Career} \end{cases}.
\end{matrix}
$$

A plan to maximize act expected value recommends declining the bet in both states. Relative to your posterior credences in either state, the expected value of accepting the bet is -0.17 regardless of which choice you make. However, the plan which maximizes expected value is marriage if you choose to get married and career if you choose career. This plan has an expected value of 0.25. The best possible plan then is not to maximize expected value relative to prior or posterior credences since your credences about the state you are in do not change upon finding yourself in either state.

## Agent Test 4

## Setting Up the Bayesian Decision Matrix

Since we don't know our future value state, we assign **equal priors** (the principle of indifference): a 50% chance we stay in love, and a 50% chance we fall out of love.

**Probability of world-states:**

- P(Stay in love) = 0.5
- P(Fall out of love) = 0.5

**Desirability (utility) values**, based on the given constraints (marriage is best if love persists; career is best if love fades — and travelling 300 days/year is corrosive to a relationship you still care about):

| Choice | In Love (0.5) | Not in Love (0.5) |
| --- | --- | --- |
| **Marry sweetheart** | 10 | 3 |
| **Take lucrative job** | 2 | 9 |

## Computing Expected Desirability

**Marry:**

$$
EV(M) = (0.5)(10) + (0.5)(3) = 5 + 1.5 = 6.5
$$

**Career:**

$$
EV(C) = (0.5)(2) + (0.5)(9) = 1 + 4.5 = 5.5
$$

## Result

Because $EV(\text{Marry}) = 6.5 > EV(\text{Career}) = 5.5$, the expected value is higher for marriage. The key driver is the *asymmetry of regret*: if you marry and stay in love you gain the highest possible value, and even the "wrong" outcome (marrying then falling out of love) is less painful than spending 300 days a year away from a partner you still love (the career's "wrong" outcome).

\boxed{\text{Marry your childhood sweetheart } (EV = 6.5 > 5.5)}