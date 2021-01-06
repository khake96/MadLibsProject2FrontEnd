import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuBarComponent } from 'src/app/components/menu-bar/menu-bar.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  menu:MenuBarComponent = new MenuBarComponent();  


  constructor() { }

  ngOnInit(): void {
  }

}
