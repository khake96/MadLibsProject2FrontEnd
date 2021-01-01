import { Injectable } from '@angular/core';
import { IncompleteStory } from 'src/app/models/incomplete-story/incompletestory';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private incompleteStory:IncompleteStory) { }

  makeFilledStoryString(incompleteStory) {

    
    // parse the story string and reference to determine how many
    // of each kind of word need to be called.
  }


}
