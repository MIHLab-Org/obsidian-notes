# Title, authors, abstract

Title pattern. RealityCraft: Testing philosophical concepts in Minecraft agents in an introduction to philosophy course. 

For example, "[Name]: Testing [Philosophical Claim] with Embodied LLM Agents in Minecraft". The source papers all lead with a coined name (MineCollab, PIANO, Mine Odyssey, IGMBench). A name makes the work citable.

Authors. [Names, affiliations]. For student co-authors, add a CRediT contribution statement in the appendix.

Abstract (150–250 words, five moves, one to two sentences each):

1. Claim and stakes. [In the edited volume *Thought Experiments in Science and Philosophy*, Tamara Horowitz and Gerald Massey define thought experiments as "attempt[s] to draw instruction from a process of hypothetical reasoning". ]. We typically use philosophical thought experiments to better understand philosophical concepts. In his book Reality+, Dave Chalmers uses the philosophical thought experiment that we could be in a simulation, to teach philosophical concepts to undergraduate students. The popular video game Minecraft is a simulation and llm agents inside of it are simulated beings and therefore can be used to teach philosophical concepts to undergraduate students. We think that llm agents in Minecraft can resemble students while the students themselves resemble their instructors.
2. Gap. Prior llm in Minecraft work has been used to measure [llm reasoning, cooperation, memory, planning, tool use. They've also been used to model theories such as developmental psychology, game theory, macroeconomics, social policies and community dynamics.] but they have not been used [teach philosophical concepts to undergraduate students, that includes hypothetical reasoning such as 'what is real?', 'how do we know?', why should we care?']. Prior philosophical work argues the point without controlled test cases.
3. What you built. We have built [RealityCraft], a set of [N] tasks on the Mindcraft platform that operationalizes [student learning] as a [measurable quantity].
4. Main result with a number. Across [M] models and [K] conditions, [condition A] [raised/lowered] [metric] by [X%] relative to [B].
5. Implication, scoped. This [supports / puts pressure on / fails to support] [claim] for [agents of this kind]. State in a few words what it does not show.

In the edited volume *Thought Experiments in Science and Philosophy*, Tamara Horowitz and Gerald Massey define thought experiments as "attempt[s] to draw instruction from a process of hypothetical reasoning". Planning and imagination play an important role in many of the activities that we carry out on a daily basis. Some of these activities are associated with escape, daydreaming or fantasy. However, some of the activities that imagination plays an important role in are associated with learning, and enable us to learn about the world as it is. Some other activities centered around planning and imagination can also enable us to learn about ways the world could be. Video games can and often do, function as thought experiments. They can at one time be used to escape or daydream, but they can also be used to help us learn about the world as it is, for instance when we use them to model philosophical problems in metaphysics, values, and epistemology.

