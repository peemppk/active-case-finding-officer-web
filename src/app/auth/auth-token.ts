import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as _ from 'lodash';

@Injectable()
export class AuthToken implements CanActivate {
  public token: string;
  public jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const isTokenExpired = this.jwtHelper.isTokenExpired(token);
      if (isTokenExpired) {
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
