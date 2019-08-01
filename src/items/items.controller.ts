import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param
} from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'



@Controller('items')
export class ItemsController {

  constructor (private readonly itemsService : ItemsService) {}

  @Get()
  async findAll () : Promise<Item[]> {
    return this.itemsService.findAll()

  }

  @Get(':id')
  async findOne (@Param('id') id) : Promise<Item> {
    return this.itemsService.findOne(id)
  }

  @Post()
  create (@Body() data : CreateItemDto) : string {
    return `Name: ${data.name}. Description: ${data.description}`
  }

  @Delete(':id')
  delete (@Param('id') id) : string {
    return `delete item: ${id}`
  }

  @Put(':id')
  update (@Body()  data : CreateItemDto, @Param('id') id) : string {
    return `update item: ${id} name: ${data.name}`
  }

}
