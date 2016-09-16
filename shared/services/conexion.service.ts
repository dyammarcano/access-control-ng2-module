import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { StorageService } from './storage.service';

@Injectable()
export class ConexionService {

  private url = 'http://localhost:4000';
  private socket;

  constructor(private storage:StorageService) {
    storage.getData(url)
  }

  sendMessage(message){
    this.socket.emit('add-message', message);
  }

  sendData(message:Object){
    this.socket.emit(message);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);

      this.socket.on('message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

}

//TODO (get:obj), (put:obj), (logs:string),(messages:string), (chat:obj)
