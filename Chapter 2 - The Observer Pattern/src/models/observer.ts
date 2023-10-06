import { IWeatherDataSubject } from './subject'

export interface IWeatherDataObserver {
  update(observable: IWeatherDataSubject): void
}