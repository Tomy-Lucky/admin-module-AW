import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from '../components/user/user.component';
import { GroupComponent } from '../components/group/group.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import {UserService} from '../services/user/user.service';
import {GroupService} from '../services/group/group.service';

@NgModule({
  declarations: [UserComponent, GroupComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [UserService, GroupService],
  exports: [
    DashboardComponent
  ]
})
export class AdminModule { }
