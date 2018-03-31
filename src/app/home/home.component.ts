import { AlertComponent } from './../alert/alert.component';
import { Component, OnInit, forwardRef, Inject, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public inputVar:string;
  public eventReciv: number = 0;
  @ViewChild(AlertComponent) alertComponent: AlertComponent;
  constructor(@Inject(forwardRef(() => AppComponent)) private _parent: AppComponent) {
    this._parent.title = 'title changed';
    this.inputVar = 'input from parent';
  }

  ngOnInit() {
  }
  clickFunction() {
    this.alertComponent.changeHeadLine();
  }
  receiveEvent() {
    this.eventReciv = this.eventReciv + 1;
  }
}
