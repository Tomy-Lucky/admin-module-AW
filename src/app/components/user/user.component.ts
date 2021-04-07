import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {GroupService} from '../../services/group/group.service';
import {User} from '../../services/user/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService,
    private groupService: GroupService
  ) {
    this.users = this.userService.getUsers();
  }

  getGroup(id: number): any {
    return this.groupService.getGroup(id);
  }

  ngOnInit(): void {
  }
}
