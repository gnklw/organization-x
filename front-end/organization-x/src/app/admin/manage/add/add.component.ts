import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Department } from 'src/app/shared/interface/department';
import { Employee } from 'src/app/shared/interface/employee';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() currentRecords: Department[] | Employee[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSelectDialog() {
    this.dialog.open(SelectComponent, {
      data: this.currentRecords,
      width: '40%',
    });
  }
}
