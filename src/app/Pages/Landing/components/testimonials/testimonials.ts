import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
 testimonials = [
    {
      quote: 'PeopleFlow has transformed the way we operate. Our HR processes are now faster, smarter, and completely paperless.',
      name: 'Sarah Thompson',
      role: 'CHRO',
      company: 'Acme Corporation',
      avatar: 'ST'
    },
    {
      quote: 'The automation and insights we get from PeopleFlow help us focus more on our people and less on manual tasks.',
      name: 'Michael Brown',
      role: 'HR Director',
      company: 'Globex Inc.',
      avatar: 'MB'
    },
    {
      quote: 'A reliable, scalable and secure HRMS solution that grows with our organization. Highly recommended!',
      name: 'Priya Sharma',
      role: 'Head of People',
      company: 'Initech Solutions',
      avatar: 'PS'
    }
  ];
}
