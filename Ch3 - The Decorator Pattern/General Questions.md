# The Decorator Pattern

### Sharpen Your Pencil (page 83)
Write the cost() methods for the following classes (pseudo-code) is okay \
```class Beverage {
  public cost(): float {
    const cost = 0
    if (this.hasMilk) {
      cost += milk.cost
    }
    // repeat this for soy, mocha, and whip

    return cost
  }
}

class DarkRoast extends Beverage {
  public description = "Most Excellent Dark Roast"

  public cost(): float {
    const cost = super.cost()
    cost += ingredients.cost

    return cost
  }
}
```

### Brain Power (page 92)
To implement the cost of the coffess, I would just have them return their defined base cost.  For instance, Dark Roast would just return `1.99`.  For the condiments, I would have them first call `beverage.cost()` to get the cost of the coffee and any other condiments, then add their own cost to the return value of that function and return it. \
I'm not 100% sure how we would implement the `getDescription` methods for the decorators.  Ideally we would want the description to return something like "Most Excellent Dark Roast with Mocha, Soy, and Milk," but I'm not sure how we would be able to tell that the beverage is both a condiment as well in order to implement that commas appropriately instead of something like "Most Excellent Dark Roast with Mocha and with Soy and with Milk."