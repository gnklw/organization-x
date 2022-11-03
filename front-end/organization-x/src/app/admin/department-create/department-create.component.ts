import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ResourceService } from 'src/app/shared/service/resource-service';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  department = this.fb.group({
    departmentName: '',
    description: ''
  });

  constructor(
    private fb: FormBuilder, 
    private resourceService: ResourceService<any>,
    public dialogRef: MatDialogRef<DepartmentCreateComponent>) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  create() {
    this.subscriptions.push(this.resourceService.create(this.department.value).subscribe());
    this.dialogRef.close();
  }
}
