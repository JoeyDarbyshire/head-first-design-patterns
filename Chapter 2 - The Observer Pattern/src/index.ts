// The Weather Station
import { CurrentConditionDisplay, ForecastDisplay, HeatIndexDisplay, StatisticsDisplay, WeatherData } from './classes'

const weatherData = new WeatherData()
new CurrentConditionDisplay(weatherData)
new StatisticsDisplay(weatherData)
new ForecastDisplay(weatherData)
new HeatIndexDisplay(weatherData)

weatherData.setMeasurements(80, 65, 30.4)
weatherData.setMeasurements(82, 70, 29.2)
weatherData.setMeasurements(78, 90, 29.2)