import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';

import { Countries, SquadNumber } from 'src/app/Interfaces/Player';
import { PlayerService } from 'src/app/Services/Player/player.service';
import { TeamService } from 'src/app/Services/Team/team.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {
  private team;
  public player;

  public countries = Object.keys(Countries).map(key => ({
    label: key,
    key: Countries[key]
  }));

  public squadNumber = Object.keys(SquadNumber)
    .slice(Object.keys(SquadNumber).length / 2)
    .map(key => ({
      label: key,
      key: SquadNumber[key]
    }));

  constructor(
    private playerService: PlayerService,
    private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams().pipe(take(1)).subscribe(teams => {
      if (teams.length > 0) {
        this.team = teams[0];
      }
    });
  }

  private newPlayer(playerFormValue) {
    const key = this.playerService.addPlayer(playerFormValue).key;
    const playerFormValueKey = {
      ...playerFormValue,
      key
    };
    const formattedTeam = {
      ...this.team,
      players: [...(this.team.players ? this.team.players : []), playerFormValueKey]
    };
    this.teamService.editTeam(formattedTeam);
  }

  onSubmit(playerForm: NgForm) {
    const playerFormValue = {...playerForm.value};
    if (playerForm.valid) {
      playerFormValue.leftFooted = playerFormValue.leftFooted === '' ? false : playerFormValue.leftFooted;
    }
    this.newPlayer(playerFormValue);
    window.location.replace('#');
  }
}
