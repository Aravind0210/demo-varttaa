import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { NavBarComponent } from "../../nav-bar/nav-bar.component";

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  imports: [NavBarComponent],
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('heroContent', { static: false }) heroContent!: ElementRef;
  @ViewChild('typingText', { static: false }) typingText!: ElementRef;

  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      loop: true, // Enable infinite looping of slides
      effect: 'fade', // Use fade effect for smooth transition
      autoplay: {
        delay: 3000, // Change image every 3 seconds
      },
      speed: 1000, // Duration of the transition in ms (1 second)
      fadeEffect: {
        crossFade: true, // Crossfade effect between slides
      }
    });

    gsap.from(this.heroContent.nativeElement, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out'
    });

    gsap.to(this.typingText.nativeElement, {
      duration: 3,
      text: 'Ice Cream Machines, Softy Makers & Sugarcane Juice Machines.',
      ease: 'power1.inOut',
      repeat: -1,
      repeatDelay: 2,
      yoyo: true
    });
  }
}
