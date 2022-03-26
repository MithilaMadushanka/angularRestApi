import {Component, NgModule} from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path:"Login",component:LoginComponent},
  {path:"Dash",component:DashboardComponent},
  {path:"", redirectTo: "/Login",pathMatch:"full"},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
