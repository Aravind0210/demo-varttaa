import { Component } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { OverviewSectionComponent } from "./overview-section/overview-section.component";
import { FooterComponent } from "../footer/footer.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { HowWeWorkComponent } from "./how-we-work/how-we-work.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeroSectionComponent, OverviewSectionComponent, FooterComponent, HowWeWorkComponent, TestimonialsComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'] // ✅ Fixed here
})
export class HomepageComponent {}
