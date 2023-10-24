import { pizzaType } from '../models'
// import { SimplePizzaFactory } from './pizza-factory'
import * as pizzas from './pizzas'

export abstract class PizzaStore {
  public orderPizza(type: pizzaType): pizzas.Pizza {
    const pizza = this.createPizza(type)

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()

    return pizza
  }

  protected abstract createPizza(type: pizzaType): pizzas.Pizza
}

export class NYStylePizzaStore extends PizzaStore {
  protected createPizza(type: pizzaType): pizzas.Pizza {
    switch (type) {
      case pizzaType.cheese:
        return new pizzas.NYStyleCheesePizza()
        break
    
      case pizzaType.pepperoni:
        return new pizzas.NYStylePepperoniPizza()
        break
    
      case pizzaType.clam:
        return new pizzas.NYStyleClamPizza()
        break
    
      case pizzaType.veggie:
        return new pizzas.NYStyleVeggiePizza()
        break
    }
  }
}

export class ChicagoStylePizzaStore extends PizzaStore {
  protected createPizza(type: pizzaType): pizzas.Pizza {
    switch (type) {
      case pizzaType.cheese:
        return new pizzas.ChicagoStyleCheesePizza()
        break
    
      case pizzaType.pepperoni:
        return new pizzas.ChicagoStylePepperoniPizza()
        break
    
      case pizzaType.clam:
        return new pizzas.ChicagoStyleClamPizza()
        break
    
      case pizzaType.veggie:
        return new pizzas.ChicagoStyleVeggiePizza()
        break
    }
  }
}

// export class CaliforniaStylePizzaStore extends PizzaStore {
//   protected createPizza(type: pizzaType): pizzas.Pizza {
//     switch (type) {
//       case pizzaType.cheese:
//         return new pizzas.CaliforniaStyleCheesePizza()
//         break
    
//       case pizzaType.pepperoni:
//         return new pizzas.CaliforniaStylePepperoniPizza()
//         break
    
//       case pizzaType.clam:
//         return new pizzas.CaliforniaStyleClamPizza()
//         break
    
//       case pizzaType.veggie:
//         return new pizzas.CaliforniaStyleVeggiePizza()
//         break
//     }
//   }
// }
