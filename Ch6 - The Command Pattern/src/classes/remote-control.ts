import { Command, NoCommand } from './command'

export class SimpleRemoteControl {
  private onCommands: Command[] = []
  private offCommands: Command[] = []
  private commandsMaxSize = 7
  private undoCommand: Command

  constructor() {
    const noCommand = new NoCommand()
    for (let i = 0; i < this.commandsMaxSize; i++) {
      this.onCommands[i] = noCommand
      this.offCommands[i] = noCommand
    }
    this.undoCommand = noCommand
  }

  private checkSlotAvailable(slot: number): void {
    if (slot < 0 || slot >= this.commandsMaxSize) {
      throw new Error(`Slot ${slot} is not available on this remote control`)
    }
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.checkSlotAvailable(slot)

    this.onCommands[slot] = onCommand
    this.offCommands[slot] = offCommand
  }

  onButtonWasPressed(slot: number): void {
    this.checkSlotAvailable(slot)
    this.onCommands[slot].execute()
    this.undoCommand = this.onCommands[slot]
  }

  offButtonWasPressed(slot: number): void {
    this.checkSlotAvailable(slot)
    this.offCommands[slot].execute()
    this.undoCommand = this.offCommands[slot]
  }

  undoButtonWasPushed(): void {
    this.undoCommand.undo()
  }

  toString(): void {
    console.log(`\n----- Remote Control -----\n`)
    for (let i = 0; i < this.commandsMaxSize; i++) {
      console.log(`[slot ${i}]`)
      console.log(`    ON: ${this.onCommands[i].getClassName()}`)
      console.log(`   OFF: ${this.offCommands[i].getClassName()}`)
    }
    console.log(`[undo] ${this.undoCommand.getClassName()}`)
  }
}