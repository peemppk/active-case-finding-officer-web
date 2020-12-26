import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputCaseComponent } from './input-case/input-case.component';
import { ListCaseComponent } from './list-case/list-case.component';
import { LayoutComponent } from './layout/layout.component';
import { ScanLabComponent } from './scan-lab/scan-lab.component';
import { ScanComponent } from './scan/scan.component';

const routes: Routes = [
  { path: '', redirectTo: 'officer', pathMatch: 'full' },
  {
    path: 'officer',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'list-case', pathMatch: 'full' },
      { path: 'list-case', component: ListCaseComponent },
      { path: 'input-case', component: InputCaseComponent },
      { path: 'scan-lab', component: ScanLabComponent },
      { path: 'scan', component: ScanComponent },
    ]
  }
];

// const routes: Routes = [
//   {
//     path: 'professional',
//     component: LayoutComponent,
//     children: [
//       { path: '', redirectTo: 'patient-info', pathMatch: 'full' },
//       { path: 'patient-info', component: PatientInfoComponent },
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
