import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { RegistrationComponent } from './admin/registration/registration.component';
import { GameComponent } from './playbox/game/game.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
   path:'registration',
    component:RegistrationComponent
  },
  {
    path:'game',
    component:GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
