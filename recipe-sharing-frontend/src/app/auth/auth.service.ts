import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/auth';  // Ovo bi bio backend URL

  constructor(private http: HttpClient) {}

  // Poziv za prijavu
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  // Poziv za registraciju
  register(data: { email: string; password: string; username: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }
}
