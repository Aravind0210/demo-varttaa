import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from "./site/shared/scroll-to-top/scroll-to-top.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ScrollToTopComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-varatta';
  showWhatsAppButton = true;  // Always show the button
  isadminRoute = false;  // Default value

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Reset scroll position on navigation
        this.isadminRoute = event.urlAfterRedirects.startsWith('/admin');
        // Hide WhatsApp button on admin routes
        this.showWhatsAppButton = !this.isadminRoute;
      }
    });
  }
}
