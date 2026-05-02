import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks {
 steps = [
    {
      step: '01',
      title: 'Configure Your Organization',
      description: 'Set up your structure, roles, policies, and workflows.',
      icon: 'bi-gear',
      iconMaterial: 'settings'  // optional for Material icon
    },
    {
      step: '02',
      title: 'Automate HR Processes',
      description: 'Manage interactions, payroll, leaves, performance, and more automatically.',
      icon: 'bi-robot',
      iconMaterial: 'smart_toy'
    },
    {
      step: '03',
      title: 'Gain Insights & Grow',
      description: 'Leverage analytics and reports to drive better people decisions.',
      icon: 'bi-graph-up-arrow',
      iconMaterial: 'insights'
    }
  ];
}
