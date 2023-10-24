import { IIngredient } from '../../models'

export abstract class Veggie implements IIngredient {
  abstract description: string
}

export class BlackOlives extends Veggie {
  description = 'Black Olives'
}

export class Cinnamon extends Veggie {
  description = 'Cinnamon'
}

export class EggPlant extends Veggie {
  description = 'Egg Plant'
}

export class Garlic extends Veggie {
  description = 'Garlic'
}

export class Grapes extends Veggie {
  description = 'Grapes'
}

export class Mushroom extends Veggie {
  description = 'Mushroom'
}

export class Onion extends Veggie {
  description = 'Onion'
}

export class RedPepper extends Veggie {
  description = 'Red Pepper'
}

export class Rice extends Veggie {
  description = 'Rice'
}

export class Spinach extends Veggie {
  description = 'Spinach'
}