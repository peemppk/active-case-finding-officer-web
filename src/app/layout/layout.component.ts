import { Component, OnInit } from '@angular/core';
import { Router } from 'node_modules/@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

}