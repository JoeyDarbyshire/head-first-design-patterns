export interface IWeatherDataObserver {
  update(temperature: number, humidity: number, pressure:number): void
}