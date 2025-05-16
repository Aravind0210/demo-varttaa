import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent {
  @Input() product: any;
  @Output() close = new EventEmitter<void>();

  selectedQuantity: number = 1;
  selectedUnit: string = '';
  mobileNumber: string = '';
  additionalDetail: string = '';

  submitForm() {
    // You can send form data to API here
    alert('Form submitted successfully!');
    this.close.emit(); // Close the modal
  }

  closeForm() {
    this.close.emit();
  }
}
