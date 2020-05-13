import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players:any;
  constructor(private service: ApiService ) {
      this.getplayer();
   }

  ngOnInit(): void {
   
  }

  
  getplayer(){
    this.service.getPlayers().subscribe(
      data => {  
                this.players=data;
                console.log(data);
              }, 
      error => { 
                console.log("Failed");
      });
  }
  



}
