import {createClient} from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'
import type {ImageUrlBuilder} from '@sanity/image-url/lib/types/builder'

// Prefer env vars, but fall back to the repo's current Sanity project config
// so the frontend runs immediately in a fresh clone.
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? '1pqi6gn6'
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2025-11-01',
  useCdn: true,
})

const builder = createImageUrlBuilder(sanityClient) as ImageUrlBuilder

export function urlForImage(source: unknown) {
  // The builder is resilient; it returns a chainable object even for unknown input.
  // Callers should still guard against missing asset when needed.
  return builder.image(source as any)
}


