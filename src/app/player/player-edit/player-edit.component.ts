import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { threadId } from 'worker_threads';


@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {

  player = { firstName:'',lastName:'',PlayerJerseyNumber:'',imageUri:'https://www.bavarealtors.in/wp-content/uploads/2019/11/dummy-man-570x570.png'};
  id = '';
  // player:null;
  submitted = false;
  constructor(private apiservice:ApiService,
    private route: ActivatedRoute,
    private router: Router) { 

      this.getPlayer(this.route.snapshot.paramMap.get('id'));
      this.id = this.route.snapshot.paramMap.get('id');
      
    }

  ngOnInit(): void {
    
  }

  getPlayer(id){

    this.apiservice.getPlayerById(id).subscribe(
      result=>{  
        console.log(result); 
        this.player = result[0];
          
      },
      error=>{ 
        console.log('failed'); 
      }
    )

     console.log(id);
  }


  submitRegistration(){
    // console.log(this.player);
    const data = {
      firstName: this.player.firstName,
      lastName: this.player.lastName,
      PlayerJerseyNumber:this.player.PlayerJerseyNumber,
      imageUri:this.player.imageUri
    };
    this.apiservice.updatePlayerById(this.id,data).subscribe(
      response => {
        console.log('success');
        console.log(response);
        this.submitted = true;
      },
      error => {
          console.log(error);
      });
  }
  


}
