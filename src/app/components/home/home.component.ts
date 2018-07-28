import { AlertComponent } from './../alert/alert.component';
import { Component, OnInit, forwardRef, Inject, ViewChild } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private obj = {
    'name': 'John',
    'age': 30,
    'car': null
  };
  public myName = 1;
  @ViewChild(AlertComponent) alertComponent: AlertComponent;
  constructor(@Inject(forwardRef(() => AppComponent)) private _parent: AppComponent) {
    this._parent.title = 'title changed';
  }

  ngOnInit() {
    // setInterval(()=> {
    //   this.obj.age = this.obj.age + 1;
    // }, 2000);
  }
  clickFunction() {
    this.alertComponent.changeHeadLine();
  }
  changeName() {
    this.myName = this.obj.age;
  }
}
