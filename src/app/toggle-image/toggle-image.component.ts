import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

interface ToppingsImage{
  name: string;
  price: number;
  image: string;
  checked: boolean;
}

@Component({
  selector: 'app-toggle-image',
  templateUrl: './toggle-image.component.html',
  styleUrl: './toggle-image.component.css'
})
export class ToggleImageComponent implements OnInit{
  constructor(
    private pizzaSvc: PizzaService
  ) { }

  ToppingsImage: ToppingsImage[] = [];

  ngOnInit(): void {

    const pt = this.pizzaSvc.getPizzaToppingsFromTheCloud();
    console.log(pt);

    this.ToppingsImage = pt.map(
      x => ({
        ...x
        , checked: false
      })
    );

    console.log(this.ToppingsImage);
  }

}
