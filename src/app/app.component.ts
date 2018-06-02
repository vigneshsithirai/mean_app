import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  events: string[] = [];
  opened: boolean;
  constructor(public router: Router) {}

  public navigateMenu() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
