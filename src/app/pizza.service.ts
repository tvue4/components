import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingsFromtheCloud() {
    //pretend we make a web service call from here.
    const toppingsFromWebService = [
      {
        name: 'Olives'
        , price: 2.25
      }
      , {
        name: 'Pepperoni'
        , price: 1.50
      }
      ,
      {
        name: 'Sausage'
        , price: 1.75
      }
    ];

    return toppingsFromWebService;
  }
}
