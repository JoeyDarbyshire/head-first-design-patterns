import { IAmplifier } from './amplifier'

export interface IPlayer {
  amplifier: IAmplifier
  on(): void
  off(): void
  pause(): void
  play(movie: string): void
  setSurroundAudio(): void
  setTwoChannelAudio(): void
  stop(): void
  toString(): string
}