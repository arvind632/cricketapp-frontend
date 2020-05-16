import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ApiUrl = 'http://localhost:5000/api/';

// const ApiUrl = 'http://13.232.124.242:5000/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getPlayers(){
    return this.http.get(ApiUrl+'player');
  }
  
  getPlayerById(id){
    return this.http.get(`${ApiUrl}player/${id}`);
  }

  updatePlayerById(id,data){
    return this.http.put(`${ApiUrl}player/${id}`,data);
  }


  createPlayers(data){
    return this.http.post(ApiUrl +'create', data);
  }

  getTeam(){
    return this.http.get(ApiUrl+'team');
  }

  getHistory(){
    return this.http.get(ApiUrl+'history');
  }

}
