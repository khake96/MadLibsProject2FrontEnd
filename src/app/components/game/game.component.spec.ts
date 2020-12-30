//import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameService } from 'src/app/playbox/services/play.service'
import { Component, OnInit } from '@angular/core';
import { User, StoryCategory, IncompleteStory, CompleteStory };

@Component({
  selector:'app-newGame',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public user:User=null;
  public category:StoryCategory=0;
  public inCompleteStory:IncompleteStory='';
  public completeStory:CompleteStory='';
  
  constructor(private gameService:GameService) {}
  ngOnInit():void {
    this.gameService.getCategory(this.category).subscribe (
      (data:number) => {
        this.category = data;
        console.log('chosen category: '+this.category);
      },
      ()=>{
        this.category=0;
        console.log("error in selection");
      }
    )

  }
}
