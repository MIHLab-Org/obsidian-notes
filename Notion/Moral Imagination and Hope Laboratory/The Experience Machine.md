---
notion-id: 38f8935b-cf8a-806c-973c-ddbdd6ce0304
---
### An immersive, AI-guided way to *do* philosophy — not just read it

**A project of MIHLab (the Moral Imagination & Hope Laboratory) · mihlab.org**

---

## In one line

The Experience Machine is a walkable 3D world where you hold real Socratic conversations
with history's philosophers — each grounded in their own primary texts — and step into
interactive thought experiments that let you *feel* an idea before you formalize it.

## The elevator pitch

Philosophy is the original technology for thinking well, but it is taught almost entirely
through reading and lecture — a format that asks students to grasp abstract arguments they
have never experienced. The Experience Machine closes that gap. A visitor walks through a
house of philosophy, is met by Plato, and is guided to the question they actually carry.
There they converse with an AI philosopher who presses them Socratically — Aristotle on
what is real and how we know it, Augustine on what is good, Aquinas on the formal bones of
reasoning — and then steps into a "closet": a hands-on thought experiment (replace every
plank of the Ship of Theseus; pull the trolley's lever; in the formal hall, work a theorem
on a whiteboard). The result is a product that teaches the way understanding actually
forms: experience first, formalization second.

It is live today at mihlab.org, built and working, with a clear path from a free tier to
paid subscriptions — and a mission to fund a physical philosophy lab where this happens in
person, in VR, on real hardware.

---

## The problem

Three gaps, all real:

**Philosophy is taught against the grain of how people learn.** The discipline trades in
abstractions — identity, causation, justice, probability — yet delivers them through text
and lecture, the most abstract media available. Students can recite a theorem about rational
choice without ever having felt the pull of the paradox it resolves. There are two ways of
knowing: the analytic/abstract and the experiential/typological. Education over-serves the
first and neglects the second.

**AI tutors are confident and ungrounded.** The current wave of "AI tutor" products will
happily invent a philosopher's view, flatten a hard argument into a summary, or agree with
whatever the student says. For a discipline whose whole value is rigor and intellectual
honesty, a sycophantic, hallucinating tutor is worse than none.

**Lifelong learners have no good front door.** Millions of curious adults want to engage
seriously with philosophy and have nowhere to go between a pop-philosophy podcast and a
graduate seminar.

## The solution

The Experience Machine answers each:

- **Experience before formalism.** The world is built so that you *live* a puzzle before
anyone names it. You discover your own intuitions — and your own contradictions — by acting,
then a philosopher helps you formalize what you felt.
- **Advocates, not oracles.** Every philosopher is an *advocate* who presses a position and
can be argued with, never an authority to defer to. Each is grounded in their own primary
texts and told plainly where their texts run out, so they decline to invent rather than
confabulate. They are better at asking than answering — by design.
- **A guided front door for anyone.** Met by Plato, routed by a diagnosis of what you actually
want to know, the visitor needs no prior training to begin — and a self-directed adult and a
first-year student can each find their level.

---

## How it works (the experience)

The structure mirrors the way a question travels through philosophy itself:

1. **Outside, in the forest** — a present-day host (in the spirit of David Chalmers'
"technophilosophy") greets you, explains that the figures inside press questions rather
than answer them, and sends you in.
2. **The great hall** — Plato welcomes you, draws out what your question is really asking, and
points you to one of three halls.
3. **Three halls**, each kept by a resident who diagnoses rather than dictates:
	- **Reality & Knowledge** (Aristotle) — metaphysics & epistemology
	- **Values** (Augustine) — ethics, aesthetics, law, the political
	- **Science, Logic & Mathematics** (Aquinas) — the formal foundations of reasoning, entered last
4. **Rooms** — each a specific question, organized on the professional PhilPapers taxonomy, home
to an advocate grounded in primary texts.
5. **Closets** — hands-on thought experiments. In the intuition halls these are *minigames*
(the Ship of Theseus, the Trolley, the Cave). In the formal hall they are *workshops* —
whiteboards where you work a proof or a calculation and the room checks it.

