import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-mods-home',
  standalone: true,
  imports: [ModalComponent, DividerComponent, AccordionComponent, CommonModule],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css',
})
export class ModsHomeComponent {
  modalOpen = false;
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
