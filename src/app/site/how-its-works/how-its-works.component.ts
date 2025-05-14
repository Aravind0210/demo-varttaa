import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';
declare var AOS: any;

@Component({
  selector: 'app-how-its-works',
  templateUrl: './how-its-works.component.html',
  styleUrls: ['./how-its-works.component.css'],
})
export class HowItsWorksComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const options = {
      strings: ['How It Works', '3 Steps to Success', 'Your Machine Journey'],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    };

    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
      new Typed(typewriterEl, options);
    }

    AOS.init();
  }
}
