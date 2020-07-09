import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {take} from 'rxjs/operators';

import { Countries, SquadNumber, Player } from 'src/app/Interfaces/Player';
import { PlayerService } from 'src/app/Services/Player/player.service';
import { TeamService } from 'src/app/Services/Team/team.service';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {
  @Input() player: Player;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();

  private team;

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

  private editPlayer(playerFormValue) {
    const playerFormValueKey = {
      ...playerFormValue,
      $key: this.player.$key
    };

    const playerFormValueFormattedKey = {
      ...playerFormValue,
      key: this.player.$key
    };

    delete playerFormValueFormattedKey.$key;

    const moddifiedPlayers = this.team.players ?
      this.team.players.map(player => {
        return player.key === this.player.$key ? playerFormValueFormattedKey : player;
      }) : this.team.players;

    const formattedTeam = {
      ...this.team,
      players: [...(moddifiedPlayers ? moddifiedPlayers : [playerFormValueFormattedKey])]
    };

    this.playerService.editPlayer(playerFormValueKey);
    this.teamService.editTeam(formattedTeam);
  }

  onSubmit(playerForm: NgForm) {
    const playerFormValue = {...playerForm.value};
    if (playerForm.valid) {
      playerFormValue.leftFooted = playerFormValue.leftFooted === '' ? false : playerFormValue.leftFooted;
    }

    if (this.player) {
      this.editPlayer(playerFormValue);
    } else {
      this.newPlayer(playerFormValue);
    }

    window.location.replace('#');
  }

  onclose() {
    this.closeDialog.emit(true);
  }
}
