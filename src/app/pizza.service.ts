import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor() {}

  getPizzaToppingsFromTheCloud() {
    // Pretend we make a web service call here.

    const toppingsFromWebService = [
      {
        name: 'Olives',
        price: 2.25,
      },
      {
        name: 'Pepperoni',
        price: 1.5,
      },
      {
        name: 'Sausage',
        price: 1.75,
      },
    ];

    return toppingsFromWebService;

    // this is a function that returns an array of objects with two properties
    // call it from the pizza-toppings.component.ts
  }
}
