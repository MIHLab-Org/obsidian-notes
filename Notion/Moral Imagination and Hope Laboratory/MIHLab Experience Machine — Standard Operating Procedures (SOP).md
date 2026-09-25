---
notion-id: 38f8935b-cf8a-8040-b932-d31118ccfc35
---
**Purpose.** How we work on the Experience Machine so that anyone on the team can build,
change, and ship without breaking the live site or drifting the philosophers out of character.
`project_rules.md` in the repo is the single source of truth for conventions; this SOP is the
human-readable companion.

**Audience.** Everyone working on the project, technical or not.

---

## 1. The golden rules

1. **Never work directly on **`**main**`**.** GitHub Pages serves `main` to [mihlab.org](http://mihlab.org/); a bad commit is
a public outage. All work happens on a branch and merges via review.
2. **Test in the browser before merging.** Every change is verified live in a browser, with the
developer console open and clean, before it reaches `main`.
3. **Philosophers are grounded, never invented.** A philosopher only speaks from their primary
texts; where the texts run out, they say so. We do not let a persona confabulate a view.
4. **Advocates, not oracles.** Every philosopher presses a position and can be argued with; none
is a neutral authority. This is a content rule, not a style preference.
5. **Secrets never enter the repo.** Publishable/anon keys are fine in the client; service-role
keys, API secrets, and tokens live only in server-side environment variables.

---

## 2. Repository & deployment workflow

The site is a React/Vite/TypeScript project on GitHub Pages with a custom domain ([mihlab.org](http://mihlab.org/));
the world itself is the standalone file `public/experience-machine.html`. The AI calls and
metering run in Supabase Edge Functions; Stripe handles subscriptions.

**To make any change:**

6. Pull the latest `main`.
7. Create a branch named for the work: `feature/handoff-payload`, `room/decision-theory`,
`fix/supabase-import`.
8. Make the change locally. Run the dev server (Vite) in WSL2 and open the page in a browser.
9. Verify against the **pre-merge checklist** (§5).
10. Open a pull request. A second person reviews — code review for engineering, a
*philosophy/grounding* review for any persona or content change (§4).
11. Merge to `main`. GitHub Pages redeploys automatically.
12. Confirm the change is live on [mihlab.org](http://mihlab.org/) and the console is clean.

**Custom-domain note.** `public/CNAME` must remain in the repo; it persists the [mihlab.org](http://mihlab.org/)
mapping across deploys. Do not delete it.

---

## 3. Adding or editing a room

Rooms are added on a repeatable pattern. To open a new room:

13. **Data — open the door.** In `WINGS`, give the room's door a `key` (e.g.
`{ name:'Philosophy of Probability', key:'decisionTheory' }`). No key = "coming soon".
14. **Build — the scene.** Write a `buildRoom_<key>()` function. Copy the closest existing room
as a template (the Butterfly Dream room is the cleanest single-philosopher example; the
Nozick room shows a room with a closet).
15. **Dispatch — register it.** Add one line to `loadWorld()`:
`else if (key === 'room:<key>') buildRoom_<key>();`
16. **Briefing — orient the philosopher.** Add a `ROOM_BRIEFINGS['room:<key>']` entry with the
room's question (`q`) and who is present (`who`).
17. **Closet (optional) — set its type.** Minigame thought-experiment in the intuition halls;
whiteboard *workshop* only in the Science, Logic & Mathematics hall.
18. **Return door.** Point it back to the room's hall (`wing:metaEpist`, `wing:valuetheory`, or
`wing:sciLogicMath`).
19. Test (§5) and ship (§2).

**Hall keys for reference:** `metaEpist` (Reality & Knowledge), `valuetheory` (Values — note the
internal key keeps the old name while the label reads "Values"), `sciLogicMath` (Science, Logic
& Mathematics).

---

## 4. Adding or editing a philosopher

20. **Write the persona spec** using the team's persona-spec template (the canonical field list).
The non-negotiable fields are the **grounding** (the primary texts the voice is built from),
the **knows / does-not-know** boundary, and the **advocacy stance**.
21. **Add the runtime objects:** an entry in `PHILOSOPHER_PERSONAS` (the voice) and one in
`PERSONA_META` (name, dates, tag, avatar).
22. **Place them in the world** via `addPhilosopherNPC(...)` in a room, or via `WING_RESIDENT` for
a hall resident.
23. **Grounding review (required).** A second person checks that the voice is faithful to the
texts, stays in character under pressure, and refuses to invent. This review is mandatory for
any new or changed persona — it is the heart of the product's credibility.

---

## 5. Pre-merge checklist

Before any PR is merged, confirm in a browser:

- [ ] The developer console shows **no uncaught errors**.
- [ ] The changed room/philosopher **loads, converses, and returns** correctly.
- [ ] Existing rooms still load and return (no regressions).
- [ ] Any new philosopher **stays in character** and **declines to invent** when pushed beyond
their texts (spot-check with two or three probing questions).
- [ ] No secrets were added to tracked files.
- [ ] On mobile width, the page is still usable (the world is meant to run on phones).

---

## 6. The philosopher refinement loop (continuous improvement)

Personas improve over time through a deliberate loop, not ad-hoc tweaks. For each philosopher:

24. **Test against a fixed set of probe questions** — including the cases they tend to fail
(drifting out of character, over-summarizing, conceding too easily, confabulating a text,
failing to route).
25. **Log what went wrong** in plain language next to the probe that surfaced it.
26. **Revise the persona spec** to address the failure — usually a sharpening of the
grounding, the boundary, or the engagement rules.
27. **Re-run the same probes** and confirm the failure is gone and nothing else regressed.
28. **Record the change** so improvements are versioned and reversible.

*(A formal template for this loop is a near-term deliverable; until then, follow these steps by
hand and keep the logs.)*

---

## 7. Security & secrets

- The Supabase **publishable/anon** key and URL may live in the client.
- The Supabase **service-role** key, the **Anthropic API** key, and any Stripe **secret** key
live only in Supabase Edge Function environment variables / GitHub Actions secrets — **never**
in the repo or the client.
- The `philosopher` Edge Function verifies the session in-code and meters usage per tier; do not
bypass metering in client code.
- If a secret is ever committed, rotate it immediately and scrub it from history.

---

## 8. Communication & cadence

- **Branch = unit of work.** One branch per task keeps reviews small and the site safe.
- **Two review lanes:** engineering review (does it work) and grounding review (is the philosophy
faithful). A persona change needs the second; a pure-code change needs the first.
- **Decisions that change conventions** go into `project_rules.md`, not just into chat, so they
survive.
- Keep a short running changelog of what shipped to `main`, so collaborators can see the live
state at a glance.