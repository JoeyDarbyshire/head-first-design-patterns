import { MallardDuck, ModelDuck } from './Ducks'
import { FlyRocketPowered } from './Models'

const mallard = new MallardDuck()
mallard.display()
mallard.performQuack()
mallard.performFly()
mallard.performSwim()

const model = new ModelDuck()
model.display()
model.performFly()
model.setFlyBehavior(new FlyRocketPowered())
model.performFly()