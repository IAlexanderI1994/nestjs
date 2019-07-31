import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param
  /*
  Req,
  Res

   */
} from '@nestjs/common'
import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'

//import {Request, Response} from "express";

@Controller('items')
export class ItemsController {

  private readonly itemsService

  constructor () {
    this.itemsService = new ItemsService()
  }

  // @Get()
  // findAll(@Req() req: Request, @Res() res: Response): Response {
  //
  //     return res.send('Hello world ' + req.url)
  // }
  @Get()
  findAll () : Item[] {
    return this.itemsService.findAll()

  }

  @Get(':id')
  findOne (@Param('id') id) : string {
    return `item: ${id}`
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
