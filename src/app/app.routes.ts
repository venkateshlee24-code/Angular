import { Routes } from '@angular/router';
import { Layout } from './Layout/layout/layout';
import { GuestGuard } from './shared/guards/guest.guard';
import { AuthGuard } from './shared/guards/auth.guard';   // ✅ ADD THIS

export const routes: Routes = [

  /* ================= LOGIN ================= */

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./Auth/auth/login/login')
        .then(m => m.Login),
    canActivate: [GuestGuard],   // only guests allowed
    data: { headerText: 'login' }
  },

  /* ================= PROTECTED LAYOUT ================= */

  {
    path: '',
    component: Layout,
    canActivate: [AuthGuard],    
    children: [

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./Pages/dashboard/dashboard')
            .then(m => m.Dashboard),
            canActivate: [AuthGuard]
      },

      {
        path: 'attendance',
        loadComponent: () =>
          import('./Pages/attendance/attendance')
            .then(m => m.Attendance)
      },

      {
        path: 'employees',
        loadComponent: () =>
          import('./Pages/employees/employees')
            .then(m => m.Employees)
      },
      {
        path: 'company',
        loadComponent: () =>
          import('./Pages/company/company')
            .then(m => m.CompanyComponent)
      }
      ,
      {
        path: 'ap-invoices',
        loadComponent: () =>
          import('./Pages/ap-invoices/ap-invoices')
            .then(m => m.ApInvoicesComponent)
      }
      ,
      {
        path: 'admin',
        loadComponent: () =>
          import('./Admin/login-summary/login-summary')
            .then(m => m.LoginSummaryComponent)
      }

    ]
  },

  /* ================= FALLBACK ================= */

  {
    path: '**',
    redirectTo: 'login'
  }

];
