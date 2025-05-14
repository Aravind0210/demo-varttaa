import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-we-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-we-work.component.html',
  styleUrls: ['./how-we-work.component.css']
})
export class HowWeWorkComponent {
  currentIndex = 0;
  touchStartX = 0;
  touchEndX = 0;

  steps = [
    {
      label: '1st Step',
      title: 'Get In Touch',
      icon: '📞',
      image: 'https://cdn-icons-png.flaticon.com/512/2950/2950710.png',
      description: 'Contact Varttaa Overseas to discuss your needs related to Machines, CNC Machines, and Drilling Machines.'
    },
    {
      label: '2nd Step',
      title: 'Product Verification',
      icon: '🔍',
      image: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
      description: 'We verify the availability and quality of the machines for export or import from Salem, Tamil Nadu, India.'
    },
    {
      label: '3rd Step',
      title: 'Documentation & Compliance',
      icon: '📝',
      image: 'https://cdn-icons-png.flaticon.com/512/942/942748.png',
      description: 'Handle all necessary export/import documentation and ensure compliance with international trade regulations.'
    },
    {
      label: '4th Step',
      title: 'Shipping & Delivery',
      icon: '🚚',
      image: 'https://cdn-icons-png.flaticon.com/512/679/679922.png',
      description: 'We arrange secure packaging, timely shipping, and delivery to your destination worldwide.'
    }
  ];

  ngOnInit() {
    setInterval(() => this.nextSlide(), 4000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.steps.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.steps.length) % this.steps.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    const delta = this.touchEndX - this.touchStartX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? this.prevSlide() : this.nextSlide();
    }
  }
}
