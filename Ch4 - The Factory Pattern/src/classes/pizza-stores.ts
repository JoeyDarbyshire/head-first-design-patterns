import { cutType, pizzaType } from '../models'
import { CaliforniaPizzaIngredientFactory, ChicagoPizzaIngredientFactory, NYPizzaIngredientFactory } from './ingredient-factories'
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
    const ingredientFactory = new NYPizzaIngredientFactory()
    let pizza: pizzas.Pizza
    switch (type) {
      case pizzaType.cheese:
        pizza = new pizzas.CheesePizza(ingredientFactory)
        pizza.setName('New York Style Cheese Pizza')
        break
    
      case pizzaType.pepperoni:
        pizza = new pizzas.PepperoniPizza(ingredientFactory)
        pizza.setName('New York Style Pepperoni Pizza')
        break
    
      case pizzaType.clam:
        pizza = new pizzas.ClamPizza(ingredientFactory)
        pizza.setName('New York Style Clam Pizza')
        break
    
      case pizzaType.veggie:
        pizza = new pizzas.VeggiePizza(ingredientFactory)
        pizza.setName('New York Style Veggie Pizza')
        break
    }

    return pizza
  }
}

export class ChicagoStylePizzaStore extends PizzaStore {
  protected createPizza(type: pizzaType): pizzas.Pizza {
    const ingredientFactory = new ChicagoPizzaIngredientFactory()
    let pizza: pizzas.Pizza
    switch (type) {
      case pizzaType.cheese:
        pizza = new pizzas.CheesePizza(ingredientFactory)
        pizza.setName('Chicago Style Cheese Pizza')
        break
    
      case pizzaType.pepperoni:
        pizza = new pizzas.PepperoniPizza(ingredientFactory)
        pizza.setName('Chicago Style Pepperoni Pizza')
        break
    
      case pizzaType.clam:
        pizza = new pizzas.ClamPizza(ingredientFactory)
        pizza.setName('Chicago Style Clam Pizza')
        break
    
      case pizzaType.veggie:
        pizza = new pizzas.VeggiePizza(ingredientFactory)
        pizza.setName('Chicago Style Veggie Pizza')
        break
    }
    pizza.setCut(cutType.square)

    return pizza
  }
}

export class CaliforniaStylePizzaStore extends PizzaStore {
  protected createPizza(type: pizzaType): pizzas.Pizza {
    const ingredientFactory = new CaliforniaPizzaIngredientFactory()
    let pizza: pizzas.Pizza
    switch (type) {
      case pizzaType.cheese:
        pizza = new pizzas.CheesePizza(ingredientFactory)
        pizza.setName('Californian Style Cheese Pizza')
        break
    
      case pizzaType.pepperoni:
        pizza = new pizzas.PepperoniPizza(ingredientFactory)
        pizza.setName('Californian Style Pepperoni Pizza')
        break
    
      case pizzaType.clam:
        pizza = new pizzas.ClamPizza(ingredientFactory)
        pizza.setName('Californian Style Clam Pizza')
        break
    
      case pizzaType.veggie:
        pizza = new pizzas.VeggiePizza(ingredientFactory)
        pizza.setName('Californian Style Veggie Pizza')
        break
    }

    return pizza
  }
}
