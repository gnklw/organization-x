import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { Employee } from 'src/app/shared/interface/employee';
import { ResourceService } from '../../shared/service/resource-service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  firstName: string = this.employee.firstName;
  lastName: string = this.employee.lastName;

  constructor(
    @Inject(MAT_DIALOG_DATA) public employee: Employee,
    public dialogRef: MatDialogRef<EmployeeEditComponent>,
    public dialog: MatDialog,
    private resourceService: ResourceService<Employee>
    ) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  update() {
    this.employee.firstName = this.firstName;
    this.employee.lastName = this.lastName;

    this.subscriptions.push(
      this.resourceService.update(this.employee.id, this.employee).subscribe(data => this.employee = data));
    
    this.dialogRef.close();
  }

  openConfirmDialog() {
    this.dialog.open(ConfirmationDialogComponent, {
      data: this.employee.id,
      width: '300px'
    });
  }
}
