import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../../shared/material/material-module';

@Component({
  selector: 'app-stats',
   standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
   stats = [
    { 
      value: '10,000+', 
      label: 'Employees Managed', 
      suffix: 'Every Day',
      bootstrapIcon: 'bi-people',
      materialIcon: 'groups'
    },
    { 
      value: '500+', 
      label: 'Enterprises', 
      suffix: 'Customers',
      bootstrapIcon: 'bi-building',
      materialIcon: 'business'
    },
    { 
      value: '25+', 
      label: 'Countries', 
      suffix: '',
      bootstrapIcon: 'bi-globe2',
      materialIcon: 'public'
    },
    { 
      value: '99.9%', 
      label: 'Uptime & Enterprise', 
      suffix: 'Reliability',
      bootstrapIcon: 'bi-shield-check',
      materialIcon: 'verified'
    }
  ];
}
