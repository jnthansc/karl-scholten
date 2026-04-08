# PRD: Homepage auto-advance (idle project rotation)

## Problem Statement

Visitors on the photography homepage may linger on a single project cover without discovering the rest of the portfolio. There is no gentle, time-based progression through projects today, so the index page can feel static even when multiple projects exist. The site owner wants the homepage to periodically move to the next project in sequence without introducing custom animations beyond normal browser scrolling.

## Solution

After the page has finished loading, when more than one project is available and the user has not asked the system to reduce motion, an idle timer advances the main project strip to the **next** project every **10 seconds** by **programmatically updating scroll position** on the same scroll container used for manual browsing. The behavior matches on mobile and desktop. User scrolling, clicking a project in the sidebar (where applicable), resizing the window, or hiding the tab resets or pauses the idle timer so automatic movement does not fight intentional interaction. After the last project, the sequence **wraps** to the first. When only one project exists, or when reduced motion is preferred, automatic advancement does not run.

## User Stories

1. As a **first-time visitor**, I want the homepage to eventually show the next project without me scrolling, so that I discover more work even if I stay passive.
2. As a **returning visitor**, I want rotation to feel like normal scrolling, so that the experience stays consistent with manual browsing.
3. As a **mobile user**, I want the same timed progression as on desktop, so that behavior does not depend on my device category.
4. As a **mobile user**, I want my own scrolling to reset the countdown, so that auto-advance does not interrupt me mid-gesture.
5. As a **desktop user**, I want clicking a project name in the sidebar to reset the countdown, so that my explicit choice is respected before the next automatic step.
6. As a **desktop user**, I want the highlighted name and cover to stay aligned after an automatic step, so that the UI does not feel broken.
7. As a **user who rotates or resizes the window**, I want the idle timer to reset during resize, so that layout changes do not coincide with a surprise jump.
8. As a **user who switches tabs**, I want automatic advancement to pause while I am away, so that I do not miss content or return to unexpected positions.
9. As a **user who returns to the tab**, I want a fresh idle period before the next advance, so that I am not immediately jumped forward.
10. As a **user with vestibular or motion sensitivity**, I want automatic viewport changes disabled when I prefer reduced motion, so that I am not subjected to unsolicited movement.
11. As a **user who changes the reduced-motion setting** without reloading, I want the site to respect the new preference, so that accessibility settings apply immediately.
12. As a **visitor viewing a single-project portfolio**, I want no automatic timer noise, so that nothing runs unnecessarily.
13. As a **visitor who reaches the last project**, I want the sequence to continue to the first project, so that the gallery feels endless rather than “stuck.”
14. As a **site owner**, I want the feature to rely on scroll position only, so that maintenance stays simple and no bespoke animation layer is required.
15. As a **developer**, I want clear separation between “user-initiated scroll” and “programmatic advance,” so that timer reset logic stays understandable.
16. As a **developer**, I want the first automatic tick to run only after layout-critical resources have loaded, so that scroll distances are computed correctly.
17. As a **maintainer**, I want wrapping and triple-buffer scroll behavior to remain coherent, so that infinite-strip logic does not regress.
18. As a **QA tester**, I want a defined list of interactions that reset or pause the timer, so that regressions are easy to spot manually until automated coverage exists.

## Implementation Decisions

- **Scope**: Auto-advance applies to the homepage index experience only, on both narrow and wide viewports, using the existing full-page project strip and scroll container.
- **Advance mechanism**: Move to the next project by setting scroll position in a way that matches existing “go to project index *N*” behavior, but **without smooth scrolling** so the change is an immediate scroll step, not an additional animation.
- **Timing**: Fixed **10-second** idle interval between successful advances; first interval starts only after the window **load** event and a frame tick so dimensions match existing initialization.
- **Idle reset**: Restart the countdown when the user scrolls the project strip (excluding scroll events caused by the auto-advance itself, tracked with an explicit flag); when the user activates a sidebar project link on desktop; and on **window resize**.
- **Visibility**: While the document is **hidden** (e.g. tab in background), do not count time toward the next advance; when the document becomes visible again, begin a **new** full idle period rather than firing catch-up advances.
- **Reduced motion**: If the user prefers reduced motion, do not schedule or run automatic advances; observe changes to that preference without requiring a full page reload.
- **Project count**: If there is at most **one** project in the strip, do not initialize the idle feature.
- **Sequence**: Advance uses modular arithmetic—after the last project, the **next** step shows the **first** project.
- **Integration**: Implementation extends the existing homepage scroll and desktop name-highlighting behavior; shared concepts include triple-copy scroll normalization and choosing the active project from scroll position. A small, cohesive module for “idle scheduling + guards” keeps timer logic separate from DOM measurement where possible.
- **Deep module (target)**: An **idle rotator** (or equivalent) that exposes a minimal surface—e.g. start, stop, reset, and hooks for “allowed to run” and “on tick”—while encapsulating timer handles, visibility listeners, media-query listeners, and resize debouncing or coalescing as needed. Pure helpers for **next index modulo count** and for mapping “advance one project” to a target scroll offset (given current metrics) are candidates for extraction to keep the rotator thin and testable.

## Testing Decisions

- **Good tests** assert **observable behavior**: e.g. after a simulated idle period with controlled timers, scroll position or active project index changes; user scroll resets the schedule; hidden tab pauses; reduced motion prevents advances. Tests should not depend on internal variable names or private timer IDs.
- **Modules to test (recommended)**: Pure functions for **next index** and **target scroll** given mocked layout metrics (if extracted). The **idle scheduler** can be tested with fake timers (`setTimeout`/`clearTimeout`) and mocked `document.visibilityState` / `matchMedia` if the logic is isolated from direct DOM.
- **Prior art**: The **web** package currently has **no** automated test runner or example tests; introducing Vitest (or similar) would be net-new infrastructure. Until then, a **manual QA checklist** (load, multi-project, single-project, tab hide, resize, sidebar click, reduced motion toggle) is the practical verification path.
- **Out of automated scope for v1 (unless agreed)**: End-to-end browser tests (Playwright/Cypress) are optional and add setup cost; they are valuable for full scroll-strip integration but were not required for the initial PRD.

**Open point for the team**: Confirm whether to add a minimal unit-test harness for extracted pure functions only in v1, or rely solely on manual QA until a broader testing strategy exists.

## Out of Scope

- Custom CSS or JS animations beyond native scrolling (e.g. cross-fades, parallax) for the transition between projects.
- Configurable interval or CMS-driven timing in the first version.
- Auto-advance on non-homepage routes or project detail pages.
- Analytics events for auto-advance versus manual navigation.
- Pausing when the browser window loses **focus** while the tab remains visible (only tab visibility and the agreed resets are in scope unless later refined).
- Server-rendered or SEO-specific behavior beyond what the existing client-side index already does.

## Further Notes

- Desktop sidebar clicks today use smooth scrolling for navigation; automatic steps intentionally use **instant** scroll to honor the “no extra animation” requirement—two code paths may coexist with shared math for target position.
- The **10-second** interval and **wrap** behavior can be revisited after user feedback without changing the overall architecture if the idle rotator stays modular.
- This PRD should not be committed to version control per project convention; keep it as a working document until the feature ships and documentation strategy is decided.
