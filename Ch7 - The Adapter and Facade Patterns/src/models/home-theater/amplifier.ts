import { IPlayer } from './player'
import { ITuner } from './tuner'

export interface IAmplifier {
  on(): void
  off(): void
  setStreamingPlayer(player: IPlayer): void
  setStereoSound(): void
  setSurroundSound(): void
  setTuner(tuner: ITuner): void
  setVolume(volume: number): void
  toString(): string
}