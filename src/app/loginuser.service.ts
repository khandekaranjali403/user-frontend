import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  loginUser(user: User) {
    throw new Error('Method not implemented.');
  }

  // private baseUrl = "http://localhost:8081/user/login";
  // constructor(private httpClient: HttpClient) {

  //  this.loginUser(User: User): Observable <Object> {
  //   console.log(User);

  //     return this.httpClient.post(`${this.baseUrl}`,user));
  //   }
  // }
}
