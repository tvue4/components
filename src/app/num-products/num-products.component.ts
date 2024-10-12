import { Component } from '@angular/core';

@Component({
  selector: 'app-num-products',
  templateUrl: './num-products.component.html',
  styleUrl: './num-products.component.css'
})
export class NumProductsComponent {
  firstnumber = 2;
  secondnumber = 3;
  result = 6;
  multiply=() => this.result = this.firstnumber * this.secondnumber;

}
