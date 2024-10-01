import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password, username } = registerDto;

    // Provjera postoji li korisnik s istim emailom
    const user = this.usersService.findAll().find(u => u.email === email);
    if (user) {
      throw new Error('User already exists');
    }

    // Hashiranje lozinke
    const hashedPassword = await bcrypt.hash(password, 10);

    // Kreiraj korisnika u memoriji
    const newUser = this.usersService.create({
      email,
      password: hashedPassword,
      username: username,
    });

    return newUser;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Pronađi korisnika po emailu
    const user = this.usersService.findAll().find(u => u.email === email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Usporedi lozinku
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // Generiranje JWT tokena
    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }
}
