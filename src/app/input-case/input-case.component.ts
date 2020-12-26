import { CaseService } from './../services/case.service';
import { CameraComponent } from './../camera/camera.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from 'node_modules/@angular/router';
@Component({
  selector: 'app-input-case',
  templateUrl: './input-case.component.html',
  styles: [
  ]
})
export class InputCaseComponent implements OnInit {

  name: any;
  lastName: any;
  birthdate: any;
  tambon: any;
  ampur: any;
  address: any;
  phone: any;
  province: any;
  doctype: any;

  detail: any;
  profiles: any;

  @ViewChild('camera') camera: CameraComponent;
  constructor(
    private router: Router,
    private caseService: CaseService
  ) { }

  ngOnInit(): void {

  }

  openModalWebcam(): void {
    this.camera.openWebcam();
  }

  onSaveProfile(e): void {
    this.profiles = e;
    // console.log(e);
    // this.caseService.saveProfile(id,e);
  }
}
