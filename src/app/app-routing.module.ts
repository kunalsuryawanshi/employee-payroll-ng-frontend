import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { HomeComponent } from './component/home/home.component';
import { UpdateComponent } from './component/update/update.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'employees-list', component: EmployeeListComponent},
  {path: 'update', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
