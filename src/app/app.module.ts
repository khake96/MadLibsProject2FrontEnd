import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
=======
import { RegistrationComponent } from './components/registration/registration.component';
>>>>>>> 8229c685b6387134718c9ef686731b316a5565a0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    RegistrationComponent
>>>>>>> 8229c685b6387134718c9ef686731b316a5565a0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
