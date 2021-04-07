import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor() {
    this.users = [
      {
        id: 1,
        name: 'Tom',
        groupId: 0
      },
      {
        id: 2,
        name: 'Nikolay',
        groupId: 0
      },
      {
        id: 3,
        name: 'Yegor',
        groupId: 1
      },
      {
        id: 4,
        name: 'Boris',
        groupId: 2
      },
      {
        id: 5,
        name: 'Handor',
        groupId: 2
      }
    ];
  }

  getUsers(): User[] {
    return this.users;
  }
}
