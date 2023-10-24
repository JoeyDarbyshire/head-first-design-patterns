import { ChicagoStylePizzaStore, NYStylePizzaStore } from './classes'
import { pizzaType } from './models'

const nyStore = new NYStylePizzaStore()
const chicagoStore = new ChicagoStylePizzaStore()

let pizza = nyStore.orderPizza(pizzaType.cheese)
console.log(`Ethan ordered a ${pizza.getName()} \n`)

pizza = chicagoStore.orderPizza(pizzaType.cheese)
console.log(`Joel ordered a ${pizza.getName()}`)