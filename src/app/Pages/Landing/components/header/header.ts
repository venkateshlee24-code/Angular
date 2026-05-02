import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../shared/material/material-module';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [FormsModule,MaterialModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 onRequestDemo() {
    // Smooth scroll to CTA section
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  }
}
