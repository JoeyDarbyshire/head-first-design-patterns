# Welcome to Design Patterns

### Sharpen Your Pencil (page 5)
Which of the following are disadvantages of using *inheritance* to provide Duck Behavior? \
Answers (Choose all that apply) - \
A.\) Code is duplicated across subclasses.\
B.\) Runtime behavior changes are dificult.\
F.\) Changes can unintentionally affect other ducks.\

### Sharpen Your Pencil (page 8)
List some reasons you've had to change code in your applications \
* Updates to criteria for a design
* New features that expand and utilize another feature
* Code wasn't functioning as optimally as we would like

### Sharpen Your Pencil (page 14)
1. Using our new design, what would you do if you needed to add rocket-powered flying to the SimUDuck app?
*  Create a new FlyBehavior class for FlyRocketPowered
2. Can you think of a class that might want to use the Quack behavior that isn't a duck?
*  A duck call

### Brain Power (page 23)
A duck call is a device that hunters use to mimic the calls (quacks) of ducks.  How would you implement your own duck call that does *not* inherit from the Duck class?
* I would create a `DuckCall` class that has a `quackBehavior` property that would be defined at creation.  This would allow me to pass in the `Quack` class and write the `performQuack` function to work with the `DuckCall`.  I may even encapsulate the perform functions out to reuse for both the `DuckCall` and `Duck` classes.

### Design Puzzle (page 25)
1. Arrange the classes
`Queen`, `King`, `Troll`, and `Knight` -> IS A \(extends\) -> `Character` class \
`KnifeBehavior`, `BowAndArrowBehavior`, `AxeBehavior`, and `SwordBehavior` => Implements => `WeaponBehavior` \
`Character` -> HAS A -. `WeaponBehavior` \
2. Identify one abstract class, one interface, and 8 classes
`Character` is an abstract class \
`WeaponBehavior` is an interface \
`Queen`, `King`, `Troll`, `Knight`, `KnifeBehavior`, `BowAndArrowBehavior`, `AxeBehavior`, and `SwordBehavior` are all classes \
3. Draw arrows between classes to define inheritance, interface, and HAS-A relationships.
See step one \
4. Put the method `setWeapon()` into the right class
This method should go in the `Character` abstract class. \