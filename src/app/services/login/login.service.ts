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

  constructor(private http:HttpClient, private wc: WordCheckerService) { }

  public result: string = '';
  public words:Word = null;
  public nouns:Noun = new Noun();

  checkLoginBE(login:string, pass:string) {
    console.log(login, pass);
    return this.http.post<any>("http://localhost:8080/madlibs/login", {userName:login, password:pass}) as Observable<string>;
  }

  getNoun(word:string):void {
    this.wc.checkWord(word).subscribe (
      (data:Word)=>{
        this.words = data;
        for (var i in this.words) {
          if (this.words[i].fl == "noun") { 
            this.nouns.fl = this.words[i].fl;
            if (this.words[i].sls) {
              this.nouns.sls = "plural";
              let regExp:RegExp = /\|([^|]+)\|/;
              this.nouns.orig = regExp.exec(this.words[i].sls)[1];
              console.log(this.nouns);
            }
            
          }
        }
      },
      ()=>{
        this.words = null;
        console.log("something went wrong trying to get your word");
      }
    )
  }



}
