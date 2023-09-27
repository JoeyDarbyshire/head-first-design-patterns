import { Duck, FlyWithWings, Quack } from '../Models'

export class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack())
  }

  public display(): void {
    console.log("I'm a real Mallard Duck!")
  }
}