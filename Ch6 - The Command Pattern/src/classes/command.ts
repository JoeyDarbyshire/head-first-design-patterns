import { ICommand } from '../models'
import { AudioSource, CeilingFan, FanSpeed, GarageDoor, Light, Stereo } from './vendors'

export abstract class Command implements ICommand {
  abstract getClassName(): string
  abstract execute(): void
  abstract undo(): void
}

export class NoCommand implements Command {
  constructor() { }

  getClassName(): string {
    return 'NoCommand'
  }

  execute(): void {
    console.log('No Command Implemented')
  }

  undo(): void {
    console.log('No Command Implemented')
  }
}

export class LightOnCommand implements Command {
  constructor(private light: Light) { }

  getClassName(): string {
    return 'LightOnCommand'
  }

  execute(): void {
    this.light.on()
  }

  undo(): void {
    this.light.off()
  }
}

export class LightOffCommand implements Command {
  constructor(private light: Light) { }

  getClassName(): string {
    return 'LightOffCommand'
  }

  execute(): void {
    this.light.off()
  }
  
  undo(): void {
    this.light.on()
  }
}

export class GarageDoorOpenCommand implements Command {
  constructor(private garageDoor: GarageDoor) { }

  getClassName(): string {
    return 'GarageDoorOpenCommand'
  }

  execute(): void {
    this.garageDoor.up()
  }

  undo(): void {
    this.garageDoor.down()
  }
}

export class GarageDoorCloseCommand implements Command {
  constructor(private garageDoor: GarageDoor) { }

  getClassName(): string {
    return 'GarageDoorCloseCommand'
  }

  execute(): void {
    this.garageDoor.down()
  }

  undo(): void {
    this.garageDoor.up()
  }
}

export class StereoOnWithCDCommand implements Command {
  constructor(private stereo: Stereo) { }
  private previousAudioSource: AudioSource | null = null
  private previousVolume: number = 0

  getClassName(): string {
    return 'StereoOnWithCDCommand'
  }

  execute(): void {
    this.previousAudioSource = this.stereo.getAudioSource()
    this.previousVolume = this.stereo.getvolume()
    this.stereo.on()
    this.stereo.setCd()
    this.stereo.setVolume(11)
  }

  undo(): void {
    this.stereo.setVolume(this.previousVolume)
    switch (this.previousAudioSource) {
      case AudioSource.cd:
        this.stereo.setCd()
        break
      case AudioSource.dvd:
        this.stereo.setDvd()
        break
      case AudioSource.radio:
        this.stereo.setRadio()
        break
    }
    this.stereo.off()
  }
}

export class StereoOffCommand implements Command {
  constructor(private stereo: Stereo) { }

  getClassName(): string {
    return 'StereoOffCommand'
  }

  execute(): void {
    this.stereo.off()
  }

  undo(): void {
    this.stereo.on()
  }
}

export class CeilingFanOnCommand implements Command {
  private previousSpeed: FanSpeed = FanSpeed.off
  constructor(private ceilingFan: CeilingFan) { }

  getClassName(): string {
    return 'CeilingFanOnCommand'
  }

  execute(): void {
    this.previousSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.high()
  }

  undo(): void {
    switch (this.previousSpeed) {
      case FanSpeed.high:
        this.ceilingFan.high()
        break
      case FanSpeed.medium:
        this.ceilingFan.medium()
        break
      case FanSpeed.low:
        this.ceilingFan.low()
        break
      case FanSpeed.off:
        this.ceilingFan.off()
        break
    }
  }
}

export class CeilingFanOffCommand implements Command {
  private previousSpeed: FanSpeed = FanSpeed.off
  constructor(private ceilingFan: CeilingFan) { }

  getClassName(): string {
    return 'CeilingFanOffCommand'
  }

  execute(): void {
    this.previousSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.off()
  }

  undo(): void {
    switch (this.previousSpeed) {
      case FanSpeed.high:
        this.ceilingFan.high()
        break
      case FanSpeed.medium:
        this.ceilingFan.medium()
        break
      case FanSpeed.low:
        this.ceilingFan.low()
        break
      case FanSpeed.off:
        this.ceilingFan.off()
        break
    }
  }
}

export class MacroCommand implements Command {
  constructor(private commands: Command[]) { }

  getClassName(): string {
    return this.commands.map(command => command.getClassName()).join(' / ')
  }

  execute(): void {
    this.commands.forEach(command => command.execute())
  }

  undo(): void {
    this.commands.forEach(command => command.undo())
  }
}
