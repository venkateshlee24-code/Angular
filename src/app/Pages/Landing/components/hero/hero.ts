import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
 // Feature tags list
  features = [
    'Employee Experience',
    'HR Process Automation',
    'Workforce Analytics',
    'Compliance & Security',
    'Performance & Growth'
  ];

  onRequestDemo() {
    // Scroll to CTA or handle demo request
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  }

  onExploreFeatures() {
    // Scroll to features section
    document.querySelector('.features-section')?.scrollIntoView({ behavior: 'smooth' });
  }
}
