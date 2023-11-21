import { IAmplifier, IPlayer, ITuner } from '../../models'

export class Amplifier implements IAmplifier {
  private player: IPlayer | null = null
  private tuner: ITuner | null = null

  constructor() { }
  on(): void {
    console.log(`${this.toString()} on`)
  }
  off(): void {
    console.log(`${this.toString()} off`)
  }
  setStreamingPlayer(player: IPlayer): void {
    this.player = player
    console.log(`${this.toString()} setting Streaming player to ${this.player.toString()}`)
  }
  setStereoSound(): void {
    console.log(`${this.toString()} stereo sound on (2 speakers)`)
  }
  setSurroundSound(): void {
    console.log(`${this.toString()} surround sound on (5 speakers, 1 subwoofer)`)
  }
  setTuner(tuner: ITuner): void {
    this.tuner = tuner
    console.log(`${this.toString()} setting Streaming player to ${this.tuner.toString()}`)
  }
  setVolume(volume: number): void {
    console.log(`${this.toString()} setting volume to ${volume}`)
  }
  toString(): string {
    return 'Amplifier'
  }
}