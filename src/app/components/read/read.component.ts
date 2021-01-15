import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { ConsoleReporter } from 'jasmine';
import { CookieService } from 'ngx-cookie-service';
import { MenuBarComponent } from 'src/app/components/menu-bar/menu-bar.component';
import { CompleteStory } from 'src/app/models/complete-story/completestory';
import { CompleteStory3 } from 'src/app/models/completeStory3/complete-story3';
import { PlayService } from 'src/app/services/game/play.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // menu:MenuBarComponent = new MenuBarComponent();  
  public completeStories:CompleteStory3[] = Array();
  public headers:string[] = ["_authorBook", "_authorFirstName", "_authorLastName", "_completedStory", , "_originalStory"]

  constructor(private cookieService:CookieService, private router: Router, private ps: PlayService, private http: HttpClient) { }

  ngOnInit(): void {
    if (!this.cookieService.get('user_id')) {
      this.router.navigate(['/login']);
    }

    this.ps.readStories2().subscribe(
      (response: any) => {
        console.log(response);
        
        for(let i in response) {
          let obj:CompleteStory3 = new CompleteStory3;
          obj.completedStoryId = response[i].completedStoryId;
          obj.completedStory = response[i].completedStory;
          obj.originalStory = response[i].parentStory.originalStory;
          obj.authorBook = response[i].parentStory.authorBook;
          obj.authorFirstName = response[i].parentStory.authorFirstName;
          obj.authorLastName = response[i].parentStory.authorLastName;

          this.completeStories.push(obj);
        }
        console.log(this.completeStories);
      }
    )
  }

}
