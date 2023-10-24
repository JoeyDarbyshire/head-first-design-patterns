import { IPizza } from '../models'

export abstract class Pizza implements IPizza {
  protected abstract name: string
  protected abstract dough: string
  protected abstract sauce: string
  protected toppings: string[] = []

  getName(): string {
    return this.name
  }

  prepare(): void {
    console.log(`Preparing ${this.name}...`)
    console.log("Tossing dough...")
    console.log("Adding Sauce...")
    console.log(`Adding Toppings: ${this.toppings.join(' ')}`)
  }

  bake(): void {
    console.log('Bake for 25 minutes at 350')
  }

  cut(): void {
    console.log('Cutting the Pizza into diagonal slices')
  }

  box(): void {
    console.log('Place pizza in official PizzaStore box')
  }
}

export class CheesePizza extends Pizza {
  name = 'Cheese Pizza'
  dough = 'Dough'
  sauce = 'Sauce'
}

export class PepperoniPizza extends Pizza {
  name = 'Pepperoni Pizza'
  dough = 'Dough'
  sauce = 'Sauce'
}

export class ClamPizza extends Pizza {
  name = 'Clam Pizza'
  dough = 'Dough'
  sauce = 'Sauce'
}

export class VeggiePizza extends Pizza {
  name = 'Veggie Pizza'
  dough = 'Dough'
  sauce = 'Sauce'
}

export class NYStyleCheesePizza extends Pizza {
  name = 'NY Style Cheese Pizza'
  dough = 'Thin Crust Dough'
  sauce = 'Marinara Sauce'
  toppings = ['Grated Reggiano Cheese']
}

export class NYStylePepperoniPizza extends Pizza {
  name = 'NY Style Pepperoni Pizza'
  dough = 'Thin Crust Dough'
  sauce = 'Marinara Sauce'
}

export class NYStyleClamPizza extends Pizza {
  name = 'NY Style Clam Pizza'
  dough = 'Thin Crust Dough'
  sauce = 'Marinara Sauce'
}

export class NYStyleVeggiePizza extends Pizza {
  name = 'NY Style Veggie Pizza'
  dough = 'Thin Crust Dough'
  sauce = 'Marinara Sauce'
}

export class ChicagoStyleCheesePizza extends Pizza {
  name = 'Chicago Style Cheese Pizza'
  dough = 'Extra Thick Crust Dough'
  sauce = 'Plum Tomato Sauce'
  toppings = ['Shredded Mopzzarella Cheese']

  cut(): void {
    console.log('Cutting the pizza into square slices')
  }
}

export class ChicagoStylePepperoniPizza extends Pizza {
  name = 'Chicago Style Pepperoni Pizza'
  dough = 'Extra Thick Crust Dough'
  sauce = 'Plum Tomato Sauce'
}

export class ChicagoStyleClamPizza extends Pizza {
  name = 'Chicago Style Clam Pizza'
  dough = 'Extra Thick Crust Dough'
  sauce = 'Plum Tomato Sauce'
}

export class ChicagoStyleVeggiePizza extends Pizza {
  name = 'Chicago Style Veggie Pizza'
  dough = 'Extra Thick Crust Dough'
  sauce = 'Plum Tomato Sauce'
}

// export class CaliforniaStyleCheesePizza extends Pizza {
//   name = 'California Style Cheese Pizza'
// }

// export class CaliforniaStylePepperoniPizza extends Pizza {
//   name = 'California Style Pepperoni Pizza'
// }

// export class CaliforniaStyleClamPizza extends Pizza {
//   name = 'California Style Clam Pizza'
// }

// export class CaliforniaStyleVeggiePizza extends Pizza {
//   name = 'California Style Veggie Pizza'
// }