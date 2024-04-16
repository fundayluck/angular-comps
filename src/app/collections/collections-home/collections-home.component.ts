import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-collections-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DividerComponent,
    TableComponent,
    TabsComponent,
  ],
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css',
})
export class CollectionsHomeComponent {
  data = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill', age: 28, job: 'Software Engineer', employed: false },
    { name: 'Bill', age: 23, job: 'Administration', employed: false },
    { name: 'Bob', age: 25, job: 'Data Analyst', employed: true },
  ];

  headers: { key: string; label: string }[] = [
    { key: 'employed', label: 'Employed' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
