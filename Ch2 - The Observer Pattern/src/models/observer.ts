import { IWeatherDataSubject } from './subject'

export interface IWeatherDataObserver {
  update(): void
}