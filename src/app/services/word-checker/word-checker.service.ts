import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../../models/word/word';
import { map } from 'rxjs/operators';
import { Noun } from 'src/app/models/word/noun';
import { Verb } from 'src/app/models/word/verb';


@Injectable({
  providedIn: 'root'
})
export class WordCheckerService {

  public words: Word = null;
  public result: string = '';
  public nouns: Noun = new Noun();
  public nounsArr: Noun[] = new Array;

  constructor(private http: HttpClient) { }

  //Return all information about this word
  getCollegiateAPI(word: string): Observable<Word> {
    return this.http.get<any>('https://dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=7908a05a-c765-4327-a810-55d6bf1591ec') as Observable<Word>;
  }

  getThesaurusAPI(word: string): Observable<Word> {
    return this.http.get<any>('https://dictionaryapi.com/api/v3/references/thesaurus/json/' + word + '?key=7908a05a-c765-4327-a810-55d6bf1591ec') as Observable<Word>;
  }

  getNoun(word: string): Noun[] {
    this.getCollegiateAPI(word).subscribe(
      (data: Word) => {
        this.words = data;
        for (var i in this.words) {
          let newObj: Noun = new Noun();
          if (this.words[i].fl == "noun") {

            this.nouns.fl = "noun";
            if (this.words[i].ins) {
              if (this.words[i].ins[0].il == "plural") {
                this.nouns.sls = "plural";
              }
            } else {
              this.nouns.sls = "singular";
            }
            let regExp: RegExp = /(^[^:]*)/;
            this.nouns.orig = regExp.exec(this.words[i].meta.id)[1];

            newObj.fl = this.nouns.fl;
            newObj.sls = this.nouns.sls;
            newObj.orig = this.nouns.orig;
            this.nounsArr.push(newObj);
          }

        }
      },
      () => {
        this.words = null;
        console.log("something went wrong trying to get your word");
      }
    )
    return this.nounsArr;
  }

  getVerb(word: string): Verb[] {
    this.getThesaurusAPI(word).subscribe(
      (data: Word) => {
        this.words = data;
        for (var i in this.words) {

          let newObj: Noun = new Noun();
          if (this.words[i].fl == "noun") {

            this.nouns.fl = "noun";
            if (this.words[i].ins) {
              if (this.words[i].ins[0].il == "plural") {
                this.nouns.sls = "plural";
              }
            } else {
              this.nouns.sls = "singular";
            }
            let regExp: RegExp = /(^[^:]*)/;
            this.nouns.orig = regExp.exec(this.words[i].meta.id)[1];

            newObj.fl = this.nouns.fl;
            newObj.sls = this.nouns.sls;
            newObj.orig = this.nouns.orig;
            this.nounsArr.push(newObj);
          }
        }
        
      },
      () => {
        this.words = null;
        console.log("something went wrong trying to get your word");
      }
    )
    return this.nounsArr;
  }
}