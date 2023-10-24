import { CaliforniaStylePizzaStore, ChicagoStylePizzaStore, NYStylePizzaStore } from './classes'
import { pizzaType } from './models'

const nyStore = new NYStylePizzaStore()
const chicagoStore = new ChicagoStylePizzaStore()
const californiaStore = new CaliforniaStylePizzaStore()

let pizza = nyStore.orderPizza(pizzaType.cheese)
console.log(`Ethan ordered a ${pizza.getName()} \n`)

pizza = chicagoStore.orderPizza(pizzaType.cheese)
console.log(`Joel ordered a ${pizza.getName()} \n`)

pizza = californiaStore.orderPizza(pizzaType.cheese)
console.log(`Ryan ordered a ${pizza.getName()} \n`)

pizza = nyStore.orderPizza(pizzaType.pepperoni)
console.log(`Ethan ordered a ${pizza.getName()} \n`)

pizza = chicagoStore.orderPizza(pizzaType.pepperoni)
console.log(`Joel ordered a ${pizza.getName()} \n`)

pizza = californiaStore.orderPizza(pizzaType.pepperoni)
console.log(`Ryan ordered a ${pizza.getName()} \n`)

pizza = nyStore.orderPizza(pizzaType.clam)
console.log(`Ethan ordered a ${pizza.getName()} \n`)

pizza = chicagoStore.orderPizza(pizzaType.clam)
console.log(`Joel ordered a ${pizza.getName()} \n`)

pizza = californiaStore.orderPizza(pizzaType.clam)
console.log(`Ryan ordered a ${pizza.getName()} \n`)

pizza = nyStore.orderPizza(pizzaType.veggie)
console.log(`Ethan ordered a ${pizza.getName()} \n`)

pizza = chicagoStore.orderPizza(pizzaType.veggie)
console.log(`Joel ordered a ${pizza.getName()} \n`)

pizza = californiaStore.orderPizza(pizzaType.veggie)
console.log(`Ryan ordered a ${pizza.getName()} \n`)