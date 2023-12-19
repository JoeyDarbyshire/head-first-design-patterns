import { IIterator } from '../models'
import { DinerMenu, PancakeHouseMenu } from './menus'

export class Waitress {
  
  constructor(
    private pancakeHouseMenu: PancakeHouseMenu,
    private dinerMenu: DinerMenu
  ) { }

  public printMenu(): void {
    const pancakeIterator = this.pancakeHouseMenu.createIterator()
    const dinerIterator = this.dinerMenu.createIterator()

    console.log('MENU\n----\nBREAKFAST')
    this.printMenuItems(pancakeIterator)
    console.log('\nLUNCH')
    this.printMenuItems(dinerIterator)
  }

  private printMenuItems(iterator: IIterator) {
    while (iterator.hasNext()) {
      const item = iterator.next()
      console.log(`${item.name}, ${item.price} -- ${item.description}`)
    }
  }
}