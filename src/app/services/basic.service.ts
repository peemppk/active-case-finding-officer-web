import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(private http: HttpClient, @Inject('API_URL') private url: string) { }

  getProvince(): Promise<any> {
    const url = `${this.url}/province`;
    return this.http.get(url).toPromise();
  }

  getDistrict(provinceCode): Promise<any> {
    const url = `${this.url}/district?provinceCode=${provinceCode}`;
    return this.http.get(url).toPromise();
  }

  getSubdistrict(provinceCode, ampurCode): Promise<any> {
    const url = `${this.url}/subdistrict?provinceCode=${provinceCode}&ampurCode=${ampurCode}`;
    return this.http.get(url).toPromise();
  }
}
