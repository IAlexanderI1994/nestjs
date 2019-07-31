import { Injectable } from '@nestjs/common'
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {

  private readonly items : Item[] = [
    {
      id: '454353535',
      name: 'Vasya',
      qty: 500,
      description: 'item 1'

    },
    {
      id: '45435335',
      name: 'Vasya',
      qty: 300,
      description: 'item 2'

    },
    {
      id: '453535335',
      name: 'Vasya',
      qty: 100,
      description: 'item 3'

    },

  ]

  findAll () : Item[] {
    return this.items
  }
}
