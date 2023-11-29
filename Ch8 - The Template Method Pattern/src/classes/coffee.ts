import { CaffeineBeverage } from './beverages'

export class Coffee extends CaffeineBeverage {
  protected brew(): void {
    console.log('Dripping Coffee through filter...')
  }

  protected addCondiments(): void {
    console.log('Adding Sugar and Milk...')
  }
}

export class CoffeeWithHook extends Coffee {
  protected customerWantsCondiments(): boolean {
    const answer = this.getUserInput('Would you like milk and sugar with your coffee (y/n)? ')

    return answer.toLocaleLowerCase().startsWith('y')
  }
}