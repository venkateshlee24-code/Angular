import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
 constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  onRequestDemo() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onExploreFeatures() {
    if (isPlatformBrowser(this.platformId)) {
      document.querySelector('.features-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
