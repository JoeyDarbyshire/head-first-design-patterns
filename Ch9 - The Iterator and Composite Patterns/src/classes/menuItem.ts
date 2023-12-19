import { IMenuItem } from '../models'

export class MenuItem implements IMenuItem {
  constructor(
    public name: string,
    public description: string,
    public vegetarian: boolean,
    public price: number
  ) { }
}