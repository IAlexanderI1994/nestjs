import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Res
} from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { ValidateObjectId } from '../pipes/validate-object-id.pipes'
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'
import { Response } from 'express'

@Controller('items')
export class ItemsController {

  constructor (private readonly itemsService : ItemsService) {}

  @Get()
  async findAll () : Promise<Item[]> {
    return this.itemsService.findAll()

  }

  @Get(':id')
  async findOne (@Param('id', new ValidateObjectId()) id, @Res() res) : Promise<Response> {
    const item = await this.itemsService.findOne(id)

    if (!item) {
      return res.status(404).json({ errors: { itemnotfound: 'Товар не найден' } })
    }
    return res.json(item)

  }

  @Post()
  create (@Body() createItemDto : CreateItemDto) : Promise<Item> {
    return this.itemsService.create(createItemDto)
  }

  @Delete(':id')
  delete (@Param('id') id) : Promise<Item> {
    return this.itemsService.delete(id)
  }

  @Put(':id')
  update (@Body() updateItemDto : CreateItemDto, @Param('id') id) : Promise<Item> {
    return this.itemsService.update(id, updateItemDto)
  }
}
