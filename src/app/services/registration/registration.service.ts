import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  checkRegistrationBE(newUserName:string, fstName:string, lstName:string,
                      email:string, dob:string, level:string, passwd1:string,
                      passwd2:string ) {

    console.log(newUserName, fstName, lstName, email, dob, level, passwd1, passwd2);

    return this.http.post<any>("http://localhost:8080/madlibs/registration/create", {userName:newUserName, firstName:fstName,
                                    lastName:lstName, email:email,  
                                    yob:dob, playerLevel:level,
                                    password1:passwd1,  password2:passwd2}) as Observable<string>;
  }
}