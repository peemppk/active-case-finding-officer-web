import { Component, OnInit } from '@angular/core';
import { Router } from 'node_modules/@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent implements OnInit {

  public jwtHelper = new JwtHelperService();

  firstName: any;
  lastName: any;
  hospcode: any;

  constructor(
    private router: Router,
  ) {
    const token = localStorage.getItem('token');
    const decodedToken = this.jwtHelper.decodeToken(token);
    this.firstName = decodedToken.first_name;
    this.lastName = decodedToken.last_name;
    this.hospcode = decodedToken.hospcode;
  }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
