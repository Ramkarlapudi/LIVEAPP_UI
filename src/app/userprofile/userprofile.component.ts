import { Component, OnInit } from '@angular/core';
import { UserdataserviceService } from '../service/data/userdataservice.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
 
  constructor( private userdataserviceService:UserdataserviceService ) { }

  ngOnInit(): void {
  }



  
}
