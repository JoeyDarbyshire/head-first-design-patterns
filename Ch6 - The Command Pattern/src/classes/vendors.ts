

export class Light {
  private status: boolean = false
  constructor(private name: string) { }

  on(): void {
    this.status = true
    this.displayStatus()
  }

  off(): void {
    this.status = false
    this.displayStatus()
  }

  private displayStatus(): void {
    console.log(`${this.name} light is ${this.status ? 'on' : 'off'}!`)
  }
}

export class GarageDoor {
  private light: Light
  private readonly doorPositionMin = 0
  private readonly doorPositionMax = 10
  private doorPosition: number = 0
  constructor(private name: string) {
    this.light = new Light(this.name)
  }

  up() {
    this.doorPosition = this.doorPositionMax
    this.displayStatus()
  }

  down() {
    this.doorPosition = this.doorPositionMin
    this.displayStatus()
  }

  private displayStatus() {
    let status = ''
    if (this.doorPosition === this.doorPositionMax) {
      status = 'Open'
    } else if (this.doorPosition === this.doorPositionMin) {
      status = 'Closed'
    } else {
      status = `${this.doorPosition}/${this.doorPositionMax} Open`
    }

    console.log(`${this.name} Door is ${status}`)
  }

  stop() {
    // Not programming
  }

  lightOn() {
    this.light.on()
  }

  lightOff() {
    this.light.off()
  }
}

export const enum AudioSource {
  cd = 'cd',
  dvd = 'dvd',
  radio = 'radio',
}

export class Stereo {
  private power: boolean = false
  private audioSource: AudioSource | null = null
  private readonly minVolume = 0
  private readonly maxVolume = 25
  private volume: number = this.minVolume
  constructor(private name: string) { }

  getAudioSource(): AudioSource | null {
    return this.audioSource
  }

  getvolume(): number {
    return this.volume
  }

  on() {
    this.power = true
    this.displayStatus()
  }

  off() {
    this.power = false
    this.displayStatus()
  }

  private displayStatus() {
    console.log(`${this.name} stereo is ${this.power ? 'on' : 'off'}!`)
  }

  setCd() {
    this.audioSource = AudioSource.cd
    this.nowPlaying()
  }

  setDvd() {
    this.audioSource = AudioSource.dvd
    this.nowPlaying()
  }

  setRadio() {
    this.audioSource = AudioSource.radio
    this.nowPlaying()
  }

  private checkVolume(volume: number) {
    if (volume < this.minVolume || volume >= this.maxVolume) {
      throw new Error(`Volume ${volume} is not available on this stereo`)
    }
  }

  setVolume(volume: number) {
    this.checkVolume(volume)
    this.volume = volume
  }

  private nowPlaying() {
    if (this.power) {
      console.log(`${this.name} stereo is now playing ${this.audioSource} at volume ${this.volume}!`)
    } else {
      this.displayStatus()
    }
  }
}

export const enum FanSpeed {
  off = 'off',
  low = 'low',
  medium = 'medium',
  high = 'high'
}

export class CeilingFan {
  private speed: FanSpeed = FanSpeed.off
  constructor(private name: string) { }

  off() {
    this.speed = FanSpeed.off
    this.toString()
  }

  low() {
    this.speed = FanSpeed.low
    this.toString()
  }

  medium() {
    this.speed = FanSpeed.medium
    this.toString()
  }

  high() {
    this.speed = FanSpeed.high
    this.toString()
  }

  getSpeed(): FanSpeed {
    return this.speed
  }

  toString() { 
    console.log(`${this.name} ceiling fan is ${this.speed === FanSpeed.off ? '' : 'on '}${this.speed}`)
  }
}