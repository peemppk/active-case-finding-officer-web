import { CaseService } from './../services/case.service';
import { CameraComponent } from './../camera/camera.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from 'node_modules/@angular/router';
import * as moment from 'moment';
import { AlertService } from '../shared/alert.service';
import { BasicService } from '../services/basic.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-input-case',
  templateUrl: './input-case.component.html',
  styles: [
  ]
})
export class InputCaseComponent implements OnInit {

  public jwtHelper = new JwtHelperService();

  provinceList: any;
  districtList: any;
  subDistrictList: any;

  titleName: any;
  firstName: any;
  lastName: any;
  birthdate: any;
  telephone: any;
  documentType: any;
  patientType: any;
  gender: any;
  telephoneBoss: any;
  address: any;
  province: any;
  district: any;
  subDistrict: any;

  cid: any;
  passport: any;

  nationTypeId: any;

  serialCode: any;
  labCode: any;
  eventId: any;

  editService: any;
  profiles: any;

  @ViewChild('camera') camera: CameraComponent;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private caseService: CaseService,
    private alertService: AlertService,
    private basicService: BasicService,
  ) {
    this.eventId = localStorage.getItem('eventId');
    this.activatedRoute.params.subscribe(param => {
      this.telephone = param.telephone;
    });
  }

  ngOnInit(): void {
    console.log(this.telephone);
    if (this.telephone) {
      this.getRegisters();
    } else {
      this.getProvince();
      this.birthdate = moment().format('MM/DD/YYYY');
    }
  }

  openModalWebcam(): void {
    this.camera.openWebcam();
  }

  onSaveProfile(e): void {
    this.profiles = e;
    // console.log(e);
    // this.caseService.saveProfile(id,e);
  }

  async getRegisters(): Promise<void> {
    try {
      const rs = await this.caseService.getEditService(this.telephone);
      if (rs.ok) {
        this.editService = rs.rows[0];
        this.setEdit();
      } else {
        this.alertService.error(rs.error);
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  async setEdit(): Promise<void> {
    console.log(this.editService);
    this.titleName = this.editService.title_name;
    this.firstName = this.editService.first_name;
    this.lastName = this.editService.last_name;
    this.birthdate = moment(this.editService.birth_date).format('MM/DD/YYYY');
    this.telephone = this.editService.telephone;
    this.documentType = this.editService.document_type;
    this.cid = this.editService.cid;
    this.passport = this.editService.passport;
    this.nationTypeId = this.editService.nation_type_id;
    this.gender = this.editService.gender;
    this.telephoneBoss = this.editService.telephone_boss;
    this.address = this.editService.address;
    await this.getProvince();
    this.province = this.editService.province_code;
    await this.getDistrict();
    this.district = this.editService.district_code;
    await this.getSubdistrict();
    this.subDistrict = this.editService.subdistrict_code;
  }

  async getProvince(): Promise<void> {
    try {
      const rs = await this.basicService.getProvince();
      if (rs.ok) {
        this.provinceList = rs.rows;
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  async getDistrict(e: any = ''): Promise<void> {
    if (e) {
      this.province = e.target.value;
    }
    try {
      const rs = await this.basicService.getDistrict(this.province);
      if (rs.ok) {
        this.districtList = rs.rows;
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  async getSubdistrict(e: any = ''): Promise<void> {
    if (e) {
      this.district = e.target.value;
    }
    try {
      const rs = await this.basicService.getSubdistrict(this.province, this.district);
      if (rs.ok) {
        this.subDistrictList = rs.rows;
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }

  saveService(): void {
    const obj = {
      title_name: this.titleName,
      first_name: this.firstName,
      last_name: this.lastName,
      birth_date: this.birthdate ? moment(this.birthdate).format('YYYY-MM-DD') : null,
      telephone: this.telephone,
      gender: this.gender,

      cid: this.cid,
      passport: this.passport,
      nation_type_id: this.nationTypeId,
      telephone_boss: this.telephoneBoss,

      address: this.address,
      province: this.province,
      district_code: this.district,
      subDistrict: this.subDistrict,
      serial_code: this.serialCode,
      event_id: this.eventId,
    };
    console.log(obj);

  }
}
