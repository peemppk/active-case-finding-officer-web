import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { InputCaseComponent } from './input-case/input-case.component';
import { FormsModule } from '@angular/forms';
import { ListCaseComponent } from './list-case/list-case.component';
import { LayoutComponent } from './layout/layout.component';
import { ScanComponent } from './scan/scan.component';
import { ScanLabComponent } from './scan-lab/scan-lab.component';

@NgModule({
  declarations: [
    AppComponent,
    InputCaseComponent,
    ListCaseComponent,
    LayoutComponent,
    ScanComponent,
    ScanLabComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
