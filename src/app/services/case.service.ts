import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private http: HttpClient, @Inject('API_URL') private url: string) { }

  testSave(files): Promise<any> {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      if (files) {
        formData.append('files', files, files.name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };

      const token = sessionStorage.getItem('token');
      const url = `http://localhost:3000/register/pre/upload-profile/1?token=${token}`;
      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  
    // const url = `${this.url}/login/event`;
    // return this.http.get(url).toPromise();
  }
}
