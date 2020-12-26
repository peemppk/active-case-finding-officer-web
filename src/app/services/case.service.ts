import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private http: HttpClient, @Inject('API_URL') private url: string) { }

  saveProfile(id, files): Promise<any> {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();

      if (files) {
        formData.append('files', files, 'files.jpg');
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

      const token = localStorage.getItem('token');
      const url = `${this.url}/register/upload-profile/${id}?token=${token}`;
      xhr.open('POST', url, true);
      xhr.send(formData);
    });

    // const url = `${this.url}/login/event`;
    // return this.http.get(url).toPromise();
  }

  saveMap(eventId, serialCode, specimenCode): Promise<any> {
    const url = `${this.url}/api/map`;
    return this.http.post(url, {
      eventId,
      serialCode,
      specimenCode
    }).toPromise();
  }

  getService(eventId): Promise<any> {
    const url = `${this.url}/api?eventId=${eventId}`;
    return this.http.get(url).toPromise();
  }

  getEditService(telephone): Promise<any> {
    const url = `${this.url}/api/edit?telephone=${telephone}`;
    return this.http.get(url).toPromise();
  }

  saveService(data, labCode): Promise<any> {
    const url = `${this.url}/api`;
    return this.http.post(url, { data, labCode }).toPromise();
  }
}
