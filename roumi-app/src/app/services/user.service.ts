import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  login( email: string, password: string ){
    return this.http.post<any>('http://localhost:3001/login', { email:email, password:password });
  }
}
