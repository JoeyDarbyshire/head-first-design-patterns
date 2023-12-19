import { IMenuItem } from './menuItem'

export interface IIterator {
  hasNext(): boolean
  next(): IMenuItem
}