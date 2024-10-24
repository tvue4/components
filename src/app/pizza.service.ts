import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private toppingsPriceSource = new BehaviorSubject<number>(0);
  toppingsPrice$ = this.toppingsPriceSource.asObservable();

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

  updateToppingPrice(price: number) {
    this.toppingsPriceSource.next(price);
  }

  getToppingsPrice(): number {
    return this.toppingsPriceSource.getValue();
  }
}
