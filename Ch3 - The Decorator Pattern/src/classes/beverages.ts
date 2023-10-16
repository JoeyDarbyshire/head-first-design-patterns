import { Beverage } from '../models'

export class Espresso extends Beverage {
  description: string = "Espresso"

  public cost(): number {
    return 1.99
  }
}

export class HouseBlend extends Beverage {
  description: string = "House Blend Coffee"

  cost(): number {
    return .89
  }
}

export class DarkRoast extends Beverage {
  description: string = "Most Excellent Dark Roast"

  cost(): number {
    return .99
  }
}

export class Decaf extends Beverage {
  description: string = "Decaf House Blend Coffee"

  cost(): number {
    return 1.05
  }
}