# PRD: Client layout and legal chrome refresh

## Problem Statement

The portfolio’s customer (Karl) gave UX feedback on **mobile and desktop** chrome. On **mobile (Handy)**, the vertical space between the project title and the “Karl Scholten” name feels **too small**, and the project title’s **left edge** does not align with the wordmark (visible on letters such as “W” that extend to the left). The customer wants **“Imprint & Privacy”** removed from the **top** navigation so that only **“About”** remains **top-right**; the legal link should sit **in the footer**, **directly above** the copyright line. On **desktop**, the same move applies: **“Imprint & Privacy”** should appear **at the bottom**, **above** the copyright, not beside **About** in the header. Separately, the product owner wants a **single** legal URL that still covers both imprint-style and privacy-style obligations in **content** (no second route in v1) and a **clear page title** that matches the combined English chrome (“Imprint & Privacy”).

## Solution

**Header:** Show only **About** in the top navigation on all viewports. **Remove** the standalone top-level **Imprint** link from the header.

**Footer:** A **left-aligned, two-line block** in the fixed footer: first line, a **single link** labeled **“Imprint & Privacy”** pointing to the existing **imprint** page; second line, the existing **copyright** line. The footer grows **taller** to fit both lines, and main content’s bottom padding is updated so no content is obscured. **Horizontal alignment** of header and footer content uses a **shared layout inset** (including safe area on notched devices).

**Legal page:** The imprint page remains a **single** CMS-backed document. **No new schema field** is required: editors maintain **imprint- and privacy-related** copy **inside the same** Portable Text body (e.g. a major heading for a privacy section). The **on-page** primary heading (and, if aligned, the CMS document title) reads **“Imprint & Privacy”** to match the footer link, while the body holds the full text.

**Project pages (mobile, ≤900px):** Fix vertical spacing and alignment by **not** treating the project title as sitting at a **generic band height** that does not match the “Karl Scholten” line. **Define a clear “wordmark band”** (padding + one line of the logotype) and set the **fixed** project title’s `top` to **(bottom of that band) + a deliberate gap**, using layout tokens. **Horizontally**, align the project title to the same **inset** as the rest of the header (box alignment; **no** optical nudge in v1). **Project pages (desktop, >900px):** The title stays in the normal **column** under the name; **verify** spacing and left alignment for parity with the customer’s review.

**Deep-module direction (optional):** Encapsulate **header/footer inset and footer block height** in **CSS custom properties** (and minimal markup) so all pages and theme variants (e.g. project text color) consume one contract; project-page-specific rules only adjust **wordmark band + title** where the **fixed** title exists.

## User Stories

