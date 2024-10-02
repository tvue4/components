import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface pizzaToppingsDisplay {
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


  //Magic DI.. Dependency Injection..
  constructor(
    private pizzaService: PizzaService
  ) { }

  availableToppings: pizzaToppingsDisplay[] = [
    
  ]
  ngOnInit(): void {
      
    const pt = this.pizzaService.getPizzaToppingFromTheCloud();
    console.log(pt);

    this.availableToppings = pt.map(
      x => ({
        ...x,
        checked: false
      })
    );

    console.log(this.availableToppings);
  }

  totalPrice = 0;
  
  calculateTotal = () => {
    this.totalPrice = this.availableToppings
    .filter(x => x.checked)
    .reduce((acc, x) => acc + x.price, 0);
  }
}
