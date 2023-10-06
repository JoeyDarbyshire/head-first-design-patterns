import { WeatherDataObserver } from './observers'
import { IWeatherDataObserver } from '../models'

export class CurrentConditionDisplay extends WeatherDataObserver implements IWeatherDisplay, IWeatherDataObserver {
  private temperature: number = 0
  private humidity: number = 0
  
  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature
    this.humidity = humidity
    this.display()
  }

  display(): void {
    console.log(`Current Conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`)
  }
}

export class StatisticsDisplay extends WeatherDataObserver implements IWeatherDisplay, IWeatherDataObserver {
  update(temperature: number, humidity: number, pressure: number): void {
    // Do work
  }

  display(): void {
    // Dispaly Data
  }
}

export class ForecastDisplay extends WeatherDataObserver implements IWeatherDisplay, IWeatherDataObserver {
  update(temperature: number, humidity: number, pressure: number): void {
    // Do work
  }

  display(): void {
    // Dispaly Data
  }
}