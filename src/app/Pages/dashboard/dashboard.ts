import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material-module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  metrics = [
    {
      label: 'Active Employees',
      value: '1,248',
      change: '+12 this week',
      icon: 'groups',
      trend: 'up',
    },
    {
      label: 'Open Tasks',
      value: '58',
      change: '−3 vs last sprint',
      icon: 'assignment',
      trend: 'down',
    },
    {
      label: 'Pending Invoices',
      value: '324',
      change: '+46 today',
      icon: 'receipt',
      trend: 'up',
    },
    {
      label: 'Production Uptime',
      value: '99.2%',
      change: '+0.4% SLA',
      icon: 'build',
      trend: 'up',
    },
  ];

  activities = [
    {
      title: 'Payroll ready for approval',
      detail: 'Finance uploaded February salaries for 1,248 users.',
      team: 'Finance',
      time: 'Just now',
    },
    {
      title: 'Attendance anomalies detected',
      detail: '8 late punches logged in Chennai hub.',
      team: 'HR',
      time: '12 min ago',
    },
    {
      title: 'Inventory replenishment',
      detail: 'Raw material levels dropped to 34% safety stock.',
      team: 'Operations',
      time: '24 min ago',
    },
    {
      title: 'ERP release branch merged',
      detail: 'Quality gates passed and packages are ready.',
      team: 'Engineering',
      time: '1 hr ago',
    },
  ];

  quickActions = [
    { icon: 'assignment_turned_in', label: 'Approve Timesheets' },
    { icon: 'inventory_2', label: 'Manage Inventory' },
    { icon: 'payments', label: 'Send Payroll' },
    { icon: 'support_agent', label: 'Raise Support Case' },
  ];

  attendance = [
    { label: 'On-site today', value: '92%', detail: '7,432 present' },
    { label: 'Remote', value: '18%', detail: '1,448 remote' },
    { label: 'On-leave', value: '7%', detail: '520 people' },
  ];

  projects = [
    {
      name: 'Enterprise integration',
      manager: 'Priya Raj',
      progress: 78,
      status: 'On track',
    },
    {
      name: 'Customer rollout',
      manager: 'Luis Alvarez',
      progress: 64,
      status: 'Stabilizing',
    },
    {
      name: 'Compliance audit',
      manager: 'Divya Menon',
      progress: 91,
      status: 'Ready for review',
    },
  ];

  notifications = [
    {
      title: 'Inventory alert',
      message: 'Steel coils at 32% safety stock.',
      icon: 'warning',
      type: 'warning',
    },
    {
      title: 'Budget outlook',
      message: 'Feb spending pacing 6% below forecast.',
      icon: 'insights',
      type: 'info',
    },
    {
      title: 'Quality review',
      message: 'Production cell B confirmed 0 defects.',
      icon: 'check_circle',
      type: 'success',
    },
  ];
}
