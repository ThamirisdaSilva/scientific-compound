import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home')
        .then(m => m.Home)
  },

  {
    path: 'compounds',
    loadChildren: () =>
      import('./features/compounds/compounds.routes')
        .then(m => m.COMPOUNDS_ROUTES)
  },

  { path: '**', redirectTo: 'home' }
];