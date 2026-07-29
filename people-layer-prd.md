# Command Deck — People Layer Expansion

**PRD v0.1 · Draft for review**
**Product:** LootBX Command Deck (internal ops tool)
**Author:** Drafted with Claude, for CEO review
**Status:** Draft — Feature C requires employment counsel sign-off before build (see §8)

---

## 1. Context & Goals

Command Deck exists to give leadership one place to answer three questions at a glance: **who needs help, who deserves recognition, and what skills the team needs coached.** The People deck already does this through a live-severity roster (blocked/overloaded people surface automatically), a six-stat radar per person, an equipment-style "Loadout" of real responsibilities, a Skills & Coaching system, and Spotlight panels that auto-surface a recognition candidate and an org-wide coaching priority.

This release deepens that same loop in three ways:

1. **Work visibility** — right now, "what is this person actually working on" is a single free-text quest line. Managers need to see the calendar and meeting activity that drives that work, and shouldn't have to manually re-type meeting notes to keep the record current.
2. **Coaching completion** — the system tracks *active* coaching, but "did this person actually close the skill gap" is currently just a status flag, not a real record a manager can point to in a promotion or review conversation.
3. **Personnel dossier** — the roster shows *how someone performs*, but managers coaching a specific person often want context on *how they work* — communication style, stress response, what motivates them — captured once at hiring instead of re-discovered person by person.

Each feature plugs into the existing Recognize / Coaching-Priority engine rather than replacing it — more signal in, same trustworthy bird's-eye-view out.

## 2. Personas

| Persona | Role in this PRD |
|---|---|
| **Manager / CEO** | Primary actor. Views calendars, reviews AI-generated action items, assigns and closes coaching quests, views dossier data for people they manage. |
| **HR** | Secondary actor. Owns onboarding intake, is the only role (besides the direct manager) who can view/edit Feature C's Personal Record. |
| **Employee** | Data subject. Can see most of their own record, including their own Personal Record and meeting action items, at all times. |

## 3. Non-Goals

- This is **not** a full HRIS or payroll system — Command Deck reads/summarizes; it does not replace whatever system of record already runs payroll, benefits, or legal employment files.
- This is **not** an automated performance-review or compensation tool. Nothing in this release outputs a rating, a raise recommendation, or a ranking.
- AI-generated meeting summaries **never auto-publish**. Every action item requires human review before it's "official" (see §4.5).
- Personality/zodiac/DOB fields **never feed any score, ranking, or algorithm** — including the existing Recognize and Team Coaching Priority logic. They are for a manager's own reading before a coaching conversation, full stop.
- This release does not include a mobile app, offline mode, or a notifications/paging system — those are out of scope until the underlying features are validated.

---

## 4. Feature A — Work Visibility: Calendar, Meetings & AI-Summarized Notes

### 4.1 Problem / Goal
Managers can see *that* someone is overloaded (via the HP/capacity bar) but not *why* — what meetings ate their week, what got decided, what's still open. This feature makes the calendar and its follow-through visible without asking anyone to manually log it.

### 4.2 User Stories
- As a manager, I want to see a person's upcoming meetings on their character sheet so I know what's driving their week before I message them.
- As a manager, I want a meeting's notes automatically turned into a short list of action items so I don't have to re-read a transcript to know what was decided.
- As a manager, I want to review and edit AI-generated action items before they're treated as real — I don't want the system inventing commitments.
- As a manager, I want a reviewed action item to optionally become a Coaching Quest or a Work-deck Goal, so follow-through is tracked in the same place I already look.
- As an employee, I want to see my own action items so I know what I committed to without digging through a transcript.

