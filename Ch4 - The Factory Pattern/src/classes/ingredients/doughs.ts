import { IIngredient } from '../../models'

export abstract class Dough implements IIngredient {
  abstract description: string
}

export class VeryThinCrustDough extends Dough {
  description = "Very Thin Crust Dough"
}

export class ThinCrustDough extends Dough {
  description = "Thin Crust Dough"
}

export class ThickCrustDough extends Dough {
  description = "Thick Crust Dough"
}