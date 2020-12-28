import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/admin/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginField:string = '';
  public passwordField:string = '';
  public result:string = '';

  constructor(private ls:LoginService) { }

  ngOnInit(): void {
  }

  checkLogin():void {
    this.ls.checkLoginBE(this.loginField, this.passwordField).subscribe (
      (data:string) =>{
        this.result = data;
        console.log(this.result);
      },
      ()=>{
        this.result="";
        console.log("something went wrong checking your login and password.");
      }
    )
  }

}
