import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ResourceService } from 'src/app/shared/service/resource-service';

@Component({
  selector: 'app-management-create',
  templateUrl: './management-create.component.html',
  styleUrls: ['./management-create.component.css']
})
export class ManagementCreateComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  management = this.fb.group({
    managementName: '',
    description: ''
  })

  constructor(
    private fb: FormBuilder, 
    private resourceService: ResourceService<any>,
    public dialogRef: MatDialogRef<ManagementCreateComponent>) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  create() {
    this.subscriptions.push(this.resourceService.create(this.management.value).subscribe());
    this.dialogRef.close();
  }
}
