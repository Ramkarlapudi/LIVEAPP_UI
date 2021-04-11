import { Component, OnInit } from '@angular/core';
import { UserdataserviceService } from '../service/data/userdataservice.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PlayerInfo } from '../service/data/PlayerInfo';



@Component({
  selector: 'app-live-scores',
  templateUrl: './live-scores.component.html',
  styleUrls: ['./live-scores.component.css']
})
export class LiveScoresComponent implements OnInit {
  public playerData: PlayerInfo[];
  errorflag = false;
  successflag = false;
  Searchstr: string = '';
  SearchCountry: string = '';
  playerimg: string = "";
  constructor(private userdataserviceService: UserdataserviceService, private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
  }

  searchPlayerByCountry(countryName: string): Observable<PlayerInfo[]> {
    console.log("inside searchPlayerByCountry " + countryName);
    return this.http.get<PlayerInfo[]>(`http://localhost:5000/livescore/playersearchByCountry/${countryName}`)
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

  getPlayerData() {
    console.log("Search input " + this.Searchstr)

    this.searchPlayer(this.Searchstr).subscribe();
    // console.log("date " + this.playerData);

    for (let index = 0; index < this.playerData.length; index++) {
      //   const element = array[index];
      console.log(this.playerData[index].map.lastName);
      var s1 = this.playerData[index].map.imageURL
      
      console.log(s1);

    }

  }

  getPlayerDataByCountry() {
    this.searchPlayerByCountry(this.SearchCountry).subscribe();
  }

}
