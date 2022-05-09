import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { WebComponent } from '../components/web/web.component';

const routes: Routes = [
  { path: 'web', component: WebComponent },
  { path: 'logeo', component:LoginComponent},
  { path: 'logout', component:LoginComponent},
  { path: '**', pathMatch:'full', redirectTo:'web'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class RouteModule { }
