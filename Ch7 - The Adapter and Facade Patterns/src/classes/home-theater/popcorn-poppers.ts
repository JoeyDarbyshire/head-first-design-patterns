import { IPopcornPopper } from '../../models'

export class PopcornPopper implements IPopcornPopper {
  on(): void {
    console.log(`${this.toString()} on`)
  }
  off(): void {
    console.log(`${this.toString()} off`)
  }
  pop(): void {
    console.log(`${this.toString()} popping popcorn!`)
  }
  toString(): string {
    return 'Popcorn Popper'
  }
  
}