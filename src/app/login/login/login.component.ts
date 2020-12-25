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

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  doLogin(): void {
    this.route.navigate(['/input-case']);
  }

}
