import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ManageResourceService } from '../manage-resource.service';
import { ManagementFacade } from 'src/app/+store/management.facade';
import { Management } from 'src/app/shared/interface/management';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  private subscriptions: Subscription[] = [];

  //@Input() management!: Management;
  @Input() id!: number;
  @Output() removedRecordsEvent = new EventEmitter<number>();



  constructor(
    private manageResourceService: ManageResourceService,
    private managementFacade: ManagementFacade) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  remove() {
    //this.managementFacade.removeDepartmentFromManagement(this.management, this.id);
    this.addRemovedRecordID();
    this.subscriptions.push(this.manageResourceService.remove(this.id).subscribe());
    
  }

  addRemovedRecordID() {
    this.removedRecordsEvent.emit(this.id);
  }
}
