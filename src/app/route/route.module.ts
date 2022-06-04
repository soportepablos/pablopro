import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { WebComponent } from '../components/web/web.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/web'},
  { path: 'web', component: WebComponent },
  { path: 'logeo', component:LoginComponent}
  // { path: 'logout', component:LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) //, { useHash: true }
  ],
  exports: [RouterModule],
})
export class RouteModule { }
