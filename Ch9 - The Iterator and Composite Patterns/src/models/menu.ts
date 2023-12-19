import { IIterator } from './iterator'

export interface IMenu {
  createIterator(): IIterator
}