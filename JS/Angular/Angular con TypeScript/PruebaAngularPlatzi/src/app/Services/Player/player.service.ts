import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {Player} from '../../Interfaces/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersDB: AngularFireList<Player>;

  constructor(private DB: AngularFireDatabase) {
    this.playersDB = this.DB.list('/players', ref => ref.orderByChild('name'));
  }

  getPlayers(): Observable<Player[]> {
    return this.playersDB.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
          $key: c.payload.key,
          ...c.payload.val()
        }));
      })
    );
  }

  addPlayer(player: Player): any {
    return this.playersDB.push(player);
  }

  deletePlayer(id: string): any {
    return this.DB.list('/players').remove(id);
  }

  editPlayer(player): any {
    const $key = player.$key;
    delete(player.$key);
    this.DB.list('/players').update($key, player);
  }
}
