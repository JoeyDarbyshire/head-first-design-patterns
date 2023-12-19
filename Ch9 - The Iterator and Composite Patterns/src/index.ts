import { DinerMenu, PancakeHouseMenu, Waitress } from './classes'

const pancakeHouseMenu = new PancakeHouseMenu()
const dinerMenu = new DinerMenu()

const waitress = new Waitress(pancakeHouseMenu, dinerMenu)

waitress.printMenu()