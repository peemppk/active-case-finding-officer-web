import { Component, OnInit } from '@angular/core';
import { Router } from 'node_modules/@angular/router';

@Component({
  selector: 'app-scan-lab',
  templateUrl: './scan-lab.component.html',
  styles: [
  ]
})
export class ScanLabComponent implements OnInit {

  constructor(
    private route: Router,
  ) { }

  labCode: any;
  userCode: any;

  ngOnInit(): void {
  }

  scan(): void {
    this.route.navigate(['/officer/list-case']);
  }
}
