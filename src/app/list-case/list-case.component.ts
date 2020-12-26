import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from 'node_modules/@angular/router';

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
    private router: ActivatedRoute,
  ) {
    this.router.params.subscribe(param => {
      this.eventInfo = param.eventInfo;
    });
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

    console.log(this.eventInfo);
  }

  register(): void {
    this.route.navigate(['/officer/input-case']);
  }

  scan(): void {
    this.route.navigate(['/officer/scan']);
  }

}
