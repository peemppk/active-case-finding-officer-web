import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient, @Inject('API_URL') private url: string) { }

  getEvent(): Promise<any> {
    const url = `${this.url}/event`;
    return this.http.get(url).toPromise();
  }

  getEventInfo(id): Promise<any> {
    const url = `${this.url}/event/info?id=${id}`;
    return this.http.get(url).toPromise();
  }

  updateEvent(data): Promise<any> {
    const url = `${this.url}/event`;
    return this.http.put(url, data).toPromise();
  }

  saveEvent(data): Promise<any> {
    const url = `${this.url}/event`;
    return this.http.post(url, data).toPromise();
  }
}
