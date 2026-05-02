import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
    standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
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
