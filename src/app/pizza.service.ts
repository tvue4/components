import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromTheCloud() {
    const toppingsFromWebService = [
      {
        name:'Olives'
        , price: 2.25
      }
      , {
        name:'Sausage'
        , price: 2.5
      }
      , {
        name:'Pepperoni'
        , price: 1.5
      }
    ];
    return toppingsFromWebService
  }
}
