import { IWeatherDataObserver } from './observer'

export interface IWeatherDataSubject {
  subscribe(observer: IWeatherDataObserver): void
  unsubscribe(observer: IWeatherDataObserver): void
  notifyObservers(): void
}