1. As a **site visitor on mobile**, I want the **“About”** link in the top-right, so that the primary top nav is not crowded with legal links.
2. As a **site visitor on mobile**, I want the **“Imprint & Privacy”** link at the **bottom** above the copyright, so that I can find legal information without it competing with content navigation in the header.
3. As a **site visitor on desktop**, I want the same: **only “About”** in the top nav and **“Imprint & Privacy”** **above the copyright** in the **bottom-left** area, so that behavior is consistent across breakpoints.
4. As a **site visitor** opening **/imprint/**, I want the page to be clearly titled in line with the footer (**“Imprint & Privacy”**), so that I know the page matches what I clicked.
5. As a **site visitor**, I want a **single** legal page to cover both “imprint” and “privacy” information in the body, so that I do not have to open two different URLs in this release.
6. As a **content editor**, I want to keep using **one** rich-text field for the legal page, so that I can add or reorder **Imprint** and **Privacy** sections (e.g. with headings) without a migration.
7. As a **site visitor on a project page (mobile)**, I want the **project title** spaced **further** below **“Karl Scholten”**, so that the hierarchy is easier to read.
8. As a **site visitor on a project page (mobile)**, I want the **project title** to start at the **same horizontal inset** as the wordmark, so that the left edge looks aligned, not jagged.
9. As a **site visitor on a notched device**, I want the header, footer, and project title insets to **respect safe areas**, so that text is not flush against the physical edge of the screen.
10. As a **site visitor scrolling project media**, I want the **header/footer** to remain **usable and readable** (existing behavior preserved unless intentionally changed by implementation).
11. As a **site owner**, I want the **index**, **about**, and **imprint** pages to use the same **header/footer** pattern, so the experience feels one coherent site.
12. As a **site visitor** using **only the keyboard** or a **screen reader**, I want the footer to expose a **sensible** order (legal link, then small print copyright), so that the tab order and announcements remain logical.
13. As a **site visitor** on a **tall** legal page, I want the **main** area to have enough **bottom padding** that my reading is not hidden **under the fixed footer**, so that I can read the end of the text comfortably.
14. As a **developer** maintaining the project, I want **layout insets and footer height** defined in a **small set of shared tokens**, so that future changes do not reintroduce misalignment.
15. As a **site visitor** on a **project page (desktop)**, I want the **stacked** name and project title to remain **visually harmonized** with the mobile fix where applicable, so that cross-device review is consistent.

## Implementation Decisions

- **Header navigation** will expose **one** top-level item: **About**; the **Imprint** (or “Imprint & Privacy”) link is **removed** from the header.
- **Footer structure** is a **vertical stack** (legal link, then copyright), **left-aligned** with the same horizontal inset as the **header** content, using a **shared inset token** (e.g. padding-left/right derived from a single custom property + safe area).
- The **footer** is **taller** than a single 44px row; a **height or min-height** token (or equivalent padding) represents the full **footer block**; **main** content bottom spacing references this so scrollable content clears the footer.
- The **imprint** route and CMS document type stay **as today**; **no** new document type, **no** new required field; combined legal narrative lives in the **existing** Portable Text **content** array.
- The **H1** on the legal page and the product owner’s default for the CMS **title** field align to **“Imprint & Privacy”** (English, matching footer and customer wording).
- **Mobile project page layout:** The **“wordmark band”** is defined explicitly (vertical extent of the logotype line plus the header’s top/bottom padding that belongs to that band). The **fixed** project title’s `top` = **(bottom of wordmark band) + (gap token)**. **Do not** rely on a single generic `--headerH` of 44px for that relationship if that does not match the real rendered line box.
- **Horizontal alignment (project title):** The project title’s horizontal position uses the **same** inset as the **header** (box alignment on the content box; **no** extra optical micro-adjustment in v1 per agreed scope).
- **Index and theme overrides** (e.g. index text color, project text black/white) must **continue** to apply to the new footer elements; any new link or text nodes pick up the same color variables as the rest of the chrome.
- **Implementation modules** to build or change (conceptual; no file paths):
  1. **Global site chrome (layout shell)** — Renders **header** (brand + optional project title slot, **nav** with About only), **main** slot, **footer** (legal link + copyright). **Interface:** one place that owns **inset** tokens and **footer block height** used by all pages.
  2. **Project detail chrome behavior** — **Overlays** or extends the shell for **body classes** that mean “project page”: on narrow viewports, **fixed** project title placement derived from the **wordmark band** + gap; ensures **inset** matches the shell. **Interface:** a clear contract: when `projectTitle` is present and viewport is mobile, **top/left** follow shared tokens; **no** duplicate magic numbers in unrelated files where avoidable.
  3. **Imprint page document** — Fetches the singleton legal document, renders **H1** as **“Imprint & Privacy”** (or from CMS if title is set and matches), outputs Portable Text for the body. **Interface:** same data shape; only presentation defaults and copy may change.
  4. **Sanity studio (optional, low risk)** — Update **title** `initialValue` to **“Imprint & Privacy”** for the imprint document type so new studios match the PRD; existing published content may be updated manually in Studio.
- **Schema changes:** **None** required for the combined legal copy.

## Testing Decisions

- **Good tests** assert **observable** behavior, not a specific CSS implementation: e.g. that the **imprint** page has the expected **heading** string for the given CMS payload; that a **small pure function** (if extracted for next-project or layout math) returns the correct **order** of projects or a computed value from inputs.
- **Unit tests:** Favor any **new** or **isolated** pure logic (e.g. ordering, slug resolution) with **Vitest**, consistent with the existing `next-project` test style. **The global layout** is a presentational **Astro/CSS** concern; **automated** coverage is **optional** (see below) unless a pure helper is split out.
- **Manual / visual** validation is **in scope** for: mobile project page **title** position vs. wordmark, **footer** two-line **layout**, **inset** alignment on at least one **iPhone** safe-area and one **desktop** width; **contrast** of footer links in **index** and **project** color modes.
- **Optional in a later iteration:** A single **E2E** or **playwright** check that the header does not contain a top **Imprint** link and the footer contains **“Imprint & Privacy”** (if a test harness is added). Not required for the first pass unless the team already runs E2E.
- **Modules with tests in v1:** **None** added for this feature; existing Vitest usage elsewhere in the repo is unchanged. If a **pure** helper is introduced opportunistically, tests remain **optional** unless the team adopts a stricter policy later.

**Resolved (v1):** **(c) Manual QA only** for this release—no new automated E2E and no requirement to add unit tests unless a pure helper is extracted for other reasons; follow the manual/visual checklist in **Testing Decisions** above.

## Out of Scope

- A **separate** `/privacy/` route, **dedicated** privacy document type, or **GDPR** processor registry beyond what the **editor** places in the single legal body.
- **Optical** (sub-pixel) kerning/alignment nudges for the project title vs. wordmark **after** box alignment; **i18n** of “Imprint & Privacy” into German UI strings in this pass (copy remains English per decision).
- **Search engine** or **sitemap** policy changes specific to the legal URL (unless a simple title/meta pass is part of a separate task).
- **Redesign** of **About** content or the **Karl Scholten** wordmark itself.

## Further Notes

- The **grill-me** and **/write-a-prd** sessions produced **aligned** decisions: **C** (one URL, combined content in editor), **A** (no schema split), footer label **2** (“**Imprint & Privacy**” in English), project mobile layout **B** (explicit wordmark band) + **1** (box insets only), footer layout **A** (left stack), and **H1** = **“Imprint & Privacy”** (user confirmed **!** as option 1 in that thread).
- **Module boundaries** (global shell vs. project override vs. imprint page) are proposed above; they should be **reconciled** with what you are willing to **extract** (pure CSS vs. small script) during implementation.
- The PRD file is **not** committed to git as part of this write-up; the team can move or commit it as desired.
