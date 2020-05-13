import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ApiUrl = 'http://localhost:5000/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getPlayers(){
    return this.http.get(ApiUrl+'player');
  }

  getTeam(){
    return this.http.get(ApiUrl+'team');
  }

  getHistory(){
    return this.http.get(ApiUrl+'history');
  }

}
