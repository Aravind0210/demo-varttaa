import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  copied: boolean = false;

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copied = true;
      console.log(`${text} copied!`);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    });
  }
}
