import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../shared/material/material-module';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, Header, Sidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
isSidebarOpen = false;       // mobile: sidebar visible/hidden
  isSidebarCollapsed = false;  // desktop: mini (true) or full (false)
  isDesktop = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isDesktop = window.innerWidth >= 768;
    if (this.isDesktop) {
      // On desktop, sidebar is always "present" – open means expanded
      this.isSidebarOpen = true;
    } else {
      // On mobile, start with hidden sidebar and reset collapsed state
      this.isSidebarOpen = false;
      this.isSidebarCollapsed = false;
    }
  }

  toggleSidebar() {
    if (this.isDesktop) {
      // Toggle between expanded (w-64) and mini (w-20)
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    } else {
      // Toggle off‑canvas sidebar visibility
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }

  closeSidebar() {
    if (!this.isDesktop) {
      this.isSidebarOpen = false;
    }
  }
}
