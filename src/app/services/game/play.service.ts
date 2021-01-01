import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompleteStory } from 'src/app/models/complete-story/completestory';
import { IncompleteStory } from 'src/app/models/incomplete-story/incompletestory';
import { StoryCategory } from 'src/app/models/story-category/storycategory';


@Injectable({
  providedIn: 'root'
})

export class PlayService {

  url="http://localhost:8083/madlibs/game";

  constructor(private http: HttpClient) { }

  getStory(category:StoryCategory): Observable<IncompleteStory> {
    return this.http.get(`${this.url}/incomplete/${category}`) as Observable<IncompleteStory>;
  }

  saveCompleteStory(story:CompleteStory): Observable<CompleteStory> {
    return this.http.post(`${this.url}/complete`, story) as Observable<CompleteStory>;
  }

  readStories(): Observable<CompleteStory[]> {
    return this.http.get(`${this.url}/read`) as Observable<CompleteStory[]>;
  }

  rankStories(story:CompleteStory): Observable<CompleteStory[]> {
    return this.http.patch(`${this.url}/updaterank`, story) as Observable<CompleteStory[]>;
  }
}
