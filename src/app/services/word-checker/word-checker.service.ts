import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../../models/word/word';
import { map } from 'rxjs/operators';
import { Noun } from 'src/app/models/word/noun';


@Injectable({
  providedIn: 'root'
})
export class WordCheckerService {

  public words:Word[] = null;
  public result: string = '';
  public nouns:Noun = new Noun();

  constructor(private http:HttpClient) { }

  //Return all information about this word
  checkWord(word:String):Observable<Word> {
    return this.http.get<any>('https://dictionaryapi.com/api/v3/references/thesaurus/json/'+ word + '?key=e618ff16-ba5b-484a-8f1c-7c0928281c22') as Observable<Word>;
  }


  // public getNoun(word:String):Observable<Word[]> {
  //   return this.http
  //     .get('https://dictionaryapi.com/api/v3/references/thesaurus/json/'+ word + '?key=e618ff16-ba5b-484a-8f1c-7c0928281c22')
  //     .pipe(map(response => {
  //       const properties = response;
  //       return properties.map((fl: String, sls: String) => new Word(fl, sls));
  //     }))
  // }

  // return noun
  // getNoun(word:String):Word[] {
  //   var result:Word[];
  //   this.checkWord(word).subscribe (
  //     (data:any)=>{
  //       result = data;
  //       console.log(result[0].sls[0]);
  //       console.log(result[0].fl);
        
  //     }
  //   )
  //   return result;
  // }

  // getNoun(word:string):void {
  //   this.checkWord(word).subscribe (
  //     (data:Word)=>{
  //       this.words = data;
  //       for (var i in this.words) {
  //         if (this.words[i].fl == "noun") { 
  //           this.nouns.fl = this.words[i].fl;
  //           if (this.words[i].sls) {
  //             this.nouns.sls = "plural";
  //             let regExp:RegExp = /\|([^|]+)\|/;
  //             this.nouns.orig = regExp.exec(this.words[i].sls)[1];
  //             console.log(this.nouns);
  //           }
            
  //         }
  //       }
  //     },
  //     ()=>{
  //       this.words = null;
  //       console.log("something went wrong trying to get your word");
  //     }
  //   )
  // }
}
