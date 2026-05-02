import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr/node';

@Component({
  selector: 'app-landfooter',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './landfooter.html',
  styleUrl: './landfooter.css',
})
export class Landfooter {
currentYear = new Date().getFullYear();
  newsletterEmail = '';

  onSubscribe() {
    if (this.newsletterEmail) {
      console.log('Newsletter subscription:', this.newsletterEmail);
      // Add your API call here
      alert(`Subscribed with ${this.newsletterEmail}`);
      this.newsletterEmail = '';
    }
  }
}
