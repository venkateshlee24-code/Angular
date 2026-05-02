import { Routes } from '@angular/router';
import { Layout } from './Layout/layout/layout';
import { GuestGuard } from './shared/guards/guest.guard';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  /* ================= PUBLIC LANDING (no auth) ================= */
  {
    path: '',
    loadComponent: () => import('./Pages/Landing/landing/landing').then((m) => m.Landing),
    // No canActivate – totally public
  },

  /* ================= LOGIN (guest only) ================= */
  {
    path: 'login',
    loadComponent: () => import('./Auth/auth/login/login').then((m) => m.Login),
    canActivate: [GuestGuard],
    data: { headerText: 'login' },
  },

  /* ================= PROTECTED AREA (requires auth) ================= */
  {
    path: '',
    component: Layout,
    canActivate: [AuthGuard],      // ← blocks unauthenticated users
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./Pages/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'upload',
        loadComponent: () => import('./Pages/upload/upload').then((m) => m.Upload),
      },
      {
        path: 'parser',
        loadComponent: () => import('./Pages/parser/parser').then((m) => m.Parser),
      },
      {
        path: 'attendance',
        loadComponent: () => import('./Pages/attendance/attendance').then((m) => m.Attendance),
      },
      {
        path: 'employees',
        loadComponent: () => import('./Pages/employees/employees').then((m) => m.Employees),
      },
      {
        path: 'company',
        loadComponent: () => import('./Pages/company/company').then((m) => m.CompanyComponent),
      },
      {
        path: 'ap-invoices',
        loadComponent: () => import('./Pages/ap-invoices/ap-invoices').then((m) => m.ApInvoicesComponent),
      },
      {
        path: 'admin',
        loadComponent: () => import('./Admin/login-summary/login-summary').then((m) => m.LoginSummaryComponent),
      },
    ],
  },

  /* ================= FALLBACK ================= */
  {
    path: '**',
    redirectTo: 'login',
  },
];