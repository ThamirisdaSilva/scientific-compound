import { Injectable } from '@angular/core';
import { getCompoundBySlug } from '../api/compounds.api';
import { Compound } from '../domain/compound.model';

@Injectable({ providedIn: 'root' })
export class CompoundsService {

  async getBySlug(slug: string): Promise<Compound | undefined> {
    return getCompoundBySlug(slug);
  }

}