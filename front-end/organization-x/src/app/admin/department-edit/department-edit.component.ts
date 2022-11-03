import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { Department } from 'src/app/shared/interface/department';
import { ResourceService } from '../../shared/service/resource-service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  departmentName: string = this.department.departmentName;
  description: string = this.department.description;

  constructor(
    @Inject(MAT_DIALOG_DATA) public department: Department,
    public dialogRef: MatDialogRef<DepartmentEditComponent>,
    private resourceService: ResourceService<Department>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  update() {
    this.department.departmentName = this.departmentName;
    this.department.description = this.description;

    this.subscriptions.push(
      this.resourceService.update(this.department.id, this.department).subscribe(data => this.department = data));
    this.dialogRef.close();
  }

  openConfirmDialog() {
    this.dialog.open(ConfirmationDialogComponent, {
      data: this.department.id,
      width: '300px'
    });
  }
}
