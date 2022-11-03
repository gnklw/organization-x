import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { Management } from 'src/app/shared/interface/management';
import { ResourceService } from '../../shared/service/resource-service';

@Component({
  selector: 'app-management-edit',
  templateUrl: './management-edit.component.html',
  styleUrls: ['./management-edit.component.css']
})
export class ManagementEditComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  managementName: string = this.management.managementName;
  description: string = this.management.description;

  constructor(
    @Inject(MAT_DIALOG_DATA) public management: Management,
    public dialogRef: MatDialogRef<ManagementEditComponent>,
    public dialog: MatDialog,
    private resourceService: ResourceService<Management>) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  update() {
    this.management.managementName = this.managementName;
    this.management.description = this.description;
    
    this.subscriptions.push(
      this.resourceService.update(this.management.id, this.management).subscribe(data => this.management = data));

    this.dialogRef.close();
  }

  openConfirmDialog() {
    this.dialog.open(ConfirmationDialogComponent, {
      data: this.management.id,
      width: '300px'
    });
  }
}
