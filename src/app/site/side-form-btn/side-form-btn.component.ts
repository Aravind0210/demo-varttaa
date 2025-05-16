import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-form-btn',
  standalone: true,
imports: [CommonModule, FormsModule],
  templateUrl: './side-form-btn.component.html',
  styleUrl: './side-form-btn.component.css'
})
export class SideFormBtnComponent {
isButtonVisible = false;
  showModal = false;

  enquiry = {
    name: '',
    email: '',
    message: ''
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const hero = document.querySelector('#hero');
    if (hero) {
      const heroBottom = hero.getBoundingClientRect().bottom;
      this.isButtonVisible = heroBottom < 0;
    }
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  submitEnquiry() {
    if (!this.enquiry.name || !this.enquiry.email || !this.enquiry.message) {
      alert('Please fill out all fields.');
      return;
    }

    console.log('Form Submitted:', this.enquiry);
    this.closeModal();
    alert('Enquiry Submitted Successfully!');
    this.enquiry = { name: '', email: '', message: '' };
  }
}

