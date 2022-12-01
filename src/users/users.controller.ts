import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/users/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  show(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
