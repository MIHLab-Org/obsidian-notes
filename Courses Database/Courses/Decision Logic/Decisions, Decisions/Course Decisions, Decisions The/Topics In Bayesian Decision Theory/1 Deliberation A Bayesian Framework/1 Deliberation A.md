---
notion-id: 3738935b-cf8a-80b1-8bbc-eed61fedfe1c
base: "[[Topics In Bayesian Decision Theory.base]]"
Readings: ""
Topic: "Deliberation: A Bayesian Framework"
Assignments Due: ""
---
## Abstract

Making clear (elucidating) the difference between subjective probability and subjective desirability or utility. This book ranks preferences for two propositions using probability and utility functions. When we deliberate between two different courses of action, what we are in effect doing is choosing between the two possible consequences. However, there are variables in our choices which are not within our power to predict or control. Thomas Bayes is famous for building a framework for deliberation that is based on the probabilities of relevant circumstances and the desirability of the possible consequences of the action and circumstance. Bayes is notable for assigning numbers to the circumstance and according to how desirable that consequence is for that agent. We choose an act of subjective probabilities and “maximum estimated desirability” reflecting the agent’s actual beliefs and preferences. However, the following example will show various problems that decision theory has had with respect to action guidance.

Consider the following example

***Example A: Stunted -Ouls and Stackin’ Cars***

- “All this stuntin’ couldn’t satisfy my soul (–oul), Got a hundred big places, but I’m still alone (–one)”
- “Stacked your bread and bought your own Mercedes (Vroom, vroom). You your own boss, do it your way (Way)

Reversing the examples reveals a non-luminous condition of the agent

[[Stackin’ Cars and Stuntin’ -Ouls]]

***Example B: Stackin’ Cars and Stuntin’ -Ouls***

- “Stacked your bread and bought your own Mercedes (Vroom, vroom). You your own boss, do it your way (Way)
- “All this stuntin’ couldn’t satisfy my soul (–oul), Got a hundred big places, but I’m still alone (–one)”

Which decision theory best addresses the non-luminosity of the agent’s states above?

Consider the following thought experiment:
    Sam has been offered a lucrative recording contract that if he accepts, will require 200+ days of travel throughout the year. Sam is also in a long term relationship with Sarah. If Sam accepts the contract, then it is unlikely that he will marry Sarah whereas if he rejects the contract, then he will likely marry Sarah. There is an equal chance that Sam will either accept the contract as it is that he will not accept the contract.
    Here I should point out that there are many factors that determine whether one should offer a marriage proposal. For instance, lets imagine that Sam does offer a marriage proposal and rejects the contract, doing so entails other consequences. Perhaps Sam had spent his youth cultivating his musical abilities, so much so that he is not good at anything else. As such, in rejecting the marriage proposal, Sam is resigning himself (and future spouse) to a life of financial struggle, i.e., will always worry about money, live modestly etc. 
    After having determined the probability that Sam gets married upon accepting the recording contract as shown below with the probability matrix on the left, it remains to be seen how desirable the consequences will be for each of Sam’s decisions. We use a desirability matrix on the right. 

<!-- Column 1 -->
$$
\begin{matrix} & \text{Contract} & \neg\text{Contract} \\ \text{Marriage} & .5 & .5 \\ \neg\text{Marriage} & .5 & .5 \end{matrix}
$$

<!-- Column 2 -->
$$
\begin{matrix} & \text{Contract} & \neg\text{Contract} \\ \text{Marriage} & 1 & 0 \\ \neg\text{Marriage} & 0 & -1 \end{matrix}
$$

Here, we want to estimate the desirability of each act, marriage or no marriage. We can do this by by multiplying corresponding entries in the probability and desirability matrices and then adding across each row.

