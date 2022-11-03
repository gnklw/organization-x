import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageOperationsService } from 'src/app/admin/manage/manage-operations-service';

@Component({
  selector: 'app-department-employees',
  templateUrl: './department-employees.component.html',
  styleUrls: ['./department-employees.component.css']
})
export class DepartmentEmployeesComponent implements OnInit {

  searchText = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public manageOperationsService: ManageOperationsService
  ) { }

  ngOnInit(): void {
  }

  removeRecord(id: number) {
    //this.data[0] = this.manageOperationsService.removeRecord(this.data.employees, id);
    this.data[0] = this.manageOperationsService.removeRecord(this.data.employees, id);
  }

  getSearchText(text: string) {
    this.searchText = text;
  }
}