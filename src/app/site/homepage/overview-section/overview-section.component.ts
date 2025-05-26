import {  Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule ,NgForm } from '@angular/forms';

@Component({
  selector: 'app-overview-section',
  standalone: true, 
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './overview-section.component.html',
  styleUrls: ['./overview-section.component.css']
})
export class OverviewSectionComponent implements AfterViewInit {
  @ViewChild('carousel') carouselRef!: ElementRef;
  isPopupVisible = false;
  requirement = '';

  isModalOpen = false;
  modalTitle = '';
  modalImage = '';
  customerName = '';
  customerPhone = '';
  showToast = false;


  products = [
    {
      title: 'Preparation Equipments',
      image: 'https://www.srisakthikitchen.com/images/dough-kneader.webp',
      border: 'border-green-100'
    },
    {
      title: 'Electric Sugarcane Juice Machineries',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/431954352/YG/BV/AZ/5413612/sugarcane-juicer-1-250x250.jpg',
      border: 'border-red-100'
    },
    {
      title: '10 Slots Waffle Machine Equipment',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/431979625/JI/OW/EJ/5413612/10-slots-waffle-machine-1-250x250.jpg',
      border: 'border-green-100'
    },
    {
      title: 'Steam Filter Coffee Systems',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/448006135/ES/EK/GR/5413612/tea-coffee-maker-250x250.jpg',
      border: 'border-yellow-100'
    },
    {
      title: 'Double Deck Pizza Oven',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/431988479/JO/SD/SI/5413612/double-deck-pizza-oven-250x250.jpg',
      border: 'border-blue-100'
    }
  ];

  ngAfterViewInit(): void {
    setInterval(() => this.scrollRight(), 3000);
  }

  scrollLeft() {
    const container = this.carouselRef.nativeElement;
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    const container = this.carouselRef.nativeElement;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
      // Loop back to start
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }



  Our_products = [
    {
      name: 'Sugarcane Juice Machine',
      image: 'https://5.imimg.com/data5/CF/ZS/QC/ANDROID-5413612/product-jpeg-500x500.jpg',
    },
    {
      name: 'Waffle Maker Machine',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/11/362580297/HZ/MV/TO/31444973/waffle-cone-maker-250x250.jpeg',
    },
    {
      name: 'Pizza Oven',
      image: 'https://5.imimg.com/data5/ANDROID/Default/2021/7/VR/PW/LK/31444973/product-jpeg-500x500.jpg',
    },
    {
      name: 'Ice Cream Machine',
      image: 'https://5.imimg.com/data5/ANDROID/Default/2024/6/423994212/NJ/FZ/OD/5413612/product-jpeg-500x500.jpg',
    },
    {
      name: 'Popcorn Machine',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/431932335/PZ/KP/WC/5413612/popcorn-making-machine-500x500.png',
    },
    {
      name: 'Bakery Machines',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/5/420956970/ZL/KO/RH/31444973/electric-2-deck-4-tray-oven-250x250.png',
    },
  ];




sendToWhatsApp(): void {
  if (!this.customerName || !this.customerPhone) {
    alert('Please enter both name and phone number.');
    return;
  }

  this.showToast = true;

  setTimeout(() => {
    const phone = '919840143117'; // Replace with your number
    const message = `Hello, I am interested in *${this.modalTitle}*.\n\nName: ${this.customerName}\nPhone: ${this.customerPhone}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    this.showToast = false;
  }, 1500); // delay WhatsApp redirect to show toast
}
  

openModal(title: string, image: string): void {
  this.modalTitle = title;
  this.modalImage = image;
  this.isModalOpen = true;
  this.showToast = false;
}

  closeModal(): void {
  this.isModalOpen = false;
  this.customerName = '';
  this.customerPhone = '';
  this.showToast = false;
}





  toggleQuotePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }

  onSubmit(form: NgForm) {
  if (form.invalid) {
    form.controls['requirement']?.markAsTouched(); // marks textarea as touched to show error
    return;
  }

  alert('Thank you! Your request has been submitted.');
  this.toggleQuotePopup();
  form.resetForm();
}

}