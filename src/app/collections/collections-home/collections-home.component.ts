import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { DividerComponent } from '../../shared/divider/divider.component';

@Component({
  selector: 'app-collections-home',
  standalone: true,
  imports: [TableComponent, DividerComponent],
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css',
})
export class CollectionsHomeComponent {}
