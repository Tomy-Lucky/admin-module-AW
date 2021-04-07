import { Injectable } from '@angular/core';
import {Group} from './group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups: Group[];

  constructor() {
    this.groups = [
      {
        id: 0,
        name: 'Dev-Ops',
        description: 'handle unification and automation of processes'
      },
      {
        id: 1,
        name: 'Data engineers',
        description: 'responsible for finding trends in data sets and developing algorithms'
      },
      {
        id: 2,
        name: 'Developers',
        description: 'develop application'
      }
    ];
  }

  getGroups(): Group[] {
    return this.groups;
  }

  getGroup(id: number): any {
    return this.groups.find(x => x.id === id);
  }
}
