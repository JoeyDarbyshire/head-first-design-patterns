import { Beverage } from './beverage'

export abstract class CondimentDecorator extends Beverage {
  constructor(public beverage: Beverage) {
    super()
  }

  getDescription(): string {
    return this.beverage.getDescription() + this.description
  }
}