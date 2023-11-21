import { IPlayer } from './player'

export interface IProjector {
  player: IPlayer
  on(): void
  off(): void
  tvMode(): void
  wideScreenMode(): void
  toString(): string
}