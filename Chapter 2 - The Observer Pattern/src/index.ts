// The Weather Station
import { CurrentConditionDisplay, WeatherData } from './classes'

const weatherData = new WeatherData()
new CurrentConditionDisplay(weatherData)

weatherData.setMeasurements(85, 65, 30.4)
weatherData.setMeasurements(82, 70, 29.2)
weatherData.setMeasurements(79.9, 90, 29.2)