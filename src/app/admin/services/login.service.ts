import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  checkLoginBE(login:string, pass:string) {
    console.log(login, pass);
    return this.http.post<any>("http://localhost:8080/madlibs/login", {userName:login, password:pass}) as Observable<string>;
  }
}
