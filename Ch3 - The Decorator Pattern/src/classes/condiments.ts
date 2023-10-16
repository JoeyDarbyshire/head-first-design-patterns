import { Beverage, CondimentDecorator } from '../models'

export class Mocha extends CondimentDecorator {
  description: string = ", Mocha"

  cost(): number {
    return this.beverage.cost() + .20
  }
}

export class Soy extends CondimentDecorator {
  description: string = ", Soy"

  cost(): number {
    return this.beverage.cost() + .15
  }
}

export class Whip extends CondimentDecorator {
  description: string = ", Whip"

  cost(): number {
    return this.beverage.cost() + .10
  }
}