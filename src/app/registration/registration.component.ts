import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UserdataserviceService } from '../service/data/userdataservice.service';
import { UserProfile } from '../service/data/usermodel';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userprofiledata: UserProfile;
  userprofiledata1: UserProfile;
  user: FormGroup;

  errorflag = false;
  successflag = false;
  fn: string;
  successMsg = "Your Profile Registered Successfully";

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private userdataserviceService: UserdataserviceService) {

    this.user = this.formBuilder.group({
      firstname: [],
      lastname: [],
      username: [],
      email: [],
      phone: [],
      country: [],
      state: [],
      address: [],
      pincode: [],
      passcode: []
    });



  }

  ngOnInit(): void {

  }


  RegisterUserprofile(userprofile: UserProfile): Observable<UserProfile> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(userprofile);
    return this.http.post<UserProfile>('http://localhost:5000/user-service/Rigester/', body, { 'headers': headers })
      .pipe(

        catchError(err => {
          return throwError(this.handleException)

        }


        )
      )

  }
  getPost(userprofile: UserProfile): Observable<UserProfile> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(userprofile);
    return this.http.post<UserProfile>('http://localhost:5000/user-service/Rigester/', body, { 'headers': headers })
      .pipe(
        retry(1),

        catchError((error: HttpErrorResponse) => {
          this.router.navigate(['Error']);
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
          }
          console.log(errorMessage);
          return throwError(errorMessage);
        })

      );
  }

  private handleException(errorresponse: HttpErrorResponse) {
    this.router.navigate(['Error'])
    this.errorflag = true;
    if (errorresponse.error instanceof ErrorEvent) {

      console.log('Client side Error ', errorresponse.error.message);

    } else {

      console.log('Server side Error ', errorresponse.error.message);

    }


  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async submitForm() {
    var userid = null;

    console.log(this.user.getRawValue().firstname);
    this.fn = this.user.controls['username'].value;
    this.userprofiledata = new UserProfile(this.user.value);

    if (this.userprofiledata != null) {
      console.log("");
      this.getPost(this.userprofiledata).subscribe(
        data => this.userprofiledata1 = new UserProfile(data)

      );
      if (this.errorflag == true) {
        this.router.navigate(['Error']);
      } else {

        this.successflag = true;

        await this.delay(5000).then(any => { this.router.navigate(['Login']) });

      }






      // this.router.navigate(['Welcome'])

    }

  }





}
function err(arg0: string, err: any) {
  throw new Error('Function not implemented.');
}

