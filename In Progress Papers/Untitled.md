# Paper Template: Minecraft Agent Experiments in Philosophy

Oct 12, 2026 · @Jim

## How to use this template

This template follows the empirical CS paper used by every Minecraft-agent paper in our log. It adds one section those papers lack: an explicit account of how a philosophical claim becomes a measurable hypothesis. That section is the philosopher's contribution and the main reason a hybrid paper gets accepted.

**What the source papers share.** Each one defines a construct, builds tasks in Minecraft that operationalize it, compares models or conditions, then ablates and reports limitations.

| Paper                                                                                                                                          | Construct defined                                 | Core evidence                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [MINDcraft / MineCollab](https://arxiv.org/abs/2504.17950) (2025)                                                                              | Embodied collaboration                            | Success rate across tasks; up to 15% drop when agents must communicate detailed plans    |
| [Project Sid](https://arxiv.org/abs/2411.00114) (2024)                                                                                         | "Civilizational" progress (roles, rules, culture) | Simulations of 10–1,000+ agents; role specialization, rule change, cultural transmission |
| [Mine Odyssey](https://arxiv.org/abs/2610.11328) (2026)                                                                                        | Spatial agentic intelligence                      | 180 tasks, 30 locations, 8 models compared                                               |
| [World Editing](https://arxiv.org/abs/2610.02331) (2026)                                                                                       | "Intervention depth"                              | 110 tasks, 1.1K+ executable criteria; reliability falls as depth rises                   |
| [MineAmongUs](https://arxiv.org/abs/2608.30428), [BeliefNest](https://arxiv.org/abs/2505.12321), [MindForge](https://arxiv.org/abs/2411.12977) | Deception; theory of mind; cultural learning      | Task suites with belief or deception conditions vs. baselines                            |

**Target venues.** The default shape fits CS and cognitive-science venues: NeurIPS/ICLR workshops, CogSci, AIES, AAMAS. For *Minds and Machines*, *Philosophy & Technology* or *Synthese*, keep the same sections but expand Sections 2, 3 and 7, cut model-comparison tables to one, and move prompts and per-task numbers to an appendix.

**Conventions.** Bracketed text is to fill in. *Guidance* lines say what reviewers expect; delete them before submitting. Page budgets assume an 8–9 page conference limit plus appendix.

Note: the structure is inferred from the abstracts and front matter of these papers. Full texts were not all reviewed, so check the specific venue's style guide before submitting.

## Title, authors, abstract

**Title pattern.** \[Short memorable name\]: \[What you test\] in \[Setting\]. For example, "\[Name\]: Testing \[Philosophical Claim\] with Embodied LLM Agents in Minecraft". The source papers all lead with a coined name (MineCollab, PIANO, Mine Odyssey, IGMBench). A name makes the work citable.

* Positive emotions also help us to reason in ways that are open-minded, optimistic, and creative.
	* We have an easier time solving problems that require novel applications of familiar materials (Isen, Daubman, & Nowicki, 1987).
* Negative emotions tend to promote more narrow attentional focus.
	* Anxiety makes us attend to threatening objects (MacLeod & Mathews, 1991; Ohman, Flykt, & Esteves, 2001).
* Processing Mode Theory: Emotions can be identified with such systematic changes in faculties of attention, memory, and reasoning.
	* Oatley and Johnson-Laird (1987) argue that the processing mode theory applies to an important set of emotions, including anger, anxiety, happiness, and sadness (also see Sizer 2000 for a processing mode theory of models.).

**Authors.** \[Names, affiliations\]. For student co-authors, add a CRediT contribution statement in the appendix.

**Abstract (150–250 words, five moves, one to two sentences each):**

1. **Claim and stakes.** \[Philosophical claim, e.g. "Testimony transmits knowledge as reliably as direct perception"\], and why it matters now that LLM agents act in shared worlds.
2. **Gap.** Prior agent work measures \[task success / capability\] but not \[the philosophical property\]. Prior philosophical work argues the point without controlled test cases.
3. **What you built.** \[Name\], a set of \[N\] tasks on the Mindcraft platform that operationalizes \[construct\] as \[measurable quantity\].
4. **Main result with a number.** Across \[M\] models and \[K\] conditions, \[condition A\] \[raised/lowered\] \[metric\] by \[X%\] relative to \[B\].
5. **Implication, scoped.** This \[supports / puts pressure on / fails to support\] \[claim\] for \[agents of this kind\]. State in a few words what it does not show.

*Guidance:* Every source abstract states a quantitative headline result, for example "performance drops by up to 15%" (MineCollab) or "78.2% of tasks" (World Editing). Philosophy reviewers will also look for the scope limit in move 5.

## 1 Introduction (\~1 page)

**¶1 The question.** Open with the philosophical claim in plain language and the classic case behind it, such as the Sally-Anne test for false belief, Condorcet's jury theorem, or Hobbes's state of nature. One sentence on why the question has become pressing for artificial agents.

**¶2 Why an experiment.** Arguments about \[claim\] rest on intuitions about cases. Minecraft lets us build those cases, control them, and run them many times. Cite Chalmers' *Reality+* on virtual worlds as real environments if the claim concerns virtuality.

**¶3 The gap.** \[Agent papers X, Y\] measure \[capability\]. They do not separate \[the property\] from confounds such as \[prompt instruction / task competence\]. \[Philosophers A, B\] have not tested the claim on agents.

**¶4 Approach in one paragraph.** We operationalize \[claim\] as \[hypothesis\]. We build \[N\] tasks in Mindcraft and compare \[conditions\] across \[models\].

**Contributions (bulleted list, three or four items):**

- A conceptual analysis that turns \[claim\] into \[testable hypothesis\], with the assumptions stated explicitly (§3).
- &#91;Name\], an open task suite of \[N\] Mindcraft scenarios for measuring \[construct\] (§4–5).
- An empirical finding: \[one sentence with the number\] (§6).
- An assessment of what the finding does and does not show for \[claim\] (§7).

*Guidance:* A closing contributions list is standard at CS venues, and reviewers look for one. Point each bullet to the section that delivers it.

## 2 Related work (\~0.75 page; \~2 pages for a philosophy journal)

Use three short subsections, each ending with a sentence on how this paper differs.

**2.1 The philosophical debate.** Two or three positions on \[claim\], with key sources. Examples: Dennett and Premack & Woodruff on theory of mind; Goldman and Lackey on testimony; Bicchieri on norms; Chalmers, *Reality+*, on virtual realism.

**2.2 LLM agents in Minecraft and other open worlds.** Covers platforms and benchmarks: [Voyager](https://arxiv.org/abs/2305.16291), [MINDcraft / MineCollab](https://arxiv.org/abs/2504.17950), [Project Sid](https://arxiv.org/abs/2411.00114) and [Mine Odyssey](https://arxiv.org/abs/2610.11328). Add the theme-specific papers: [BeliefNest](https://arxiv.org/abs/2505.12321) and [MindForge](https://arxiv.org/abs/2411.12977) for theory of mind, [MineAmongUs](https://arxiv.org/abs/2608.30428) for deception.

**2.3 Probing philosophical properties in LLMs.** Non-embodied evaluations of the same property, such as text-based false-belief tests or norm emergence in chat-only societies. This is where embodiment earns its place. Explain what a body and a shared world add that text alone cannot.

*Guidance:* Subsection 2.3 is where most hybrid papers are weakest. If you cannot say why Minecraft matters for this claim, a reviewer will ask why you did not run a text benchmark.

## 3 From claim to hypothesis (\~1 page)

This section lays out, step by step, how the philosophical claim becomes something an experiment can measure. The source papers do a compressed version of this: World Editing defines "intervention depth" before measuring it, and Project Sid defines its "civilizational benchmarks". Your version should be longer and more careful, because it is where the paper's philosophical content sits.

**3.1 The claim.** State it precisely, numbered so later sections can refer to it, for example:

> **(C)** If agent B's only route to *p* is A's sincere testimony, B's reliability about *p* matches A's reliability about *p*.

**3.2 Operationalization table.** Fill in one row per concept in (C):

| Concept in claim | Operational stand-in | Observable in Minecraft | Metric | What could fake it |
| --- | --- | --- | --- | --- |
| \[e.g. knowledge that *p*\] | \[correct action on *p*\] | \[agent fetches the right chest\] | \[% correct over N trials\] | \[lucky guess; *p* leaked in the prompt\] |
| \[e.g. testimony\] | \[message from A over chat\] | \[Mindcraft chat log\] | \[message content scored for accuracy\] | \[B reads the world state directly\] |
| \[...\] |  |  |  |  |

**3.3 Predictions.** State them before running anything, and preregister if possible (for example on OSF):

| If (C) is true | If (C) is false | Result that would be ambiguous |
| --- | --- | --- |
| \[B's accuracy ≈ A's, within ±X%\] | \[B's accuracy falls well below A's\] | \[both near ceiling or floor\] |

**3.4 Bridging assumptions.** List what must hold for agent results to bear on (C) at all. One example: *the agent's action selection is a fair proxy for belief.* Name the philosophical cost of each assumption, because reviewers in philosophy will attack them here.

## 4 Environment and agents (\~0.75 page)

Report enough detail that someone else could rebuild the setup. Reproducibility is the most common reviewer complaint about agent papers.

| Item | Report | Example entry |
| --- | --- | --- |
| Platform | Mindcraft fork and commit hash | mindcraft-ce @ \[hash\] |
| Minecraft | Version, server type, world seed | \[1.21.x\], \[Paper/vanilla\], seed \[n\] |
| Models | Name, size, quantization, provider | \[model\] via Ollama, \[q4\_K\_M\] |
| Decoding | Temperature, max tokens, context length | T=\[0.7\], \[4k\] ctx |
| Agent profile | System prompt, persona, available commands | Full text in Appendix A |
| Memory | What persists between turns and episodes | \[none / summary / full log\] |
| Perception | What the agent can sense | \[text world-state only / vision\] |
| Hardware | GPU, wall-clock time per episode | \[GPU\], \~\[n\] min/episode |

**4.1 Why this platform.** Mindcraft is the platform that [MineCollab](https://arxiv.org/abs/2504.17950) introduced, so citing it ties your results to an existing benchmark lineage.

**4.2 Model choice.** Open-weight local models are a strength for reproducibility. Expect a reviewer to ask whether results hold for frontier models. In [Mine Odyssey](https://arxiv.org/abs/2610.11328), frontier models outscored the best open-weight model by roughly 50 points, so either include one frontier model or scope your claims to open-weight models.

## 5 Experimental design (\~1 page)

**5.1 Tasks.** Describe the \[N\] scenarios in a table: name, goal, what varies, and success criterion. Include a figure of one scenario showing a screenshot and the agents' starting positions. Agent papers usually put a figure like this near the front.

**5.2 Conditions.** The manipulation must change only the variable in (C):

| Condition | What differs | Role |
| --- | --- | --- |
| \[Treatment, e.g. testimony-only\] | \[B learns *p* only from A's chat\] | Tests (C) |
| \[Control, e.g. direct access\] | \[B can see the chest contents\] | Baseline for B's competence |
| \[Floor, e.g. no information\] | \[No route to *p*\] | Rules out guessing |
| \[Instruction control\] | \[Same as treatment; prompt does not mention the property\] | Rules out prompt-induced behavior |

The instruction control matters most. The most common critique of Project Sid-style claims is that agents did what their prompts told them to. Show that the behavior appears without being asked for.

**5.3 Trials and statistics.** Plan for at least \[30\] episodes per condition per model, with varied seeds. Report means with 95% bootstrap confidence intervals. Where episodes are nested in models, use a mixed-effects model. Report all runs, including crashes and timeouts, and say how failures were coded.

**5.4 Ablations.** Remove one component at a time, such as memory, chat, or vision, to show which one drives the effect. [Mine Odyssey](https://arxiv.org/abs/2610.11328) and [World Editing](https://arxiv.org/abs/2610.02331) both report ablations of this kind.

**5.5 Optional human baseline.** Have \[n\] people play the same scenarios. This anchors what "normal" performance looks like, and philosophy reviewers find it persuasive.

## 6 Results (\~1.5 pages)

Lead with the answer to (C), then give the evidence for it.

**6.1 Main result.** One figure: the metric by condition, with one bar group per model and 95% confidence-interval whiskers. Directly under it, one sentence: "Under testimony-only, B's accuracy was \[X%\] vs. \[Y%\] under direct access (Δ = \[d\], 95% CI \[a, b\])."

**6.2 Per-task breakdown.** A table of task × condition, with the full grid in the appendix if it is large. Point out where the effect reverses or disappears.

**6.3 Ablations.** A table with one row per component removed and the change in the main metric.

**6.4 Qualitative analysis.** Quote two or three short transcripts from agent chat or reasoning logs showing typical success and failure. [MineAmongUs](https://arxiv.org/abs/2608.30428)-style deception work depends heavily on this. Label quotes as cherry-picked or randomly sampled, and say which.

**6.5 Failure taxonomy.** Sort failures into categories such as \[navigation error, misread message, hallucinated item, never acted\] with counts. [MineCollab](https://arxiv.org/abs/2504.17950) identified communication as the main source of failure by doing this.

*Guidance:* Separate competence failures (the agent could not do the task) from failures that bear on (C). If the floor and control conditions are both low, the experiment cannot tell you anything about (C). Report that honestly rather than interpreting noise.

## 7 Discussion (\~1 page; 3–4 pages for a philosophy journal)

This is where the paper earns its philosophical keep. Several of the source papers overreach at this point, and reviewers will be watching for it.

**7.1 What the result shows about (C).** Say whether the result supports (C), puts pressure on it, or is neutral, and for which class of agents. Tie this back to the predictions table in §3.3.

**7.2 Does it generalize beyond these agents?** Ask whether the result is about LLM agents only, or about any system that meets the bridging assumptions in §3.4. Only the second reading speaks to (C) in general. Argue for whichever you claim.

**7.3 Strongest objection and reply.** Take the best objection head-on, for example "the agent has no beliefs, so this is not testimony". A dedicated objection-and-reply block is the philosophy-journal norm and is rare in CS papers. Including it marks the hybrid paper as philosophy.

**7.4 Over-claiming check.** Words like "civilization", "culture" and "religion" in [Project Sid](https://arxiv.org/abs/2411.00114), or "theory of mind" in agent papers, can outrun the evidence. Use the most deflationary description the data allow, then argue for anything stronger.

**7.5 Implications.** One paragraph on implications for AI design or alignment, and one on implications for the original debate in philosophy.

## 8 Limitations, ethics, reproducibility, appendices

**8.1 Limitations.** Many CS venues require this section. Cover:

- Model coverage: which models were and were not tested.
- Prompt sensitivity: did you test paraphrased prompts?
- Scale: number of agents, episode length.
- Ecological validity: Minecraft compared with the real-world case behind (C).
- The bridging assumptions from §3.4 that you could not test.

**8.2 Ethics statement.** Cover human participants, including any student co-authors and human baselines; check whether IRB approval is needed. Address dual use, especially for deception studies. State compute and energy use.

**8.3 Reproducibility.** Release code, task configs, world files, the seed list, raw logs and analysis notebooks, and link the repository. Adding these scenarios as Mindcraft task files lets others rerun them directly.

**8.4 Conclusion.** One paragraph: the claim, the finding with its number, the scoped implication, and one next experiment.

**Appendices:**

- A. Full system prompts and agent profiles, verbatim.
- B. Task specifications and success criteria.
- C. Full results tables and per-model numbers.
- D. Sample transcripts, randomly sampled.
- E. Author contributions (CRediT).

**References.** Use the venue's style: natbib author-year for NeurIPS/ICLR/CogSci; Chicago or the house style for philosophy journals. Cite arXiv versions with their ID and the venue version when one exists.

## Sources

- [Collaborating Action by Action (MINDcraft / MineCollab)](https://arxiv.org/abs/2504.17950)
- [Project Sid: Many-agent simulations toward AI civilization](https://arxiv.org/abs/2411.00114)
- [Mine Odyssey](https://arxiv.org/abs/2610.11328)
- [World Editing](https://arxiv.org/abs/2610.02331)
- [Lies We Can See (MineAmongUs)](https://arxiv.org/abs/2608.30428)
- [BeliefNest](https://arxiv.org/abs/2505.12321)
- [MindForge](https://arxiv.org/abs/2411.12977)
- [Voyager](https://arxiv.org/abs/2305.16291)
