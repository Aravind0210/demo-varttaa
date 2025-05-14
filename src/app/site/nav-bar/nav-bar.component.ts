import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showMobileMenu = false;
  showProductMenu = false;
  showSmallNavbar = false;

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  toggleProductMenu() {
    this.showProductMenu = !this.showProductMenu;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    this.showSmallNavbar = scrollY > 150;
  }
}
