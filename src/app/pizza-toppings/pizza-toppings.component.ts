import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrl: './pizza-toppings.component.css',
})
export class PizzaToppingsComponent implements OnInit {
  // Magic DI (Dependency Injection)
  constructor(private pizzaSvc: PizzaService) {}

  availablePizzaToppings: PizzaToppingDisplay[] = [];

  // gets called when component is created and ready to initialize it
  ngOnInit(): void {
    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud();

    // logging out pizza toppings
    console.log(pt);

    // mapping
    this.availablePizzaToppings = pt.map((x) => ({
      // spread in existing x properties
      ...x,
      // adding in checked property
      checked: false,
    }));

    // loading out toppings with added checked property
    console.log(this.availablePizzaToppings);
  }

  totalPrice = 0;

  // filter and reduce
  calculateTotal = () => {
    this.totalPrice = this.availablePizzaToppings
      // filter down to just checked boxes
      .filter((x) => x.checked)
      // reduce them down to just their price, add
      .reduce((acc, x) => acc + x.price, 0);
  };
}
