import { IIngredient } from '../../models'

export abstract class Cheese implements IIngredient {
  abstract description: string
}

export class GoatCheese extends Cheese {
  description = 'Goat Cheese'
}

export class MozzarellaCheese extends Cheese {
  description = 'Mozzarella Cheese'
}

export class ReggianoCheese extends Cheese {
  description = 'Reggiano Cheese'
}