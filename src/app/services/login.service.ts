import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, @Inject('API_URL') private url: string) { }

  requestOTP(telephone: string): Promise<any> {
    const params = {
      telephone,
    };
    const url = `${this.url}/login/staff`;
    return this.http.post(url, params).toPromise();
  }

  verify(telephone, otp, transactionId, vendor): Promise<any> {
    const params = {
      telephone,
      otp,
      transactionId,
      vendor
    };
    const url = `${this.url}/login/verify`;
    return this.http.post(url, params).toPromise();
  }
}
