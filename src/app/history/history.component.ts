import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

   history : any;
  constructor(private service : ApiService) {
    this.getHistory();
   }

  ngOnInit(): void {

  }

  getHistory(){
    this.service.getHistory()
    .subscribe(
       data => { 
        this.history = data; 
        console.log(data);
       },
       error => { 
         console.log("error"); 
       });
 }

}
