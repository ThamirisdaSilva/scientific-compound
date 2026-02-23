import { COMPOUNDS } from '../data/compounds.data';
import { Compound } from '../domain/compound.model'

let cache: Compound[] | null = null;
let cacheBySlug: Record<string, Compound> = {};

export function getAllCompounds(): Promise<Compound[]> {

  if (cache) {
    return Promise.resolve(cache);
  }

  return new Promise(resolve => {
    setTimeout(() => {
      cache = COMPOUNDS;
      resolve(COMPOUNDS);
    }, 800);
  });
}

export function getCompoundBySlug(slug: string): Promise<Compound | undefined> {

  if (cacheBySlug[slug]) {
    return Promise.resolve(cacheBySlug[slug]);
  }

  return new Promise(resolve => {
    setTimeout(() => {
      const result = COMPOUNDS.find(c => c.slug === slug);
      if (result) {
        cacheBySlug[slug] = result;
      }
      resolve(result);
    }, 800);
  });
}