import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  appError ="Something Wrong please contact support Ramkarlapudi@hotmail.com"
  constructor() { }

  ngOnInit(): void {
  }

}
