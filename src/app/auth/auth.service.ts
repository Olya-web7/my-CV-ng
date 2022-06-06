import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  postAuth(user: any) {
    return this.http.post('https://dtapi.if.ua/api/', user);
  }
}
