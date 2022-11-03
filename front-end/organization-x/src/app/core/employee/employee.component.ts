import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeEditComponent } from 'src/app/admin/employee-edit/employee-edit.component';
import { ResourceService } from 'src/app/shared/service/resource-service';
import { Employee } from 'src/app/shared/interface/employee';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  employees: Employee[] = [];

  page = 0;
  lastSort?: Sort;

  constructor(
    private router: Router,
    private resourceService: ResourceService<Employee>,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  loadEmployees() {
    this.subscriptions.push(this.resourceService.getAll(this.page).subscribe(data => {
      this.employees = data;
    }))
  }

  onScroll() {
    this.subscriptions.push(
      this.resourceService.getAll(++this.page).subscribe(data => {
        this.employees.push(...data);

        if (this.lastSort !== undefined) {
          this.sort(this.lastSort);
        }
      })
    );
  }

  sort(sort: Sort) {
    this.lastSort = sort;
    const employees = this.employees.slice();

    if (!sort.active || sort.direction === '') {
      this.employees = employees;
      return;
    }

    this.employees = employees.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(`${a.firstName} ${a.lastName}`, `${b.firstName} ${b.lastName}`, isAsc);
        case 'civilIdNumber':
          return this.compare(a.civilIDNumber, b.civilIDNumber, isAsc);
        case 'age':
          return this.compare(a.age, b.age, isAsc);
        case 'position':
          return this.compare(a.position, b.position, isAsc);
        default:
          return 0;
      }
    })
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  openEditForm(employee: Employee) {
    this.dialog.open(EmployeeEditComponent, {
      data: employee,
      width: '400px',
      height: '25em'
    })
      .afterClosed()
      .subscribe(() => {
        this.router.navigate(['../employees']);
      });
  }
}
