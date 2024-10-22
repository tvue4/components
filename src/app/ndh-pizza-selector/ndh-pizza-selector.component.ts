import { Component } from '@angular/core';

interface PizzaSize {
  name: string;
  price: number;
}

interface PizzaCrust {
  name: string;
  price: number;
}

@Component({
  selector: 'app-ndh-pizza-selector',
  templateUrl: './ndh-pizza-selector.component.html',
  styleUrl: './ndh-pizza-selector.component.css'
})
export class NdhPizzaSelectorComponent {

  pizzaSizes: PizzaSize[] = [
    { name: 'Small', price: 5.00 }
    , { name: 'Medium', price: 7.50 }
    , { name: 'Large', price: 10.00 }
  ];

  pizzaCrusts: PizzaCrust[] = [
    { name: 'Thin', price: 2.00 }
    , { name: 'Regular', price: 3.00 }
    , { name: 'Stuffed', price: 4.00 }
  ];

  sizePrice: number = 5;
  crustPrice: number = 2;

  get pizzaTotalPrice() {
    return this.sizePrice + this.crustPrice;
  }
}
