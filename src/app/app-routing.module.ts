import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputCaseComponent } from './input-case/input-case.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'input-case', component: InputCaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
