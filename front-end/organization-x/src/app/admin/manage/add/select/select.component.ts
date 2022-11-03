import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ManageResourceService } from '../../manage-resource.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  searchText = '';

  readonly currentPath: string = '/' + this.router.url.split('/')[1];

  available: any[] = [];
  h3Value: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private currentRecords: any,
    private router: Router,
    private manageResourceService: ManageResourceService,
  ) {
    this.h3Value = this.checkUrl() ? "department" : "employee";
  }

  ngOnInit(): void {
    this.loadAvailable();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  loadAvailable() {
    this.subscriptions.push(this.manageResourceService.getAvailable().subscribe(data => this.available = data));
    console.log(this.currentPath)
  }

  checkUrl() {
    return this.currentPath === "/managements";
  }

  add(id: number) {
    this.subscriptions.push(this.manageResourceService.add(id).subscribe());
    this.addToCurrentRecords(id);
    this.removeFromAvailableRecords(id);
  }

  addToCurrentRecords(id: number) {
    this.currentRecords.push(this.available.find(r => r.id === id));
  }

  removeFromAvailableRecords(id: number) {
    this.available
      .splice(this.available
        .findIndex((e: { id: number; }) => e.id === id), 1);
  }

  getSearchText(text: string) {
    this.searchText = text;
  }
}
