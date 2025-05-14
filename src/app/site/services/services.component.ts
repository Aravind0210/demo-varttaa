import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";
import { HowItsWorksComponent } from "../how-its-works/how-its-works.component";

@Component({
  selector: 'app-services',
  imports: [NavBarComponent, FooterComponent, HowItsWorksComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
