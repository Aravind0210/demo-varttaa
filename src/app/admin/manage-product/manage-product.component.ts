import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  category: string;
  
}

@Component({
  selector: 'app-manage-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'],
})
export class ManageProductComponent {
  // Sample products (You can fetch this from an API using service)
  products: Product[] = [
    {
      id: 1,
      name: 'Softy 25L Machine',
      category: 'Ice Cream Machine',
    },
    {
      id: 2,
      name: 'Italian Oven Pro',
      category: 'Pizza Oven',
    },
    {
      id: 3,
      name: 'Waffle King 1000',
      category: 'Waffle Machine',
    },
    
    // Add more products here
  ];

  searchTerm: string = '';
  filteredProducts: Product[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;

  ngOnInit() {
    this.filteredProducts = [...this.products];
  }

  get pages(): number[] {
    const total = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  get paginatedProducts(): Product[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
    }
  }

  onSearch() {
    const term = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
    this.currentPage = 1;
  }

  onEdit(product: Product) {
    console.log('Edit clicked:', product);
    // Navigate to edit form or open modal
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.products = this.products.filter((p) => p.id !== id);
      this.onSearch(); // Refresh list
    }
  }
}
