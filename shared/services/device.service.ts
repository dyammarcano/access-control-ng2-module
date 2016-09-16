import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import * as _ from 'lodash'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DeviceService {

  constructor() {

  }

  searchBooks(queryTitle: string): Observable<Book[]> {
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
      .map(res => res.json().items);
  }

  retrieveBook(volumeId: string): Observable<Book> {
    return this.http.get(`${this.API_PATH}/${volumeId}`)
      .map(res => res.json());
  }

  allData() {

  }

  getData(_id:string, _param:string) {

  }

  putData(_id:string, _param:string) {

  }

}

//TODO (get:all), (get:id command), (put:id command),
