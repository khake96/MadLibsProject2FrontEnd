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
  public words2: Word = null;
  public result: string = '';
  public nouns: Noun = new Noun();
  public verbs: Verb = new Verb();
  public nounsArr: Noun[] = new Array;
  public verbsArr: Verb[] = new Array;

  constructor(private http: HttpClient) { }

  //Return all information about this word
  getCollegiateAPI(word: string): Observable<Word> {
    return this.http.get<any>('https://dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=7908a05a-c765-4327-a810-55d6bf1591ec') as Observable<Word>;
  }

  getThesaurusAPI(word: string): Observable<Word> {
    return this.http.get<any>('https://dictionaryapi.com/api/v3/references/thesaurus/json/' + word + '?key=e618ff16-ba5b-484a-8f1c-7c0928281c22') as Observable<Word>;
  }


  getWord(word: string) {
    return this.getThesaurusAPI(word).pipe(map(
      (data: Word) => {
        console.log(data);
        if (data[5]) {
          return true;
        } else {
          return false;
        }
      },
      () => {
        this.words = null;
        console.log("something went wrong trying to get your word");
      }
    ))
  }


  getNoun(word: string) {
    return this.getThesaurusAPI(word).pipe(map(
      (data: Word) => {
        this.words = data;
        for (var i in this.words) {
          let newObj: Noun = new Noun();
          if (this.words[i].fl == "noun") {
            this.nouns.fl = "noun";
            if (this.words[i].sls) {
              this.nouns.sls = "plural noun";
            } else {
              this.nouns.sls = "singular noun";
            }
            let regExp: RegExp = /(^[^:]*)/;
            this.nouns.orig = regExp.exec(this.words[i].meta.id)[1];

            newObj.fl = this.nouns.fl;
            newObj.sls = this.nouns.sls;
            newObj.orig = this.nouns.orig;
            this.nounsArr.push(newObj);
          }

        }
        return this.nounsArr;
      },
      () => {
        this.words = null;
        console.log("something went wrong trying to get your word");
      }
    ))
  }

  getVerb(word: string): Verb[] {
    this.getThesaurusAPI(word).subscribe(
      (data: Word) => {
        this.words = data;
        for (var i in this.words) {

          let newObj: Verb = new Verb();
          if (this.words[i].fl == "verb") {

            this.verbs.fl = "verb";

            if (this.words[i].sls) {
              this.verbs.sls = this.words[i].sls[0];

              let regExp: RegExp = /\|(.*)\|/;
              this.verbs.orig = regExp.exec(this.words[i].sls)[1];
            }


            newObj.fl = this.verbs.fl;
            newObj.sls = this.verbs.sls;
            newObj.orig = this.verbs.orig;
            this.verbsArr.push(newObj);
          }
        }

      },
      () => {
        this.words = null;
        console.log("something went wrong trying to get your word");
      }
    )
    return this.verbsArr;
  }
}