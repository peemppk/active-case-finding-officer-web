import { Component, OnInit } from '@angular/core';
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

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
