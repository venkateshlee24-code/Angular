import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './cta.html',
  styleUrl: './cta.css',
})
export class Cta {
  onStartFreeTrial() {
    console.log('Start free trial clicked');
    // Add your trial signup logic here
  }
}
