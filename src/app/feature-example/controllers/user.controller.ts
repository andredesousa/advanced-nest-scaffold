import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from '../dtos/user.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<UserDto> {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: UserDto): Promise<UserDto> {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  update(@Body() updateUserDto: UserDto): Promise<UserDto> {
    return this.userService.update(updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
