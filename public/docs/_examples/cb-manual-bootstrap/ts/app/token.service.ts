import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class TokenService{
  acknowledged: boolean = false;

  constructor(private http: Http) {}

  getAppToken() {
    return this.http.get('./config.json')
        .map((res: any) => res.json().token);
  }

  acknowledgeToken() {
    this.acknowledged = true;
  }
}
