import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuComponent } from 'src/app/components/menu/menu.component';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  menu:MenuComponent = new MenuComponent();  

  constructor() { }

  ngOnInit(): void {
  }

}
