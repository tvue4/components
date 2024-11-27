import { Component } from '@angular/core';

@Component({
  selector: 'app-fee-delivery',
  templateUrl: './fee-delivery.component.html',
  styleUrl: './fee-delivery.component.css'
})
export class FeeDeliveryComponent {
  selectedOption: string | null = null;
  deliveryAddress: string = '';
  confirmationMessage: string = '';

  selectOption(option: string) {
    this.selectedOption = option;
    this.confirmationMessage = '';
    if (option === 'Pick Up') {
      this.deliveryAddress = '';
    }
  }

  
}
