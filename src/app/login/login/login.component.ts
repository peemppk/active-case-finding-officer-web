import { Component, OnInit } from '@angular/core';
import { Router } from 'node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  input: any;
  eventList: any = [];
  modalEvent: any = false;

  detail: any;
  tambon: any;
  ampur: any;
  address: any;
  province: any;

  newDetail: any;
  newAddress: any;
  newTambon: any;
  newAmpur: any;
  newProvince: any;

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.eventList = [
      {
        id: 2,
        name: 'ss',
        creation: 'dd',
        color: 'bb',
      }
    ];
  }

  doLogin(): void {
    this.route.navigate(['/officer']);
  }

  getEvent(): void {
    this.modalEvent = true;
  }

}
