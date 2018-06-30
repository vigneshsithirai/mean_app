import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { MyDialogComponent } from './../../components/my-dialog/my-dialog.component';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    let dialogResult;
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    const dialogRef: MatDialogRef<MyDialogComponent> = this.dialog.open(MyDialogComponent, {
      // width: '250px',
      data: 'This text is passed into the dialog!',
      // autoFocus: true,
      // disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      dialogResult = result;
    });
  }
}
