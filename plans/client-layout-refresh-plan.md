# Plan: Client layout and legal chrome refresh

> Source PRD: `plans/client-layout-refresh-prd.md`

## Architectural decisions

Durable decisions that apply across all phases:

- **Routes:** No new URLs. Legal content remains at **`/imprint/`**; the combined label **"Imprint & Privacy"** is a **link** in the footer to that route, not a second path. **About** remains at its existing about route.
- **Schema:** The **imprint** singleton document keeps its current shape: **title** (string) and **content** (Portable Text). **No** new fields, **no** new document types for this feature.
- **Key models / CMS:** A single **legal** page body holds both **imprint-** and **privacy-** style content; editors use headings or blocks inside one **content** array. Optional Studio tweak: default **title** to **"Imprint & Privacy"** for new documents.
- **Layout contract:** A **shared horizontal inset** (including safe area) is used for header and footer; a **taller** footer **block** height is tokenized; **main** bottom spacing references that so scrollable content is not covered.
- **Testing (v1):** **Manual / visual** QA per PRD; **no** new automated E2E or new unit requirements for this feature.

---

## Phase 1: Global header, two-line footer, and layout tokens

**User stories:** 1, 2, 3, 9, 10 (header/footer still usable and readable; fixed chrome preserved), 11, 12, 13, 14 (partial: tokens in place for dev maintainability)

### What to build

A single vertical pass over the **entire** site’s shell: the **header** shows **only "About"** in the top navigation (no legal link there). The **footer** is a **left-aligned, two-line** block: first line, a **link** labeled **"Imprint & Privacy"** to **`/imprint/`**; second line, the **copyright** line. Introduce **shared** layout tokens (horizontal **inset** with safe area; **footer** block **height** or min-height) and ensure **main** content has **enough** bottom space so the taller footer does not **cover** long content. All pages that use this shell (index, about, project, imprint, etc.) get the same **pattern**; **theme** overrides (e.g. different text colors on index or on certain project states) must still apply to the **new** footer link and its container.

**Demo / verify:** Open several routes at mobile and desktop widths: header has **About** only; footer shows **"Imprint & Privacy"** then copyright; long pages scroll with content **clear** of the footer; on a notched or inset device, text is not clipped at the **horizontal** edges.

### Acceptance criteria

- [ ] The header’s primary nav area contains **"About"** and does **not** include a top-level **Imprint** (or "Imprint & Privacy") link.
- [ ] The fixed footer includes **"Imprint & Privacy"** (linked to **`/imprint/`**) on the **line above** the **©** line, both **left-aligned** with a **shared** inset (including **safe area** for horizontal insets as applicable).
- [ ] The footer **block** is **tall enough** for two lines; **main** (or global padding strategy) is updated so the **end** of scrollable content is not hidden under the footer.
- [ ] **Index**, **about**, and **imprint** (and any other page using the shell) show the **same** header/footer **pattern**; color overrides for project/index modes still work on the **new** footer elements.
- [ ] **Tab order** / visual order: **legal link** then **copyright** in the **footer** (aligned with a11y story intent).

---

## Phase 2: Imprint page title and optional Studio default

**User stories:** 4, 5, 6

### What to build

The **`/imprint/`** view presents a **primary heading** that matches the footer: **"Imprint & Privacy"** (with a **fallback** when CMS is empty or fails, as today). The **body** is still a **single** Portable **Text** stream from the existing **content** field—no **migration**; editors can structure **imprint** and **privacy** sections **inside** that body. Optionally, the **content** type’s **title** default in the CMS is set to **"Imprint & Privacy"** for **new** documents so **Studio** matches the product copy.

**Demo / verify:** Open **`/imprint/`**; the page title/heading **reads** "Imprint & Privacy" in the default case; **content** from CMS still renders; existing published documents that still say **"Imprint"** in the CMS can be **updated in Studio** without a code path that depends on that.

### Acceptance criteria

- [ ] The **default** on-page experience for the legal page uses **"Imprint & Privacy"** as the main heading when **appropriate** (aligned with PRD: match footer and URL purpose).
- [ ] The **content** is still a **single** **Portable Text** field; **no** schema migration for **separate** privacy content.
- [ ] (Optional) **New** **imprint** documents in the CMS get **"Imprint & Privacy"** as the **default** **title** where the schema supports an **initial** value; **legacy** **titles** are **editor-** or **manually-** updatable.
- [ ] A **no-CMS** or error **state** still shows **readable** **copy** and a sensible **H1** fallback, consistent with current behavior for failures.

---

## Phase 3: Project page — wordmark band, fixed project title, desktop pass

**User stories:** 7, 8, 9 (project title insets; overlaps with done work if shell already unifies insets), 10, 15

### What to build

On **project** views with a **project title** in the shell: for **mobile**-width breakpoints, stop relying on a **mismatched** “band” height for the name vs. the **fixed** project title. **Define** a **wordmark** **band** (top/bottom **padding** + **one** line of the **"Karl Scholten"** name) and place the **fixed** project **title** so its **top** = **(bottom of that band) + a chosen gap** using **tokens**, **not** a **generic** 44px band if that is **wrong** for the **rendered** line. **Horizontally**, the project title’s **inset** matches the **shared** **shell** **inset** (box **alignment**; **no** **optical** nudge in v1). For **wider** viewports, the title stays in **normal** **flow** under the name; **verify** **spacing** and **horizontal** **alignment** so **desktop** **review** matches the **PRD** intent (harmonize with the **mobile** fix where **applicable**). Ensure **any** project-specific **overrides** (e.g. **text** color on video backgrounds) still apply to the **title** and **header** **chrome**.

**Demo / verify:** A **project** with a long **title** on a **phone**-sized view: **clear** **vertical** **gap** between the **name** and the **title**; **left** **edges** of **name** and **title** **align** with the **inset** **token**; **scroll** **media**; **header**/footer **remain** **usable**; **check** a **desktop** **width** for the **stacked** **name** + **title**.

### Acceptance criteria

- [ ] On **small** viewports, the **project** **title** is **positioned** using an **explicit** **wordmark** **band** + **gap** (not a **fragile** **single** number that **fails** to **match** the **rendered** **logotype**).
- [ ] The **project** **title** **horizontal** **position** uses the **same** **inset** **model** as the **global** **shell** (**box**-level **alignment**).
- [ ] On **larger** viewports, **name** + **project** **title** **read** as **coherent**; **no** **regression** on **contrast** or **readability** for project **color** modes.
- [ ] **Safe**-**area** **behavior** is **consistent** with **Phase** **1** for the **relevant** **elements** on the **project** page.

---

## Status

**Approved** — Breakdown and granularity accepted (no merge/split changes). Phases 1–3 as written are the implementation sequence of record.
