import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(data) {
    return this.http.post('http://localhost:3070/api/login', data).map(res => res.json());
  }

}