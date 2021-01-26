  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UserProfile } from './usermodel';
import { catchError } from 'rxjs/operators';


  
  

  @Injectable({
    providedIn: 'root'
  })
  export class UserdataserviceService {

    errrorArrived :boolean = false;
    
    
    constructor(private  http:HttpClient) { }

    executeGetUserService(){
      console.log("executeGetUserService ");
           return  this.http.get<UserProfile[]>('http://localhost:2021/userservice/getusers');

    }

    executeGetUserServicebyName(username: any){
      console.log("executeGetUserService ");
           return  this.http.get<UserProfile>(`http://localhost:2021/userservice/getusersbyname/${username}`);

    }

    


    UpdateUserProfile(userprofile:UserProfile): Observable<UserProfile> {
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(userprofile);
      console.log(body)
      return this.http.post<UserProfile>('http://localhost:2021/userservice/uploadProfile/' , body,{'headers':headers})
      .pipe(

        catchError(err => {
          console.log('caught mapping error and rethrowing', err);
          
          return throwError(this.handleError(err));
          
      })
      )
    }


    handleError(error: Response) {
     // console.log("error.status " +error.status)
      if (error.status === 0) {   
       
        this.errrorArrived = true;
        
      }else{
        this.errrorArrived = false;
        
      }   
    }
        
      // } else {
      //   return Observable.throw(error);
      // }
 


  }
