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
  public isHidden: boolean = true;
  public fieldColorStatus: string[] = Array();
  public filledFields: boolean = false;
  public cs: CompleteStory2 = new CompleteStory2();

  constructor(private ps: PlayService, private wc: WordCheckerService, private http: HttpClient) { }

  ngOnInit(): void {
    //Get random story
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
    this.missedWords = this.ps.getMissedType(this.incompStory);
  }

  saveNewCompleteStory() {
    this.newCompoleteStory = this.incompStory;

    // this.checkType(this.missedWords, this.typeOfInputWords);
    // setTimeout(this.checkType, 1500, this.missedWords, this.typeOfInputWords)

    //Generate new completed story
    // setTimeout(function x () {
    // if (this.filledFields) {
    let regExp: RegExp = /\<\<([^>>]+)\>\>/;
    for (let i = 0; i < this.words.length; i++) {
      this.newCompoleteStory = this.newCompoleteStory.replace(regExp, this.words[i]);
    }
    //Send completed story to back
    this.cs.userId = 1;
    this.cs.completedStory = this.newCompoleteStory;
    this.cs.parentStory = this.newIncompleteStory;
    console.log(this.cs);

    this.ps.saveCompleteStory2(this.cs).subscribe(
      (data: CompleteStory2) => {
        console.log(data);
      },
      () => {
        console.log("something went wrong sending your story");
      }
    );


    //show result for user
    this.isHidden = false;

    // } else {
    //   console.log("Fields don't filled correctly!");
    //   //Hide result from user
    //   this.isHidden = true;
    // }
    // }, 2000);
  }

  checkType(missedWords: string[], typeOfInputWords: string[]) {
    // console.log(missedWords);
    // console.log(typeOfInputWords);
    let fieldColorStatus: String[] = [];
    let correct: number = 0;
    for (let i: number = 0; i < missedWords.length; i++) {
      if (missedWords[i] == typeOfInputWords[i]) {
        correct++;
        fieldColorStatus.push("green");
        // console.log(fieldColorStatus);
      } else {
        fieldColorStatus.push("red");
        // console.log(fieldColorStatus);
      }
    }
    if (correct == missedWords.length) {
      console.log("all fields were filled correctly");
      this.filledFields = true;
    } else {
      console.log("please fill all fields");
      this.filledFields = false;
    }
    console.log(fieldColorStatus);
  }

  checkWord(event: any, i: number) {
    // console.log(event);
    this.wc.getNoun(event.target.value).subscribe(
      (data: Noun[]) => {
        // console.log(data);
        // console.log(this.missedWords[i]);
        for (var i in data) {
          //   console.log("data[i].sls");
          //   console.log(data[i].sls);
          //   console.log("data[i].orig");
          //   console.log(data[i].orig);
          //   console.log("event.target.value");
          //   console.log(event.target.value);
          //   console.log("this.missedWords[i]");
          //   console.log(this.missedWords[i]);
          if ((data[i].sls == "singular noun" && data[i].orig == event.target.value)) {
            this.typeOfInputWords.push("singular noun");
            // console.log("singular");
          } else if (data[i].sls == "plural noun" && data[i].orig == event.target.value) {
            this.typeOfInputWords.push("plural noun");
            // console.log("plural");
          } else {
            // console.log("false");
          }
        }
        // if (data == "singular noun") {
        //   if (this.missedWords[i] == "singular noun") {
        //     console.log("true");
        //   } else {
        //     console.log("false");
        //   }
        // } else if (data == "plural noun") {
        //   if (this.missedWords[i] == "plural noun") {
        //     console.log("true");
        //   } else {
        //     console.log("false");
        //   }
        // }
      },
      () => {
        console.log("something went wrong trying to get your word");
      }
    )
  }

  // checkWord(words: string[], missedWords: string[]): boolean {
  //   let correct: number = 0;
  //   let i = 0;
  //   let j = 0;

  //   console.log(missedWords);
  //   if (words.length == missedWords.length) {
  //     for (i; i < words.length; i++) {

  //       this.wc.getNoun1(words[i]).subscribe(
  //         (data: string) => {
  //           if ((missedWords[j] == data)) {
  //             correct++;
  //           } 
  //           console.log(missedWords[j]);
  //           console.log(data);
  //           j++;
  //           if ((words.length-1) == correct) { return true; }
  //         },
  //         () => {
  //           console.log("something went wrong trying to get your word");
  //         }

  //       );


  //     }


  //   }
  //   return false;
  // }
}