Guidance: Every source abstract states a quantitative headline result, for example "performance drops by up to 15%" (MineCollab) or "78.2% of tasks" (World Editing). Philosophy reviewers will also look for the scope limit in move 5.
1 Introduction (~1 page)
¶1 The question. Open with the philosophical claim in plain language and the classic case behind it, such as the Sally-Anne test for false belief, Condorcet's jury theorem, or Hobbes's state of nature. One sentence on why the question has become pressing for artificial agents.
¶2 Why an experiment. Arguments about [claim] rest on intuitions about cases. Minecraft lets us build those cases, control them, and run them many times. Cite Chalmers' Reality+ on virtual worlds as real environments if the claim concerns virtuality.
¶3 The gap. [Agent papers X, Y] measure [capability]. They do not separate [the property] from confounds such as [prompt instruction / task competence]. [Philosophers A, B] have not tested the claim on agents.
¶4 Approach in one paragraph. We operationalize [claim] as [hypothesis]. We build [N] tasks in Mindcraft and compare [conditions] across [models].
Contributions (bulleted list, three or four items):
• A conceptual analysis that turns [claim] into [testable hypothesis], with the assumptions stated explicitly (§3).
• [Name], an open task suite of [N] Mindcraft scenarios for measuring [construct] (§4–5).
• An empirical finding: [one sentence with the number] (§6).
• An assessment of what the finding does and does not show for [claim] (§7).
Guidance: A closing contributions list is standard at CS venues, and reviewers look for one. Point each bullet to the section that delivers it.
2 Related work (~0.75 page; ~2 pages for a philosophy journal)
Use three short subsections, each ending with a sentence on how this paper differs.
2.1 The philosophical debate. Two or three positions on [claim], with key sources. Examples: Dennett and Premack & Woodruff on theory of mind; Goldman and Lackey on testimony; Bicchieri on norms; Chalmers, Reality+, on virtual realism.
2.2 LLM agents in Minecraft and other open worlds. Covers platforms and benchmarks: Voyager, MINDcraft / MineCollab, Project Sid and Mine Odyssey. Add the theme-specific papers: BeliefNest and MindForge for theory of mind, MineAmongUs for deception.
2.3 Probing philosophical properties in LLMs. Non-embodied evaluations of the same property, such as text-based false-belief tests or norm emergence in chat-only societies. This is where embodiment earns its place. Explain what a body and a shared world add that text alone cannot.
Guidance: Subsection 2.3 is where most hybrid papers are weakest. If you cannot say why Minecraft matters for this claim, a reviewer will ask why you did not run a text benchmark.
3 From claim to hypothesis (~1 page)
This section lays out, step by step, how the philosophical claim becomes something an experiment can measure. The source papers do a compressed version of this: World Editing defines "intervention depth" before measuring it, and Project Sid defines its "civilizational benchmarks". Your version should be longer and more careful, because it is where the paper's philosophical content sits.
3.1 The claim. State it precisely, numbered so later sections can refer to it, for example:
(C) If agent B's only route to p is A's sincere testimony, B's reliability about p matches A's reliability about p.
3.2 Operationalization table. Fill in one row per concept in (C):
Concept in claim
Operational stand-in
Observable in Minecraft
Metric
What could fake it
[e.g. knowledge that p]
[correct action on p]
[agent fetches the right chest]
[% correct over N trials]
[lucky guess; p leaked in the prompt]
[e.g. testimony]
[message from A over chat]
[Mindcraft chat log]
[message content scored for accuracy]
[B reads the world state directly]
[...]




