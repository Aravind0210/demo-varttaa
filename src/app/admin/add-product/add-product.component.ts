import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'], // fix here: styleUrls (plural)
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  dynamicFields: string[] = [];
  imagePreview: string | ArrayBuffer | null = null;

  categorySpecs: { [key: string]: string[] } = {
    'Ice Cream Machine': ['Capacity', 'Voltage', 'Type'],
    'Pizza Oven': ['Chambers', 'Power', 'Dimensions'],
    'Hot Dog Roller': ['Rollers', 'Power', 'Material'],
  };

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      image: [null],
      specs: this.fb.group({}), // initially empty group
    });

    // Subscribe to category changes to update specs dynamically
    this.productForm.get('category')?.valueChanges.subscribe((category) => {
      this.updateSpecsForm(category);
    });
  }

  get specsGroup(): FormGroup {
    return this.productForm.get('specs') as FormGroup;
  }

  get categoryList(): string[] {
    return Object.keys(this.categorySpecs);
  }

  updateSpecsForm(category: string): void {
    this.dynamicFields = this.categorySpecs[category] || [];

    const specsGroup: { [key: string]: FormControl } = {};
    this.dynamicFields.forEach((field) => {
      specsGroup[field] = new FormControl('', Validators.required);
    });

    // Replace the 'specs' form group with new controls dynamically
    this.productForm.setControl('specs', this.fb.group(specsGroup));
  }

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.productForm.patchValue({ image: file });
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('name', this.productForm.value.name);
    formData.append('price', this.productForm.value.price);
    formData.append('category', this.productForm.value.category);
    formData.append('specs', JSON.stringify(this.productForm.value.specs));
    if (this.productForm.value.image) {
      formData.append('image', this.productForm.value.image);
    }

    this.productService.addProduct(formData).subscribe({
      next: () => {
        alert('Product added successfully!');
        this.productForm.reset();
        this.imagePreview = null;
      },
      error: () => {
        alert('Failed to add product.');
      },
    });
  }
}