$$
\begin{matrix} & \text{Contract} & \neg\text{Contract} \\ \text{Marriage} & (.5)(1) & (.5)(0) \\ \neg\text{Marriage} & (.5)(0) & (.5)(-1) \end{matrix} = \begin{matrix} & \text{Contract} & \neg\text{Contract} \\ \text{Marriage} & .5 & 0 \\ \neg\text{Marriage} & 0 & -.5 \end{matrix}
$$

This gives us (.5) + (0) = .5 as the desirability of the first act, Marriage and (0) + (-.5) = -.5 as the desirability of the second act, No Marriage. Therefore Sam should offer marriage whether or not he accepts the contract.

## Acts, Conditions, and Consequences

Acts; the number of actions an agent believes are available to him, Conditions; an agent believes are relevant to the outcomes of the actions, Consequences; an analysis of the situation by acts and conditions. Acts are represented by row headings while conditions are represented by column headings, consequences make up the consequence matrix. Using this description, we can modify the above case to one that is less dramatic. 

Let’s imagine that rather than facing the decision of “stacking cars” versus seeking love, the agent is asking themselves whether or not they should offer a marriage proposal to their partner. The problem for the agent is that they have very few professional options. They spent a long time working towards a career in which their is high in meaning and has very stable future prospects, it is  also a long process to become established. Furthermore, while initially they do get along very well with their partner, they know that their partner would never leave the small town they were raised in. In the beginning this was all acceptable to the agent since there is a preponderance of institutions within a reasonable commuting distance. However this would have been fine had the agent been a more competitive applicant. Unluckily for the agent however, they are not. While working towards their chosen career, they had a few set backs, illnesses in the family etc., which resulted in them not being the most attractive applicant in their industry. 

Therefore where initially they would have had more options in their industry, for instance had they been a more competitive applicant, they certainly could have found a position close to home, they are instead going to have to be less selective and broaden their job search. This means then that if they are going to propose as they initially believed they would, then they will have to begin training for a completely different career field. Further, since this means that they spent so much time training for the field they did so and there is no way they would get that time back, whatever other field they choose, they will not be as competitive in that field as they would be in their current assuming they do broaden their search. 

For instructional purposes, we look at some other examples.

**Example 1: Swimming**

|   | 0 days of good weather | 1 day of good weather | 2 days of good weather |
| --- | --- | --- | --- |
| Buy a weekend ticket | Pay $3 for 0 days of swimming | Pay $3 for 1 days of swimming | Pay $3 for 2 days of swimming |
| Pay Admission Daily | Pay $0 for 0 days of swimming | Pay $2 for 1 day of swimming | Pay $4 for 2 days of swimming |

**Example 2: Nuclear Annihilation**

|   | War  | Peace |
| --- | --- | --- |
| Arm with nuclear weapons | Extinction of Human Life | Continuation of life under present conditions |
| Disarm | Continuation of life under abhorrent conditions | Golden age |

|   | Possible condition a | Possible condition b |
| --- | --- | --- |
| Possible act 1 | Outcome a x 1 | Outcome b x 1 |
| Possible act 2 | Outcome a x 2 | Outcome b x 2 |

***Example 2A:***

The central question regards the potential value of each state.

## Desirabilities and Probabilities

Outcomes represent notes made by the deliberating agent that help him to determine the desirability of the situations, i.e., outcome, that he should expect to arise if he performs one or another act, 1, 2, etc, under various conditions, a, b, etc.

**Example 3: The right wine**

|   | chicken | beef |
| --- | --- | --- |
| white | white wine with chicken | white wine with beef |
| red | red wine with chicken | red wine with beef |

Numerical possibility of the right wine

|   | chicken | beef |
| --- | --- | --- |
| white | the right wine | the wrong wine |
| red | an odd wine | the right wine |

Following the examples established for us, we model our own problem. The possible actions of course are “marriage” vs. “career”. The conditions are “true love” vs “not true love”. Importantly, the conditions have incredible impact on the actions. We might think that if what is often said about true love is real, then the value of true love will ultimately outweigh the value of a financially lucrative career. For instance, we could imagine that our agent stays behind, gives up on their career options and becomes a truck driver instead.

