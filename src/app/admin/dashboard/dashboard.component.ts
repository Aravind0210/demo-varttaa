import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface Product {
  name: string;
  addedDate: Date;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,RouterLink],
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

  recentProducts = [
  {
    name: 'Softy Ice Cream Maker',
    category: 'Ice Cream Machines',
    price: 45000,
    addedDate: new Date('2025-05-19'),
  },
  {
    name: 'Sugarcane Juice Machine',
    category: 'Juice Machines',
    price: 39000,
    addedDate: new Date('2025-05-18'),
  },
  {
    name: 'Pizza Oven',
    category: 'Ovens',
    price: 58000,
    addedDate: new Date('2025-05-17'),
  },
  {
    name: 'Popcorn Maker',
    category: 'Snacks Machines',
    price: 20000,
    addedDate: new Date('2025-05-16'),
  },
];


  constructor(private router: Router) {}

  navigateToAddProduct() {
    this.router.navigate(['/admin/add-product']);
  }

  navigateToManageProducts() {
    this.router.navigate(['/admin/manage-product']);
  }
}
