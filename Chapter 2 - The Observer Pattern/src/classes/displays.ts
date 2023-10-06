import { WeatherDataObserver } from './observers'
import { IWeatherDataObserver, IWeatherDataSubject } from '../models'

export class CurrentConditionDisplay extends WeatherDataObserver implements IWeatherDisplay, IWeatherDataObserver {
  private temperature: number = 0
  private humidity: number = 0
  
  update(observable: IWeatherDataSubject): void {
    this.temperature = observable.getTemperature()
    this.humidity = observable.getHumidity()
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

  update(observable: IWeatherDataSubject): void {
    const temperature = observable.getTemperature()
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

  update(observable: IWeatherDataSubject): void {
    this.lastPressure = this.currentPressure
    this.currentPressure = observable.getPressure()
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

export class HeatIndexDisplay extends WeatherDataObserver implements IWeatherDisplay, IWeatherDataObserver {
  private heatIndex: number = 0.0

  update(observable: IWeatherDataSubject): void {
    const t = observable.getTemperature()
    const rh = observable.getHumidity()
    this.heatIndex = +(
      (16.923 + (0.185212 * t)) + 
      (5.37941 * rh) - 
      (0.100254 * t * rh) + 
      (0.00941695 * (t * t)) + 
      (0.00728898 * (rh * rh)) + 
      (0.000345372 * (t * t * rh)) - 
      (0.000814971 * (t * rh * rh)) +
      (0.0000102102 * (t * t * rh * rh)) - 
      (0.000038646 * (t * t * t)) + 
      (0.0000291583 * (rh * rh * rh)) +
      (0.00000142721 * (t * t * t * rh)) + 
      (0.000000197483 * (t * rh * rh * rh)) - 
      (0.0000000218429 * (t * t * t * rh * rh)) +
      (0.000000000843296 * (t * t * rh * rh * rh)) -
      (0.0000000000481975 * (t * t * t * rh * rh * rh))
    ).toFixed(5)
    this.display()
  }

  display(): void {
    console.log(`Heat index is ${this.heatIndex}`)
  }
}