For instance, get married or pursue one’s career:

|   | True Love | Not True Love |
| --- | --- | --- |
| Marriage | The right life | The wrong life |
| Career | The wrong life | The right life |

Another way to consider this is looking at it through the perspective of both agents in a relationship. For instance in Berit Brogaard’s On Romantic Love, she details various examples of relationships where only one party exhibits emotional characteristics of being in love. 

|   | Love | No Love |
| --- | --- | --- |
| Love | The right life | The wrong life |
| No Love | The wrong life | The right life |

Desirability Matrix for the right wine assumes that the potential value of serving white wine with beef is lower than serving red wine with chicken.

|   | Chicken | Beef |
| --- | --- | --- |
| White | 1 | -1 |
| Red | 0 | 1 |

So instead:
|   | Love | No Love |
| --- | --- | --- |
| Love | The right life | A life of strife |
| Career | An empty life | The right life |

Desirability of True Love Matrix

|   | True Love | Not True Love |
| --- | --- | --- |
| Love | 1 | -1 |
| Money | 0 | 1 |

But according to Stunted Souls, the agent did not realize they were in love until too late. Therefore the agent cannot make an informed decision according to traditional decision theory.

|   | True Love | Not True Love |
| --- | --- | --- |
| Love | 1 | -1 |
| Money | -1 | 1 |

Next we might look at the possibility that the agent was truly in love. 
    Equally Possible Conditions, i.e., probability matrix

|   | Chicken | Beef |
| --- | --- | --- |
| White | .5 | .5 |
| Red | .5 | .5 |

Probability of True Love

|   | True Love | Not True Love |
| --- | --- | --- |
| True Love | .5 | .5 |
| Not True Love | .5 | .5 |

<!-- Column 1 -->
Probability

<!-- Column 2 -->
Desirability

<!-- Column 1 -->
<!-- Column 1 -->
| .5 | .5 |
| --- | --- |
| .5 | .5 |

Non-Luminous True Love

<!-- Column 2 -->
| 1 | -1 |
| --- | --- |
| 0 | 1 |

<!-- Column 1 -->
<!-- Column 1 -->
| .5 | .5 |
| --- | --- |
| .5 | .5 |

<!-- Column 2 -->
| 1 | -1 |
| --- | --- |
| -1 | 1 |

<!-- Column 2 -->


Now Multiply Desirability with Probability

<!-- Column 2 -->


<!-- Column 1 -->
| (.5)(1) | (.5)(-1) |
| --- | --- |
| (.5)(0) | (.5)(1) |

Numerical Probabilities and Desirabilities of Non-Luminous States

<!-- Column 2 -->
| .5 | -.5 |
| --- | --- |
| 0 | .5 |
|   |   |

<!-- Column 1 -->
| (.5)(1) | (.5)(-1) |
| --- | --- |
| (.5)(-1) | (.5)(1) |

<!-- Column 2 -->
| .5 | -.5 |
| --- | --- |
| -.5 | .5 |
|   |   |

**Analyzing the situation**

Finally, we add across the row
    Desirability of bringing white wine
        (.5) + (-.5) = 0
    Desirability of bringing red wine
        (0) + .5 = .5

**Analyzing the non-luminous situation**

Finally, we add across the row
    Desirability of bringing white wine
        (.5) + (-.5) = 0
    Desirability of bringing red wine
        (-.5) + .5 = 0

As such, it does not matter what action the agent selects. What we need then is to determine a situation that describes the state of being in love to outweigh any other state. 

In the original wine case, the conditions are independent of the acts. However, it may be the case that the probability of the conditions depend on the acts.

For instance, the table below represents a situation wherein the host chooses what to cook based on what wine you bring.

|   | Chicken | Beef |
| --- | --- | --- |
| White | 1 | 0 |
| Red | 0 | 1 |

Multiplying corresponding entries in the desirability matrix and adding across rows then would look like:

