import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  checkRegistrationBE(reg:string, fname:string, lname:string, email:string, pass1:string, pass2:string ) {
    console.log(reg, fname, lname, email, pass1, pass2);
    return this.http.post<any>("", {userName:reg, firstName:fname, lastName:lname,
                                    email:email,  password1:pass1,  password2:pass2}) as Observable<string>;
  }
}