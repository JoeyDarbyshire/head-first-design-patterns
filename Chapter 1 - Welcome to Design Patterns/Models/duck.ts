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

  public setFlyBehavior(flyBehavior: IFlyBehavior): void {
    this.flyBehavior = flyBehavior
  }

  public performQuack(): void {
    this.quackBehavior.quack()
  }

  public setQuackBehavior(quackBehavior: IQuackBehavior): void {
    this.quackBehavior = quackBehavior
  }

  public performSwim(): void {
    console.log("All ducks float!   Even decoys!")
  }
}