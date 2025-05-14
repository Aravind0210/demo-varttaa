import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from "./site/shared/scroll-to-top/scroll-to-top.component";
import { SendEnquiryBtnComponent } from "./site/send-enquiry-btn/send-enquiry-btn.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ScrollToTopComponent, SendEnquiryBtnComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-varatta';
  showWhatsAppButton = true;  // Always show the button

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Reset scroll position on navigation
      }
    });
  }
}
