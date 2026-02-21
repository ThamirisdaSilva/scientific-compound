import { Routes } from '@angular/router';

export const COMPOUNDS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./compounds-list/compounds-list')
        .then(m => m.CompoundsList)
  },
  {
    path: ':name',
    loadComponent: () =>
      import('./compound-detail/compound-detail')
        .then(m => m.CompoundDetail)
  }
];