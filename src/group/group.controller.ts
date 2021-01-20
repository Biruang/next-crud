import { Controller, Get, Post, Put, Delete, Param, Req } from '@nestjs/common';
import { GroupService } from './group.service';
import { Group } from './group.schema';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Get()
  async getAll(): Promise<Array<Group>> {
    return await this.groupService.findAll();
  }

  @Get(':id')
  async getById(@Param() params): Promise<Group> {
    return await this.groupService.findById(params.id);
  }

  @Post()
  async create(@Req() request) {
    return await this.groupService.create(request.body);
  }

  @Put(':id')
  async update(@Param() params, @Req() request): Promise<Group> {
    return await this.groupService.update(params.id, request.body);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Group> {
    return await this.groupService.delete(params.id);
  }
}
