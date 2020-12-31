import { Component, OnInit } from '@angular/core';
import { GameComponetService } from '../app/services/game/play.service';
import { Word } from '../models/word';
import { IncompleteStory } from '../models/incompletestory';
import { CompleteStory } from '../models/completestory';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
