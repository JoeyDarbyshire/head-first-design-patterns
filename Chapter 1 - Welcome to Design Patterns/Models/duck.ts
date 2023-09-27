import { IFlyBehavior, IQuackBehavior } from './behaviors'

export abstract class Duck {
  constructor(
    private flyBehavior: IFlyBehavior,
    private quackBehavior: IQuackBehavior
  ) { }

  public abstract display(): void

  public performFly(): void {
    this.flyBehavior.fly()
  }

  public performQuack(): void {
    this.quackBehavior.quack()
  }

  public performSwim(): void {
    console.log("All ducks float!   Even decoys!")
  }
}