# Plan: Homepage auto-advance (idle project rotation)

> Source PRD: `docs/prd/homepage-auto-advance.md`

## Architectural decisions

Durable decisions that apply across all phases:

- **Routes**: Auto-advance applies only to the **homepage** (`/`). No new URLs or redirects.
- **Schema / CMS**: **No** Sanity schema changes. Projects continue to be loaded as today; behavior is gated in the browser when **more than one** project with a cover exists.
- **Data model**: The active project remains defined by **scroll position** on the existing full-viewport strip (including triple-buffer semantics on desktop). No new persisted state.
- **APIs / auth**: None. Pure client-side behavior on top of the static/Astro page.
- **Motion**: Advances use **native scroll position updates** without smooth scrolling for automatic steps; manual sidebar navigation may keep existing smooth behavior per PRD.

---

## Phase 1: Core idle rotator and interaction resets

**User stories**: 1, 2, 3, 4, 5, 6, 12, 13, 14, 15, 16, 17 (partial), 18 (partial)

### What to build

A working end-to-end path: after **window load** and a **frame tick**, when **two or more** projects are present, start a **10-second** idle timer (**reduced-motion handling is Phase 2**). On each tick, **instantly** scroll the main strip to the **next** project in sequence, wrapping from the last to the **first**. Distinguish **programmatic** scroll from **user** scroll so only user-driven scroll restarts the countdown. **Desktop**: clicking a sidebar project name resets the idle timer (in addition to existing navigation behavior). **Mobile**: no sidebar, but scroll-based reset applies. Verify that active project highlighting and name list sync stay coherent after automatic steps.

### Acceptance criteria

- [ ] With **2+** projects, after load, the cover advances to the next project on a **10s** idle interval without CSS/JS motion animations beyond scroll position change.
- [ ] After the **last** project, the next automatic step shows the **first** project.
- [ ] **User** scrolling the project strip **resets** the 10s countdown; **automatic** advancement does **not** reset it (explicit handoff between “user” and “auto” scroll).
- [ ] With **0 or 1** project in the strip, **no** idle timer runs.
- [ ] **Desktop**: interacting with the project **name list** in a way that navigates or selects resets the idle timer per PRD.

---

## Phase 2: Visibility, resize, and reduced motion

**User stories**: 7, 8, 9, 10, 11

### What to build

Complete the policy layer: while the **document is hidden** (tab background), **pause** counting toward the next advance; when the document becomes **visible** again, start a **new** full **10s** idle period (no catch-up bursts). On **window resize**, **reset** the idle timer. Respect **`prefers-reduced-motion: reduce`** by **not** running automatic advances; listen for **changes** to that preference so toggling the OS setting updates behavior without reload.

### Acceptance criteria

- [ ] Background tab: no automatic advances while hidden; returning to the tab starts a **fresh** 10s wait before the next advance.
- [ ] Resizing the window **resets** the countdown.
- [ ] Reduced motion: **no** automatic advances; preference changes apply **live**.
- [ ] With reduced motion off, Phases 1 and 2 together match all timing and reset rules from the PRD.

---

## Phase 3: Verification and optional test extraction

**User stories**: 18 (full), Testing Decisions from PRD

### What to build

Document a **manual QA checklist** covering: multi-project happy path, single-project, tab hide/show, resize during idle, desktop sidebar click, mobile scroll reset, reduced motion on/off. Optionally introduce a **minimal unit-test harness** (e.g. Vitest) **only** for **pure helpers** (next index modulo count, target scroll math) if extracted; otherwise confirm **manual QA** as the gate for v1.

### Acceptance criteria

- [ ] Checklist exists and is sufficient for a reviewer to validate the feature without reading source code.
- [ ] Team decision recorded: **manual-only** vs **Vitest + pure functions** for v1 (aligned with PRD open point).

---

## Quiz (granularity)

Proposed breakdown: **3 phases** — (1) core timer + scroll + resets + wrap + N≤1 gate, (2) visibility + resize + reduced motion, (3) QA / optional tests.

- Does this feel **too coarse** (merge 1+2 into one MVP slice) or **too fine** (split Phase 2 into visibility vs resize vs motion)?
- Should any phases be **merged** or **split**?

*Update this section after you approve or revise the breakdown.*
