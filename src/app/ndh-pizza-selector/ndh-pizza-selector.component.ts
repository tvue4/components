import { Component } from '@angular/core';

interface PizzaSize {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-ndh-pizza-selector',
  templateUrl: './ndh-pizza-selector.component.html',
  styleUrl: './ndh-pizza-selector.component.css'
})
export class NdhPizzaSelectorComponent {

  pizzaSizes: PizzaSize[] = [
    { name: 'Thin', price: 5.00, checked: false }
    , { name: 'Regular', price: 5.00, checked: false }
    , { name: 'Stuffed', price: 5.00, checked: false }
  ];
}
