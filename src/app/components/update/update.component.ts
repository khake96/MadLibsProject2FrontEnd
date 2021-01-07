import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuBarComponent } from 'src/app/components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  // menu:MenuBarComponent = new MenuBarComponent(); 

  constructor() { }

  ngOnInit(): void {
  }

}
