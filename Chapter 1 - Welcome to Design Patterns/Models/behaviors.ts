export interface IFlyBehavior {
  fly(): void
}

export class FlyWithWings implements IFlyBehavior {
  fly(): void {
    console.log("I'm flying!!")
  }
}

export class FlyNoWay implements IFlyBehavior {
  fly(): void {
    console.log("I can't fly")
  }
}

export interface IQuackBehavior {
  quack(): void
}

export class Quack implements IQuackBehavior {
  quack(): void {
    console.log("Quack")
  }
}

export class MuteQuack implements IQuackBehavior {
  quack(): void {
    console.log("<< Silence >>")
  }
}

export class Squeak implements IQuackBehavior {
  quack(): void {
    console.log("Squeak")
  }
}
