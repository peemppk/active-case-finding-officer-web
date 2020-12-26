import { Component, OnInit } from '@angular/core';
import { Router } from 'node_modules/@angular/router';
import { CaseService } from '../services/case.service';
import { AlertService } from '../shared/alert.service';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-list-case',
  templateUrl: './list-case.component.html',
  styles: [
  ]
})
export class ListCaseComponent implements OnInit {

  caseList: any = [];
  eventInfo: any;
  eventId: any;
  dataEvent: any;

  constructor(
    private route: Router,
    private caseService: CaseService,
    private alertService: AlertService,
    private eventService: EventService,
  ) {
    this.eventId = localStorage.getItem('eventId');
  }

  ngOnInit(): void {
    this.getCase();
  }

  async getCase(): Promise<void> {
    try {
      const rs = await this.eventService.getEventInfo(this.eventId);
      if (rs.ok) {
        this.dataEvent = rs.rows[0];
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  async getEventInfo(): Promise<void> {
    try {
      const rs = await this.caseService.getService(this.eventId);
      if (rs.ok) {
        this.caseList = rs.rows;
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  register(): void {
    this.route.navigate(['/officer/input-case']);
  }

  scan(): void {
    this.route.navigate(['/officer/scan']);
  }

}
