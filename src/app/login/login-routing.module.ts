import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthLogin } from '../auth/auth-login.service';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'login', canActivate: [AuthLogin], component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
