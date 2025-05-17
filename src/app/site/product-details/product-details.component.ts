import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { QuoteFormComponent } from '../quote-form/quote-form.component';

interface ProductSpec {
  label: string;
  value: string;
  type?: 'physical' | 'technical';  // Optional for backward compatibility
}

interface Product {
  id: number;
  title: string;
  price: number;
  unit: string;
  description: string;
  images: string[];
  specifications: ProductSpec[];
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, NavBarComponent, QuoteFormComponent, FooterComponent],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  showQuoteForm = false;
  selectedImage: string = '';

  products: Product[] = [
    {
      id: 1,
      title: 'Sugarcane Juice Machine',
      price: 32000,
      unit: 'per piece',
      description: `This Sugarcane Juice Machine is built for durability, efficiency, and hygiene. It is ideal for juice shops, roadside vendors, and commercial use. The machine operates quickly with minimal effort, producing fresh juice from sugarcane in seconds.`,
      images: [
        'https://5.imimg.com/data5/CF/ZS/QC/ANDROID-5413612/product-jpeg-500x500.jpg',
        'https://5.imimg.com/data5/SELLER/Default/2023/8/334216041/WN/JM/OG/31444973/mini-sugarcane-juice-machine-500x500.png',
        'assets/images/products/sugarcane-3.jpg'
      ],
      specifications: [
        // Physical Specs
        { label: 'Body Material', value: 'Stainless Steel', type: 'physical' },
        { label: 'Weight', value: '65 Kg', type: 'physical' },
        { label: 'Dimensions', value: '24 x 18 x 22 inches', type: 'physical' },

        // Technical Specs
        { label: 'Motor Power', value: '1.5 HP', type: 'technical' },
        { label: 'Voltage', value: '220V / 50Hz', type: 'technical' },
        { label: 'Rollers', value: '3 Roller System', type: 'technical' },
        { label: 'Juice Output', value: '150 Litres / Hour', type: 'technical' },
        { label: 'Automation Grade', value: 'Semi-Automatic', type: 'technical' }
      ]
    },

    {
      id: 9,
      title: 'Belgian Waffle Maker – Electric',
      price: 15000,
      unit: 'INR/Unit',
      description: 'High-quality Belgian Waffle Maker with electric heating, non-stick plates, and adjustable temperature control.',
      images: [
        'https://5.imimg.com/data5/SELLER/Default/2023/11/362580297/HZ/MV/TO/31444973/waffle-cone-maker-500x500.jpeg',
        'https://5.imimg.com/data5/QD/QU/MY-31444973/waffle-cone-maker-125x125.jpg',
        'assets/waffle3.jpg'
      ],
      specifications: [
        { label: 'Heating Element', value: 'Electric', type: 'technical' },
        { label: 'Plate Material', value: 'Non-stick coated', type: 'physical' },
        { label: 'Temperature Control', value: 'Adjustable thermostat', type: 'technical' },
        { label: 'Power', value: '1200 Watt (w)', type: 'technical' },
        { label: 'Voltage', value: '220-240 Volt (v)', type: 'technical' },
        { label: 'Weight', value: '2.5 Kg', type: 'physical' }
      ]
    }
  ];

  product!: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id) ?? this.products[0];
    this.selectedImage = this.product.images[0];
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  closeQuoteForm() {
    this.showQuoteForm = false;
  }

  selectedVariant = '';
submitVariant() {
  console.log('Selected Variant:', this.selectedVariant);
}
}
