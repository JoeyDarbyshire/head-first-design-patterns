import { ChocolateBoiler } from './classes'

// Unable to do because constructor is private
// const boiler = new ChocolateBoiler()
let boiler = ChocolateBoiler.getInstance()
console.log(`Fill status: ${boiler.isEmpty() ? 'Empty' : 'Full'}`)
console.log(`Boil status: ${boiler.isBoiled() ? 'Boiled' : 'Not Boiled'}`)

boiler.fill()
console.log(`Fill status: ${boiler.isEmpty() ? 'Empty' : 'Full'}`)
console.log(`Boil status: ${boiler.isBoiled() ? 'Boiled' : 'Not Boiled'}`)

boiler = ChocolateBoiler.getInstance()
// These values should be the same as the ones above
console.log(`Fill status: ${boiler.isEmpty() ? 'Empty' : 'Full'}`)
console.log(`Boil status: ${boiler.isBoiled() ? 'Boiled' : 'Not Boiled'}`)

boiler.boil()
console.log(`Fill status: ${boiler.isEmpty() ? 'Empty' : 'Full'}`)
console.log(`Boil status: ${boiler.isBoiled() ? 'Boiled' : 'Not Boiled'}`)

boiler.drain()
console.log(`Fill status: ${boiler.isEmpty() ? 'Empty' : 'Full'}`)
console.log(`Boil status: ${boiler.isBoiled() ? 'Boiled' : 'Not Boiled'}`)