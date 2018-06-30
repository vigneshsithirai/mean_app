import { Component, OnDestroy } from '@angular/core';

/** @title Responsive sidenav */
@Component({
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.css'],
})
export class SideNavComponent {
  events: string[] = [];
  opened: boolean;
  constructor() { }

}
