import { IDuck, ITurkey } from '../../models'

export class TurkeyAdapter implements IDuck {
  constructor(private turkey: ITurkey) { }

  quack(): void {
    this.turkey.gobble()
  }

  fly(): void {
    for(let i = 0; i < 5; i++) {
      this.turkey.fly()
    }
  }
}

export class DuckAdapter implements ITurkey {
  constructor(private duck: IDuck) { }

  gobble(): void {
    this.duck.quack()
  }

  fly(): void {
    this.duck.fly()
    console.log('...for a short distance!')
  }
}
