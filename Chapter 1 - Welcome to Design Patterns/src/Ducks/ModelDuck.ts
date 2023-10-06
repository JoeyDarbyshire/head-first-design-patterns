import { Duck, FlyNoWay, Quack } from '../Models'

export class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Quack())
  }

  public display(): void {
    console.log("I'm a Model Duck")
  }
}