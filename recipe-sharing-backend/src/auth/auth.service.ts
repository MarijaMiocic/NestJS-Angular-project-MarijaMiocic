import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password, username } = registerDto;

    // Provjera postoji li korisnik s istim emailom
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      throw new Error('User already exists');
    }

    // Hashiranje lozinke
    const hashedPassword = await bcrypt.hash(password, 10);

    // Spremanje korisnika u bazu
    const newUser = this.usersRepository.create({ email, password: hashedPassword, username });
    await this.usersRepository.save(newUser);

    return newUser;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Pronađi korisnika po emailu
    const user = await this.usersRepository.findOne({ where: { email } });
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
