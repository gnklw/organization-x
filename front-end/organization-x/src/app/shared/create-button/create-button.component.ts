import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DepartmentCreateComponent } from 'src/app/admin/department-create/department-create.component';
import { EmployeeCreateComponent } from 'src/app/admin/employee-create/employee-create.component';
import { ManagementCreateComponent } from 'src/app/admin/management-create/management-create.component';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.css']
})
export class CreateButtonComponent implements OnInit {

  private readonly dialogWidth: string = '400px';

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  openCreatePanel() {
    if (this.router.url == '/managements') {
      this.dialog.open(ManagementCreateComponent, {
        width: this.dialogWidth,
        height: '25em'
      })
      .afterClosed()
      .subscribe(() => {
        this.router.navigate(['../managements']);
      });
    } else if (this.router.url == '/departments') {
      this.dialog.open(DepartmentCreateComponent, {
        width: this.dialogWidth,
        height: '25em'
      })
      .afterClosed()
      .subscribe(() => {
        this.router.navigate(['../departments']);
      });
    } else if (this.router.url == '/employees') {
      this.dialog.open(EmployeeCreateComponent, {
        width: this.dialogWidth,
        height: '42em'
      })
      .afterClosed()
      .subscribe(() => {
        this.router.navigate(['../employees']);
      });
    }
  }
}
