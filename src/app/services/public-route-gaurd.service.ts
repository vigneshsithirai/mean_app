import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import 'rxjs/add/observable/of';

@Injectable()
export class PublicRouteGaurdService {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(): Observable<boolean> {
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/home');
      return Observable.of(false);
    }
    return Observable.of(true);
  }
}
