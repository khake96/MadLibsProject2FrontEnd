import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../models/word';

@Injectable({
  providedIn: 'root'
})
export class WordCheckerService {

  constructor(private http:HttpClient) { }

  //Return all information about this word
  checkWord(word:string):Observable<Word> {
    return this.http.get('https://dictionaryapi.com/api/v3/references/thesaurus/json/'+ word + '?key=e618ff16-ba5b-484a-8f1c-7c0928281c22') as Observable<Word>;
  }

}
