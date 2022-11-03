import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from 'rxjs/operators';
import { Management } from "../shared/interface/management";
import { ResourceService } from "../shared/service/resource-service";
import { ManagementActionsNames } from "./management.action";
import * as managementActions from "../+store/management.action"

@Injectable()
export class ManagementEffect {

    constructor(
        private readonly actions$: Actions,
        private readonly resourceService: ResourceService<Management>
    ) { }


    public readonly loadManagements$: Observable<any> = createEffect(() => {
        return this.actions$.pipe(
            ofType(ManagementActionsNames.LOAD_MANAGEMENTS),
            switchMap(() => this.resourceService.getAll(1)),
            map((managements: Management[]) => managementActions.LoadManagementsSuccess({ managements })),
            catchError((error: string | null) =>
                of(managementActions.LoadManagementsFailure({ error }))
            )
        )
    });

    public readonly removeDepartmentFromManagement$: Observable<any> = createEffect(() => {
        return this.actions$.pipe(
            ofType(ManagementActionsNames.REMOVE_DEPARTMENT_FROM_MANAGEMENT),
            map((management: Management, departmentId: number) => {
                return managementActions.RemoveDepartmentFromManagementSuccess( {management, departmentId} )
            }),
            catchError((error: string | null) =>
                of(managementActions.AddDepartmentFromManagementFailure({ error }))
            )
        );
    })
}