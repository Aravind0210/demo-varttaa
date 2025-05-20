// src/app/admin/admin.routes.ts
import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'add-product',
        loadComponent: () => import('./add-product/add-product.component').then(m => m.AddProductComponent),
      },
      {
        path: 'manage-product',
        loadComponent: () => import('./manage-product/manage-product.component').then(m => m.ManageProductComponent),
      },
      {
        path: 'manage-categories',
        loadComponent: () => import('./manage-categories/manage-categories.component').then(m => m.ManageCategoriesComponent),
      },
    ],
  },
];
