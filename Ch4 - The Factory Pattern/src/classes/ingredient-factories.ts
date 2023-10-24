import * as Ingredients from './ingredients'

export interface IIngredientFactory {
  createDough(): Ingredients.Dough
  createSauce(): Ingredients.Sauce
  createCheese(): Ingredients.Cheese
  createVeggies(): Ingredients.Veggie[]
  createPepperoni(): Ingredients.Pepperoni
  createClam(): Ingredients.Clam
}

export class NYPizzaIngredientFactory implements IIngredientFactory {
  createDough(): Ingredients.Dough {
    return new Ingredients.ThinCrustDough()
  }

  createSauce(): Ingredients.Sauce {
    return new Ingredients.MarinaraSauce()
  }

  createCheese(): Ingredients.Cheese {
    return new Ingredients.ReggianoCheese()
  }

  createVeggies(): Ingredients.Veggie[] {
    return [
      new Ingredients.Garlic(),
      new Ingredients.Onion(),
      new Ingredients.Mushroom(),
      new Ingredients.RedPepper(),
    ]
  }
  createPepperoni(): Ingredients.Pepperoni {
    return new Ingredients.SlicedPepperoni()
  }

  createClam(): Ingredients.Clam {
    return new Ingredients.FreshClams()
  }
}

export class ChicagoPizzaIngredientFactory implements IIngredientFactory {
  createDough(): Ingredients.Dough {
    return new Ingredients.ThickCrustDough()
  }

  createSauce(): Ingredients.Sauce {
    return new Ingredients.PlumTomatoSauce()
  }

  createCheese(): Ingredients.Cheese {
    return new Ingredients.MozzarellaCheese()
  }

  createVeggies(): Ingredients.Veggie[] {
    return [
      new Ingredients.BlackOlives(),
      new Ingredients.Spinach(),
      new Ingredients.EggPlant(),
    ]
  }
  createPepperoni(): Ingredients.Pepperoni {
    return new Ingredients.SlicedPepperoni()
  }

  createClam(): Ingredients.Clam {
    return new Ingredients.FrozenClams()
  }
}

export class CaliforniaPizzaIngredientFactory implements IIngredientFactory {
  createDough(): Ingredients.Dough {
    return new Ingredients.VeryThinCrustDough()
  }

  createSauce(): Ingredients.Sauce {
    return new Ingredients.BruschettaSauce()
  }

  createCheese(): Ingredients.Cheese {
    return new Ingredients.GoatCheese()
  }

  createVeggies(): Ingredients.Veggie[] {
    return [
      new Ingredients.Cinnamon(),
      new Ingredients.Grapes(),
      new Ingredients.Rice(),
    ]
  }
  createPepperoni(): Ingredients.Pepperoni {
    return new Ingredients.SlicedPepperoni()
  }

  createClam(): Ingredients.Clam {
    return new Ingredients.FreshClams()
  }
}