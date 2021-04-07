import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../services/group/group.service';
import {Group} from '../../services/group/group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  groups: Group[];

  constructor(private groupService: GroupService) {
    this.groups = this.groupService.getGroups();
  }

  ngOnInit(): void {
  }
}

