import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams :any;
  constructor(private service:ApiService) { 
    this.getTeam();
  }
   

  ngOnInit(): void {
  }

  getTeam(){
     this.service.getTeam()
     .subscribe(
        data => { 
         this.teams = data; 
         console.log(data);
        },
        error => { 
          console.log("error"); 
        });
  }

}
