import { Component, NgModule, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals';
import { PlayService } from 'src/app/services/game/play.service';
import { Word } from 'src/app/models/word/word';
import { User } from 'src/app/models/user/user'
import { IncompleteStory } from 'src/app/models/incomplete-story/incompletestory';
import { CompleteStory } from 'src/app/models/complete-story/completestory';
import { WordService } from 'src/app/services/game/word.service';
import { stringify } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})



export class GameComponent implements OnInit {

  public word1: string = '';
  public word2: string = '';
  public word3: string = '';
  words: string[] = new Array();

  public incompStory: string = '';
  public newCompoleteStory: string = '';
  newIncompleteStory: IncompleteStory = new IncompleteStory();

  public isHidden: boolean = true;

  // playServer: PlayService;
  // newIncompleteStory: IncompleteStory;
  //newCompleteStory: CompleteStory;
  displayCompleteStory: CompleteStory;
  completedStories: CompleteStory[];
  rankedCompleteStory: CompleteStory;
  user: User;
  word: Word;

  constructor(private http: HttpClient, private ps: PlayService) { }

  ngOnInit(): void {

    this.ps.getStory(1).subscribe(
      (response: IncompleteStory) => {
        this.newIncompleteStory = response;
      }
    )

  }

  startGame() {
    //Get incomplete story 
    this.incompStory = this.newIncompleteStory.incompleteStory;

    //Get array with missed type of words
    let arr: string[] = this.ps.getMissedType(this.incompStory);
    console.log(arr);

    //Create input fields in html = arr[]

  }

  // getIncompleteStory(id: number): IncompleteStory {
  //   this.ps.getStory(id).subscribe(
  //     (response: IncompleteStory) => {
  //       this.newIncompleteStory = response;
  //     }
  //   )
  //   return this.newIncompleteStory;
  // }

  saveNewCompleteStory() {

    // console.log(regExp.exec(this.incompStory));

    console.log("word1= " + this.word1);
    console.log("word2= " + this.word2);
    console.log("word3= " + this.word3);

    this.words.push(this.word1);
    this.words.push(this.word2);
    this.words.push(this.word3);

    for (let i: number = 0; i < 3; i++) {
      // this.newCompoleteStory = this.newCompoleteStory.replace(regExp, this.words[i]);
    }

    this.isHidden = false;

  }

  readCompleteStories() {
    this.ps.readStories().subscribe(
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
    this.ps.rankStories(this.rankedCompleteStory).subscribe(
      (response: CompleteStory[]) => {
        this.completedStories = response;
      }
    )
    // All of the tables come back to be displayed with the new star ranking
    // added. 
  }

  checkWord() {

  }


  // console.log(word1);
  // console.log(word2);
  // console.log(word3);
}
