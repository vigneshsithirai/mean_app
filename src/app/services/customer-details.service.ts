import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerDetailsService {

  constructor(private http: Http) { }

  getDetails() {
    return this.http.get('http://localhost:3070/customers/details').map(res => res.json());
  }
}
