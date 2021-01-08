import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

   constructor(private http:HttpClient) { }

  checkUpdateBE(fstName:string, lstName:string,
                      email:string, dob:string, level:string) {

    console.log(fstName, lstName, email, dob, level);

    return this.http.post<any>("http://localhost:8080/madlibs/registration/update", {firstName:fstName,
                                    lastName:lstName, email:email,  
                                    yob:dob, playerLevel:level }) as Observable<string>;
  }
}