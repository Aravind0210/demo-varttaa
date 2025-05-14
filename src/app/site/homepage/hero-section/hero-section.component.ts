import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../../nav-bar/nav-bar.component";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  images: string[] = [
    'https://5.imimg.com/data5/SELLER/Default/2024/7/431979625/JI/OW/EJ/5413612/10-slots-waffle-machine-1-250x250.jpg',
    'https://5.imimg.com/data5/CF/ZS/QC/ANDROID-5413612/product-jpeg-250x250.jpg',
    'https://5.imimg.com/data5/SELLER/Default/2024/9/448006135/ES/EK/GR/5413612/tea-coffee-maker-250x250.jpg'
  ];
  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.nextImage();
    }, 3000);
        AOS.init({ duration: 1000, once: true });

  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  
}
