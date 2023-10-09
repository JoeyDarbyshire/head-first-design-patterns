import { IWeatherDataObserver, IWeatherDataSubject } from '../models'

export abstract class WeatherDataObserver implements IWeatherDataObserver {
  protected observable: IWeatherDataSubject
  constructor(subject: IWeatherDataSubject) {
    this.observable = subject
    this.observable.subscribe(this)
  }

  abstract update(): void
}