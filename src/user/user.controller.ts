import { Controller, Get, Param, Post, Req, Put, Delete } from '@nestjs/common';
import { User } from './user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async getById(@Param() params): Promise<User[]> {
    const user = await this.userService.findById(params.id);
    return user;
  }

  @Post()
  async create(@Req() request): Promise<User> {
    return this.userService.create(request.body);
  }

  @Put(':id')
  async update(@Param() params, @Req() request): Promise<User> {
    return await this.userService.update(params.id, request.body);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<User> {
    return await this.userService.delete(params.id);
  }
}
