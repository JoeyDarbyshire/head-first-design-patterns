import { IPizza, cutType } from '../models'
import { IIngredientFactory } from './ingredient-factories'
import { Cheese, Clam, Dough, Pepperoni, Sauce, Veggie } from './ingredients'

export abstract class Pizza implements IPizza {
  protected name: string = ''
  protected dough: Dough | null = null
  protected sauce: Sauce | null = null
  protected cheese: Cheese | null = null
  protected veggies: Veggie[] = []
  protected pepperoni: Pepperoni | null = null
  protected clam: Clam | null = null

  private cutType = cutType.diagonal

  setCut(type: cutType): void {
    this.cutType = type
  }

  setName(name: string): void {
    this.name = name
  }

  getName(): string {
    return this.name
  }

  abstract prepare(): void

  bake(): void {
    console.log('Bake for 25 minutes at 350')
  }

  cut(): void {
    console.log(`Cutting the pizza into ${this.cutType} slices`)
  }

  box(): void {
    console.log('Place pizza in official PizzaStore box')
  }

  protected printPizza(): void {
    if (this.dough) {
      console.log(`Tossing ${this.dough.description}...`)
    }
    if (this.sauce) {
      console.log(`Adding ${this.sauce.description}...`)
    }
    if (this.cheese) {
      console.log(`Adding ${this.cheese.description}...`)
    }
    let toppings = this.veggies
    if (this.pepperoni) {
      toppings.push(this.pepperoni)
    }
    if (this.clam) {
      toppings.push(this.clam)
    }
    if (toppings.length > 0) {
      console.log(`Adding Toppings: ${toppings.map(o => o.description).join(', ')}`)
    }
  }
}

export class CheesePizza extends Pizza {
  constructor(private ingredientFactory: IIngredientFactory) {
    super()
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
    this.printPizza()
  }
}

export class PepperoniPizza extends Pizza {
  constructor(private ingredientFactory: IIngredientFactory) {
    super()
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
    this.pepperoni = this.ingredientFactory.createPepperoni()
    this.printPizza()
  }
}

export class ClamPizza extends Pizza {
  constructor(private ingredientFactory: IIngredientFactory) {
    super()
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
    this.clam = this.ingredientFactory.createClam()
    this.printPizza()
  }
}

export class VeggiePizza extends Pizza {
  constructor(private ingredientFactory: IIngredientFactory) {
    super()
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
    this.veggies = this.ingredientFactory.createVeggies()
    this.printPizza()
  }
}