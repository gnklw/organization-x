import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/interface/department';
import { Employee } from 'src/app/shared/interface/employee';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentEmployeesComponent } from './department-employees/department-employees.component';
import { DepartmentEditComponent } from 'src/app/admin/department-edit/department-edit.component';
import { ResourceService } from 'src/app/shared/service/resource-service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  departments: Department[] = [];

  page = 0;
  lastSort?: Sort;

  constructor(
    private router: Router,
    private resourceService: ResourceService<Department>,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadDepartments();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  loadDepartments() {
    this.subscriptions.push(this.resourceService.getAll(this.page).subscribe(data => {
      this.departments = data;
    }))
  }

  onScroll() {
    this.subscriptions.push(
      this.resourceService.getAll(++this.page).subscribe(data => {
        this.departments.push(...data);

        if (this.lastSort !== undefined) {
          this.sort(this.lastSort);
        }
      })
    );
  }

  sort(sort: Sort) {
    this.lastSort = sort;
    const departments = this.departments.slice();

    if (!sort.active || sort.direction === '') {
      this.departments = departments;
      return;
    }

    this.departments = departments.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.departmentName, b.departmentName, isAsc);
        case 'manager':
          return this.compare(
            `${a.departmentManager.firstName} ${a.departmentManager.lastName}`,
            `${b.departmentManager.firstName} ${b.departmentManager.lastName}`,
            isAsc
          );
        case 'management':
          return this.compare(a.management, b.management, isAsc);
        default:
          return 0;
      }
    })
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  showDepartmentEmployees(departmentName: string, employees: Employee[]) {
    this.dialog.open(DepartmentEmployeesComponent, {
      data: {
        employees: employees,
        departmentName: departmentName
      },
      width: '45%',
    })
      .afterClosed()
      .subscribe(() => {
        this.router.navigate(['../departments']);
      });
  }

  openEditForm(department: Department) {
    this.dialog.open(DepartmentEditComponent, {
      data: department,
      width: '400px',
      height: '25em'
    })
      .afterClosed()
      .subscribe(() => {
        this.router.navigate(['../departments']);
      });
  }
}
