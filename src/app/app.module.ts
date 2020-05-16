import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { HistoryComponent } from './history/history.component';
import { PlayersComponent } from './players/players.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerAddComponent } from './player/player-add/player-add.component';





@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    HistoryComponent,
    PlayersComponent,
    PlayerListComponent,
    PlayerEditComponent,
    PlayerAddComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule

    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
