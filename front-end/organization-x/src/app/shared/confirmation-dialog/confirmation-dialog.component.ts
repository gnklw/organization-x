import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ResourceService } from '../service/resource-service';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) private id: number,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    public dialog: MatDialog,
    private resourceService: ResourceService<any>
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  decline() {
    this.dialogRef.close();
  }

  accept() {
    this.subscriptions.push(this.resourceService.delete(this.id).subscribe());
    this.dialog.closeAll();
  }
}
