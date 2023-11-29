export abstract class CaffeineBeverage {
  // readonly to prevent subclasses from overwriting this method
  public readonly prepareRecipe = (): void => {
    this.boilWater()
    this.brew()
    this.pourInCup()
    this.addCondiments()
  }

  protected abstract brew(): void 
  protected abstract addCondiments(): void

  protected boilWater(): void {
    console.log('Boiling water...')
  }

  protected pourInCup(): void {
    console.log('Pouring into cup...')
  }
}

export class Coffee extends CaffeineBeverage {
  protected brew(): void {
    console.log('Dripping Coffee through filter...')
  }

  protected addCondiments(): void {
    console.log('Adding Sugar and Milk...')
  }
}

export class Tea extends CaffeineBeverage {
  protected brew(): void {
    console.log('Steeping the tea...')
  }

  protected addCondiments(): void {
    console.log('Adding Lemon...')
  }
}