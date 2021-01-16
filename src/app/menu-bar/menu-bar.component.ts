import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  isUserLogedIn :Boolean = false
  constructor(public authenticationService : AuthenticationService) { }
   
  ngOnInit(): void {
    this.isUserLogedIn =   this.authenticationService.isUserLogedIn();
  }



}