3.3 Predictions. State them before running anything, and preregister if possible (for example on OSF):
If (C) is true
If (C) is false
Result that would be ambiguous
[B's accuracy ≈ A's, within ±X%]
[B's accuracy falls well below A's]
[both near ceiling or floor]
3.4 Bridging assumptions. List what must hold for agent results to bear on (C) at all. One example: the agent's action selection is a fair proxy for belief. Name the philosophical cost of each assumption, because reviewers in philosophy will attack them here.
4 Environment and agents (~0.75 page)
Report enough detail that someone else could rebuild the setup. Reproducibility is the most common reviewer complaint about agent papers.
Item
Report
Example entry
Platform
Mindcraft fork and commit hash
mindcraft-ce @ [hash]
Minecraft
Version, server type, world seed
[1.21.x], [Paper/vanilla], seed [n]
Models
Name, size, quantization, provider
[model] via Ollama, [q4_K_M]
Decoding
Temperature, max tokens, context length
T=[0.7], [4k] ctx
Agent profile
System prompt, persona, available commands
Full text in Appendix A
Memory
What persists between turns and episodes
[none / summary / full log]
Perception
What the agent can sense
[text world-state only / vision]
Hardware
GPU, wall-clock time per episode
[GPU], ~[n] min/episode
4.1 Why this platform. Mindcraft is the platform that MineCollab introduced, so citing it ties your results to an existing benchmark lineage.
4.2 Model choice. Open-weight local models are a strength for reproducibility. Expect a reviewer to ask whether results hold for frontier models. In Mine Odyssey, frontier models outscored the best open-weight model by roughly 50 points, so either include one frontier model or scope your claims to open-weight models.
5 Experimental design (~1 page)
5.1 Tasks. Describe the [N] scenarios in a table: name, goal, what varies, and success criterion. Include a figure of one scenario showing a screenshot and the agents' starting positions. Agent papers usually put a figure like this near the front.
5.2 Conditions. The manipulation must change only the variable in (C):
Condition
What differs
Role
[Treatment, e.g. testimony-only]
[B learns p only from A's chat]
Tests (C)
[Control, e.g. direct access]
[B can see the chest contents]
Baseline for B's competence
[Floor, e.g. no information]
[No route to p]
Rules out guessing
[Instruction control]
[Same as treatment; prompt does not mention the property]
Rules out prompt-induced behavior
The instruction control matters most. The most common critique of Project Sid-style claims is that agents did what their prompts told them to. Show that the behavior appears without being asked for.
5.3 Trials and statistics. Plan for at least [30] episodes per condition per model, with varied seeds. Report means with 95% bootstrap confidence intervals. Where episodes are nested in models, use a mixed-effects model. Report all runs, including crashes and timeouts, and say how failures were coded.
5.4 Ablations. Remove one component at a time, such as memory, chat, or vision, to show which one drives the effect. Mine Odyssey and World Editing both report ablations of this kind.
5.5 Optional human baseline. Have [n] people play the same scenarios. This anchors what "normal" performance looks like, and philosophy reviewers find it persuasive.
6 Results (~1.5 pages)
Lead with the answer to (C), then give the evidence for it.
6.1 Main result. One figure: the metric by condition, with one bar group per model and 95% confidence-interval whiskers. Directly under it, one sentence: "Under testimony-only, B's accuracy was [X%] vs. [Y%] under direct access (Δ = [d], 95% CI [a, b])."
6.2 Per-task breakdown. A table of task × condition, with the full grid in the appendix if it is large. Point out where the effect reverses or disappears.
6.3 Ablations. A table with one row per component removed and the change in the main metric.
6.4 Qualitative analysis. Quote two or three short transcripts from agent chat or reasoning logs showing typical success and failure. MineAmongUs-style deception work depends heavily on this. Label quotes as cherry-picked or randomly sampled, and say which.
6.5 Failure taxonomy. Sort failures into categories such as [navigation error, misread message, hallucinated item, never acted] with counts. MineCollab identified communication as the main source of failure by doing this.
Guidance: Separate competence failures (the agent could not do the task) from failures that bear on (C). If the floor and control conditions are both low, the experiment cannot tell you anything about (C). Report that honestly rather than interpreting noise.
7 Discussion (~1 page; 3–4 pages for a philosophy journal)
This is where the paper earns its philosophical keep. Several of the source papers overreach at this point, and reviewers will be watching for it.
7.1 What the result shows about (C). Say whether the result supports (C), puts pressure on it, or is neutral, and for which class of agents. Tie this back to the predictions table in §3.3.
7.2 Does it generalize beyond these agents? Ask whether the result is about LLM agents only, or about any system that meets the bridging assumptions in §3.4. Only the second reading speaks to (C) in general. Argue for whichever you claim.
7.3 Strongest objection and reply. Take the best objection head-on, for example "the agent has no beliefs, so this is not testimony". A dedicated objection-and-reply block is the philosophy-journal norm and is rare in CS papers. Including it marks the hybrid paper as philosophy.
7.4 Over-claiming check. Words like "civilization", "culture" and "religion" in Project Sid, or "theory of mind" in agent papers, can outrun the evidence. Use the most deflationary description the data allow, then argue for anything stronger.
7.5 Implications. One paragraph on implications for AI design or alignment, and one on implications for the original debate in philosophy.
8 Limitations, ethics, reproducibility, appendices
8.1 Limitations. Many CS venues require this section. Cover:
• Model coverage: which models were and were not tested.
• Prompt sensitivity: did you test paraphrased prompts?
• Scale: number of agents, episode length.
• Ecological validity: Minecraft compared with the real-world case behind (C).
• The bridging assumptions from §3.4 that you could not test.
8.2 Ethics statement. Cover human participants, including any student co-authors and human baselines; check whether IRB approval is needed. Address dual use, especially for deception studies. State compute and energy use.
8.3 Reproducibility. Release code, task configs, world files, the seed list, raw logs and analysis notebooks, and link the repository. Adding these scenarios as Mindcraft task files lets others rerun them directly.
8.4 Conclusion. One paragraph: the claim, the finding with its number, the scoped implication, and one next experiment.
Appendices:
• A. Full system prompts and agent profiles, verbatim.
• B. Task specifications and success criteria.
• C. Full results tables and per-model numbers.
• D. Sample transcripts, randomly sampled.
• E. Author contributions (CRediT).
References. Use the venue's style: natbib author-year for NeurIPS/ICLR/CogSci; Chicago or the house style for philosophy journals. Cite arXiv versions with their ID and the venue version when one exists.