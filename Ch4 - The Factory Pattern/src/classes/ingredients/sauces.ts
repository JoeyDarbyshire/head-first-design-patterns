import { IIngredient } from '../../models'

export abstract class Sauce implements IIngredient {
  abstract description: string
}

export class BruschettaSauce extends Sauce {
  description = 'Bruschetta Sauce'
}

export class MarinaraSauce extends Sauce {
  description = 'Marinara Sauce'
}

export class PlumTomatoSauce extends Sauce {
  description = 'Plum Tomato Sauce'
}