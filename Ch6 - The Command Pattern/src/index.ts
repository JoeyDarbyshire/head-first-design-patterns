import {
  CeilingFan,
  CeilingFanOffCommand,
  CeilingFanOnCommand,
  GarageDoor,
  GarageDoorCloseCommand,
  GarageDoorOpenCommand,
  Light,
  LightOffCommand,
  LightOnCommand,
  SimpleRemoteControl,
  Stereo,
  StereoOffCommand,
  StereoOnWithCDCommand,
} from './classes'

// Create a new remote control
const remote = new SimpleRemoteControl()

// Create all of the devices
const livingRoomLight = new Light('Living Room')
const kitchenLight = new Light('Kitchen')
const ceilingFan = new CeilingFan('Living Room')
const garageDoor = new GarageDoor('Garage')
const stereo = new Stereo('Living Room')

// Create all on and off commands
const livingRoomLightOn = new LightOnCommand(livingRoomLight)
const livingRoomLightOff = new LightOffCommand(livingRoomLight)
const kitchenLightOn = new LightOnCommand(kitchenLight)
const kitchenLightOff = new LightOffCommand(kitchenLight)

const ceilingFanOn = new CeilingFanOnCommand(ceilingFan)
const ceilingFanOff = new CeilingFanOffCommand(ceilingFan)

const garageDoorOpen = new GarageDoorOpenCommand(garageDoor)
const garageDoorClose = new GarageDoorCloseCommand(garageDoor)

const stereoOnWithCD = new StereoOnWithCDCommand(stereo)
const stereoOff = new StereoOffCommand(stereo)

// Set all commands on Remote
remote.setCommand(0, livingRoomLightOn, livingRoomLightOff)
remote.setCommand(1, kitchenLightOn, kitchenLightOff)
remote.setCommand(2, ceilingFanOn, ceilingFanOff)
remote.setCommand(3, garageDoorOpen, garageDoorClose)
remote.setCommand(4, stereoOnWithCD, stereoOff)

remote.toString()

remote.onButtonWasPressed(0)
remote.offButtonWasPressed(0)
remote.undoButtonWasPushed()
remote.offButtonWasPressed(0)
remote.onButtonWasPressed(1)
remote.offButtonWasPressed(1)
remote.onButtonWasPressed(2)
remote.offButtonWasPressed(2)
remote.undoButtonWasPushed()
remote.offButtonWasPressed(2)
remote.onButtonWasPressed(3)
remote.offButtonWasPressed(3)
remote.onButtonWasPressed(4)
remote.offButtonWasPressed(4)