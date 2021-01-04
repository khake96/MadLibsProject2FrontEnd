import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {
    path:'',
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
