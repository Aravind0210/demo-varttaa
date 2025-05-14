import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Jane D',
      role: 'CEO',
      avatar: 'https://pagedone.io/asset/uploads/1696229969.png',
      feedback: 'Fantastic service, easy to work with, and reliable support. Highly recommended!'
    },
    {
      name: 'Maria S',
      role: 'Marketing Head',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      feedback: 'They really understood our brand and delivered beyond expectations.'
    },
    {
      name: 'Alex T',
      role: 'Developer',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
      feedback: 'A smooth experience from start to finish. Will definitely use again.'
    }
  ];

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  getSliderTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }
}
