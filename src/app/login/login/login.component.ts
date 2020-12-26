import { Component, OnInit } from '@angular/core';
import { Router } from 'node_modules/@angular/router';
import { LoginService } from '../../services/login.service';
import { AlertService } from '../../shared/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  input: any;
  eventList: any = [];
  modalEvent: any = false;

  detail: any;
  tambon: any;
  ampur: any;
  address: any;
  province: any;
  telephone: any = '';

  newDetail: any;
  newAddress: any;
  newTambon: any;
  newAmpur: any;
  newProvince: any;

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
  ) { }

  ngOnInit(): void {
    this.telephone = '0874107719';
    this.isVerify = true;

    this.eventList = [
      {
        id: 2,
        name: 'ss',
        creation: 'dd',
        color: 'bb',
      }
    ];
  }

  doLogin(): void {
    this.route.navigate(['/officer']);
  }

  getEvent(): void {
    this.modalEvent = true;
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

}
