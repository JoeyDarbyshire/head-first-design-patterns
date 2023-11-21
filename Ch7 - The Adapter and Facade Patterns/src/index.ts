// Duck Stuff

// import { MallardDuck, TurkeyAdapter, WildTurkey } from './classes'
// import { IDuck } from './models'

// const duck = new MallardDuck()
// const turkey = new WildTurkey()
// const turkeyAdapter = new TurkeyAdapter(turkey)

// const ducktest = (duck: IDuck): void => {
//   duck.quack()
//   duck.fly()
// }

// console.log('The Turkey says...')
// turkey.gobble()
// turkey.fly()

// console.log('\nThe Duck says...')
// duck.quack()
// duck.fly()

// console.log('\nThe TurkeyAdapter says...')
// turkeyAdapter.quack()
// turkeyAdapter.fly()

import { Amplifier, HomeTheaterFacade, PopcornPopper, Projector, StreamingPlayer, TheaterLight, TheaterScreen, Tuner } from './classes'
import { } from './models'

const amp = new Amplifier()
const lights = new TheaterLight()
const player = new StreamingPlayer(amp)
const popper = new PopcornPopper()
const projector = new Projector(player)
const screen = new TheaterScreen()
const tuner = new Tuner(amp)

const homeTheaterFacade = new HomeTheaterFacade(
  amp,
  lights,
  player,
  popper,
  projector,
  screen,
  tuner
)

homeTheaterFacade.watchMovie('Raiders of the Lost Ark')
homeTheaterFacade.endMovie()