### 4.3 Functional Requirements
1. Add a **5th tab, "Calendar & Notes,"** to the existing character-sheet detail panel (alongside Attributes / Loadout / Skills & Coaching / Dossier).
2. The tab shows: upcoming meetings (next 14 days) pulled from the connected calendar, and a reverse-chronological list of past meetings with their AI summary and action items.
3. Each meeting's action items show **status** (Pending Review / Reviewed), the **owner**, and — when generated — a **source quote** from the transcript so a manager can verify at a glance instead of re-reading.
4. A manager can, per action item: **accept as-is**, **edit**, or **discard**. Accepting/editing sets `reviewedBy`/`reviewedAt` and unlocks a "Promote to Coaching Quest" or "Promote to Goal" action.
5. The existing **Company Activity feed** (Work deck) stops being hand-authored and instead pulls from real meeting data — upcoming meetings and newly-reviewed action items populate it automatically.
6. Meetings with no transcript available still appear (calendar metadata only: title, attendees, time) — the feature degrades gracefully rather than hiding meetings it can't summarize.

### 4.4 Data Model
```
Meeting {
  id, personId, date, attendees[],
  source: "google_calendar" | "outlook",
  transcriptSource: "zoom_native" | "google_meet_native" | "otter" | "fireflies" | null,
  rawNotes: text | null,
  summary: {
    recap: string,
    actionItems: [{
      text: string,
      owner: personId | null,
      dueDate: date | null,          // only set if explicitly stated — never inferred
      sourceQuote: string | null,
      confidence: "high" | "medium" | "low",
      status: "pending_review" | "reviewed",
      reviewedBy: personId | null,
      reviewedAt: timestamp | null,
      promotedTo: { type: "coaching_quest" | "goal", id } | null
    }],
    generatedAt: timestamp,
    modelUsed: string
  } | null
}
```

### 4.5 Technical / Integration Notes

**Calendar sync:** OAuth against **Google Calendar** and **Microsoft Graph (Outlook)**. Sync calendar metadata (title, time, attendees) on a polling or webhook basis; scope the OAuth grant to calendar read-only — do not request broader account access than the feature needs.

**Transcript source:** start with **native Zoom and Google Meet transcription** for MVP — no new vendor relationship required, fastest path to a working feature, and covers the majority of a typical team's meeting load. Add a dedicated meeting-intelligence vendor (**Otter.ai, Fireflies.ai, or Gong**) in a later phase for broader coverage (in-person meetings, tools outside Zoom/Meet, richer speaker diarization).

**Summarization model:** **Claude Sonnet 5** as the default. This is a single-call extraction task, not agentic reasoning, so Sonnet's quality-to-cost ratio fits better than Opus for MVP, and it's meaningfully more reliable on messy real-world transcripts (crosstalk, filler, soft commitments like "I'll try to get to it") than Haiku. Use **Structured Outputs** (JSON-schema-constrained response) rather than tool-use, since this is a standalone "transcript in, structured summary out" call with no tool loop involved. A one-hour transcript (~8–16K tokens) fits comfortably in a single call — **no chunking needed** for per-meeting summarization given Sonnet's 1M-token context window.

**Prompting guardrails** (to prevent the failure mode that would kill trust in this feature):
- Only extract items stated as clear commitments or requests — not general discussion.
- Only attribute an owner when the transcript makes it clearly attributable; otherwise leave it null for a human to fill in.
- Never infer a due date from vague language ("soon," "eventually") — leave it null.
- Always include the grounding `sourceQuote` so review is a verification glance, not a re-read.

**Human-in-the-loop gate:** every action item is born `pending_review`. Nothing is promoted into a Coaching Quest or Work-deck Goal until a manager has explicitly reviewed it — this is the mechanism that satisfies the non-goal "AI summaries never auto-publish."

**Cost/scale notes for later phases (not MVP blockers):** batch, off-peak summarization can run through the Message Batches API (~50% cheaper, results within an hour) once volume justifies it. A shared, stable system prompt (extraction instructions + schema) can be cached to cut the fixed cost per call. A future "weekly digest" feature should summarize *summaries*, not raw transcripts, to keep rollup calls small.

