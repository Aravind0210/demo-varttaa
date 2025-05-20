import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  name: string;
  addedDate: Date;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  standalone: true,
})
export class DashboardComponent {
  totalProducts = 128; // Replace with actual data from service
  totalCategories = 12; // Replace with actual data from service
  lastProduct: Product | null = {
    name: 'Softy Ice Cream Machine',
    addedDate: new Date('2025-05-18'),
  };

  constructor(private router: Router) {}

  navigateToAddProduct() {
    this.router.navigate(['/admin/add-product']);
  }

  navigateToManageProducts() {
    this.router.navigate(['/admin/manage-product']);
  }
}
