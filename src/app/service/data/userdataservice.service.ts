  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
import { UserProfile } from './usermodel';


  
  

  @Injectable({
    providedIn: 'root'
  })
  export class UserdataserviceService {

    constructor(private  http:HttpClient) { }

    executeGetUserService(){
      console.log("executeGetUserService ");
           return  this.http.get<UserProfile[]>('http://localhost:2021/userservice/getusers');

    }

    executeGetUserServicebyName(username){
      console.log("executeGetUserService ");
           return  this.http.get<UserProfile>(`http://localhost:2021/userservice/getusersbyname/${username}`);

    }


  }
