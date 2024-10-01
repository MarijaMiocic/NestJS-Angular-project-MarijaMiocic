import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../users/user.interface'; // Import interfejsa umjesto entiteta
import { AuthService } from '../auth/auth.service'; // Import AuthService
import { RegisterDto } from '../auth/dto/register.dto'; // Import RegisterDto
import { LoginDto } from '../auth/dto/login.dto'; // Import LoginDto

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService 
  ) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(+id);
  }

  // Registracija novog korisnika
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  // Prijava korisnika
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
