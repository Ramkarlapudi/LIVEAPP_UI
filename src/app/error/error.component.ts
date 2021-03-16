import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  appError ="Something Wrong please try again or contact support Ramkarlapudi@hotmail.com"
  constructor() { }

  ngOnInit(): void {
  }

}
