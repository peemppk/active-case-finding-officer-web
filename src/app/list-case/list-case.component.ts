import { Component, OnInit } from '@angular/core';
import { Router } from 'node_modules/@angular/router';
import { CaseService } from '../services/case.service';

@Component({
  selector: 'app-list-case',
  templateUrl: './list-case.component.html',
  styles: [
  ]
})
export class ListCaseComponent implements OnInit {

  caseList: any = [];
  eventInfo: any;

  constructor(
    private route: Router,
    private caseService: CaseService,
  ) {
  }

  ngOnInit(): void {
    // this.caseList = [
    //   {
    //     id: 2,
    //     name: 'ss',
    //     creation: 'dd',
    //     color: 'bb',
    //   }
    // ];
    this.getCase();
  }

  async getCase(): Promise<void> {
    try {
      const rs = await this.caseService.getService();
      console.log(rs);
    } catch (error) {

    }
  }

  register(): void {
    this.route.navigate(['/officer/input-case']);
  }

  scan(): void {
    this.route.navigate(['/officer/scan']);
  }

}
