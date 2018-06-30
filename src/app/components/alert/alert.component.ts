import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  public headline: string = 'from alert headline';
  @Input() type: string = 'success';
  @Output('outputEvent') outputEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  alert() {
    console.log('alert');
  }
  changeHeadLine() {
    let i = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    this.headline = 'headline changed' + i;
  }
  fireEvent() {
    this.outputEvent.emit();
  }
}
