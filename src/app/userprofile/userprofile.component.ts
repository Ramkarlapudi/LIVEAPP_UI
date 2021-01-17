  import { Component, OnInit } from '@angular/core';
  import { UserdataserviceService } from '../service/data/userdataservice.service';
  import { AuthenticationService } from '../service/authentication.service';
  import { UserProfile } from '../service/data/usermodel';

  @Component({
    selector: 'app-userprofile',
    templateUrl: './userprofile.component.html',
    styleUrls: ['./userprofile.component.css']
  })
  export class UserprofileComponent implements OnInit {

    userprofiledata: UserProfile
    isDataAvailable: boolean = false;
    constructor(private userdataserviceService: UserdataserviceService, private authenticationService: AuthenticationService) { }

    ngOnInit(): void {
      this.displayUserData();
    }


    displayUserData() :boolean{
      console.log("Inside method");
      var retrievedObject = sessionStorage.getItem('userpp');
      this.userprofiledata = JSON.parse(retrievedObject);
      if(retrievedObject != null){
        
        
        this.isDataAvailable = true;
        return true;
      }
      this.userprofiledata = this.authenticationService.userprofile;
      sessionStorage.setItem("userpp", JSON.stringify(this.userprofiledata));
      console.log(this.userprofiledata.userid);
      console.log(this.userprofiledata.username);
      if (this.userprofiledata != null) {
        console.log("Inside if usercomp");
        this.isDataAvailable = true;
        
      } else {
        var retrievedObject = sessionStorage.getItem('userpp');
        this.userprofiledata = JSON.parse(retrievedObject);
        console.log("Inside else 1 usercomp");
        if(this.userprofiledata === null){
          console.log("Inside else 2 usercomp");
          this.isDataAvailable = false;
        
        }
      }
      return false;
    }

    refreshUserData() {
      if(this.userprofiledata === null){
        console.log("Inside refreshUserData 1");
        var retrievedObject = sessionStorage.getItem('userpp');
        this.userprofiledata = JSON.parse(retrievedObject);
      }
      if (this.userprofiledata != null) {
        console.log("Inside refreshUserData 2");
        this.isDataAvailable = true;
      }
      
    }



  }
