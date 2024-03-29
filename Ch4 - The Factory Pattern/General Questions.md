# The Factory Pattern

### Brain Power (page 111)
How might you take all the parts of your application that instantiate concrete classes and separate or encapsulate them from the rest of your application? \
Outside of metathinking about a factory (which I have already used in the past), I can't think of any way to do this.   Typically we would create a factory that returns the concrete implementation that we need at the time. \

### Brain Power (page 116)
We might want to have different factories for different locations or different times of the year.  This would allow us to change the pizzas that are available whenever by changing the factory that the pizza store uses. \

### Sharpen Your Pencil (page 124)
I've already implemented this in my code. \
```export class ChicagoStylePizzaStore extends PizzaStore {
  createPizza(type: pizzaType): pizzas.Pizza {
    switch (type) {
      case pizzaType.cheese:
        return new pizzas.ChicagoStyleCheesePizza()
        break
    
      case pizzaType.pepperoni:
        return new pizzas.ChicagoStylePepperoniPizza()
        break
    
      case pizzaType.clam:
        return new pizzas.ChicagoStyleClamPizza()
        break
    
      case pizzaType.veggie:
        return new pizzas.ChicagoStyleVeggiePizza()
        break
    }
  }
}

export class CaliforniaStylePizzaStore extends PizzaStore {
  createPizza(type: pizzaType): pizzas.Pizza {
    switch (type) {
      case pizzaType.cheese:
        return new pizzas.CaliforniaStyleCheesePizza()
        break
    
      case pizzaType.pepperoni:
        return new pizzas.CaliforniaStylePepperoniPizza()
        break
    
      case pizzaType.clam:
        return new pizzas.CaliforniaStyleClamPizza()
        break
    
      case pizzaType.veggie:
        return new pizzas.CaliforniaStyleVeggiePizza()
        break
    }
  }
}
```

### Design Puzzle (page 133)
See above for the design of the CaliforniaStylePizzaStore \
Write the five *most bizarre* things you can think of to put on a pizza for the california pizza store! \
1. Grapes \
2. Cinnamon \
3. Oysters \
4. Gravy \
5. Rice \

### Sharpen Your Pencil (page 137)
The class is dependant on 8 classes, 12 if we add the california pizzas in. \

### Answers
All Sharpen Your Pencil answers were correct! \