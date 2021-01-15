import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WordCheckerService } from '../word-checker/word-checker.service';
import { Word } from 'src/app/models/word/word';
import { Noun } from 'src/app/models/word/noun';
import { User } from 'src/app/models/user/user';
import { User2 } from 'src/app/models/user/user2';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private cookieService:CookieService) { }

  public result: string = '';
  public words:Word = null;
  public nouns:Noun = new Noun();
  public user:User;

  checkLoginBE(login:string, pass:string) {
    //console.log(login, pass);
    return this.http.post<any>("http://localhost:8080/madlibs/login", {userName:login, pword:pass, withCredentials: true}) as Observable<string>;
  }

  checkLoginBE2(login:string, pass:string):Observable<User2> {
    //console.log(login, pass);
    return this.http.post<any>("http://localhost:8080/madlibs/login", {userName:login, pword:pass, withCredentials: true}) as Observable<User2>;
  }

  logout() {
    //console.log(login, pass);
    this.cookieService.set('user_id', null);
    return this.http.post<any>("http://localhost:8080/madlibs/login/done", {withCredentials: true}) as Observable<string>;
  }
  
}
