import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrl: './temperature-converter.component.css'
})
export class TemperatureConverterComponent {
  temperature: number | null = null;
  conversionType: 'fahrenheit' | 'celsius' = 'fahrenheit';
  convertedTemperature: number | null = null;

  convertTemperature(): void {
    if (this.temperature !== null) {
      if (this.conversionType === 'fahrenheit') {
        this.convertedTemperature = parseFloat(((this.temperature - 32) * 5/9).toFixed(2));
      } else if (this.conversionType === 'celsius') {
        this.convertedTemperature = parseFloat(((this.temperature * 9/5) + 32).toFixed(2));
      }
    }
  }
}
