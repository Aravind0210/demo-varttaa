// src/app/admin/layout/admin-layout.component.ts
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-admin-layout',
  imports: [RouterModule,CommonModule],
  templateUrl:  './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
 isSidebarOpen = false;
isDesktop = false;

@HostListener('window:resize')
onResize() {
  this.updateViewport();
}

ngOnInit() {
  this.updateViewport();
}

updateViewport() {
  this.isDesktop = window.innerWidth >= 1024;
  this.isSidebarOpen = this.isDesktop;
}

toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;
}

closeSidebar() {
  if (!this.isDesktop) {
    this.isSidebarOpen = false;
  }
}

}
