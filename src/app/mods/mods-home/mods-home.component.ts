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

  items = [
    {
      title: 'Why is the sky blue?',
      content:
        'The sky is blue because of Rayleigh scattering, which is the dispersion of sunlight by atmospheric molecules and particles.',
    },
    {
      title: 'How do birds fly?',
      content:
        'Birds fly by flapping their wings, which creates lift and propels them forward. Their unique wing shape and muscle structure enable them to achieve flight.',
    },
    {
      title: 'What causes earthquakes?',
      content:
        "Earthquakes are caused by the sudden release of energy in the Earth's crust, usually as a result of tectonic plate movements along faults.",
    },
    {
      title: 'Why do leaves change color in the fall?',
      content:
        'Leaves change color in the fall due to the breakdown of chlorophyll, which reveals other pigments such as carotenoids and anthocyanins.',
    },
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
