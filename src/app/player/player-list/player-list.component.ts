import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {players:any;
  p: number = 1;
  collection = [];
  constructor(private service: ApiService ) {
      this.getplayer();

      for (let i = 1; i <= 100; i++) {
        this.collection.push(`item ${i}`);
      }

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
