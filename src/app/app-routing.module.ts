import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { TeamComponent } from './team/team.component';
import { HistoryComponent } from './history/history.component';


const routes:Routes=[
  { path:'', component:PlayersComponent },
  { path:'team', component:TeamComponent },
  { path:'history', component:HistoryComponent },
  
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
