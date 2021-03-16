import { Component, OnInit } from '@angular/core';
import { UserdataserviceService } from '../service/data/userdataservice.service';
import { AuthenticationService } from '../service/authentication.service';
import { UserProfile } from '../service/data/usermodel';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userprofiledata: UserProfile
  RefUserProfiledata: UserProfile
  isDataAvailable: boolean = false;
  IsUserVerified: boolean = false;
  verifiedUser: String = "";
  UserID: any = "";
  FirstName: String = "";
  LastName: String = "";
  UserName: String = "";
  Email: String = "";
  Phone: any = "";
  Country: String = "";
  State: String = "";
  Address: String = "";
  PinCode: any = "";
  Verified: String = "";
  errormessage ="Something Wrong : Profile Not Updated";
  successMsg ="Your Profile Updated Successfully";
  errorflag = false;
  successflag = false;

  constructor(private userdataserviceService: UserdataserviceService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.displayUserData();
    this.UserID = this.userprofiledata.userid;
    this.FirstName = this.userprofiledata.firstname;
    this.LastName = this.userprofiledata.lastname;
    this.UserName = this.userprofiledata.username;
    this.Email = this.userprofiledata.email;
    this.Phone = this.userprofiledata.phone;
    this.Country = this.userprofiledata.country;
    this.State = this.userprofiledata.state;
    this.Address = this.userprofiledata.address;
    this.PinCode = this.userprofiledata.pincode;
    this.Verified = this.userprofiledata.verified;
  }


  displayUserData(): boolean {
    console.log("Inside method");
    var retrievedObject = sessionStorage.getItem('userpp');
    this.userprofiledata = JSON.parse(retrievedObject);
    if (retrievedObject != null) {
      this.CheckverifiedUser();

      this.isDataAvailable = true;
      return true;
    }
    this.userprofiledata = this.authenticationService.userprofile;
    this.verifiedUser = this.userprofiledata.verified;
    this.CheckverifiedUser();
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
      if (this.userprofiledata === null) {
        console.log("Inside else 2 usercomp");
        this.isDataAvailable = false;

      }
    }
    return false;
  }

  refreshUserData() {
    if (this.userprofiledata != null) {
      console.log("Inside refreshUserData 1");
      var retrievedObject = sessionStorage.getItem('userpp');
      this.userprofiledata = JSON.parse(retrievedObject);
    }
    if (this.userprofiledata != null) {
      console.log("Inside refreshUserData 2");
      this.isDataAvailable = true;
    }

  }

  CheckverifiedUser() {
  console.log("verifiedUser " + this.userprofiledata.verified )
    if (this.verifiedUser === "YES") {
      this.IsUserVerified = true;
    }

    this.IsUserVerified = false;
  }


  UpdateUserInfo() {

  }


  onContentChanged(event: Event) {
    var textContent: any = event.target;
    //let firstname : string = event.target.textContent;
    this.userprofiledata.firstname = textContent;
    // sessionStorage.setItem("userpp", JSON.stringify(this.userprofiledata.firstname));
    console.log("updated user name " + this.userprofiledata.firstname)
    // this.refreshUserData();

  }


  onSubmitValidate() {
    //this.errorflag = false;
    //this.successflag = false;
    //  this.RefUserProfiledata.firstname = this.FirstName;
    this.userdataserviceService.UpdateUserProfile(this.userprofiledata).subscribe(
      data => this.userprofiledata = data
    );
    if(this.userdataserviceService.errrorArrived){
        this.errorflag = true;
    }else{
      this.successflag = true;
      sessionStorage.setItem("userpp", JSON.stringify(this.userprofiledata));
    }



  }

  




}
