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
        image: "/src/assets/img/pizzaOlives.png"

      }
      , {
        name: 'Pepperoni'
        , price: 1.50
        , image:"/src/assets/img/pizzaOlives.png"
      }
      , {
        name: 'Sausage'
        , price: 1.75
        , image: "/src/assets/img/pizzaOlives.png"

      }
    ];

    return toppingsFromWebService;
  }
}
