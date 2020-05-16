import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';


import { TeamComponent } from './team/team.component';
import { HistoryComponent } from './history/history.component';

import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerAddComponent } from './player/player-add/player-add.component';


const routes:Routes=[
  { path:'', component:PlayersComponent },
  
  { path:'playerlist/add', component:PlayerAddComponent },
  { path:'playerlist', component:PlayerListComponent },
  { path:'playerlist/:id', component:PlayerEditComponent },
  
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
