import { IAmplifier, ITuner } from '../../models'

export class Tuner implements ITuner {
  private frequency: number = 0
  constructor(public amplifier: IAmplifier) { }
  on(): void {
    console.log(`${this.toString()} on`)
  }
  off(): void {
    console.log(`${this.toString()} off`)
  }
  setAm(): void {
    console.log(`${this.toString()} set to AM`)
  }
  setFm(): void {
    console.log(`${this.toString()} set to FM`)
  }
  setFrequency(frequency: number): void {
    this.frequency = frequency
    console.log(`${this.toString()} set to frequency ${this.frequency}`)
  }
  toString(): string {
    return 'Tuner'
  }
}