import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {Team} from '../../Interfaces/Team';

export const TeamHeaders = ['name', 'country', 'Teams'];

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamsDB: AngularFireList<Team>;

  constructor(private DB: AngularFireDatabase) {
    this.teamsDB = this.DB.list('/teams', ref => ref.orderByChild('name'));
  }

  getTeams(): Observable<Team[]> {
    return this.teamsDB.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
          $key: c.payload.key,
          ...c.payload.val()
        }));
      })
    );
  }

  addTeam(team: Team): any {
    return this.teamsDB.push(team);
  }

  deleteTeam(id: string): any {
    return this.DB.list('/teams').remove(id);
  }

  editTeam(team): any {
    const $key = team.$key;
    delete(team.$key);
    this.DB.list('/teams').update($key, team);
  }
}
