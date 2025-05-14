import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
declare const gsap: any;
declare const ScrollTrigger: any;

@Component({
  selector: 'app-overview-section',
  standalone: true, 
  templateUrl: './overview-section.component.html',
  styleUrls: ['./overview-section.component.css']
})
export class OverviewSectionComponent implements AfterViewInit {
  @ViewChild('overviewContainer') overviewContainer!: ElementRef;

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(this.overviewContainer.nativeElement.querySelectorAll('h2, p, .grid > div'), {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.overviewContainer.nativeElement,
        start: 'top 80%',
      }
    });
  }

  
}
