import { IIngredient } from '../../models'

export abstract class Pepperoni implements IIngredient {
  abstract description: string
}

export class SlicedPepperoni extends Pepperoni {
  description = 'Sliced Pepperoni'
}