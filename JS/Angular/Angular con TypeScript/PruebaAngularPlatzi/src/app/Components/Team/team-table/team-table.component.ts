import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {take} from 'rxjs/operators';

import { TeamService, TeamHeaders } from 'src/app/Services/Team/team.service';
import {Team} from '../../../Interfaces/Team';
import { Countries } from 'src/app/Interfaces/Player';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.scss']
})
export class TeamTableComponent implements OnInit {
  public teams$: Observable<Team[]>;
  public tableHeaders = TeamHeaders;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teams$ = this.teamService.getTeams();

    //this.teams$.subscribe(event => console.log(event));
    this.teamService.getTeams().pipe(take(1)).subscribe(teams => {
      if (teams.length === 0) {
        const team: Team = {
          name: 'MyAmazingTeam',
          country: Countries.Australia,
          players: null
        };

        this.teamService.addTeam(team);
      }
    });
  }
}
