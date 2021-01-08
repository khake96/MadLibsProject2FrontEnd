import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuBarComponent } from 'src/app/components/menu-bar/menu-bar.component';
import { UpdateService } from 'src/app/services/update/update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  // menu:MenuBarComponent = new MenuBarComponent(); 

  ngOnInit(): void {
  }


   public firstNameField:string = '';
  public lastNameField:string = '';
  public emailField:string = '';
  public dobField:string = '';
   public levelField:string = '';
  
  public result:string = ''; 

  constructor(private us:UpdateService) { }

 

 updateRegistration():void {
    
    this.us.checkUpdateBE(this.firstNameField,
                                this.lastNameField, this.emailField,
                                this.dobField, this.levelField, 
                                ).subscribe (
      (data:string) =>{
        this.result = data;
        console.log(this.result);
      },
      ()=>{
        this.result="";
        console.log("Something went wrong updating your account.");
      }
    )
  }

}