import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayboxRoutingModule } from './playbox-routing.module';
import { GameComponent } from './game/game.component';
import { GenresComponent } from './genres/genres.component';


@NgModule({
  declarations: [GameComponent, GenresComponent],
  imports: [
    CommonModule,
    PlayboxRoutingModule
  ]
})
export class PlayboxModule { }
