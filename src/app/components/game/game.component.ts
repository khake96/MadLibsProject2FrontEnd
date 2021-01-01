import { Component, OnInit } from '@angular/core';
import { PlayService } from 'src/app/services/game/play.service';
import { Word } from 'src/app/models/word/word';
import { User } from 'src/app/models/user/user'
import { IncompleteStory } from 'src/app/models/incomplete-story/incompletestory';
import { CompleteStory } from 'src/app/models/complete-story/completestory';
import { StoryCategory } from 'src/app/models/story-category/storycategory';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  playServer: PlayService;
  newCategory: StoryCategory;
  newIncompleteStory: IncompleteStory;
  //newCompleteStory: CompleteStory;
  displayCompleteStory: CompleteStory;
  completedStories: CompleteStory[];
  rankedCompleteStory: CompleteStory;
  user: User;
  word: Word;

  constructor() { }

  ngOnInit(): void {
  }

  getIncompleteStory() {
    this.playServer.getStory(this.newCategory).subscribe(
     (response: IncompleteStory) => {
       this.newIncompleteStory = response;
     } 
    )
    // TODO add parsing of the new story to give appropriate prompts
    // TODO When prompting complete, display completed story to reader
  }

  saveNewCompleteStory() {
    this.playServer.saveCompleteStory(this.displayCompleteStory).subscribe(
      (response: CompleteStory) => {
        this.displayCompleteStory = response;
      }
    )
    // TODO Send the returned complete story in the completed story format
  }

  readCompleteStories() {
    this.playServer.readStories().subscribe(
      (response: CompleteStory[]) => {
        this.completedStories = response;
      }
    )
    // Display table by star ranking initially. Have columns sortable?
    // TODO Display table of short versions of the story for the user to view
    // TODO When the select the story they want, pop it open in rull view in a
    // new window.
  }

  saveStoryRanking() {
    // This starts when the user clicks "Next Story" and the star for 
    // and the star for that story is checked
    this.playServer.rankStories(this.rankedCompleteStory).subscribe(
      (response: CompleteStory[]) => {
        this.completedStories = response;
      }
    )
    // All of the tables come back to be displayed with the new star ranking
    // added. 
  }

  sendWord() {
    
  }

}
