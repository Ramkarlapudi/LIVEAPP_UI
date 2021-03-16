  import { Injectable } from '@angular/core';
  import { UserdataserviceService } from './data/userdataservice.service';
  import { UserProfile } from './data/usermodel';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService {

    userprofile: UserProfile
    userplocal: string;
    passplocal: string;
    isUserValid: boolean = false;
    //AuthenticationService.isUserLogedIn();
    constructor(private userdataserviceService: UserdataserviceService) { }




    getUserData(username) {

      // await this.delay(3000).then(any=>{

      // });




      this.userdataserviceService.executeGetUserServicebyName(username).subscribe(

        response => {
          this.userprofile = response

          //  let dataa = [];
          //  for(let key in response){
          //   dataa.push('username');
          //  }
          console.log("username /pass from DB  " + this.userprofile.username + " " + this.userprofile.passcode)
          this.userplocal = this.userprofile.username;
          this.passplocal = this.userprofile.passcode;
          //console.log("RRusername /pass assignto local var  "+ userp  +" "+passp  )  



        }
      );




      return this.passplocal;

    }

    foo(): void { }

    authenticate(username, password) {
      this.getUserData(username);

      //setTimeout(function () { this.foo(100); }, 3000);

      setTimeout(() => {
        console.log('timeout 500 ms');
        console.log("username /pass assignto local var  " + this.userplocal + " " + this.passplocal)


        if (username === this.userplocal && password === this.passplocal) {
          sessionStorage.setItem('authenticator', username);
          sessionStorage.setItem("userpp", JSON.stringify(this.userprofile));
          console.log("Inside If 2 ")
          this.userplocal = null;
          this.passplocal = null;
          this.isUserValid = true;
          return true;
        }
        this.isUserValid = false;

      }, 500);






    }


    isUserLogedIn() {
      let user = sessionStorage.getItem('authenticator')
      return !(user === null)
    }

    logout() {
      sessionStorage.removeItem('authenticator')
      sessionStorage.removeItem('userpp')
      //userpp
    }

    private delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
