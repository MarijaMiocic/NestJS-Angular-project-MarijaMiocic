import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  // In-memory niz korisnika
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find(user => user.id === id);
  }

  create(user: Partial<User>): User {
    const newUser = { id: Date.now(), ...user }; // Dodaj ID korisniku
    this.users.push(newUser as User);
    return newUser as User;
  }

  remove(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
