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
import { environment } from 'src/environments/environment';
import { ScanLabComponent } from './scan-lab/scan-lab.component';
import { HttpClientModule } from '@angular/common/http';
import { CameraComponent } from './camera/camera.component';
import { WebcamModule } from 'ngx-webcam';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    InputCaseComponent,
    ListCaseComponent,
    LayoutComponent,
    ScanComponent,
    ScanLabComponent,
    CameraComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    HttpClientModule,
    WebcamModule,
    AuthModule
  ],
  providers: [
    { provide: 'API_URL', useValue: environment.apiUrl },
  ],
  exports: [CameraComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
