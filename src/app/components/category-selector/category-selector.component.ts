import { Component, OnInit } from '@angular/core';
import { StoryCategory } from 'src/app/models/story-category/storycategory';
import { PlayService } from 'src/app/services/game/play.service';
import { Globals } from 'src/app/Globals';
import { IncompleteStory } from 'src/app/models/incomplete-story/incompletestory';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})

export class CategorySelectorComponent implements OnInit {

  getCategory: StoryCategory;
  inputCategories: StoryCategory[];
  playService: PlayService;
  globals: Globals;
  showSelectCategoryRow:boolean = true; 
  cat1:StoryCategory = new StoryCategory(0,"Select Genre");
  cat2:StoryCategory = new StoryCategory(1,"Russian Lit");
  cat3:StoryCategory = new StoryCategory(2,"Early American Lit");
  cat4:StoryCategory = new StoryCategory(3,"British Lit");
  
  constructor() { }

  ngOnInit(): void { 
      // this.playService.getAllCategories().subscribe(
      //   (response: StoryCategory[]) => {
      //     this.inputCategories = response;
      //   }
      // )
    }

    getIncomplete(category:StoryCategory) {
      let incompleteStory:IncompleteStory;
      this.showSelectCategoryRow=false;
    }

}
