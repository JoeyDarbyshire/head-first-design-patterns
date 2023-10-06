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
  private maxTemp: number | null = null
  private minTemp: number | null = null
  private numberOfTempsRecieved: number = 0
  private sumAllTemps = 0

  private get avgTemp(): number {
    return +(this.sumAllTemps / this.numberOfTempsRecieved).toFixed(2)
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.numberOfTempsRecieved += 1
    this.sumAllTemps = +(this.sumAllTemps + temperature).toFixed(2)

    if (!this.maxTemp || temperature > this.maxTemp) {
      this.maxTemp = temperature
    }
    if (!this.minTemp || temperature < this.minTemp) {
      this.minTemp = temperature
    }
    this.display()
  }

  display(): void {
    console.log(`Avg/Max/Min temperature = ${this.avgTemp}/${this.maxTemp}/${this.minTemp}`)
  }
}

export class ForecastDisplay extends WeatherDataObserver implements IWeatherDisplay, IWeatherDataObserver {
  private currentPressure: number = 29.0
  private lastPressure: number | null = null
  update(temperature: number, humidity: number, pressure: number): void {
    this.lastPressure = this.currentPressure
    this.currentPressure = pressure
    this.display()
  }

  display(): void {
    if (!this.lastPressure || this.currentPressure > this.lastPressure) {
      console.log(`Forecast: Improving weather on the way!`)
    } else if (this.currentPressure === this.lastPressure) {
      console.log(`Forecast: More of the same`)
    } else if (this.currentPressure < this.lastPressure) {
      console.log(`Forecast: Watch out for cooler, rainy weather`)
    }
  }
}