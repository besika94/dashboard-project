import { Component, signal } from '@angular/core';
import { MenuItem } from './menu-item.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [RouterModule],
})
export class DashboardComponent {
  menu = signal<MenuItem[]>([
    { lable: 'Home', icon: 'bi bi-house', route: 'home' },
    { lable: 'Workflow', icon: 'bi bi-hdd-stack', route: '/workflow' },
    { lable: 'Statistics', icon: 'bi bi-bar-chart-line', route: '/statistics' },
    { lable: 'Calendar', icon: 'bi bi-calendar3', route: '/calendar' },
    { lable: 'Users', icon: 'bi bi-people', route: '/users' },
    { lable: 'Settings', icon: 'bi bi-gear', route: '/settings' },
  ]);
  menuOpen = signal<boolean>(true);
}
