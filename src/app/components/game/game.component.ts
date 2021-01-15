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
import { WordCheckerService } from 'src/app/services/word-checker/word-checker.service';
import { Noun } from 'src/app/models/word/noun';
import { CssSelector } from '@angular/compiler';
import { CompleteStory2 } from 'src/app/models/complete-story-2/complete-story2';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
// import {CookieService} from '@angular/common/http/ngx-cookie-service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})



export class GameComponent implements OnInit {

  public words: string[] = new Array();
  public missedWords: string[] = Array();
  public typeOfInputWords: string[] = Array();
  public newIncompleteStory: IncompleteStory = new IncompleteStory();
  public newCompoleteStory: string = '';
  public incompStory: string = '';
  public fieldColorStatus: string[] = Array();
  public filledFields: boolean = false;
  public cs: CompleteStory2 = new CompleteStory2();
  public isHiddenNewStory: boolean = true;
  public isHiddenGameContainer: boolean = true;
  public isHiddenGetStart: boolean = false;
  

  constructor(private ps: PlayService, private wc: WordCheckerService, private http: HttpClient, private cookieService:CookieService, private router: Router) { }

  ngOnInit(): void {

    if (!this.cookieService.get('user_id')) {
      this.router.navigate(['/login']);
    }
    //Get random story 5-7
    let r: number = Math.floor(Math.random() * 6) + 1;  // returns a random integer from 1 to 10 
    this.ps.getStory(r).subscribe(
      (response: IncompleteStory) => {
        this.newIncompleteStory = response;
      }
    )
    // console.log(this.cookieService.get('user_id'));
  }

  startGame() {
    this.isHiddenGameContainer = false;
    this.isHiddenGetStart = true;
    //Get incomplete story 
    this.incompStory = this.newIncompleteStory.incompleteStory;

    //Get array with missed type of words
    this.missedWords = this.ps.getMissedType(this.incompStory);
  }

  saveNewCompleteStory() {
    this.newCompoleteStory = this.incompStory;
    
    //Generate new completed story
    let regExp: RegExp = /\<\<([^>>]+)\>\>/;
    for (let i = 0; i < this.words.length; i++) {
      this.newCompoleteStory = this.newCompoleteStory.replace(regExp, this.words[i]);
    }
    this.cs.userIdf = +this.cookieService.get('user_id');
    this.cs.completedStoryf = this.newCompoleteStory;
    this.cs.parentStoryf = this.newIncompleteStory.storyId;

    //Check all fields
    if (this.checkFields(this.fieldColorStatus, this.missedWords)) {

      //Send completed story to server
      this.ps.saveCompleteStory2(this.cs).subscribe(
        (data: CompleteStory2) => {
          console.log(data);
        },
        () => {
          console.log("something went wrong sending your story");
        }
      );

      //show result for user
      this.isHiddenNewStory = false;
      this.isHiddenGameContainer = true;
    } else {
      console.log("fill all fields!");
    }
  }

  public restart() {
    location.reload();
  }

  // checkType(missedWords: string[], typeOfInputWords: string[]) {
  //   let fieldColorStatus: String[] = [];
  //   let correct: number = 0;
  //   for (let i: number = 0; i < missedWords.length; i++) {
  //     if (missedWords[i] == typeOfInputWords[i]) {
  //       correct++;
  //       fieldColorStatus.push("green");
  //     } else {
  //       fieldColorStatus.push("red");
  //     }
  //   }
  //   if (correct == missedWords.length) {
  //     console.log("all fields were filled correctly");
  //     this.filledFields = true;
  //   } else {
  //     console.log("please fill all fields");
  //     this.filledFields = false;
  //   }
  // }

  checkWord(event: any, i: number) {
    console.log(this.fieldColorStatus.length);
    this.wc.getWord(event.target.value).subscribe(
      (data: boolean) => {
        if (data) {
          this.fieldColorStatus[i] = "green";
          console.log(this.fieldColorStatus);
        } else {
          this.fieldColorStatus[i] = "red";
          console.log(this.fieldColorStatus);
        }
      },
      () => {
        console.log("something went wrong trying to get your word from API");
      }
    )

  }

  checkFields(fieldColorStatus: string[], missedWords: string[]): boolean {
    if (fieldColorStatus.length != missedWords.length) {
      return false;
    }
    for (let str of fieldColorStatus) {
      if (str != "green") {
        return false;
      }
    }
    return true;
  }
}
