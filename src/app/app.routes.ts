import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./site/site.routes').then((m) => m.SiteRoutes) },
  { path: '**', redirectTo: '/error', pathMatch: 'full' },
];
