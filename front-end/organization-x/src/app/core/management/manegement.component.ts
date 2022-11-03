import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManagementEditComponent } from 'src/app/admin/management-edit/management-edit.component';
import { Department } from 'src/app/shared/interface/department';
import { Management } from 'src/app/shared/interface/management';
import { ManagementDepartmentsComponent } from './management-departments/management-departments.component';
import { ResourceService } from 'src/app/shared/service/resource-service';
import { Subscription } from 'rxjs';
import { ManagementFacade } from 'src/app/+store/management.facade';
import { filter, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-manegement',
  templateUrl: './manegement.component.html',
  styleUrls: ['./manegement.component.css']
})
export class ManegementComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  managements: Management[] = [];

  page = 0;
  lastSort?: Sort;

  constructor(
    private readonly managementFacade: ManagementFacade,
    private resourceService: ResourceService<Management>,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.managementFacade.init();
    //this.managementFacade.loadManagements();
    //this.managementFacade.loaded$
    //.pipe(
    // filter((isLoaded: boolean) => isLoaded === true),
    // switchMap(() => this.managementFacade.allManagements$)
    // )
    // .subscribe((managements: Management[]) => {
    //   this.managements = managements;
    // });

    this.loadManagements();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  loadManagements() {
    this.subscriptions.push(this.resourceService.getAll(this.page).subscribe(data => {
      this.managements = data;
    }))
  }

  onScroll() {
    this.subscriptions.push(
      this.resourceService.getAll(++this.page).subscribe(data => {
        this.managements.push(...data);

        if (this.lastSort !== undefined) {
          this.sort(this.lastSort);
        }
      })
    );
  }

  sort(sort: Sort) {
    this.lastSort = sort;
    const managements = this.managements.slice();

    if (!sort.active || sort.direction === '') {
      this.managements = managements;
      return;
    }

    this.managements = managements.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.managementName, b.managementName, isAsc);
        case 'director':
          return this.compare(
            `${a.director.firstName} ${a.director.lastName}`, 
            `${b.director.firstName} ${b.director.lastName}`, 
            isAsc
          );
        default:
          return 0;
      }
    })
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  showManagementDepartments(management: Management) {
    this.dialog.open(ManagementDepartmentsComponent, {
      data: management,
      width: '45%'
    })
      .afterClosed()
      .subscribe(() => {
        this.router.navigate(['../managements']);
      });
  }

  openEditForm(management: Management) {
    this.dialog.open(ManagementEditComponent, {
      data: management,
      width: '400px',
      height: '25em'
    })
      .afterClosed()
      .subscribe(() => {
        this.router.navigate(['../managements']);
      });
  }
}
