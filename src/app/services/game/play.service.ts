import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Globals } from 'src/app/globals';
import { CompleteStory } from 'src/app/models/complete-story/completestory';
import { IncompleteStory } from 'src/app/models/incomplete-story/incompletestory';
import { StoryCategory } from 'src/app/models/story-category/storycategory';


@Injectable({
  providedIn: 'root'
})

export class PlayService {

  getMissedType(incompStory: string): string[] {
    
    let arr:string[] = new Array();
    let regExp: RegExp = /\<\<([^>>]+)\>\>/;

    if (incompStory) {
      while(incompStory.search(regExp) != -1) {
        arr.push(incompStory.match(regExp)[1]);
        incompStory = incompStory.replace(regExp, "~");
      }
    }

    return arr;
  }

  globals:Globals = new Globals;
  url:string = this.globals.apiURL;
  // url:string = 'http://localhost:8080/madlibs/';


  constructor(private http: HttpClient) { }

  // getStory(category:StoryCategory): Observable<IncompleteStory> {
  //   return this.http.get(`${this.url}/incomplete/${category}`) as Observable<IncompleteStory>;
  // }

  // getStory(category:StoryCategory): Observable<IncompleteStory> {
  //   return this.http.get(`${this.url}/incomplete/${category}`) as Observable<IncompleteStory>;
  // }

  getStory(id:number): Observable<IncompleteStory> {
    return this.http.get<any>('http://localhost:8080/madlibs/game/write/'+id) as Observable<IncompleteStory>;
  }

  getCategoryList(): Observable<StoryCategory[]> {
    return this.http.get(`${this.url}/incomplete`) as Observable<StoryCategory[]>;
  }

  saveCompleteStory(story:CompleteStory): Observable<CompleteStory> {
    return this.http.post(`${this.url}/complete`, story) as Observable<CompleteStory>;
  }

  readStories(): Observable<CompleteStory[]> {
    // return this.http.get(`${this.url}/read`) as Observable<CompleteStory[]>;
    return this.http.get(`${this.url}/read`) as Observable<CompleteStory[]>;
  }

  rankStories(story:CompleteStory): Observable<CompleteStory[]> {
    return this.http.patch(`${this.url}/updaterank`, story) as Observable<CompleteStory[]>;
  }

  getAllCategories(): Observable<StoryCategory[]> {
    return this.http.get(`${this.url}/category`) as Observable<StoryCategory[]>;
  }
}
