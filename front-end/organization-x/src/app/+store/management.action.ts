import { createAction, props } from '@ngrx/store';
import { Management } from '../shared/interface/management';

export enum ManagementActionsNames {
    INIT = '[Management] Init',
    LOAD_MANAGEMENTS = '[Management] Load Management',
    LOAD_MANAGEMENTS_SUCCESS = '[Management] Load Managements Success',
    LOAD_MANAGEMENTS_FAILURE = '[Management] Load Managements Failure',
    CREATE_MANAGEMENT = '[Management] Create Management',
    CREATE_MANAGEMENT_SUCCESS = '[Management] Create Management Success',
    CREATE_MANAGEMENT_FAILURE = '[Management] Create Management Failure',
    EDIT_MANAGEMENT = '[Management] Edit Management',
    EDIT_MANAGEMENT_SUCCESS = '[Management] Edit Management Success',
    EDIT_MANAGEMENT_FAILURE = '[Management] Edit Management Failure',
    REMOVE_DEPARTMENT_FROM_MANAGEMENT = 'Remove department',
    REMOVE_DEPARTMENT_FROM_MANAGEMENT_SUCCESS = '[Management] Remove department success',
    REMOVE_DEPARTMENT_FROM_MANAGEMENT_FAILURE = '[Management] Remove department failure',
    ADD_DEPARTMENT_TO_MANAGEMENT = '[Management] Add department',
    ADD_DEPARTMENT_TO_MANAGEMENT_SUCCESS = '[Management] Add department success',
    ADD_DEPARTMENT_TO_MANAGEMENT_FAILURE = '[Management] Add department failure',
}

export const Init = createAction(ManagementActionsNames.INIT);

export const LoadManagements = createAction(ManagementActionsNames.LOAD_MANAGEMENTS);

export const LoadManagementsSuccess = createAction(
    ManagementActionsNames.ADD_DEPARTMENT_TO_MANAGEMENT_SUCCESS,
    props<{ managements: Management[] }>()
)

export const LoadManagementsFailure = createAction(
    ManagementActionsNames.LOAD_MANAGEMENTS_FAILURE,
    props<{ error: string | null }>()
)

export const CreateManagement = createAction(
    ManagementActionsNames.CREATE_MANAGEMENT,
    props<{ management: Management }>()
)

export const CreateManagementSuccess = createAction(
    ManagementActionsNames.CREATE_MANAGEMENT_SUCCESS,
    props<{ management: Management }>()
)

export const CreateManagementFailure = createAction(
    ManagementActionsNames.CREATE_MANAGEMENT_FAILURE,
    props<{ error: string | null }>()
)

export const EditManagement = createAction(
    ManagementActionsNames.EDIT_MANAGEMENT,
    props<{ management: Management }>()
)

export const EditManagementSuccess = createAction(
    ManagementActionsNames.EDIT_MANAGEMENT_SUCCESS,
    props<{ management: Management }>()
)

export const EditManagementFailure = createAction(
    ManagementActionsNames.EDIT_MANAGEMENT_FAILURE,
    props<{ error: string | null }>()
)

export const RemoveDepartmentFromManagement = createAction(
    ManagementActionsNames.REMOVE_DEPARTMENT_FROM_MANAGEMENT,
    props<{ management: Management, departmentId: number }>()
)

export const RemoveDepartmentFromManagementSuccess = createAction(
    ManagementActionsNames.REMOVE_DEPARTMENT_FROM_MANAGEMENT_SUCCESS,
    props<{ management: Management, departmentId: number }>()
)

export const RemoveDepartmentFromManagementFailure = createAction(
    ManagementActionsNames.REMOVE_DEPARTMENT_FROM_MANAGEMENT_FAILURE,
    props<{ error: string | null }>()
)

export const AddDepartmentFromManagement = createAction(
    ManagementActionsNames.ADD_DEPARTMENT_TO_MANAGEMENT,
    props<{ id: number }>()
)

export const AddDepartmentFromManagementSuccess = createAction(
    ManagementActionsNames.ADD_DEPARTMENT_TO_MANAGEMENT_SUCCESS,
    props<{ id: number }>()
)

export const AddDepartmentFromManagementFailure = createAction(
    ManagementActionsNames.ADD_DEPARTMENT_TO_MANAGEMENT_FAILURE,
    props<{ error: string | null }>()
)