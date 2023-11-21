import { IDuck } from '../../models'

export class MallardDuck implements IDuck {
  constructor() { }

  quack(): void {
    console.log('Quack!')
  }

  fly(): void {
    console.log('I\'m flying!')
  }
}