// This is an example of the interfaces and classes I think I'll need for the Weather Station

interface IWeatherDataObserver {
  addSubject(subject: IWeatherDataSubject): void
  removeSubject(): void
  update(temp: number, humidity: number, pressure:number): void
}

interface IWeatherDisplay {
  display(): void
}

interface IWeatherDataSubject {
  subscribe(observer: IWeatherDataObserver): void
  unsubscribe(observer: IWeatherDataObserver): void
  notifyObservers(): void
}

class WeatherData implements IWeatherDataSubject {
  private observers: Set<IWeatherDataObserver> = new Set()

  private getTemperature(): number {
    return Math.random()
  }

  private getHumidity(): number {
    return Math.random()
  }

  private getPressure(): number {
    return Math.random()
  }

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
    const temp = this.getTemperature()
    const humidity = this.getHumidity()
    const pressure = this.getPressure()
    this.observers.forEach(observer => observer.update(temp, humidity, pressure))
  }
}

abstract class WeatherDataObserver implements IWeatherDataObserver {
  private subject: IWeatherDataSubject | null = null
  addSubject(subject: IWeatherDataSubject): void {
    if (this.subject) {
      this.removeSubject()
    }
    this.subject = subject
    this.subject.subscribe(this)
  }
  removeSubject(): void {
    if (this.subject) {
      this.subject.unsubscribe(this)
      this.subject = null
    }
  }

  abstract update(temp: number, humidity: number, pressure: number): void
}

class CurrentConditionDisplay extends WeatherDataObserver implements IWeatherDisplay, IWeatherDataObserver {
  update(temp: number, humidity: number, pressure: number): void {
    // Do work
  }

  display(): void {
    // Display Data
  }
}

class StatisticsDisplay extends WeatherDataObserver implements IWeatherDisplay, IWeatherDataObserver {
  update(temp: number, humidity: number, pressure: number): void {
    // Do work
  }

  display(): void {
    // Display Data
  }
}

class ForecastDisplay extends WeatherDataObserver implements IWeatherDisplay, IWeatherDataObserver {
  update(temp: number, humidity: number, pressure: number): void {
    // Do work
  }

  display(): void {
    // Display Data
  }
}