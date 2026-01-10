export type Project = {
  title: string;
  slug: string;
  coverAlt?: string;
  coverSrc: string;
  imageCount: number;
};

// Temporary local data so the frontend runs before Sanity schemas/content exist.
// We'll replace this with Sanity queries once the project schema is in place.
export const sampleProjects: Project[] = [
  {
    title: 'Summer Portraits',
    slug: 'summer-portraits',
    coverAlt: 'Portrait in warm evening light',
    coverSrc: '/placeholder/cover-1.svg',
    imageCount: 10,
  },
  {
    title: 'Studio Session',
    slug: 'studio-session',
    coverAlt: 'Black and white studio portrait',
    coverSrc: '/placeholder/cover-2.svg',
    imageCount: 8,
  },
  {
    title: 'City Walk',
    slug: 'city-walk',
    coverAlt: 'Street scene at dusk',
    coverSrc: '/placeholder/cover-3.svg',
    imageCount: 6,
  },
];


