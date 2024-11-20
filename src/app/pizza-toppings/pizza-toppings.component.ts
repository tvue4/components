import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrl: './pizza-toppings.component.css'
})
export class PizzaToppingsComponent implements OnInit {
  //Magic DI... Dependency injection
  constructor (
    private pizz5vc: PizzaService
  ) {}

  ngOnInit(): void {
    const pt = this.pizz5vc.getPizzaToppingsFromTheCloud();
    console.log(pt);
  }
  
}
