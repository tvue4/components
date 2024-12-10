import { Component } from '@angular/core';

@Component({
  selector: 'app-dmw-addition',
  templateUrl: './dmw-addition.component.html',
  styleUrl: './dmw-addition.component.css',
})
export class DmwAdditionComponent {
  constructor() {}

  ngOnInit(): void {}

  numberOne = 10;
  numberTwo = 20;
  total = 30;

  add = () => (this.total = this.numberOne + this.numberTwo);
}
