import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {

  url = null;

  player = { firstName:'',lastName:'',PlayerJerseyNumber:'',imageUri:'https://www.bavarealtors.in/wp-content/uploads/2019/11/dummy-man-570x570.png'};

  submitted = false;
  constructor(private apiservice:ApiService) { 
    this.submitted;
  }

  ngOnInit(): void {
  }

  submitRegistration(){
    console.log(this.player);
    const data = {
      firstName: this.player.firstName,
      lastName: this.player.lastName,
      PlayerJerseyNumber:this.player.PlayerJerseyNumber,
      imageUri:this.player.imageUri
    };
    this.apiservice.createPlayers(data).subscribe(
      response => {
        console.log('success');
        console.log(response);
        this.submitted = true;
      },
      error => {
          console.log(error);
      });
  }



  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => { 
       this.url = event.target.result;
        console.log(event.target.result);
      }
    }
  }

}
