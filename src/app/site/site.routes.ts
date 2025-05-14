import { Routes } from '@angular/router';

export const SiteRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./homepage/homepage.component').then(
        (m) => m.HomepageComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about-page/about-page.component').then(
        (m) => m.AboutPageComponent
      ),
  },
  {
    path: 'service',
    loadComponent: () =>
      import('./services/services.component').then(
        (m) => m.ServicesComponent
      ),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },

  

  { path: '**', redirectTo: '/home' },
];
