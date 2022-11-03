import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Management } from "../shared/interface/management";
import { select, Store } from '@ngrx/store';
import { ManagementState } from "./management.state";
import * as managementSelectors from "../+store/management.selectors";
import * as managementActions from "../+store/management.action"

@Injectable()
export class ManagementFacade {
    public readonly loaded$: Observable<boolean> = this.store.pipe(
        select(managementSelectors.getManagementsLoaded)
    );


    public readonly allManagements$: Observable<Management[]> = this.store.pipe(
        select(managementSelectors.getAllManagements)
    );

    constructor(private readonly store: Store<ManagementState>) {}

    public init(): void {
        this.store.dispatch(managementActions.Init());
    }

    public loadManagements(): void {
        this.store.dispatch(managementActions.LoadManagements());
    }
    
    public removeDepartmentFromManagement(management: Management, departmentId: number): void {
        this.store.dispatch(managementActions.RemoveDepartmentFromManagement({ management, departmentId }));
    }
}

