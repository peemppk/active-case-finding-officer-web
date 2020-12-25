import { Component, OnInit } from '@angular/core';
import { Router } from 'node_modules/@angular/router';

@Component({
  selector: 'app-list-case',
  templateUrl: './list-case.component.html',
  styles: [
  ]
})
export class ListCaseComponent implements OnInit {

  caseList: any = [];

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.caseList = [
      {
        id: 2,
        name: 'ss',
        creation: 'dd',
        color: 'bb',
      }
    ];
  }

  register(): void {
    this.route.navigate(['/officer/input-case']);
  }

  scan(): void {
    this.route.navigate(['/officer/scan']);
  }

}
