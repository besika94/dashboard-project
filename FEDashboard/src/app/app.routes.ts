import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        async loadComponent() {
          const m = await import('./pages/home/home.component');
          return m.HomeComponent;
        },
      },
      {
        path: 'workflow',
        async loadComponent() {
          const m = await import('./pages/workflow/workflow.component');
          return m.WorkflowComponent;
        },
      },
    ],
  },
  {
    path: 'login',
    component: AuthComponent,
  },
];
