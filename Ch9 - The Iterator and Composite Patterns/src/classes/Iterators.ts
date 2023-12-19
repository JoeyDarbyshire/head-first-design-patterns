import { IIterator, IMenuItem } from '../models'

export class DinerMenuIterator implements IIterator {
  private items: IMenuItem[]
  private position = 0

  constructor(menuItems: IMenuItem[]) {
    this.items = menuItems
  }

  next(): IMenuItem {
    const menuItem = this.items[this.position]
    this.position += 1
    return menuItem
  }

  hasNext(): boolean {
    return this.position < this.items.length
  }
}

export class PancakeHouseIterator implements IIterator {
  private itemIterator: IterableIterator<IMenuItem>
  private currentPosition: IteratorResult<IMenuItem, any> | null = null

  constructor(menuItems: Set<IMenuItem>) {
    this.itemIterator = menuItems[Symbol.iterator]()
    this.currentPosition = this.itemIterator.next()
  }

  next(): IMenuItem {
    const nextItem = this.currentPosition?.value ?? null
    this.currentPosition = this.currentPosition?.done
      ? null
      : this.itemIterator.next()
    return nextItem
  }

  hasNext(): boolean {
    return !this.currentPosition?.done
  }
}
