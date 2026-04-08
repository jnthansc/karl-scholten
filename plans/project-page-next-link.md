# Plan: Next project link on project pages

> Source PRD: `docs/prd/project-page-next-link.md`

## Architectural decisions

Durable decisions that apply across the work:

- **Routes**: Project URLs remain `/projects/<slug>/`; “next” is always another project on the same URL pattern.
- **Schema**: No Sanity schema changes. Eligibility and ordering use existing project fields (slug, cover asset, `order`, `publishedAt`, `_createdAt`).
- **Key model**: A single **homepage-eligible ordered list**—same filter and sort as the index page. The next target is derived only from this list and the current slug.
- **Static generation**: Behavior is fixed at build time from Sanity, consistent with existing Astro static routes.

---

## Phase 1: Next project link (full delivery)

**User stories**: 1–20 (entire PRD).

### What to build

One vertical slice that delivers the full PRD: a **shared contract** for how homepage-eligible projects are selected and ordered so the index and project pages cannot drift; a **pure resolution step** that, given the ordered slug/title list and the current slug, returns the next entry with **wrap from last to first**, or **nothing** when the list has at most one item or the current slug is not in the list; **automated tests** for that resolution logic only; on each project detail page where a next step exists, a **fixed** text link reading **“next project”** with a **right-pointing arrow**, placed **above the bottom** of the viewport (by a defined offset), **right-aligned** with padding from the right edge, inheriting the **same text color behavior as the project header**, with an **accessible name** that includes the **destination project title**; **safe-area** awareness so fixed placement respects notches and home indicators; **decorative** handling for the arrow if it is separate from the visible label; stacking so the control stays usable relative to scrolling content and existing chrome; and a concise **manual QA checklist** covering wrap, single-project hide, non–homepage-project hide, and light/dark header modes.

### Acceptance criteria

- [ ] Homepage and project pages use the **same** eligibility filter and sort order for the gallery sequence.
- [ ] On a project page, when there are **two or more** eligible projects and the current project is **in** that list, a **next project** link appears and points to the **following** project in order; from the **last** project it points to the **first**.
- [ ] When there is **only one** eligible project, or the current project is **not** in the eligible list, the **link is not shown**.
- [ ] The link is **fixed** so it stays visible while scrolling long galleries; position matches **bottom offset**, **right alignment**, and **right padding** agreed in the PRD.
- [ ] Visible text is **“next project”** plus a **right arrow**; **assistive technology** receives the **next project’s title** in the link’s accessible name.
- [ ] Link appearance **matches header text color** on project pages (existing light/dark body modes), without extra background or shadow per PRD.
- [ ] **Pure “next” logic** is covered by **automated unit tests** (list + current slug → next or null); tests do not depend on query string formatting.
- [ ] **Safe-area** (and similar) is handled so the control is not clipped on common mobile devices.
- [ ] **Manual QA checklist** documents: multi-project flow including **wrap**, **single eligible project** (no link), **project not on homepage list** (no link), and **header color** in both modes.
