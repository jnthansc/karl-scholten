import { describe, expect, it } from 'vitest';
import { getNextProject, type ProjectNavEntry } from './next-project';

describe('getNextProject', () => {
  it('returns null when the list is empty', () => {
    expect(getNextProject([], 'a')).toBeNull();
  });

  it('returns null when there is only one project', () => {
    const one: ProjectNavEntry[] = [{ slug: 'only', title: 'Only' }];
    expect(getNextProject(one, 'only')).toBeNull();
  });

  it('returns null when the current slug is not in the list', () => {
    const list: ProjectNavEntry[] = [
      { slug: 'a', title: 'A' },
      { slug: 'b', title: 'B' },
    ];
    expect(getNextProject(list, 'missing')).toBeNull();
  });

  it('returns the second project when current is first', () => {
    const list: ProjectNavEntry[] = [
      { slug: 'a', title: 'A' },
      { slug: 'b', title: 'B' },
    ];
    expect(getNextProject(list, 'a')).toEqual({ slug: 'b', title: 'B' });
  });

  it('wraps from last to first', () => {
    const list: ProjectNavEntry[] = [
      { slug: 'a', title: 'A' },
      { slug: 'b', title: 'B' },
      { slug: 'c', title: 'C' },
    ];
    expect(getNextProject(list, 'c')).toEqual({ slug: 'a', title: 'A' });
  });

  it('returns the middle project when current is second of three', () => {
    const list: ProjectNavEntry[] = [
      { slug: 'a', title: 'A' },
      { slug: 'b', title: 'B' },
      { slug: 'c', title: 'C' },
    ];
    expect(getNextProject(list, 'a')).toEqual({ slug: 'b', title: 'B' });
    expect(getNextProject(list, 'b')).toEqual({ slug: 'c', title: 'C' });
  });
});
