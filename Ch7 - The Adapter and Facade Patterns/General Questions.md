# The Adapter and Facade Patterns

### Brain Power (page 246)
A class adapter has the added benefit that any properties that are shared between the two classes only need to be implmented once, but this could be a determent if they are implemented in different ways like with the Duck and Turkey classes.  Both have a fly function, but Ducks fly much further than turkeys. \

### Brain Power (page 253)
I would use the decorator pattern.  This way I could add any extra functionality as needed without changing the core functionality of adapting to the switch. \

### Who Does What? (page 256)
Decorator -> Doesn't alter the interface, but adds responsibility \
Adapter -> Converts one interface to another \
Facade -> Makes an interface simpler \

### Sharpen Your Pencil (page 270)
The first version of the House class violates the Principle of Least Knowledge because it calls a method on an object created by another function.  The second version does not violate because we store the returned object from the first function and then pass it as a parameter to a separate function that calls the method. \

### Answers
All answers were correct!