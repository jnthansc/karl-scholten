export type ProjectNavEntry = {
  slug: string;
  title: string;
};

/**
 * Returns the next project in homepage order, wrapping last → first.
 * Returns null if there is no meaningful next step (≤1 projects, or current slug not in list).
 */
export function getNextProject(
  ordered: ProjectNavEntry[],
  currentSlug: string,
): ProjectNavEntry | null {
  if (ordered.length <= 1) {
    return null;
  }
  const i = ordered.findIndex((p) => p.slug === currentSlug);
  if (i === -1) {
    return null;
  }
  return ordered[(i + 1) % ordered.length] ?? null;
}
