import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayboxRoutingModule } from './playbox-routing.module';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    PlayboxRoutingModule
  ]
})
export class PlayboxModule { }
