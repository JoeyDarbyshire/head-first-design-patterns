# The Template Method Pattern

## Design Puzzle (page 281)
In order to remove duplicate code from coffee and tea, I would create a base class called `HotBeverage` that implements the `boilWater()` and `pourInCup()` methods.  This class would also include abstracts for `prepareDrink()` and `AddExtraIngredients()` that would be implemented by the child classes. \

### Brain Power (page 282)
I believe we can implement the `AddExtraIngredients()` function to the base class of `CaffeineBeverage` as well.  We could store the extra ingredients as an abstract property on `CaffeineBeverage` and have each subclass define those. \

### Sharpen Your Pencil (page 286)
New class design: \
```abstract class CaffeineBeverage {
  public readonly prepareRecipe: (): void
  abstract brew: void
  abstract addCondiments: void
  protected boilWater(): void
  protected pourInCup(): void
}

class Coffee extends CaffeineBeverage {
  protected brew(): void
  protected addCondiments(): void
}

class Tea extends CaffeineBeverage {
  protected brew(): void
  protected addCondiments(): void
}
```