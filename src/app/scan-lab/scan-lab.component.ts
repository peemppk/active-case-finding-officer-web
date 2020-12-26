import { AlertService } from './../shared/alert.service';
import { CaseService } from './../services/case.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
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
    private caseService: CaseService,
    private alertService: AlertService,
    private renderer: Renderer2
  ) { }

  labCode: any;
  userCode: any;
  isSave = false;

  ngOnInit(): void {
    const element = this.renderer.selectRootElement('#serialCode');
    setTimeout(() => element.focus(), 0);
  }

  scan(): void {
    this.route.navigate(['/officer/list-case']);
  }

  async onSave(): Promise<void> {
    try {
      this.isSave = true;
      const rs: any = await this.caseService.saveMap(localStorage.getItem('eventId'), this.userCode, this.labCode);
      if (rs.ok) {
        this.alertService.success();
      } else {
        console.log(rs.error);
        this.alertService.error(rs.error);
      }
      this.isSave = false;
    } catch (error) {
      this.isSave = false;
      this.alertService.error(error);
    }
  }

  onKeySerialCode(e): void {
    if (e.keyCode === 13) {
      const element = this.renderer.selectRootElement('#specimenCode');
      setTimeout(() => element.focus(), 0);
    }
  }

  onKeySpecimenCode(e): void {
    if (e.keyCode === 13) {
      this.onSave();
    }
  }
}
