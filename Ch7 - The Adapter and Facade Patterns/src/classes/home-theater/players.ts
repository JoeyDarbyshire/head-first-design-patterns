import { IAmplifier, IPlayer } from '../../models'

export abstract class Player implements IPlayer {
  private movie: string = ''
  constructor(public amplifier: IAmplifier) { }
  on(): void {
    console.log(`${this.toString()} on`)
  }
  off(): void {
    console.log(`${this.toString()} off`)
  }
  pause(): void {
    console.log(`${this.toString()} is paused`)
  }
  play(movie: string): void {
    this.movie = movie
    console.log(`${this.toString()} playing "${this.movie}"`)
  }
  setSurroundAudio(): void {
    this.amplifier.setSurroundSound()
  }
  setTwoChannelAudio(): void {
    this.amplifier.setStereoSound()
  }
  stop(): void {
    console.log(`${this.toString()} stopped "${this.movie}"`)
  }

  abstract toString(): string;
}

export class StreamingPlayer extends Player {
  constructor(amplifier: IAmplifier) {
    super(amplifier)
  }
  toString(): string {
    return 'Streaming Player'
  }
}