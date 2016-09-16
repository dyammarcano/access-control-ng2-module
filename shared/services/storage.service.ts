import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  getData(key:string) {
    return localStorage.getItem(key);
  }

  setData(key:string, data:string) {
    localStorage.setItem(key, data);
  }
}
