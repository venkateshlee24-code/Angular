import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../shared/material/material-module';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [FormsModule,CommonModule,MaterialModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  mobileMenuOpen = false;
  openDropdowns: { [key: string]: boolean } = {
    product: false,
    solutions: false,
    resources: false
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  onRequestDemo() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleMobileDropdown(dropdown: string) {
    this.openDropdowns[dropdown] = !this.openDropdowns[dropdown];
  }
}
