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
  styleUrl: './pizza-toppings.component.css'
})
export class PizzaToppingsComponent implements OnInit {


  // Magic Dependancy Injection
  constructor(private pizzaSvc: PizzaService) {}

  availablePizzaToppings: PizzaToppingDisplay[] = [];

  ngOnInit(): void {
    const toppings = this.pizzaSvc.getPizzaToppingsFromTheCloud()
    console.log(toppings)
    
    this.availablePizzaToppings = toppings.map(
      toppingDisplay => ({
        ...toppingDisplay,
        checked: false
      })
    );

    console.log(this.availablePizzaToppings)
  }

  totalPrice = 0

  calculateTotal = () => {
    this.totalPrice = this.availablePizzaToppings
      .filter(topping => topping.checked)
      .reduce((accumulator, topping) => accumulator + topping.price, 0)
  }
}
