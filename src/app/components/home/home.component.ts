import { AlertComponent } from './../alert/alert.component';
import { Component, OnInit, forwardRef, Inject, ViewChild } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public inputVar: string;
  public eventReciv: any = 0;
  public user:any = {name:"Rajan"};
  name = "test1223";
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
  onchange($event) {
    this.name =  $event.target.value;
    console.log("Before",this.name);
  }
  save($event) {
  
    this.user.name = "www";
    console.log("After",this.name, this.user);
    setTimeout(()=> {
      // this.user.name = "Sample";
    },2000);
  }
}
