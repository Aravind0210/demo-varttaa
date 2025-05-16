import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, RouterLink, NavBarComponent, FooterComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  // Sugarcane Juicer Machines
  sugarcaneProducts = [
    {
      id: 1,
      name: 'Stainless Steel Sugarcane Juicer Machine',
      image: 'assets/img1.jpg',
    },
    {
      id: 2,
      name: 'Electric Sugarcane Juicer Machine',
      image: 'assets/img2.jpg',
    },
    {
      id: 3,
      name: 'Heavy-Duty Sugarcane Juicer Machine – 1Hp',
      image: 'assets/img3.jpg',
    },
    {
      id: 4,
      name: 'Heavy-Duty Sugarcane Juicer Machine – 1.5Hp',
      image: 'assets/img4.jpg',
    },
    {
      id: 5,
      name: 'Heavy-Duty Sugarcane Juicer Machine – 2Hp',
      image: 'assets/img5.jpg',
    },
  ];

  // Softy Ice Cream Machines
  softyMachines = [
    {
      id: 6,
      name: 'Single Nozzle Softy Ice Cream Machine',
      image: 'assets/softy1.jpg',
    },
    {
      id: 7,
      name: 'Double Nozzle Softy Ice Cream Machine',
      image: 'assets/softy2.jpg',
    },
    {
      id: 8,
      name: 'Triple Nozzle Softy Ice Cream Machine',
      image: 'assets/softy3.jpg',
    },
  ];

  // Waffle Machines
  waffleProducts = [
    {
      id: 9,
      name: 'Belgian Waffle Maker – Electric',
      image: 'assets/waffle1.jpg',
    },
    {
      id: 10,
      name: 'Rotating Waffle Machine – Commercial',
      image: 'assets/waffle2.jpg',
    },
    {
      id: 11,
      name: 'Mini Waffle Cone Maker',
      image: 'assets/waffle3.jpg',
    },
  ];

}
