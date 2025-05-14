import {  Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview-section',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './overview-section.component.html',
  styleUrls: ['./overview-section.component.css']
})
export class OverviewSectionComponent implements AfterViewInit {
  @ViewChild('carousel') carouselRef!: ElementRef;

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
}