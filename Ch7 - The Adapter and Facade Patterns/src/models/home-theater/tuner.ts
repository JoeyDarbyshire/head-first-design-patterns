import { IAmplifier } from './amplifier'

export interface ITuner {
  amplifier: IAmplifier
  on(): void
  off(): void
  setAm(): void
  setFm(): void
  setFrequency(frequency: number): void
  toString(): string
}