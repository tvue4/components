import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrl: './pizza-toppings.component.css',
})
export class PizzaToppingsComponent implements OnInit {
  // Magic DI (Dependency Injection)
  constructor(private pizzaSvc: PizzaService) {}

  // gets called when component is created and ready to initialize it
  ngOnInit(): void {
    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud();

    console.log(pt);
  }
}
