---
notion-id: 3bf8935b-cf8a-80d7-8e88-e76b2104ee65
base: "[[Outline Resource Database.base]]"
Summary: ""
Part: Planning for Mistakes
Philosophy Persona Spec:
  - "[[Notion/Philosophy Persona Spec/Carter, Sam|Carter, Sam]]"
📚 Notero Advanced 1: []
Primary Sources: []
Secondary Sources: []
📚 Notero Advanced: []
Publication:
  - "[[Notion/Moral Imagination and Hope Laboratory/Notero Advanced/Planning for Mistakes|Planning for Mistakes]]"
---
<!-- Linked database (not supported by Notion API) -->

<!-- Linked database (not supported by Notion API) -->

1. discusses reasons for thinking that we will sometimes err in trying to follow Maximize Expected Value.
	1. Imperfection: 
		1. Given both MEV (cf. Smith 2010; Srinivasan 2015; Lasonen-Aarnio 2019;2024; Lasonen 2025; Hughes 2021) 
		2. and MV (cf. Jackson 1991; Howard-Snyder 1997; Lenman 2000)., 
		3. error can arise purely from agent’s uncertainty. Isaacs and Levinstein (2023)
2. introduces a framework for evaluating advice, given susceptibility to error. Opacity: Our desires are opaque to us.
	2. Opaque decision problem: 
		4. $\hat{\Delta}$ = $\langle \text{S}^{\hat{\Delta}}, O^{\hat{\Delta}}, A^{\hat{\Delta}}, P^{\hat{\Delta}}, \upsilon^{\hat{\Delta}}\rangle$
			1. A set of states, $S$.
				1. States, $s, s', s'', . . . \in S$ are objects in a decision problem relevant to the agent uncertainty.
			2. A set of outcomes, $O$.
				2. Outcomes, $o, o', o'', . . . \in O$ are objects of an agent’s desires.
			3. A set of acts, A $\subseteq$ $S$ $\rightarrow$ $O$.
				3. Acts, $a, b, c, . . . \in A$ are the immediate objects of decision-making.
			4. A state-dependent probability function, P: $S$ $\rightarrow$ $(P(S)$ $\rightarrow$ [0,1]).
				4. Or we might say: the credence, distribution of beliefs adopted by the agent at $s$, once they know what state they are at.
			5. A value function, $\upsilon$: 
3. show that trying to maximize expected value will be among the best ways for an agent to make decisions iff their prior and posterior credences are aligned in a specific way.
	3. Set of plans for an opaque decision problem $\hat{\Delta}$
		5. $\Pi = S \rightarrow A$
			6. Plans, $\pi, \pi', \pi'', . . . \in \Pi$ are functions from states $s,$ to acts, 
			7. i.e., $\pi(s) = a$ is the act $a$ recommended by plan $\pi$ in state $s$.
	4. Let $\Pi_{|MEV}$ be the set of plans to Maximize Expected Value in $\hat{\Delta}$. Let $ev_{s}(a)$ be the expected value of action $a$ at $s$ (for any $s \in S$ and $s \in A$).
		6. $ev_{s}(a) = \sum\limits_{s’ \in S} \upsilon(a(s’)) \cdot P_{s}(s’)$
		7. Then $\pi \in \Pi_{|MEV}$ iff for all $s \in S$ and $a \in A$
		8. ergo:  $ev_{s}(\pi(s)) \geq ev_{s}(a)$
	5. Error: Sometimes agents perform an act which their plan recommends at another state.
		9. susceptibility to error in terms of an agent’s underlying pattern of dispositions (Gallow 2021).
		10. Enriched state spaces
			For any opaque decision problem $\hat{\Delta}: [\cdot]$ is a bijective function with domain $S$ which is a product of its domain and codomain, $\bar{S}_{[\cdot]} = S \times \{[s] : s \in S\}$
				 $s, [s]$ circumstances of an agent whose act is determined according to what their plan recommends for $s$.
				enriched state $(s,[s’])$ circumstances of an agent whose act is determined according to what their plan recommends for $s$’.

4. considers the prospects of Maximize Expected Value under certain idealized conditions. 
	6. Even under these idealizations, I show that there are realistic seeming cases in which agents’ credences will not be appropriately aligned. 
	7. The upshot is that Maximize Expected Value should not be adopted as fully general advice for decision-making. 
	8. Given human susceptibility to error, there will be decisions in which an agent should expect to do strictly better by trying to do something else.
5. shows that these issues arise for both causal and evidential decision theorists
6. draws connections with recent work on how agents should try to update their credences (Greaves and Wallace 2006; Schoenfield 2017; Gallow 2021; Isaacs and Russell 2023).