import { Component } from '@angular/core';
import { PlaceholderComponent } from '../placeholder/placeholder.component';
import { DividerComponent } from '../../shared/divider/divider.component';

@Component({
  selector: 'app-elements-home',
  standalone: true,
  imports: [PlaceholderComponent, DividerComponent],
  templateUrl: './elements-home.component.html',
  styleUrl: './elements-home.component.css',
})
export class ElementsHomeComponent {}
