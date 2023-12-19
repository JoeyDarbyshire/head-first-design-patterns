import { IIterator, IMenu, IMenuItem } from '../models'
import { DinerMenuIterator, PancakeHouseIterator } from './Iterators'
import { MenuItem } from './menuItem'

export class DinerMenu implements IMenu {
  private readonly MAX_ITEMS = 6
  private menuItems: IMenuItem[] = []

  constructor() {
    this.addItem(
      "Vegetarian BLT",
      "(Fakin\') Bacon with lettuce & tomato on whole wheat",
      true,
      2.99
    )
    
    this.addItem(
      "BLT",
      "Bacon with lettuce & tomato on whole wheat",
      false,
      2.99
    )
    
    this.addItem(
      "Soup of the Day",
      "Soup of the day, with a side of potato salad",
      false,
      3.29
    )
    
    this.addItem(
      "Hotdog",
      "A hot dog, with sauerkraut, relish, onions, topped with cheese",
      false,
      3.05
    )
    
  }

  public addItem(
    name: string,
    desc: string,
    vegetarian: boolean,
    price: number
  ) {
    const newMenuItem = new MenuItem(name, desc, vegetarian, price)
    if (this.menuItems.length >= this.MAX_ITEMS) {
      console.error('Sorry, menu is full!  Can\'t add item to menu')
    } else {
      this.menuItems.push(newMenuItem)
    }
  }

  public createIterator(): IIterator {
    return new DinerMenuIterator(this.menuItems)
  }
}

export class PancakeHouseMenu implements IMenu {
  private menuItems: Set<IMenuItem> = new Set()

  constructor() {
    this.addItem(
      "K&B\'s Pancake Breakfast",
      "Pancakes with scrambled eggs and toast",
      true,
      2.99
    )
    
    this.addItem(
      "Regular Pancake Breakfast",
      "Pancakes with fried eggs, sausage",
      false,
      2.99
    )
    
    this.addItem(
      "Blueberry Pancakes",
      "Pancakes made with fresh blueberries",
      true,
      3.49
    )
    
    this.addItem(
      "Waffles",
      "Waffles with your choice of blueberries or strawberries",
      true,
      3.59
    )
    
  }

  public addItem(
    name: string,
    desc: string,
    vegetarian: boolean,
    price: number
  ) {
    const newMenuItem = new MenuItem(name, desc, vegetarian, price)
    this.menuItems.add(newMenuItem)
  }

  public createIterator(): IIterator {
    return new PancakeHouseIterator(this.menuItems)
  }
}
