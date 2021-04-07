import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from '../components/user/user.component';
import {GroupComponent} from '../components/group/group.component';

const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'groups', component: GroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
