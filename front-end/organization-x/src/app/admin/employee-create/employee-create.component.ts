import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ResourceService } from 'src/app/shared/service/resource-service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  employee = this.fb.group({
    firstName: '',
    lastName: '',
    civilIDNumber: '',
    age: '',
    position: ''
  })

  constructor(
    private fb: FormBuilder, 
    private resourceService: ResourceService<any>,
    public dialogRef: MatDialogRef<EmployeeCreateComponent>) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  create() {
    this.subscriptions.push(this.resourceService.create(this.employee.value).subscribe());
    this.dialogRef.close();
  }
}
