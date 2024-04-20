import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent {
  @Input() items: { image: string; title: string; description: string }[] = [];
}
