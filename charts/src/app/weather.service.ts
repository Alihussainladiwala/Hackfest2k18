import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Chart } from 'chart.js';

@Injectable()
export class WeatherService {

  constructor(private _http: HttpClient) { }

  CM_VERSION() {
    return this._http.get('http://127.0.0.1:8000/CM_VERSION/')
      .map(result => result);
  }

  CLIENTS_VERSION() {
    return this._http.get('http://127.0.0.1:8000/CLIENT_VERSION/')
      .map(result => result);
  }

  CM_OS() {
    return this._http.get('http://127.0.0.1:8000/CM_OS/')
      .map(result => result);
  }

  CLIENT_OS() {
    return this._http.get('http://127.0.0.1:8000/CLIENTS_OS/')
      .map(result => result);
  }

  BACKUP_INFO() {
    return this._http.get('http://127.0.0.1:8000/BACKUP_INFO/')
      .map(result => result);
  }

  MEDIA_INFO() {
    return this._http.get('http://127.0.0.1:8000/MEDIA_INFO/')
      .map(result => result);
  }

  LIC_INFO() {
    return this._http.get('http://127.0.0.1:8000/LIC_INFO/')
      .map(result => result);
  }

  TOTAL() {
    return this._http.get('http://127.0.0.1:8000/TOTAL/')
      .map(result => result);
  }

}
