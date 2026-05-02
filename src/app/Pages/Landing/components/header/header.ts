import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 onRequestDemo() {
    // Smooth scroll to CTA section
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  }
}
