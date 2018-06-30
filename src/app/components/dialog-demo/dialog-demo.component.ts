import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {
  dialogResult: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    const dialogRef: MatDialogRef<MyDialogComponent> = this.dialog.open(MyDialogComponent, {
      // width: '250px',
      data: 'This text is passed into the dialog!',
      // autoFocus: true,
      // disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }
}
