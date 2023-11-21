import { IPlayer, IProjector } from '../../models'

export class Projector implements IProjector {
  constructor(public player: IPlayer) { }
  on(): void {
    console.log(`${this.toString()} on`)
  }
  off(): void {
    console.log(`${this.toString()} off`)
  }
  tvMode(): void {
    console.log(`${this.toString()} in tv mode (4x3 aspect ratio)`)
  }
  wideScreenMode(): void {
    console.log(`${this.toString()} in widescreen mode (16x9 aspect ratio)`)
  }
  toString(): string {
    return 'Projector'
  }

}