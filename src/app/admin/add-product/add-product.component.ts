import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  categoryList = [
    'Ice Cream Machine',
    'Sugarcane Juice Machine',
    'Coffee/Tea Machine',
    'Pizza Oven',
    'Popcorn Machine'
  ];

  dynamicFields: any = {
  "Ice Cream Machine": [
   
    "Capacity",
    "Voltage",
    "Power",
    "Type",
    "Material",
    "Operation Mode",
    "Automation Grade",
    "Power Source",
    "Usage/Application", 
    "Warranty",
    "Product Dimensions",
    "Item Weight",
    "Country of Origin"
  ],
  "Sugarcane Juice Machine": [
   
    "Capacity",
    "Motor Type",
    "Voltage",
    "Material",
    "Operation Mode",
    "Automation Grade",
    "Power Source",
    "Usage/Application",
    "Warranty",
    "Power",
    "Country of Origin"
  ],
  "Hot Beverage Vending Machine": [
   
    "Premix Canister/Capacity",
    "Drink Options",
    "Hot Water Tank Material",
    "Dedicated Hot Water",
    "Auto Flush",
    "Dispensing Rate",
    "Start-Up Time",
    "Power Source",
    "Model Name/Number",
    "Power Consumption (KW)",
    "Net Weight",
    "Gross Weight",
    "Package Dimensions"
  ],
  "Coffee Machine": [
  
    "Capacity (No. of cups)",
    "Type",
    "Voltage",
    "Power",
    "Start-Up Time",
    "Hot Tank Material",
    "Power Source",
    "Material",
    "Usage/Application",
    "Warranty"
  ],
  "Waffle Maker": [
    
    "Type",
    "Voltage",
    "Power",
    "Size",
    "Material",
    "Body Material",
    "Power Consumption (KW)",
    "Automation Grade",
    "Warranty",
    "Product Dimensions"
  ],
  "Pizza Oven": [
   
    "Type of Pizza Oven",
    "Size",
    "Power",
    "Voltage",
    "For Baking",
    "Material",
    "Automation Grade",
    "Power Consumption (KW)",
    "Colour / Color",
    "Warranty",
    "Body Material"
  ],
  "Popcorn Machine": [
   
    "Snacks Type",
    "Capacity (500 grams/batch)",
    "Power",
    "Voltage",
    "Material",
    "Body Material",
    "Power Consumption (KW)",
    "Colour / Color",
    "Automation Grade",
    "Usage/Application",
    "Warranty"
  ],
  "Sweet Corn Machine": [
    
    "Capacity (Kg/Hr)",
    "Power",
    "Voltage",
    "Material",
    "Power Consumption (KW)",
    "Usage/Application",
    "Body Material",
    "Warranty",
    "Country of Origin"
  ],
  "Stainless Steel Deep Fryer": [
    
    "Capacity",
    "Voltage",
    "Power",
    "Material",
    "Body Material",
    "Power Consumption (KW)",
    "Automation Grade",
    "Surface Treatment",
    "Operation",
    "Usage/Application",
    "Country of Origin"
  ]
};


  productForm: FormGroup;
  selectedSpecs: string[] = [];
  imageFile: File | null = null;
  imagePreviewUrl: string | null = null;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      price: [''],
      specs: this.fb.group({}),
      image: ['']
    });
  }

  ngOnInit(): void {}

  onCategoryChange(event: Event) {
  const selectElement = event.target as HTMLSelectElement;
  const selectedCategory = selectElement.value;
  this.selectedSpecs = this.dynamicFields[selectedCategory] || [];

  const specsGroup: { [key: string]: FormControl } = {};
  this.selectedSpecs.forEach((field) => {
    specsGroup[field] = new FormControl('', Validators.required);
  });

  this.productForm.setControl('specs', this.fb.group(specsGroup));
}


  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
      this.imagePreviewUrl = URL.createObjectURL(file);
    }
  }

  onSubmit() {
  if (!this.productForm.valid || !this.imageFile) {
    alert('Fill all required fields and upload an image.');
    return;
  }

  // Prepare the data
  const formData = new FormData();
  formData.append('name', this.productForm.get('name')?.value);
  formData.append('category', this.productForm.get('category')?.value);
  formData.append('price', this.productForm.get('price')?.value || '');
  formData.append('image', this.imageFile);

  const specs = this.productForm.get('specs')?.value;
  formData.append('specs', JSON.stringify(specs));

  // Instead of sending to the backend, print to console:
  console.log('Form Submission Data:');
  console.log('Name:', this.productForm.get('name')?.value);
  console.log('Category:', this.productForm.get('category')?.value);
  console.log('Price:', this.productForm.get('price')?.value);
  console.log('Specs:', specs);
  console.log('Image File:', this.imageFile);

  alert('✅ Product data logged in console!');

  // Reset form and variables if needed
  this.productForm.reset();
  this.selectedSpecs = [];
  this.imageFile = null;
  this.imagePreviewUrl = null;
}

}
