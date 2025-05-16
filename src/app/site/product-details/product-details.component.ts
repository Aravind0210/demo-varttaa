import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { QuoteFormComponent } from '../quote-form/quote-form.component';

interface ProductSpec {
  label: string;
  value: string;
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
  imports: [CommonModule, FooterComponent, NavBarComponent, QuoteFormComponent],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  showQuoteForm = false;
  selectedImage: string = '';

  products: Product[] = [
    {
      id: 1,
      title: 'High-Performance Sugarcane Juicer Machine, Quiet Operation With airpump',
      price: 475000,
      unit: 'INR/Unit',
      description: 'Stainless Steel Sugarcane Juicer Machine',
      images: [
        'https://5.imimg.com/data5/CF/ZS/QC/ANDROID-5413612/product-jpeg-500x500.jpg',
        'https://5.imimg.com/data5/UM/RO/MY-31444973/sugarcane-juicer-500x500.jpg',
        'https://5.imimg.com/data5/SELLER/Default/2023/10/351717253/BP/EV/JQ/31444973/sugarcane-juicer-125x125.png'
      ],
      specifications: [
        { label: 'Refrigerant', value: '404A' },
        { label: 'Product Type', value: 'Sugarcane Juicer Machine' },
        { label: 'Pre-Cooling Pump', value: 'No' },
        { label: 'Shape', value: 'Other' },
        { label: 'Power', value: '4600 Watt (w)' },
        { label: 'Voltage', value: '380 to 440 Volt (v)' },
        { label: 'Compressor', value: 'Two' }
      ]
    },

    // Add more products here similar to ProductPageComponent lists
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
    { label: 'Heating Element', value: 'Electric' },
    { label: 'Plate Material', value: 'Non-stick coated' },
    { label: 'Temperature Control', value: 'Adjustable thermostat' },
    { label: 'Power', value: '1200 Watt (w)' },
    { label: 'Voltage', value: '220-240 Volt (v)' },
    { label: 'Weight', value: '2.5 Kg' }
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
}
