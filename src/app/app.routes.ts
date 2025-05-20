// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(m => m.adminRoutes),
  },
  {
    path: 'home',
    loadChildren: () => import('./site/site.routes').then(m => m.SITE_ROUTES),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
