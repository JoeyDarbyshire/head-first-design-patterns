import { IIngredient } from '../../models'

export abstract class Clam implements IIngredient {
  abstract description: string
}

export class FreshClams extends Clam {
  description = 'Fresh Clams'
}

export class FrozenClams extends Clam {
  description = 'Frozen Clams'
}