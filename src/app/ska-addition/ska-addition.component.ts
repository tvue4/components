import { Component } from '@angular/core';

@Component({
  selector: 'app-ska-addition',
  templateUrl: './ska-addition.component.html',
  styleUrls: ['./ska-addition.component.css']
})
export class SkaAdditionComponent {
  faqs = [
    { question: 'What types of pizzas do you offer?', answer: 'We offer a variety of pizzas including Margherita, Pepperoni, Veggie, and more!' },
    { question: 'Do you offer gluten-free options?', answer: 'Yes, we have gluten-free crust available for all our pizzas.' },
    { question: 'Can I customize my pizza?', answer: 'Absolutely! You can choose your toppings and sauces.' },
    { question: 'What are your delivery hours?', answer: 'We deliver from 11 AM to 11 PM every day.' },
  ];
}
