import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-about-page',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  standalone: true
})
export class AboutPageComponent implements OnInit {

  ngOnInit() {
    AOS.init();
    this.startCounters();
  }

  startCounters() {
    // Wait until AOS has finished initializing
    setTimeout(() => {
      const counters = document.querySelectorAll('.counter-value');

      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const duration = 2000;
        const step = target / (duration / 16); 
        let current = 0;

        // Function to format numbers with commas
        const formatNumber = (num: number): string => {
          return num.toLocaleString(); 
        };

        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = formatNumber(Math.round(current));
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = formatNumber(target);
          }
        };

        
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              updateCounter();
              observer.disconnect(); // Stop observing after the animation starts
            }
          });
        }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

        observer.observe(counter);
      });
    }, 0);
  }
}
