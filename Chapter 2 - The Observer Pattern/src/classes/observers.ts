import { IWeatherDataObserver, IWeatherDataSubject } from '../models'

export abstract class WeatherDataObserver implements IWeatherDataObserver {
  private subject: IWeatherDataSubject
  constructor(subject: IWeatherDataSubject) {
    this.subject = subject
    this.subject.subscribe(this)
  }

  abstract update(temp: number, humidity: number, pressure: number): void
}