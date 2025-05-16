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
    path: 'product',
    loadComponent: () =>
      import('./product-page/product-page.component').then(
        (m) => m.ProductPageComponent
      ),
  },

  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent
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
