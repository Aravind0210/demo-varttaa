import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormArray,
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
  specsList = [
    { key: 'operationMode', label: 'Operation Mode' },
    { key: 'material', label: 'Material' },
    { key: 'automationGrade', label: 'Automation Grade' },
    { key: 'powerSource', label: 'Power Source' },
    { key: 'usage', label: 'Usage/Application' },
    { key: 'countryOfOrigin', label: 'Country of Origin' },
    { key: 'voltage', label: 'Voltage' },
    { key: 'frequency', label: 'Frequency' },
    { key: 'warranty', label: 'Warranty' },
    // Add more specs as needed
  ];

  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    const specsControls = this.specsList.reduce((acc, spec) => {
      acc[spec.key] = [''];
      return acc;
    }, {} as { [key: string]: any });

    this.productForm = this.fb.group({
      name: [''],
      brand: [''],
      productType: [''],
      ...specsControls,
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    if (this.productForm.valid) {
      const { name, brand, productType, ...specs } = this.productForm.value;

      const productData = {
        name,
        brand,
        productType,
        specs,
      };

      console.log('Submitted product:', productData);
      alert('Product added! Check console for data.');
      this.productForm.reset();
    }
  }
}