import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username:string, password:string) {
    return this.http.post('/dtapi.if.ua/api/', {username, password});
  }

  private setSession(authResult: any) {
    localStorage.setItem('id_token', authResult.idToken);
  }  
}
