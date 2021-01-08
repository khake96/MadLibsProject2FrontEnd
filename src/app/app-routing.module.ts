import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { GameComponent } from './components/game/game.component';
import { UpdateComponent } from './components/update/update.component';
import { ReadComponent } from './components/read/read.component';
import { LogoutComponent } from './models/logout/logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'done', redirectTo: '/login', pathMatch: 'full' },
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
  },
  {
    path:'update',
    component:UpdateComponent
  },
  {
    path:'read',
    component:ReadComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
