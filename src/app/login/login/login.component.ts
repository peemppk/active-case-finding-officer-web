import { Component, OnInit } from '@angular/core';
import { Router } from 'node_modules/@angular/router';
import { LoginService } from '../../services/login.service';
import { AlertService } from '../../shared/alert.service';
import { EventService } from '../../services/event.service';
import { BasicService } from '../../services/basic.service';
import * as moment from 'moment';
import * as findIndex from 'lodash/findIndex';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  eventList: any = [];
  modalEvent: any = false;

  placeDetail: any;
  tambon: any;
  ampur: any;
  province: any;
  zipCode: any;
  telephone: any = '';

  newTambon: any;
  newAmpur: any;
  newProvince: any;

  startDate: any;
  endDate: any = null;

  isLoad: any = false;
  isVerify: any = false;
  token: any;
  otp: any = '';
  eventCode: any = '';
  ref: any = '';
  transactionId: any;
  vendor: any;

  constructor(
    private route: Router,
    private loginService: LoginService,
    private alertService: AlertService,
    private eventService: EventService,
    private basicService: BasicService,
  ) { }

  ngOnInit(): void {
    this.telephone = '0874107719';
    // this.isVerify = true;

    this.startDate = moment().format('MM/DD/YYYY');
  }

  async doLogin(): Promise<void> {
    try {
      this.isLoad = true;
      const rs = await this.loginService.doLogin(this.eventCode);
      if (rs.ok) {
        sessionStorage.setItem('eventId', rs.rows.id);
        this.route.navigate(['/officer/list-case']);
      } else {
        this.alertService.error();
      }
      this.isLoad = false;
    } catch (error) {
      this.alertService.error(error);
      this.isLoad = false;
    }
  }

  async getEvent(): Promise<void> {
    this.modalEvent = true;
    try {
      this.isLoad = true;
      const rs = await this.eventService.getEvent();
      this.eventList = rs.rows;
      for (const i of this.eventList) {
        i.start_date = i.start_date ? moment(i.start_date).format('DD/MM/YYYY') : null;
        i.end_date = i.end_date ? moment(i.end_date).format('DD/MM/YYYY') : null;
        i.is_actived = i.is_actived === 'Y' ? true : false;
      }
      this.getProvince();
      this.isLoad = false;
    } catch (error) {
      this.isLoad = false;
    }
  }

  async requestOTP(): Promise<void> {
    try {
      this.isLoad = true;
      const rs = await this.loginService.requestOTP(this.telephone);
      if (rs.ok) {
        this.ref = rs.ref_code;
        this.transactionId = rs.transaction_id;
        this.vendor = rs.vendor;
      } else {
        this.alertService.error('ไม่มีเบอร์นี้อยู่ในระบบ');
      }
      this.isLoad = false;
    } catch (error) {
      this.alertService.error(error);
      this.isLoad = false;
    }
  }

  async verify(): Promise<void> {
    try {
      this.isLoad = true;
      const rs = await this.loginService.verify(this.telephone, this.otp, this.transactionId, this.vendor);
      if (rs.ok) {
        sessionStorage.setItem('token', rs.token);
        this.isVerify = true;
        this.isLoad = false;
        this.alertService.success('ยืนยันตนเรียบร้อย');
      } else {
        this.isLoad = false;
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.isLoad = false;
      this.alertService.error(error);
    }
  }

  async getProvince(): Promise<void> {
    try {
      const rs = await this.basicService.getProvince();
      if (rs.ok) {
        this.province = rs.rows;
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  async getDistrict(e): Promise<void> {
    const provinceCode = e.target.value;
    try {
      const rs = await this.basicService.getDistrict(provinceCode);
      if (rs.ok) {
        this.ampur = rs.rows;
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  async getSubdistrict(e): Promise<void> {
    const ampurCode = e.target.value;

    try {
      const rs = await this.basicService.getSubdistrict(this.newProvince, ampurCode);
      if (rs.ok) {
        this.tambon = rs.rows;
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  selectSubdistrict(e): void {
    const idx = findIndex(this.tambon, { code: e.target.value });
    if (idx > -1) {
      this.zipCode = this.tambon[idx].zip_code;
    }
  }

  async toggleActived(i): Promise<void> {
    let active: any;
    if (i.is_actived) {
      active = 'N';
    } else {
      active = 'Y';
    }
    const obj = {
      eventId: i.id,
      isActived: active
    };
    try {
      const rs = await this.eventService.updateEvent(obj);
      if (rs.ok) {
        this.alertService.success();
        this.getEvent();
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  async saveEvent(): Promise<void> {
    const obj = {
      placeDetail: this.placeDetail,
      provinceCode: this.newProvince,
      districtCode: this.newAmpur,
      subdistrictCode: this.newTambon,
      zipcode: this.zipCode,
      isActived: 'Y',
      startDate: moment(this.startDate).format('YYYY-MM-DD'),
      endDate: this.endDate ? moment(this.endDate).format('YYYY-MM-DD') : null,
    };
    try {
      const rs = await this.eventService.saveEvent(obj);
      if (rs.ok) {
        this.alertService.success();
        this.getEvent();
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

}
