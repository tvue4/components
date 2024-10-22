import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() {
    // Pretend we make a web service call here.
    const toppingsFromWebService = [
      {
        name: 'Olives',
        price: 2.25,
        image: "./pizzaOlives.png"

      }
      , {
        name: 'Pepperoni'
        , price: 1.50
        , image:"./pepperoniPizza.avif"
      }
      , {
        name: 'Sausage'
        , price: 1.75
        , image: "./sausagePizza.avif"

      }
    ];

    return toppingsFromWebService;
  }
}
