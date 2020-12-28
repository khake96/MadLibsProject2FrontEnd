
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/admin/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationField:string = '';
  public firstNameField:string = '';
  public lastNameField:string = '';
  public emailField:string = '';
  public password1Field:string = '';
  public password2Field:string = '';
  public result:string = '';

  constructor(private rs:RegistrationService) { }

  ngOnInit(): void {
  }

  checkRegistration():void {
    this.rs.checkRegistrationBE(this.registrationField, this.firstNameField,
                                this.lastNameField,  this.emailField,
                                this.password1Field, this.password2Field ).subscribe (
      (data:string) =>{
        this.result = data;
        console.log(this.result);
      },
      ()=>{
        this.result="";
        console.log("Something went wrong with creating an account.");
      }
    )
  }

}