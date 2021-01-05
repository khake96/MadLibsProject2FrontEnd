import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WordCheckerService } from '../word-checker/word-checker.service';
import { Word } from 'src/app/models/word/word';
import { Noun } from 'src/app/models/word/noun';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public result: string = '';
  public words:Word = null;
  public nouns:Noun = new Noun();

  checkLoginBE(login:string, pass:string) {
    console.log(login, pass);
    return this.http.post<any>("http://localhost:8080/madlibs/login", {userName:login, password:pass}) as Observable<string>;
  }
}
