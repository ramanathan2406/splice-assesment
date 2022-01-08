import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

   login(_input:any) {
    return this.http.post<any>(`${''}/tecxprt/auth/login`, _input);
  }
}
