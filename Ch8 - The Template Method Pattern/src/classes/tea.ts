import { CaffeineBeverage } from './beverages'

export class Tea extends CaffeineBeverage {
  protected brew(): void {
    console.log('Steeping the tea...')
  }

  protected addCondiments(): void {
    console.log('Adding Lemon...')
  }
}

export class TeaWithHook extends Tea {
  protected customerWantsCondiments(): boolean {
    const answer = this.getUserInput('Would you like lemon with your tea (y/n)? ')

    return answer.toLocaleLowerCase().startsWith('y')
  }
}