import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import {PlayerService} from 'src/app/Services/Player/player.service';
import {TeamService} from 'src/app/Services/Team/team.service';
import { TeamTableComponent } from './Components/Team/team-table/team-table.component';
import { PlayerTableComponent } from './Components/Player/player-table/player-table.component';
import { PlayerDialogComponent } from './Components/Player/player-dialog/player-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamTableComponent,
    PlayerTableComponent,
    PlayerDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [PlayerService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
