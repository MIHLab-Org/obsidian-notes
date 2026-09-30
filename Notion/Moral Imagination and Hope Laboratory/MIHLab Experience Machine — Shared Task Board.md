---
notion-id: 38f8935b-cf8a-8094-bba3-ef6c56594dca
---
A living to-do set for the team. Organized by **workstream** so anyone can pick up a task; each
can be assigned to a person once roles are settled. Status keys: **[done]**, **[now]** (current
priority), **[next]** (queued), **[later]** (backlog).

---

## ✅ Recently shipped (current state of the build)

- **[done]** Restructured the house from four chapter-wings to **three halls** on the PhilPapers
taxonomy: Reality & Knowledge (Aristotle), Values (Augustine), Science/Logic/Mathematics
(Aquinas).
- **[done]** Installed the five core personas: Chalmers (host, outside), Plato (discipline guide,
inside), and the three hall residents — each grounded and written to *diagnose, not dictate*.
- **[done]** Re-homed the three working rooms under the new taxonomy without losing them
(Philosophy of Mind ← Ship of Theseus; Normative Ethics ← trolley/moral standing; Value Theory
← good-life-in-VR).
- **[done]** Gave the last orphaned philosopher a home: opened the **Epistemology room** (the
Butterfly Dream) for Zhuangzi. All ten philosophers are now reachable.
- **[done]** Fixed the Supabase console error by making the auth client load lazily and fail
gracefully.

---

## A. Product / Engineering

- **[now] Mobile movement controls.** Movement doesn't work on touch devices yet — the walkable
world is currently keyboard/desktop only. Add on-screen touch controls (a movement joystick +
look-drag) so the experience is genuinely usable on a phone. This blocks the "runs on phones"
claim and the way investors will most often try the demo (on their own device).
- **[now] Subscription start on login.** Wire the logged-in state to a working subscribe flow:
once a user signs in, they can pick a tier and start a subscription via Stripe checkout, and
their tier is reflected back in the app. This is the revenue mechanism the raise depends on;
pairs with the "Public launch of subscriptions" item under Business/Ops.
- **[now] Handoff payload (Phase 2).** Implement the `<handoff>{ said, reading, pressed, sending_to, because }</handoff>` mechanism so one philosopher pre-briefs the next and the
visitor never repeats themselves. Wire each resident's "on receive" to open on that note. This
is the single feature that turns three hops from a phone tree into a building that thinks about
you.
- **[now] Persona refinement template.** Build the lightweight eval/refinement loop described in
the SOP — a fixed probe set per philosopher, a place to log failures, a repeatable revise-and-
re-test cycle. This is what lets the philosophers improve over time.
- **[next] Build priority rooms.** Add rooms one at a time on the existing template, starting in
the formal hall with **Logic & Philosophy of Logic / Philosophy of Probability** (the home of
decision theory) to support the forthcoming course.
- **[next] Decide the room-greeter pattern.** The older Nozick and Foot/Thomson/Singer rooms
still place the host as an in-room greeter — a leftover from the old design. Decide whether room
greeting should move to the hall resident or be dropped, and apply consistently.
- **[later] Tune the formal-hall corridor.** With nine rooms, the Science/Logic/Maths hall is a
long walk; compress door spacing if it feels tedious.
- **[later] First whiteboard workshop closet.** Prototype the formal-hall closet where a visitor
works a calculation/theorem and the room checks it in code (not via the model's arithmetic).
- **[later] Progress saving & accounts polish** for paid tiers (tie to subscription state).

## B. Philosophy / Content

- **[now] Persona-spec template adopted as canon.** Confirm the persona-spec field list as the
standard and record it in `project_rules.md`; every new philosopher uses it.
- **[next] Ground the first formal-hall advocates.** Write specs for the decision-theory room's
advocates (e.g., Ramsey- and Jeffrey-grounded voices) from primary texts, ready for the room
build.
- **[next] Diversify room-level voices deliberately.** Especially for the Values hall's
*Philosophy of Gender, Race & Sexuality* room, cast a voice grounded in that literature rather
than introducing it through a resident's frame.
- **[next] Decision-theory course content.** Turn the Jeffrey-based course outline into guided
paths and the room's thought-experiments (Newcomb, Allais, St. Petersburg, Ellsberg as
playable closets).
- **[later] Grounding review pass** on all existing personas using the refinement loop; log and
fix drift/confabulation.
- **[later] *****Reality+***** course** assembled as a guided path across the three halls.

## C. Business / Operations / Fundraising

- **[now] Investor packet.** Review and finalize the project overview & business plan; confirm
team names/roles and contact details; then produce a polished PDF version to send.
- **[now] Entity formation.** Complete the Florida LLC and the multi-member operating agreement
(right of first refusal, consent, buyout terms) so the raise has a vehicle.
- **[next] Stripe onboarding finalized.** Ensure the legal name matches the EIN and the
subscription language is correct for the entity's status; confirm the tiers and prices for
public launch.
- **[next] Public launch of subscriptions.** Flip the tiers live; instrument basic metrics
(signups, conversions, usage per tier) so pricing can be tuned with real data.
- **[next] Investor & patron outreach list.** Build a target list of mission-aligned investors,
patrons, and small-grant sources; prepare the short pitch and the demo flow.
- **[later] Grant track (parallel, non-dilutive).** Advance a Templeton-style character-and-
virtue pilot application for content development funding.
- **[later] Events model.** Scope the first in-person philosophy-gaming event (library or campus)
once the lab hardware is in place.

---

## Suggested ownership (fill in)

| Workstream | Owner |
| --- | --- |
| A — Product / Engineering | [ ] |
| B — Philosophy / Content | [ ] |
| C — Business / Ops / Fundraising | [ ] |

*Tasks can move between owners freely; the point of the board is shared visibility, not silos.*