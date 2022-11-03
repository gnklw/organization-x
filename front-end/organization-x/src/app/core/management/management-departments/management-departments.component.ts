import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageOperationsService } from 'src/app/admin/manage/manage-operations-service';


@Component({
  selector: 'app-management-departments',
  templateUrl: './management-departments.component.html',
  styleUrls: ['./management-departments.component.css']
})
export class ManagementDepartmentsComponent implements OnInit {

  searchText = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public management: any,
    public manageOperationsService: ManageOperationsService
  ) { }

  ngOnInit(): void {
  }

  removeRecord(id: number) {
    return this.management[0] = this.manageOperationsService.removeRecord(this.management.departments, id);
  }

  getSearchText(text: string) {
    this.searchText = text;
  }
}
