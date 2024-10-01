import { Injectable } from '@nestjs/common';
import { User } from './user.interface'; // Importiraj User interface

@Injectable()
export class UsersService {
  // In-memory niz korisnika
  private users: User[] = [];

  // Funkcija sada vraća Promise<User[]>
  findAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  // Funkcija sada vraća Promise<User>
  findOne(id: number): Promise<User> {
    const user = this.users.find(user => user.id === id);
    return Promise.resolve(user);
  }

  // Funkcija vraća Promise<User>
  create(user: Partial<User>): Promise<User> {
    const newUser: User = { id: Date.now(), ...user } as User; // Dodaj ID korisniku
    this.users.push(newUser);
    return Promise.resolve(newUser);
  }

  // Funkcija sada vraća Promise<void>
  async remove(id: number): Promise<void> {
    this.users = this.users.filter(user => user.id !== id);
    return Promise.resolve();
  }
}
