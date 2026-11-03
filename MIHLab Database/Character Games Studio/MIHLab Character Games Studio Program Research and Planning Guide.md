# MIHLab Character Games Studio: Program Research and Planning Guide

**Mission:** make games that build character, offered to kids and families. Current titles are the **Experience Machine** and the **multiplayer philosophy D&D generator** (up to six players) built for a contest.

**Short answer:** few studios make games explicitly for *character formation*. The nearest neighbors are nonprofit "games for good" studios such as iThrive Games, educational studios that build on Unity, and a growing academic literature on ethics games. The studio's main legal issue isn't physical safety but **children's data privacy**, along with ordinary tech insurance.

*Figures come from search summaries and need confirming. Items marked "from general knowledge" weren't checked this session.*

## 1. Comparable programs and studios

| Organization | What they make | Why it's relevant | Link |
| --- | --- | --- | --- |
| iThrive Games | Nonprofit; games and game-design programs for teen wellbeing; co-design with teens (for example, *The Porcelain Child*) | Closest mission match: games for character and wellbeing, made with young people | [Blog](https://ithrivegames.org/blog/) |
| Common Sense Education | Reviews and curates games that build social and emotional skills | Shows how family-facing games get evaluated and listed | [SEL games list](https://www.commonsense.org/education/lists/games-that-build-social-and-emotional-skills) |
| Screenwise | Parent guides to empathy-building and co-play games | Shows the "parent-child co-play" market MIHLab would enter | [Empathy games](https://screenwiseapp.com/guides/cozy-games-that-build-empathy) |
| Unity EdTech | Unity's education program for learning games and AR/VR | The engine and program behind the Experience Machine | [Unity EdTech](https://unity.com/solutions/edtech) |
| Quandary (from general knowledge: Learning Games Network) | Ethics decision game for students | One of few commercial games designed for ethics education | [Springer review](https://link.springer.com/article/10.1007/s11423-026-10678-z) |
| Games for Change (from general knowledge) | Nonprofit festival, awards and student challenge for social-impact games | Showcase and contest venue | Confirm site |

**Research to cite in pitches:**

- *Game-based learning for ethics: benefits, challenges, and dilemmas*, Springer 2026. It notes that commercial ethics games remain limited, which is MIHLab's opening. [Link](https://link.springer.com/article/10.1007/s11423-026-10678-z)
- *Designing Games for Ethical Deliberation*, Education Sciences, 2026. It proposes a framework of play for ethical deliberation. [Link](https://doi.org/10.3390/educsci16050697)
- *Video Game Design Ethics*, Cohen, Philosophy Compass, 2026. [Link](https://compass.onlinelibrary.wiley.com/doi/10.1111/phc3.70116)
- Karen Schrier, *We the Gamers: How Games Teach Ethics and Civics* (Oxford, 2021), and Miguel Sicart, *Beyond Choices* (MIT, 2013).
- A Twine-based ethics design course shows a no-code option for student or family co-design. [Link](https://link.springer.com/article/10.1007/s11528-025-01147-0)

## 2. Contacts to pursue

| Contact | Why | How |
| --- | --- | --- |
| iThrive Games | Possible partner, advisor or co-design model | ithrivegames.org |
| Authors of the 2026 ethics-games papers | Research collaborators and evaluators | Through the linked articles |
| Unity EdTech | Education licensing and showcase | unity.com/solutions/edtech |
| Common Sense Education | Getting a game reviewed for families and teachers | commonsense.org |
| Stetson University (game design or education faculty) | Student developers and research site | Not researched |

## 3. Insurance

A software studio needs a different mix than a trip program.

| Policy | What it covers | Typical cost |
| --- | --- | --- |
| General liability | Basic business claims | About $30 a month |
| Errors and omissions (professional liability) | Claims of mistakes or failure to deliver; often includes copyright and trademark disputes | About $83 a month |
| Cyber liability | Data breaches and leaked source files; important if you handle payments or user data | About $150 a month |

Averages are from TechInsurance customer policies. Specialty game insurers include GG Insurance and Alan Boswell Group, and the IGDA has a guide.

Links: [TechInsurance](https://www.techinsurance.com/technology-business-insurance/software-development) · [GG Insurance](https://gginsurance.net/game-developer-insurance/) · [IGDA guide](https://igda.org/resources-archive/protecting-the-games-industry/) · [Alan Boswell](https://www.alanboswell.com/business-insurance/science-technology-insurance/video-games-industry-insurance/)

## 4. Children's privacy and compliance

From general knowledge; confirm with an attorney.

- **COPPA** (the US Children's Online Privacy Protection Act) applies to games aimed at children under 13 that collect any personal data, including chat, accounts or voice. It requires verified parental consent.
- The multiplayer D&D game and any LLM features raise the stakes: chat logs and AI conversations count as data.
- The simplest path is to collect no personal data, use no open chat, and offer a family or classroom account run by the parent or teacher.
- Age ratings: an ESRB or IARC rating is needed for most storefronts. IARC is free on many platforms.

## 5. Hardware and software requirements

| Item | Requirement | Cost |
| --- | --- | --- |
| Unity Editor | 64-bit Windows, macOS or Linux; multi-core CPU; 8 GB RAM minimum (16 GB+ is better); a DirectX 11, Metal or Vulkan GPU | Unity Personal is free under a revenue cap (from general knowledge; confirm the current cap) |
| VR development GPU | At least a GTX 1050 Ti or 1060; an RTX card is recommended | Your current RTX 3050 meets the minimum |
| Test headsets | Meta Quest 3 or 3S (Quest 2 and Pro also supported); USB-C cable | Quest 3S launched at $299; Quest 3 at $499 |
| Recommended Quest stack | Unity 6.x, OpenXR, Meta XR SDK (All-in-One), MR Utility Kit | Free |
| Testing tools | Meta XR Simulator, Meta Horizon Link, Build and Run | Free |
| Version control | GitHub | Free to low cost |
| Multiplayer server (D&D game) | Hosting for up to six players per session | Quote |
| LLM API (if the games use AI characters) | Per-use pricing | Quote |

Links: [Unity 6.3 system requirements](https://docs.unity.com/en-us/engine/6000.3/manual/get-started/install-and-upgrade/getting-started-installing-unity/system-requirements) · [Meta Quest developer requirements](https://developers.meta.com/vr/documentation/unity/unity-development-requirements/) · [Quest 3 dev stack](https://www.vrwiki.cs.brown.edu/hardware/vr-hardware/meta-quest-3) · [Quest pricing](https://www.strayspark.studio/blog/vr-game-development-meta-quest-ue5-2026)

## 6. Running cost tally (placeholder estimates)

| # | Item | Type | Estimate |
| --- | --- | --- | --- |
| 1 | Development PC upgrade (RAM to 32 GB) | One-time | Quote |
| 2 | Two Quest 3S test headsets | One-time | About $600 |
| 3 | Unity license | Annual | $0 under the Personal cap |
| 4 | General liability, E&O and cyber insurance | Annual | About $3,150 at the averages above |
| 5 | Multiplayer hosting | Monthly | Quote |
| 6 | LLM API usage | Monthly | Quote |
| 7 | Art, audio and music assets | Per project | Quote |
| 8 | Contract developers or student stipends | Per project | Quote; a full in-house team runs $200,000–$600,000 a year, so plan small |
| 9 | Storefront fees (Steam, Meta Store) | One-time per title | Quote |
| 10 | Age rating | Per title | Often free through IARC |
| 11 | Attorney review: privacy policy, COPPA, terms of use | One-time | Quote |
| 12 | Contest and festival entry fees | Per event | Quote |

## 7. Revenue models to consider

These are options, not findings.

1. Free family version, paid classroom or church license.
2. Grants: game-for-good funds and education foundations.
3. Facilitated sessions: Jim runs the D&D game live for families, schools or the Quest ministry.
4. Pay once on Steam or the Meta Store; avoid loot boxes and ads in a character-formation brand.

## 8. Open questions

- Name and rules of the contest the D&D game was built for.
- Does the D&D game store any player data or use an LLM?
- Target age range for each title (it decides COPPA's reach).
- Hosting plan for the Experience Machine web build.

## 9. Per-game pricing scenarios (store sales)

**Model:** MIHLab sells each game for a set price through app stores. **All budgets are placeholder assumptions, not quotes.**

### 9.1 Store fees

| Store | Commission | Notes |
| --- | --- | --- |
| Apple App Store | 15% under the Small Business Program (proceeds under $1M last year); 30% standard | You must enroll to get 15%. US apps can now link to outside payment. Developer account is about $99 a year (from general knowledge). [Source](https://superapp.dev/blog/app-store-small-business-program-guide) · [Source](https://www.revenuecat.com/blog/engineering/small-business-program) |
| Meta Quest Store | 30% | Developer Program is free to join; 30% on apps and in-app purchases; subscriptions may drop to 15% on renewals; Horizon Worlds items carry an extra 17.5% platform fee. [Source](https://djenterprises.ai/blog/app-economics/meta-vr-app-economics) · [Source](https://vrarwiki.com/wiki/Meta_Quest_Store) |
| Unity Play | No sales | Hosts free web builds for showcasing; use it for demos, not revenue (from general knowledge) |

### 9.1a Publishing on the Meta Horizon Store (the planned first store)

Jim plans to launch on Meta's store first. Joining costs nothing, but Meta keeps 30% of each sale, twice Apple's small-developer rate, so a $10 game nets $7.00 on Meta and $8.50 on Apple.

|  | Meta Horizon Store | Apple App Store |
| --- | --- | --- |
| Cost to join | Free developer program | About $99 a year (from general knowledge) |
| Store cut per sale | 30% | 15% (Small Business Program); 30% standard |
| You keep on a $10 game | $7.00 | $8.50 |
| Review | Basic technical, content and privacy checks only; no rejections on taste or quality | Apple's full app review |
| Unfinished games | Early Access tag, as on Steam | Not covered here |
| Visibility | All games appear in search, categories and recommendations | Store search and charts |
| Subscriptions | 30%; renewals may drop to 15% | 15% for small developers |

**What happened to App Lab:** App Lab was Meta's easier channel for unreviewed Quest apps, shared by link. In August 2024 Meta merged it into the main store, now called the Meta Horizon Store, so it is no longer a separate option. Publishing needs a correct app manifest and a signed APK.

Links: [Merger news (UploadVR)](https://www.uploadvr.com/quest-app-lab-merged-into-meta-horizon-store/) · [Early Access (UploadVR)](https://www.uploadvr.com/meta-horizon-store-app-lab-replaced-by-early-access/) · [Meta developer FAQ](https://developers.meta.com/vr/faqs/) · [Submitting your app](https://developers.meta.com/vr/resources/publish-submit/) · [Uploading requirements](https://developers.meta.com/vr/resources/publish-upload-overview/)

### 9.2 Jim's current model: solo developer, no spending

Jim builds the games himself with free tools: no developers, no physical location, no paid assets. Real out-of-pocket costs are only the Apple developer account (about $99 a year, from general knowledge), any Meta developer fees (confirm), and each store's cut of a sale. Insurance and legal review are optional until sales or child data make them necessary. **Jim's time is the real cost and is not counted below.**

| Price per game | Store (share kept) | Net per copy | Copies to cover $99 | Net at 100 copies | Net at 500 copies | Net at 2,000 copies |
| --- | --- | --- | --- | --- | --- | --- |
| $5 | Apple (85%) | $4.25 | 24 | $425 | $2,125 | $8,500 |
| $5 | Meta (70%, assumed) | $3.50 | 29 | $350 | $1,750 | $7,000 |
| $10 | Apple (85%) | $8.50 | 12 | $850 | $4,250 | $17,000 |
| $10 | Meta (70%, assumed) | $7.00 | 15 | $700 | $3,500 | $14,000 |
| $15 | Apple (85%) | $12.75 | 8 | $1,275 | $6,375 | $25,500 |
| $15 | Meta (70%, assumed) | $10.50 | 10 | $1,050 | $5,250 | $21,000 |

Net figures are before taxes and before subtracting the $99 account fee. The earlier hired-team budgets ($5,000–$15,000: insurance, headsets, contract art and help, hosting, legal) apply only if MIHLab later hires help or grows.

**Reading it:** with no spending, a game breaks even after about a dozen sales. The question becomes what Jim's time is worth: for example, a game that took 200 hours earns $42.50 an hour at 1,000 Apple sales at $10.

### 9.3 Other options to compare

- **Free game plus paid add-ons:** in-app purchases also take the store's 15–30% cut.
- **Family bundle:** one purchase covering several titles.
- **Group license sold directly** to churches or schools, outside the store and its fees.
- **Grant-funded development:** the game is free and a grant covers the budget.

## 10. Marketing strategy

**Core message:** games where kids and families face real moral choices together, made by a philosophy professor. Few studios make games for character formation (Section 1), so that positioning is the main selling point.

### 10.1 How comparable studios and developers market

| Who | What they do | Lesson for MIHLab | Source |
| --- | --- | --- | --- |
| iThrive Games | Co-designs games with teens and publishes the stories behind them | Tell the making-of story; involve families and students in design | [Blog](https://ithrivegames.org/blog/) |
| Common Sense Education, Screenwise | Parents and teachers find games through their reviews and guides | Submit games for review; aim at the "parent-child co-play" lists | [Common Sense](https://www.commonsense.org/education/lists/games-that-build-social-and-emotional-skills) · [Screenwise](https://screenwiseapp.com/guides/cozy-games-that-build-empathy) |
| Indie VR developers (Meta's guidance) | Build a Discord and email list early; post on YouTube, TikTok and Instagram; use Reddit for enthusiasts and Facebook Groups for adults 25–54 | Start with free channels Jim owns; tailor each post to the platform | [Meta off-platform marketing](https://developers.meta.com/vr/blog/build-faster-earn-more-vr-developers-guide-to-off-platform-marketing/) · [Meta marketing plan](https://developers.meta.com/vr/resources/gtm-marketing-plan/) |
| Indie game marketing guides | Start 6–18 months before launch; wishlists drive first-week sales | Open a store page and gather wishlists well before release | [Indie Viral](https://www.indieviral.com/blog/how-to-market-an-indie-game/) · [Phantom Cave](https://phantomcave.com/blog/market-indie-game-2026/) |

### 10.2 Channels

| Channel | Audience | Cost | Use |
| --- | --- | --- | --- |
| Meta Horizon Store Coming Soon page | Quest owners | Free | A real store link with wishlists. Meta's pages give the window as 180 or 360 days before launch; confirm |
| Discord | Early players, families | Free | Feedback, early builds, Q&A |
| Email list | Families, churches, teachers | Free to low | The channel Jim owns outright |
| YouTube (@mihlab-workshop) and short video | Gamers, parents | Free | Trailers, dev logs, philosophy clips |
| Facebook Groups | Parents 25–54, church and homeschool groups | Free | Launch countdowns, word of mouth |
| Reddit (Quest and educational-game subreddits) | Enthusiasts | Free | Dev updates, honest feedback |
| Scouts, Salty Church, the Quest families | Local families | Free | Playtesters and first buyers |
| Contests and festivals (for example, Games for Change) | Educators, press | Entry fees | Credibility and press |

### 10.3 Pricing messages

- **Price point:** $5–$15 per game (Section 9.2).
- **Message:** "One price, no ads, no loot boxes," which matters to parents.
- **Launch incentives:** Meta suggests a pre-order discount or a free add-on to encourage pre-orders.
- **Group offer:** a direct license for churches, Scout units and classrooms, sold outside the store.

### 10.4 Launch timeline (proposal)

| When | Step |
| --- | --- |
| 6–12 months before | Open Discord and an email list; post dev logs on YouTube |
| 6 months before | Open the Coming Soon store page; push wishlists |
| 3 months before | Playtests with Scout and church families; gather quotes |
| 1 month before | Trailer, key art, store page polish; pre-order offer |
| Launch week | Email list, Discord, Facebook Groups, Reddit; Early Access tag if unfinished |
| After launch | Ask players for reviews; submit to Common Sense; enter contests |

Links: [Launch your app (Meta)](https://developers.meta.com/horizon/resources/launch-your-app/) · [Pre-launch listings (Meta)](https://developers.meta.com/horizon/resources/pre-launch-listings/) · [Monetization overview (Meta)](https://developers.meta.com/vr/resources/monetization/) · [Market your app (Meta)](https://developers.meta.com/horizon/resources/market-your-app/)
