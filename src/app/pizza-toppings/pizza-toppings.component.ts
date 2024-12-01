import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrl: './pizza-toppings.component.css'
})
export class PizzaToppingsComponent implements OnInit {


  // Magic Dependancy Injection
  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit(): void {
    const toppings = this.pizzaSvc.getPizzaToppingsFromTheCloud()
    console.log(toppings)
  }
}
