import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LoginService } from 'src/app/services/login/login.service';
import { Word } from 'src/app/models/word/word';
import { WordCheckerService } from 'src/app/services/word-checker/word-checker.service';
import { stringify } from '@angular/compiler/src/util';
import { Noun } from 'src/app/models/word/noun';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginField: string = '';
  public passwordField: string = '';
  public result: string = '';
  public words:Word = null;
  public nouns:Noun = new Noun();

  constructor(private ls: LoginService, private wc: WordCheckerService, ) { }

  ngOnInit(): void {

    // This's return Noun
    // console.log(this.wc.getNoun('process'));
    // console.log(this.wc.getVerb('process'));
  }

  checkLogin(): void {
    this.ls.checkLoginBE(this.loginField, this.passwordField).subscribe(
      (data: string) => {
        this.result = data;
        console.log("success");
      },
      () => {
        this.result = "";
        console.log("something went wrong checking your login and password.");
      }
    )
  }
}
