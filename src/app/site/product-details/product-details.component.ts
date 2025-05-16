import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";

interface ProductSpec {
  label: string;
  value: string;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavBarComponent],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product = {
    title: 'High-Performance Softy Ice Cream Machine, Quiet Operation With airpump',
    price: 475000,
    unit: 'INR/Unit',
    quoteButtonText: 'Get a Price/Quote',
    description: 'Softy Ice Cream Making Machine',
    images: [
      'assets/softy1.png',
      'assets/softy2.png',
      'assets/softy3.png',
      'assets/softy4.png',
      'assets/softy5.png'
    ],
    specifications: <ProductSpec[]>[
      { label: 'Refrigerant', value: '404A' },
      { label: 'Product Type', value: 'Soft Ice Cream Machine' },
      { label: 'Pre-Cooling Pump', value: 'No' },
      { label: 'Shape', value: 'Other' },
      { label: 'Power', value: '4600 Watt (w)' },
      { label: 'Voltage', value: '380 to 440 Volt (v)' },
      { label: 'Compressor', value: 'Two' }
    ]
  };

  selectedImage = this.product.images[0];

  selectImage(image: string) {
    this.selectedImage = image;
  }
}
