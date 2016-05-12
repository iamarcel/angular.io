import {Injectable} from '@angular/core';

@Injectable()
export class SharedService{
  message: string = '';

  sendMessage(message: string) {
    this.message = message;
  }
}
