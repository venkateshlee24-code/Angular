import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  stats = [
    { value: '10,000+', label: 'Employees Managed', suffix: 'Every Day' },
    { value: '500+', label: 'Enterprises', suffix: 'Customers' },
    { value: '25+', label: 'Countries', suffix: '' },
    { value: '99.9%', label: 'Uptime & Enterprise', suffix: 'Reliability' }
  ];
}
