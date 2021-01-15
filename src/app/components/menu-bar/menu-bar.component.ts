import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private ls: LoginService, private cookieService:CookieService) { }

  ngOnInit(): void {
  }

  checkLoout(): void {
    this.cookieService.set('user_id', "");
    this.ls.logout();
  }
}
