import {
  IAmplifier,
  IHomeTheater,
  IPlayer,
  IPopcornPopper,
  IProjector,
  IScreen,
  ITheaterLight,
  ITuner,
} from '../../models'

export class HomeTheaterFacade implements IHomeTheater {
  constructor(
    private amp: IAmplifier,
    private lights: ITheaterLight,
    private player: IPlayer,
    private popper: IPopcornPopper,
    private projector: IProjector,
    private screen: IScreen,
    private tuner: ITuner,
  ) { }

  watchMovie(movie: string): void {
    console.log('Get ready to watch a movie....')
    this.popper.on()
    this.popper.pop()
    this.lights.dim(10)
    this.screen.down()
    this.projector.on()
    this.projector.wideScreenMode()
    this.amp.on()
    this.amp.setStreamingPlayer(this.player)
    this.amp.setSurroundSound()
    this.amp.setVolume(5)
    this.player.on()
    this.player.play(movie)
  }

  endMovie(): void {
    console.log('Shutting movie theater down....')
    this.popper.off()
    this.lights.on()
    this.screen.up()
    this.projector.off()
    this.amp.off()
    this.player.stop()
    this.player.off()
  }

  listenToRadio(): void {
    // not implemented yet
  }

  endRadio(): void {
    // not implemented yet
  }
}