import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LoginService } from 'src/app/admin/services/login.service';
import { Word } from 'src/app/models/word';
import { WordCheckerService } from 'src/app/services/word-checker.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginField:string = '';
  public passwordField:string = '';
  public result:string = '';

  constructor(private ls:LoginService, private wc:WordCheckerService) { }

  ngOnInit(): void {
    // This's test code for checkWord function
    this.wc.checkWord("tests").subscribe (
      (data:Word)=>{
        console.log(data);
      },
      ()=>{
        console.log("something went wrong trying to get your word");
      }
    )
  }

  checkLogin():void {
    
    this.ls.checkLoginBE(this.loginField, this.passwordField).subscribe (
      (data:string) =>{
        this.result = data;
        console.log("success");
      },
      ()=>{
        this.result="";
        console.log("something went wrong checking your login and password.");
      }
    )
  }

}
