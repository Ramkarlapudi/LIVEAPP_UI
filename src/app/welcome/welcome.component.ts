      import { Component, OnInit } from '@angular/core';
      import { UserdataserviceService } from '../service/data/userdataservice.service';
      
      

      @Component({
        selector: 'app-welcome',
        templateUrl: './welcome.component.html',
        styleUrls: ['./welcome.component.css']
      })
      export class WelcomeComponent implements OnInit {
       // userdata : RootObject[]
        constructor(private userdataserviceService:UserdataserviceService) { }

        ngOnInit(): void {
        // this.getUserList();
        }

        // getUserList(){
        //   console.log("inside getUserList");
        //     this.userdataserviceService.executeGetUserService().subscribe(
        //       // data => { this.userdata = data;}
        //       // response => { console.log(response);}
        //       response => { this.displayUserData(response) 
        //         let us = [];
                
        //         this.userdata.forEach(function (value){
        //           for(let key in response){
        //             us.push(response[value[key]]);
        //           }
        //           //console.log("firstname "+ value.firstname)
        //         });
              
        //       }
             
          
        //     );
            

          

        // }

        // displayUserData(response){
        //   this.userdata = [];
        //   this.userdata = response
        //   console.log("response.message "+response.message)
        //   //console.log("user data obj "+ this.userdata.length)
        //   this.userdata.forEach(function (value){
            
        //     console.log("firstname "+ value.firstname )
        //     console.log("email "+ value.email )
        //   });
        // }

      }

      