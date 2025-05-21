import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../../nav-bar/nav-bar.component";
import { RouterLink } from '@angular/router';

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
  isImageVisible = true;

  ngOnInit() {
  AOS.init({ duration: 1000, once: true });

  setInterval(() => {
    this.fadeOutIn(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    });
  }, 5000); // change every 5 seconds
}


  
  fadeOutIn(changeImageCallback: () => void) {
    this.isImageVisible = false;
    setTimeout(() => {
      changeImageCallback();
      this.isImageVisible = true;
    }, 500); // matches half of CSS transition duration
  }
}
