import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/Interfaces/Player';
import { PlayerService } from 'src/app/Services/Player/player.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent implements OnInit {
  public players$: Observable<Player[]>;
  public selectedPlayer: Player;
  public showModal = false;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.players$ = this.playerService.getPlayers();

    this.players$.subscribe(event => console.log(event));
  }

  newPlayer(): any {
    this.showModal = true;
    this.selectedPlayer = null;
    setTimeout(() => {
      window.location.replace('#open-modal');
    }, 0);
  }
}
