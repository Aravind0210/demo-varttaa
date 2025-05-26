import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./homepage/homepage.component').then(m => m.HomepageComponent),
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./about-page/about-page.component').then(m => m.AboutPageComponent),
  },

  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-details/product-details.component').then(m => m.ProductDetailsComponent),
  },

  {
    path: 'product',
    loadComponent: () =>
      import('./product-page/product-page.component').then(m => m.ProductPageComponent),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then(m => m.ContactComponent),
  },

  { path: '**', redirectTo: 'home' },
];

export default routes;
