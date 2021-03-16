import { Component, OnInit } from '@angular/core';
import { UserdataserviceService } from '../service/data/userdataservice.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { currentmatches } from '../service/data/currentmatches';
import { Map } from '../service/data/currentmatches';
import { PlayerInfo } from '../service/data/PlayerInfo';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  // userdata : RootObject[]
  //  cureentmatcheslist : RootObject;

  rootobj: currentmatches
  public obj: Map;
  public playerData: PlayerInfo[];


 playerimg : string = "";

  public listm: currentmatches[];
  private ram: number = null;
  // Searchstr :String ='';

  errorflag = false;
  successflag = false;
  Searchstr: string = '';
  constructor(private userdataserviceService: UserdataserviceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

  }

  getCurrentMatches(): Observable<currentmatches[]> {
    ;
    return this.http.get<currentmatches[]>(`http://localhost:5000/livescore/liveMatches`)
      .pipe(
        tap((receivedData: currentmatches[]) => console.log(receivedData.length)),
        map((receivedData: currentmatches[]) => {
          return this.listm = receivedData;
        }),
        catchError(err => {
          return throwError(this.handleException)

        }
        )
      )

  }

  searchPlayer(playername: string): Observable<PlayerInfo[]> {
    console.log("inside searchPlayer " + playername);
    return this.http.get<PlayerInfo[]>(`http://localhost:5000/livescore/searchbyname/${playername}`)
      .pipe(
        tap((receivedData: PlayerInfo[]) => console.log("inside searchplayer")),
        map((receivedData: PlayerInfo[]) => {
          console.log("data " + receivedData.length);
          for (let index = 0; index < receivedData.length; index++) {
            //   const element = array[index];
           
              var s1 = receivedData[index].map.imageURL
              this.playerimg = s1;
              
               
             }

          return this.playerData = receivedData;
        }),
        catchError(err => {
          return throwError(this.handleException)

        }

        )
      )
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



  displaydata() {



    this.getCurrentMatches().subscribe(


    )
    console.log("venues " + this.listm.length);
    // this.listm = this.matcheslist;
    //this.receivedData;
    for (let index = 0; index < this.listm.length; index++) {
      //const element = 
      // element.map
      this.listm[index].map.name
      console.log(this.listm[index].map.name);

      this.listm[index].map.scores.map.homeOvers
      this.listm[index].map.scores.map.awayScore

    }

  }

  getPlayerData() {
    console.log("Search input " + this.Searchstr)

    this.searchPlayer(this.Searchstr).subscribe();
   // console.log("date " + this.playerData);

    for (let index = 0; index < this.playerData.length; index++) {
   //   const element = array[index];
   console.log( this.playerData[index].map.lastName);
     var s1 =     this.playerData[index].map.imageURL
     var s2 = s1.substring(1);
     this.playerimg = s2;
     console.log(s2);
      
    }

  }

  onTabClick(event) {

    console.log(event);

    console.log(event.tab.textLabel);
    if (event.tab.textLabel == "Current Matches") {
      this.displaydata();
    }
    if (event.tab.textLabel == "Search") {
      //this.getPlayerData();
    }



  }




}