The deeper design principle: the building's architecture *is* the curriculum. Which door
opens depends on what you actually believe, and the path you walk is the argument.

## Why now

- **Models can finally hold a grounded Socratic line.** Only recently has it been possible for
an AI to stay in character, reason from a supplied text, press a point without conceding, and
admit the limits of its source — the exact behaviors a philosophy tutor needs.
- **Immersive 3D runs in a browser.** WebXR and Three.js put a walkable world one click away,
no install, on phone or desktop, with a clean path to full VR.
- **The market is awake.** Demand for serious-but-accessible adult learning, and for AI tools
that are trustworthy rather than glib, is rising at once.

---

## Who it's for

- **Self-directed adult learners** — the curious professional who wants depth, not a quiz app.
- **Students** — undergraduates meeting these questions for the first time, who learn far more
by doing than by reading.
- **Educators** — instructors who want an immersive companion to a course (the first courses,
on Chalmers' *Reality+* and on decision theory, are already in development).
- **Institutions** — departments, libraries, and lifelong-learning programs seeking a
differentiated offering.

---

## The pedagogical foundation (why this isn't a gimmick)

MIHLab's founding thesis is that understanding has two registers — the abstract/analytic and
the experiential/typological — and that real comprehension requires both. The Experience
Machine is the applied form of that thesis. It draws on Gabriel Marcel's distinction between
a *puzzle* (to be solved and set aside) and a *mystery* (to be inhabited), and on David
Chalmers' technophilosophy, to build a place where questions are inhabited, not closed. This
is not edutainment with a philosophy skin; it is a research-grounded pedagogy delivered as a
world.

---

## Status today (honest traction)

- **Live and working** at mihlab.org — a walkable world with a forest, a house, three halls,
and working rooms.
- **Ten philosophers** implemented and grounded in primary texts, from Plato and Aristotle to
Foot, Thomson, Singer, and Nozick.
- **Working thought experiments** — the Ship of Theseus, the Trolley, Plato's Cave, the
Experience Machine itself.
- **Production architecture in place** — a React/Vite site on GitHub Pages with a custom domain,
a Supabase backend with serverless functions that proxy the AI calls and meter usage per tier,
and Stripe wired for subscriptions.
- **Content engine designed** — a reusable persona-spec system and a room taxonomy that let new
philosophers and rooms be added on a repeatable template rather than one-off.

This is a real, demonstrable prototype — not a deck describing one.

---

## Business model

**Subscription SaaS, with metered AI usage.** A free tier lets anyone taste the world; paid
tiers unlock more conversation, more rooms, and the formal workshops.

| Tier | Indicative price/mo | What it unlocks |
| --- | --- | --- |
| Free | $0 | A limited daily allowance of conversation; the opening halls |
| Base | ~$7 | Full conversational access across all open rooms |
| Plus | ~$14 | Higher usage, the formal workshops, saved progress |
| Premium | ~$29 | Unlimited practical use, early access to new halls, priority support |

*(Prices are indicative and set for testing; the tier scaffolding is already built in Stripe.)*

**Unit economics.** The one variable cost is the AI itself — each philosopher turn is an API
call. Usage is **metered server-side per tier**, so cost-of-goods is bounded by design: a free
user cannot run up an unbounded bill, and paid tiers are priced comfortably above their usage
ceiling. Gross margin improves with scale as fixed infrastructure (hosting, Supabase) is spread
across more subscribers.

**Complementary revenue, not just subscriptions:**

- **In-person events & workshops** — mobile philosophy-gaming events at libraries, schools, and
private functions (a model MIHLab has already scoped, with the physical lab as home base).
- **Institutional & course licensing** — departments and programs adopting the world as a
companion to a class.
- **Grants** — a parallel, non-dilutive track (e.g., a Templeton-style character-and-virtue
pilot) that funds content development without competing with the subscription business.

This diversification is deliberate: the subscription product is the engine, but events and
grants de-risk the early months while the subscriber base grows.

---

## The vision this raise funds: a physical philosophy lab

Online is the product; the **lab is the multiplier.** With dedicated, VR-capable gaming PCs in
a real room, MIHLab can:

- **Run the Experience Machine in full VR and in person** — the most powerful version of the
experience, and the one people talk about afterward.
- **Host paid events and workshops** — the in-person revenue line, with a home venue instead of
hauling gear.
- **Develop and test faster** — building immersive 3D and testing WebXR/VR needs real hardware;
right now development is bottlenecked on machines.
- **Anchor the brand** — a real philosophy lab at a real university town (DeLand, FL) is a story
investors, press, and partners can stand inside.

The hardware *is* the constraint between "a working web prototype" and "a fundable, multi-channel
philosophy company." This raise removes it.

---

## Use of funds — $30,000

| Item | Amount | Why |
| --- | --- | --- |
| VR-capable gaming PCs (×6) | $13,000 | The core need: power the in-person lab and unblock WebXR/VR development & testing |
| VR headsets (×6) | $3,000 | Full-immersion delivery of the experience and live events |
| Lab furnishings, displays, networking, signage | $3,500 | Turn a room into a usable, presentable lab |
| Software & infrastructure (12 mo) | $3,500 | AI API credits, Supabase, domain, Stripe fees buffer |
| Content build-out (collaborator stipends) | $4,500 | Ground new philosophers and build priority rooms on the existing template |
| Entity formation & legal | $1,000 | LLC formation and operating agreement |
| Contingency (~5%) | $1,500 | Hardware price swings, the unforeseen |
| **Total** | **$30,000** |   |

The raise is sized precisely: enough to stand up the lab and a year of operations, not a penny
of vague "runway."

---

## Roadmap & milestones

**Now → 3 months**

- Lab established; machines and headsets operational.
- Subscription tiers live to the public; first paying users.
- Priority rooms built out (the decision-theory / formal-reasoning rooms first, tied to the
forthcoming course).

**3 → 9 months**

- First in-person events and a pilot with an institutional partner.
- The full Chalmers *Reality+* course and the decision-theory course released as guided paths.
- Persona quality loop in place — philosophers measurably improving over time.

**9 → 18 months**

- VR delivery polished; the lab hosting regular public sessions.
- A library of grounded philosophers and rooms broad enough to be a genuine front door to the
discipline.
- Subscription revenue plus events plus grants reaching operational sustainability.

---

## Team

**Founder — [Dr. Jim "Monty" Reynolds].** PhD in Philosophy (Saint Louis University, 2024);
Visiting Assistant Professor of Philosophy, Stetson University; founder of MIHLab. Research in
social & moral epistemology, decision theory, and the philosophy of mind; forthcoming book
*Social Identity and Music* (Vernon Press). Builds the product and leads the pedagogy.

**Co-lead — [Dr. Stephen Snyder].** Curriculum and research.

**[Collaborator — Business / Operations].** [Role to be completed.]

**[Collaborator — Content / Engineering].** [Role to be completed.]

*(Bracketed entries are placeholders for the founder to confirm before sharing.)*

---

## Risks & where we are honest

- **Entity formation is in progress.** MIHLab is formalizing as a Florida LLC; this raise assumes
that completes first, and a portion of funds is allocated to it.
- **AI cost is the key variable.** It is controlled by server-side metering, but pricing and tier
limits will be tuned with real usage data.
- **This is an early-stage venture.** The product works and the market signals are real, but
subscriber traction is still to be proven — which is exactly what this raise is designed to do.

*This document contains forward-looking projections that are illustrative, not guarantees, and is
not financial, investment, legal, or tax advice. Entity structure and any investment terms should
be confirmed with qualified professionals.*

---

## The ask

We are raising **$30,000** to build MIHLab's physical philosophy lab and fund a year of
operations — turning a working immersive prototype into a multi-channel philosophy company with
a real home. We are seeking mission-aligned investors and patrons who believe that the oldest
questions deserve the newest tools.

**Contact:** [name] · [email] · mihlab.org