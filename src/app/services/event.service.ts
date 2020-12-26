import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient, @Inject('API_URL') private url: string) { }

  getEvent(): Promise<any> {
    const url = `${this.url}/login/event`;
    return this.http.get(url).toPromise();
  }
}
