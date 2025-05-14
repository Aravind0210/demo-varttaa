import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log(`${text} copied!`);
    });
  }
}
