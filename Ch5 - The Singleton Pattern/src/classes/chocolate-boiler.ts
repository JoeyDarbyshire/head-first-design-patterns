export class ChocolateBoiler {
  private empty: boolean
  private boiled: boolean

  private static instance: ChocolateBoiler | null = null

  private constructor() {
    this.empty = true
    this.boiled = false
  }

  public static getInstance(): ChocolateBoiler {
    if (this.instance === null) {
      this.instance = new ChocolateBoiler()
    }
    return this.instance
  }

  fill(): void {
    if (this.isEmpty()) {
      this.empty = false
      this.boiled = false
    }
  }

  drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      this.empty = true
    }
  }

  boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      this.boiled = true
    }
  }

  isEmpty(): boolean {
    return this.empty
  }

  isBoiled(): boolean {
    return this.boiled
  }
}