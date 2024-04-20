import { Component } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';
import { DividerComponent } from '../../shared/divider/divider.component';

@Component({
  selector: 'app-views-home',
  standalone: true,
  imports: [StatisticsComponent, DividerComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css',
})
export class ViewsHomeComponent {
  stats = [
    { value: 22, label: '# of users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];
}