### 4.6 UI Placement
New "Calendar & Notes" tab on the People-deck character sheet, styled consistently with the other RPG-menu tabs (same tab-bar/shoulder-button navigation already in place). Meetings render as a simple list; each meeting expands to show its summary and action items in the existing card/chip visual language (status chips, evidence-style rows — same components already used for coaching quests).

### 4.7 Phasing
- **MVP:** Google Calendar sync, native Zoom/Meet transcript ingestion, Claude Sonnet 5 summarization, full human-review gate, new tab, Company Activity feed now sourced from real data.
- **Phase 2:** Outlook/Microsoft 365 calendar sync, dedicated transcript vendor (Otter/Fireflies) for broader meeting coverage.
- **Phase 3:** Weekly digest rollups, Message Batches API for cost efficiency at scale, auto-suggested coaching-quest completion when a linked action item resolves (ties into Feature B).

### 4.8 Risks / Open Questions
- **Perceived surveillance:** employees may feel watched if every meeting is transcribed and summarized without clear communication. Needs an explicit internal policy (what's captured, who can see it, opt-out mechanics for sensitive 1:1s) before rollout — this is a people/comms decision, not just an engineering one.
- **Transcript vendor data handling:** any third-party transcript vendor added in Phase 2 needs a data-retention and security review before integration — meeting transcripts can contain sensitive discussion.
- **OAuth scope minimization:** calendar integration should request the narrowest scope that satisfies the feature (read-only, metadata where possible) to limit blast radius if credentials are ever compromised.
- **Owner attribution accuracy in multi-speaker transcripts** is the most likely early quality complaint — the confidence field and mandatory review step are the mitigation, but this should be watched closely post-launch.

---

## 5. Feature B — Coaching Completion Tracking

### 5.1 Problem / Goal
The prototype already splits coaching into Active vs. History, but "history" today is just a status someone set at creation time. Managers need a deliberate, evidence-backed way to *close* a coaching quest, and a way to see — across the whole org — which skill gaps are actually closing versus staying open.

### 5.2 User Stories
- As a manager, I want to explicitly mark a coaching quest complete, with a note on what changed, so I have a real record to reference in a review or promotion conversation.
- As a manager, I want completing a coaching quest to visibly grow that person's skill level, so the skill tree reflects real growth, not just activity.
- As a CEO, I want to see which skills are most commonly being closed out org-wide, so I know where coaching investment is actually paying off.

### 5.3 Functional Requirements
1. Add an explicit **"Mark Complete"** action on any active coaching quest (Skills & Coaching tab), replacing the current author-time-only status field.
2. Marking complete **requires** an outcome note (what changed / evidence it worked) — this is a lightweight guardrail against completions with no real substance behind them.
3. On completion, the corresponding skill tile's pip level increments (see open question in §5.6 on exactly how much).
4. Add a **"Skills Completed This Quarter"** tile to the Work deck's Reports & Analytics panel.
5. Enrich the existing **Team Coaching Priority** Spotlight panel with a completion-rate signal — not just "what's the most common growth edge," but "is that growth edge actually closing over time."

### 5.4 Data Model
```
CoachingQuest {
  ...(existing fields: skill, goal, evidence, due)
  status: "active" | "completed",
  completedBy: personId | null,
  completedAt: timestamp | null,
  outcome: string | null,
  linkedSkillPipDelta: integer | null
}
```

### 5.5 UI Placement
Extends the existing Skills & Coaching tab — no new tab needed. The Active/History split already in the prototype becomes the real Active/Completed split; completed items show the outcome note where the prototype currently shows a placeholder. The Work deck's Reports & Analytics and Spotlight panels get the new rollup content described above.

### 5.6 Phasing
- **MVP:** manual "Mark Complete" action, required outcome note, pip increment.
- **Phase 2:** org-wide "Skills Completed" rollup report.
- **Phase 3:** auto-suggested completion when a Feature-A meeting action item tied to that coaching quest is resolved.

**Open question:** what completion cadence or count justifies a pip increment — is every closed quest worth +1 pip flat, or should it be weighted by how substantial the outcome note is? This is a product call, not an engineering one, and should be settled before MVP ships.

---

## 6. Feature C — Personnel Dossier Expansion (Interview-Sourced)

### 6.1 Problem / Goal
Managers coaching someone often want context on *how that person works*, not just *how they're performing* — captured once, ideally at hiring, rather than re-discovered ad hoc. The CEO specifically asked for legal name, birthday, zodiac sign, MBTI, and a "psychological profile."

**This section carries real legal and ethical exposure — read §6.5 before building any of it.** The CEO has been briefed on that exposure and chosen to proceed with the fields as requested, clearly fenced off. That decision is reflected below, but it does not remove the requirement for employment-counsel review before this touches real employee data (see §6.6).

### 6.2 User Stories
- As a manager, I want a quick read on how someone prefers to receive feedback and what motivates them, so I can tailor a coaching conversation instead of guessing.
- As HR, I want to capture this once during onboarding rather than have every manager re-ask the same questions.
- As an employee, I want control over what's in this section — it should be self-reported, and I should be able to see exactly what's recorded about me.

### 6.3 Functional Requirements
1. Add a **gated "Personal Record" sub-section inside the existing Dossier tab**, visually distinct from the rest of the dossier — a "sealed record" treatment (click-to-reveal, not shown by default) that visually communicates "this is more sensitive than the rest of the sheet," consistent with the RPG chrome already in use.
2. All fields are **optional and self-reported** by the employee during onboarding (or later, at their discretion) — never inferred, never administered by the company, never filled in by a manager on someone else's behalf.
3. Fields: legal name, date of birth, and a **"Working Style" section** — communication preference, feedback preference, stress response, motivators (self-reported, free text or select-from-list). Zodiac sign and MBTI type are included exactly as requested, explicitly labeled **"self-reported / informational only — not an assessment."**
4. **"Psychological profile" is deliberately reframed as the Working Style section above** rather than implemented as a literal open-ended field — see §6.5 for why. If the CEO wants a broader field, it should be scoped with counsel, not shipped as free-text "psychological profile."
5. Visibility is restricted to **HR and the person's direct manager only** — unlike Attributes/Loadout/Skills, which are already visible org-wide in the existing prototype. The employee can always see their own record.
6. The section carries a persistent, non-dismissable label: **"Not used in employment, compensation, or promotion decisions."**
7. Every field capture requires a `consentGivenAt` timestamp — the employee explicitly opts in to each field being recorded, not just to the onboarding process generally.

### 6.4 Data Model
```
PersonalRecord {
  personId,
  legalName: string | null,
  dateOfBirth: date | null,
  workingStyle: {
    communicationPref: string | null,
    feedbackPref: string | null,
    stressResponse: string | null,
    motivators: string | null
  },
  zodiacSign: string | null,        // self-reported, informational only
  mbtiType: string | null,          // self-reported, informational only
  sourceOfRecord: "interview_intake",
  visibility: "hr_and_direct_manager_only",
  consentGivenAt: { [fieldName]: timestamp }
}
```

### 6.5 Privacy & Compliance — read before building

This is the section that exists because the CEO asked for it to be real, not boilerplate. Four specific exposures, and why each matters:

**1. Date of birth → age-discrimination exposure.** Recording DOB creates a paper trail that shows the company had access to age information. If that data is ever near a people decision (a layoff list, a promotion cycle, a performance review) — even coincidentally — it becomes very easy for a plaintiff's attorney to argue age was a factor, regardless of intent. In the US this is the kind of fact pattern the ADEA exists to catch. Mitigation: DOB lives only in the gated Personal Record, is never joined against any performance, compensation, or headcount dataset, and the non-goals section above is the enforceable boundary.

**2. MBTI → weak scientific validity *and* a real regulatory history.** MBTI has been repeatedly criticized in the I/O psychology literature for poor test-retest reliability — a meaningful fraction of people get a different type on retest. Separately, personality-typing tools used *in* employment contexts (hiring, promotion, team placement) have drawn EEOC and disparate-impact scrutiny in the US when they correlate with protected characteristics or gate opportunity. Mitigation: MBTI is captured as a self-reported, informational field only, explicitly never used as an assessment, never scored, and never a factor in any decision — the label in §6.3.6 is not decoration, it's the control.

**3. Zodiac sign → zero scientific validity, and it's a DOB proxy.** There is no credible evidence astrology predicts or correlates with job-relevant traits. More importantly for risk purposes: zodiac sign is a near-deterministic function of birth date, so including it reintroduces the exact age-discrimination exposure from point 1 through a second field, even if DOB itself were ever removed. Mitigation: treat it explicitly as an optional "fun fact," never referenced in any coaching guidance, report, or algorithm.

**4. Legal name + DOB as PII.** These are the two fields in this section with real, uncontroversial data-protection obligations regardless of jurisdiction: access control (already scoped to HR + direct manager), encryption at rest, a defined retention period (recommend: tied to employment duration + a bounded post-employment window, not indefinite), and a documented legal basis / consent record for collecting it (the `consentGivenAt` field above is the mechanism, not just a nice-to-have).

### 6.6 Hard Gate

**This feature should not touch any real employee's data until LootBX's employment counsel has reviewed this section** — specifically the DOB/zodiac age-discrimination exposure and the MBTI disparate-impact history. This is not a generic "consult a lawyer" disclaimer; it's a specific recommendation because two of the five fields the CEO asked for (DOB, zodiac) point at the same protected-class exposure through two different doors, and that's the kind of pattern a review should catch before it ships, not after an incident.

### 6.7 UI Placement
Gated sub-panel inside the existing Dossier tab, below the current Leave/Infractions content. Sealed/locked visual treatment (a closed-chest or wax-seal-style reveal interaction fits the existing RPG chrome) that requires a deliberate click to open — the interaction itself should communicate "you are entering a more sensitive part of this record."

### 6.8 Phasing
- **MVP:** data model + gated UI + manual HR entry during onboarding, pending counsel sign-off per §6.6.
- **Phase 2:** auto-populate from a structured interview/onboarding intake form instead of manual re-entry into Command Deck.

---

## 7. Cross-Cutting: Access Model

| Data | Who can see it | Notes |
|---|---|---|
| Attributes, Loadout, Skill pips | Org-wide within People deck | Unchanged from current prototype |
| Dossier core (reports-to, tenure, leave, infractions) | Manager + HR | Unchanged from current prototype |
| Calendar & Notes (Feature A) | Person's manager + the person themself | Attendees of a given meeting can see that meeting's summary |
| Personal Record (Feature C) | HR + direct manager only | Person always sees their own; gated/sealed UI |
| Coaching completion history (Feature B) | Same as existing coaching visibility | No change to existing access rules |

## 8. Success Metrics

- % of coaching quests that reach a logged completion outcome (vs. staying open indefinitely).
- Median time from meeting end to a fully-reviewed action item.
- % of AI-generated action items accepted as-is vs. edited vs. discarded — the clearest signal of summarization quality in production.
- Manager-reported usefulness of the Working Style section in actual coaching conversations (qualitative check-in after ~1 quarter of use).
- Skill-gap closure rate on the org-wide Team Coaching Priority signal (is the #1 flagged growth edge shrinking over time).

## 9. Open Questions / Decisions Needed

1. Final transcript-vendor selection for Phase 2 (Otter vs. Fireflies vs. Gong) — needs a short vendor bake-off once native Zoom/Meet coverage proves the concept.
2. Pip-leveling rule for coaching completion (§5.6) — flat +1 per completion, or evidence-weighted.
3. **Employment counsel review of §6.5/§6.6 — required before Feature C touches real employee data.** This is the one open item that blocks a build, not just a refinement.
