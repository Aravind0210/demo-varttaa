import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../../nav-bar/nav-bar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, NavBarComponent,RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements AfterViewInit {
  index = 0;
  totalSlides = 3;

  @ViewChild('carouselImages') imageTrack!: ElementRef;
  @ViewChild('carouselText') textTrack!: ElementRef;

  ngAfterViewInit(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.totalSlides;
      this.updateSlide();
    }, 6000);
  }

  updateSlide() {
    this.imageTrack.nativeElement.style.transform = `translateX(-${this.index * 100}%)`;
    this.textTrack.nativeElement.style.transform = `translateX(-${this.index * 100}%)`;
  }

  goToSlide(i: number) {
    this.index = i;
    this.updateSlide();
  }
}
