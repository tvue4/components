import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzaToppingFromTheCloud() {

    // pretend we make a web service call
  const toppingsFromWebService = [
    {
      name: 'Peperoni',
      price: 3.25
    },
    {
      name: 'oregano',
      price: 1.10
    },
    {
      name: 'Olive',
      price: 2.25
    }
  ];
  return toppingsFromWebService;
  }
}
