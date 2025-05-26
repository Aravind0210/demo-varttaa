import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, NavBarComponent, RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements AfterViewInit {
  index = 0;
  totalSlides = 3;

  @ViewChild('carouselImages') imageTrack!: ElementRef;
  @ViewChild('carouselText') textTrack!: ElementRef;

  isPopupVisible = false;
  selectedProductName = ''; // 🆕

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

  toggleQuotePopup(productName?: string) {
    if (productName) {
      this.selectedProductName = productName;
    }
    this.isPopupVisible = !this.isPopupVisible;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const mobile = (event.target as HTMLFormElement)['mobile'].value;

    if (/^\d{10}$/.test(mobile)) {
      alert(`Quote requested for "${this.selectedProductName}"\nMobile: ${mobile}`);
      this.toggleQuotePopup(); // close popup after submit
    } else {
      alert('Please enter a valid 10-digit number.');
    }
  }
}
