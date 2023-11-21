import { ILight, ITheaterLight } from '../../models'

export abstract class Light implements ILight {
  on(): void {
    console.log(`${this.toString()} on`)
  }
  off(): void {
    console.log(`${this.toString()} off`)
  }
  abstract toString(): string
}

export class TheaterLight extends Light implements ITheaterLight {
  private brightness: number = 0
  dim(level: number): void {
    this.brightness = level
    console.log(`${this.toString()} dimming to ${this.brightness}%`)
  }

  toString(): string {
    return 'Theater Ceiling Lights'
  }
}
