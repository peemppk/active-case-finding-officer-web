import { Component, OnInit } from '@angular/core';
import { Router } from 'node_modules/@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styles: [
  ]
})
export class ScanComponent implements OnInit {

  telephone: any;

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  scan(): void {
    this.route.navigate(['/officer/input-case', { telephone: this.telephone }]);
  }

}
