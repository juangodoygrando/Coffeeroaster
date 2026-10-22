import { Component, output } from '@angular/core';

@Component({
  selector: 'coffeeroasters-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  closeModalEvent = output<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
