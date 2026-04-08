# PRD: Next project link on project pages

## Problem Statement

Visitors who open an individual project page have no built-in way to continue through the portfolio in the same order as the homepage. They must return to the index or use the browser back button, which breaks the mental model of a sequential gallery. The site needs a single, always-available control on each project detail page that moves forward to the **next** project in the established site order, including a clear wrap from the last project back to the first.

## Solution

On each project detail page, when the current project participates in the homepage gallery sequence, show a **fixed** text link labeled **“next project”** with a **right-pointing arrow**, positioned near the **bottom** of the viewport (offset upward from the bottom edge), **right-aligned** with modest padding from the right. The link navigates to the **next** project in **the same ordered list** used on the homepage (Sanity `order`, then publication time, then creation time as tie-breakers). After the **last** project in that list, the next target is the **first** project. The visible label does not show the destination title, but assistive technologies receive the **next project’s title** via an appropriate accessible name (for example `aria-label`). The link uses the **same text color treatment as the site header** on project pages (plain text, no extra halo or background). When the control would not provide a meaningful step—only one eligible project exists, or the current project is **not** part of the homepage-eligible set—the link is **not rendered**.

## User Stories

1. As a **visitor on a project page**, I want a clear “next project” action, so that I can continue browsing without going back to the homepage first.
2. As a **visitor**, I want “next” to follow the **same order** as the homepage, so that the sequence feels consistent across the site.
3. As a **visitor**, I want to move from the **last** homepage project to the **first**, so that the portfolio feels continuous rather than ending abruptly.
4. As a **visitor**, I want the control to stay **visible while I scroll** long image stacks, so that I do not have to hunt for navigation at the end of the page.
5. As a **visitor**, I want the link **near the bottom-right** of the screen, so that it is easy to find without covering the main artwork.
6. As a **visitor**, I want **modest spacing** from the right edge, so that the control does not touch the bezel awkwardly.
7. As a **visitor**, I want the link to **match header text color** on that project page, so that it feels part of the existing chrome.
8. As a **visitor**, I want a **simple text link** with an **arrow**, so that the UI stays minimal and does not compete with the photography.
9. As a **screen reader user**, I want the **destination project named** in the accessible label, so that I know where the link goes even when the visible text is generic.
10. As a **keyboard user**, I want the link to be **focusable** and clearly in the tab order, so that I can activate it without a pointer.
11. As a **visitor on a single-project portfolio** (only one homepage-eligible project), I want the redundant control **hidden**, so that I am not offered a useless self-link.
12. As a **visitor who landed on a project** that is **not** on the homepage (for example missing a cover image), I want the sequential “next” control **omitted**, so that the site does not pretend there is a shared sequence.
13. As a **maintainer**, I want **one definition** of “homepage project order and membership,” so that the index and project pages cannot drift apart accidentally.
14. As a **developer**, I want **next resolution** expressed as **pure logic** (input list + current slug → next slug/title or nothing), so that behavior is easy to reason about and test.
15. As a **content editor**, I want changing **Sanity order fields** to automatically update both the homepage and “next” targets, without duplicate data entry.
16. As a **visitor on mobile**, I want the fixed control to remain usable with **safe areas** in mind (notches, home indicators), so that the tap target is not clipped or flush against the system UI where avoidable.
17. As a **visitor**, I want the arrow to act as **decorative** content for assistive tech (if implemented as a separate glyph), so that the spoken output stays concise and meaningful.
18. As a **returning visitor**, I want predictable URLs under `/projects/<slug>/`, so that sharing and bookmarks continue to work when moving “next.”
19. As a **site owner**, I want no **new CMS fields** for this behavior, so that ordering stays governed by existing project metadata.
20. As a **QA tester**, I want an explicit checklist for **wrap**, **single project hide**, **non-index project hide**, and **header color** on white vs black text modes, so that regressions are easy to catch manually.

## Implementation Decisions

- **Ordering source of truth**: Use the **same eligibility rules and sort** as the homepage project list: projects must have a **slug** and **cover image** asset; sort by **`order` ascending**, then **`publishedAt` descending**, then **`_createdAt` descending**. This definition must be shared between the homepage data fetch and project-page logic so it cannot diverge silently.
- **Deep module — ordered list contract**: Introduce a small, stable module that exports (conceptually) the GROQ fragment or query for “homepage-eligible projects” and a narrow TypeScript shape (at minimum **slug** and **title** for each row). The homepage consumes the full card fields; project pages may request only slug and title, but the **filter and order** clauses must remain identical.
- **Deep module — next resolution**: A pure function (or equivalent) that accepts the **ordered** list of `{ slug, title }` and the **current slug**, and returns either **`null`** (no link) or the **next** entry’s slug and title. Rules: if the current slug is **absent** from the list, return **null**; if the list length is **≤ 1**, return **null**; otherwise return the item at **index + 1**, wrapping from **last to first**.
- **Project page integration**: The project detail route resolves the current project as today, fetches or reuses the ordered slug/title list at build time, computes the next entry, and conditionally renders the fixed link. Styling is scoped to the project page so the global layout is unchanged for other templates.
- **Presentation**: **Fixed** positioning; **bottom** offset consistent with “about ten percent above the bottom” of the viewport; **right** alignment with **padding** from the right edge; **z-index** high enough to sit above page content but consistent with existing stacking for header/footer.
- **Accessibility**: Visible text **“next project”** plus arrow; **accessible name** includes the **next project title** (e.g. via `aria-label`). Decorative arrow marked appropriately if separated from text.
- **Sanity schema**: **No** schema changes; eligibility continues to rely on existing project fields.
- **Static generation**: Behavior is determined at **build** time from Sanity content, consistent with the rest of the Astro static paths.

## Testing Decisions

- **Good tests** assert **observable behavior** of the next-resolution helper: given a concrete ordered list and current slug, the correct next slug/title or **null** is returned. Tests should **not** depend on GROQ string formatting or Astro internals.
- **Module to test**: The **pure next-resolution function** (list + current slug → result). This is the highest-value, lowest-flake surface.
- **Modules not requiring automated tests initially**: Astro page templates and layout markup, which are better covered by **manual** checks and visual verification unless a broader E2E harness is introduced later.
- **Prior art**: The **web** package does not currently define unit tests in-repo; adding tests implies introducing a **minimal test runner** (for example Vitest) or using **Node’s built-in test** runner for a single file. Until then, document **manual QA** cases: multi-project wrap, two-project wrap, single-project hide, current slug not in list hide, accessible name contains destination title.

## Out of Scope

- **Previous project** link or bidirectional project navigation.
- **Per-project overrides** in the CMS for custom “next” targets.
- Changing **homepage** eligibility rules beyond aligning the shared definition (for example showing projects without covers on the index).
- **Analytics** or event tracking on the new link.
- **Animated transitions** between project pages.
- **Prefetching** or **service worker** optimizations for the next URL (may be considered later).

## Further Notes

- **Detail pages for non-index projects**: `getStaticPaths` may still generate URLs for projects **without** a cover; those pages should **omit** the fixed link per product decision, since they are outside the homepage sequence.
- **Vertical offset**: Implement `bottom` using a **percentage or viewport unit** consistent with the design (“ten percent above the bottom”); combine with **`env(safe-area-inset-bottom)`** where appropriate so fixed UI clears gesture areas on supported devices.
- **Color parity**: Header color on project pages is already driven by **body classes** tied to `indexTextColor`; the new link should **reuse** those mechanisms rather than introducing a one-off color.
