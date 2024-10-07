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

    this.ToppingsImage = pt.map(
      x => ({
        ...x
        , checked: false
      })
    );

    // const imageURL = '../assets/img/pizzaOlives.png'
    console.log(this.ToppingsImage);
  }


  // showImage = () => {
  //   const image = document.getElementById("toppImg") as HTMLImageElement;
  //   if (image) {
  //     image.src = "/src/assets/img/pizzaOlives.png";
  //   }  }
  

}
