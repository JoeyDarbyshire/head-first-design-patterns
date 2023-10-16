export abstract class Beverage {
  abstract description: string

  public getDescription(): string {
    return this.description
  }

  abstract cost(): number
}