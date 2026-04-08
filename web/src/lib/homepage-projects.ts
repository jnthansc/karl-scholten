import groq from 'groq';

/**
 * Homepage-eligible projects: slug + cover, same sort as the index page.
 * Keep filter and order clauses in sync everywhere this contract is used.
 */
export const PROJECTS_FOR_INDEX_QUERY = groq`*[
  _type == "project" &&
  defined(slug.current) &&
  defined(coverImage.asset)
]
| order(order asc, publishedAt desc, _createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  indexTextColor,
  coverImage {
    alt,
    asset->{ _id, url }
  },
  mobileCoverImage {
    alt,
    asset->{ _id, url }
  }
}`;

/** Minimal projection for next-project navigation (same filter + order as index). */
export const PROJECT_ORDER_FOR_NAV_QUERY = groq`*[
  _type == "project" &&
  defined(slug.current) &&
  defined(coverImage.asset)
]
| order(order asc, publishedAt desc, _createdAt desc) {
  "slug": slug.current,
  title
}`;
