import { CoffeeWithHook, TeaWithHook } from './classes'

const coffee = new CoffeeWithHook()
const tea = new TeaWithHook()

console.log('\nMaking Coffee...')
coffee.prepareRecipe()

console.log('\nMaking Tea...')
tea.prepareRecipe()