Example: It is very likely that the meat will be chosen to suit the wine.

<!-- Column 1 -->
|   |   |   |
| --- | --- | --- |
|   | 1 | 0 |
|   | 0 | 1 |

<!-- Column 2 -->
|   |   |   |
| --- | --- | --- |
|   | .5 | .5 |
|   | .5 | .5 |

Analogously, we can imagine that whether they agent chooses to pursue a relationship or pursues money making over and above a committed relationship, they will be just as satisfied with their choice.

Averaging the corresponding entries, we return, 
    i.e., 
$$
\frac{1}{2}\left(\begin{matrix}1 & 0 \\0 & 1 \end{matrix}\right) + \frac{1}{2}\left(\begin{matrix}.5 & .5 \\.5 & .5\end{matrix}\right) = \left(\begin{matrix}.75 & .25 \\.25 & .75\end{matrix}\right)
$$

        Therefore we end with with the following as our probability matrix.

| .75 | .25 |
| --- | --- |
| .25 | .75 |

(1)(1) + (0)(-1) = 1

and 

(0)(0) + (1)(1) = 1

<!-- Column 1 -->
Probability 1

<!-- Column 2 -->
Probability 2

Average corresponding entries

| .75 | .25 |
| --- | --- |
| .25 | .75 |

Yielded estimated desirabilities

(.75)(1) + (.25)(-1) = .5

(.25)(0) + (.75)(1) = .75

Given that our original desirability in the wine case was
| 1 | -1 |
| --- | --- |
| 0 | 1 |

    The desirability for the first action is .5, choosing white wine, while the desirability for choosing red wine is .75. Therefore the agent would be better off bringing red wine.

But what about in the true love case? Would the agent be better off pursuing true love, e.g., not taking the professorship at the University of Anchorage in Alaska?

## Summary and Rationale

A formal Bayesian decision problem is specified by two rectangular arrays (matrices) of numbers, probability and desirability, assignments to act-condition pairs. The columns represent a set of incompatible conditions, an unknown one of which actually obtains. Each row of the desirability matrix, 
    $d_1, d_2 . . . d_n$

Probability matrix, 
    $p_1, p_2, . . . p_n$

Represents the probabilities that the agent attributes to the same *n* condition. To estimate desirability of the act, multiply corresponding probabilities and desirabilities, and add:
    $p_1d_1 + p_2d_2 + . . . + p_nd_n$

Example: The Gambler

<!-- Column 1 -->
Probability

|   | 0 heads | 1 heads | 2 heads |
| --- | --- | --- | --- |
| Toss | .25 | .5 | .25 |
| No Toss | 1 | 0 | 0 |

<!-- Column 2 -->
Desirability

|   | 0 | 1 | 2 |
| --- | --- | --- | --- |
| Toss | 0 | .25 | .50 |
| No Toss | .35 | .35 | .35 |

***Riding the Subway***

It takes $.50 to ride the subway, but you only have $.35. 

$p_1d_2 + p_2d_2 + . . . + p_nd_n$ = (.25)(0) + (.5)(.25) + (.25)(.50) = .25

Which is the cost of the ticket allowing you to place the bet.

## Incompletely Specified Desirabilities

|   | 0 | 1 | 2 |
| --- | --- | --- | --- |
| weekend | ***x - 3*** | ***y - 3*** | ***z - 3*** |
| by day | ***x*** | ***y - 2*** | ***z - 4*** |

***Estimated desirability of an act = Actuarial Value***

<!-- Column 1 -->
| .25 | .5 | .25 |
| --- | --- | --- |
| .25 | .5 | .25 |

<!-- Column 2 -->
|   | 0 | 1 | 2 |
| --- | --- | --- | --- |
| weekend | ***x - 3*** | ***y - 3*** | ***z - 3*** |
| by day | ***x*** | ***y - 2*** | ***z - 4*** |

## Dominance and a Fallacy

## Problems

## Ratifiability

## Notes and References

---