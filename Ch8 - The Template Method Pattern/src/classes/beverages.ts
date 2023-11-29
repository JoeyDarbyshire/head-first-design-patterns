import promptSync from 'prompt-sync'

export abstract class CaffeineBeverage {
  protected prompt = promptSync()
  // readonly to prevent subclasses from overwriting this template method
  public readonly prepareRecipe = (): void => {
    this.boilWater()
    this.brew()
    this.pourInCup()
    if (this.customerWantsCondiments()) {
      this.addCondiments()
    }
  }

  protected abstract brew(): void 
  protected abstract addCondiments(): void

  protected boilWater(): void {
    console.log('Boiling water...')
  }

  protected pourInCup(): void {
    console.log('Pouring into cup...')
  }

  protected customerWantsCondiments(): boolean {
    return true
  }

  protected getUserInput(query: string): string {
    return this.prompt(query)
  }
}