import { IWeatherDataObserver, IWeatherDataSubject } from '../models'

export class WeatherData implements IWeatherDataSubject {
  private observers: Set<IWeatherDataObserver> = new Set()
  private temperature: number = 0
  private humidity: number = 0
  private pressure: number = 0

  measurementsChanged(): void {
    this.notifyObservers()
  }

  subscribe(observer: IWeatherDataObserver): void {
    this.observers.add(observer)
  }
  unsubscribe(observer: IWeatherDataObserver): void {
    this.observers.delete(observer)
  }
  notifyObservers(): void {
    this.observers.forEach(observer => observer.update(this))
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }

  public getTemperature(): number {
    return this.temperature
  }

  public getHumidity(): number {
    return this.humidity
  }

  public getPressure(): number {
    return this.pressure
  }
}