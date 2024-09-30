import { Component } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrl: './pizza-toppings.component.css'
})
export class PizzaToppingsComponent {
  // Magic DI... Dependency Injection
  constructor(
    private pizzaSVC: PizzaService
  ) {}

  ngOnInit(): void {
    
    const pt = this.pizzaSVC.getPizzaToppingsFromTheCloud();
    console.log(pt);
  }
}
