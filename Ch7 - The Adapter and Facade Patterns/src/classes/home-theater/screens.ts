import { IScreen } from '../../models'

export abstract class Screen implements IScreen {
  up(): void {
    console.log(`${this.toString()} going up`)
  }
  down(): void {
    console.log(`${this.toString()} going down`)
  }
  abstract toString(): string   
}

export class TheaterScreen extends Screen {
  toString(): string {
    return 'Theater Screen'
  }
}