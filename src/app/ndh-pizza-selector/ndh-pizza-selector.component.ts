import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

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
export class NdhPizzaSelectorComponent implements OnInit {

  sizePrice: number = 5;
  crustPrice: number = 2;
  toppingsPrice: number = 0;
  totalPrice: number = 0;
  errorAlert: string = '';

  constructor(private pizzaSvc: PizzaService) {}

  ngOnInit(): void {
    this.pizzaSvc.toppingsPrice$.subscribe(price=> {
      this.toppingsPrice = price;
      this.pizzaTotalPrice;
      this.checkToppings();
    })

  }

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

  get pizzaTotalPrice() {
    const toppingsPrice = this.pizzaSvc.getToppingsPrice();
    return this.sizePrice + this.crustPrice + toppingsPrice;
  }

  checkToppings() {
    const toppingsPrice = this.pizzaSvc.getToppingsPrice();
    if (toppingsPrice === 0) {
      this.errorAlert = "No toppings selected! Don't forget to add some!";
    } else {
      this.errorAlert = ' ';
    }
  }
}
