import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WordCheckerService } from '../word-checker/word-checker.service';
import { Word } from 'src/app/models/word/word';
import { Noun } from 'src/app/models/word/noun';
import { User } from 'src/app/models/user/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public result: string = '';
  public words:Word = null;
  public nouns:Noun = new Noun();
  public user:User;

  checkLoginBE(login:string, pass:string) {
    //console.log(login, pass);
    return this.http.post<any>("http://localhost:8083/madlibs/login", {userName:login, pword:pass, withCredentials: true}) as Observable<string>;
  }

  logout() {
    //console.log(login, pass);
    return this.http.post<any>("http://localhost:8083/madlibs/login/done", {withCredentials: true}) as Observable<string>;
  }
  
}
