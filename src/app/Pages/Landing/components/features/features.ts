import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../shared/material/material-module';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-features',
   standalone: true,
  imports: [CommonModule,FormsModule,MaterialModule],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
 features = [
    {
      icon: 'bi-people',
      title: 'Employee Management',
      description: 'Centralize employee data, organizational structure, documents, and more.',
      link: '#'
    },
    {
      icon: 'bi-calendar-check',
      title: 'Attendance & Leave',
      description: 'Track attendance in real-time and manage leaves with flexible policies.',
      link: '#'
    },
    {
      icon: 'bi-cash-stack',
      title: 'Payroll Automation',
      description: 'Automate payroll, tax calculations, reimbursements and payables.',
      link: '#'
    },
    {
      icon: 'bi-bar-chart-steps',
      title: 'Performance Management',
      description: 'Set goals, conduct reviews, and build a culture of continuous feedback.',
      link: '#'
    },
    {
      icon: 'bi-mortarboard',
      title: 'Talent Management',
      description: 'Recruit, onboard, train and develop top talent seamlessly.',
      link: '#'
    },
    {
      icon: 'bi-graph-up',
      title: 'Analytics & Reports',
      description: 'Make smarter decisions with powerful reports and real-time insights.',
      link: '#'
    }
  ];
}
