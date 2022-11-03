import { createReducer, on, Action } from '@ngrx/store';
import { initialManagementState, ManagementState } from './management.state';
import * as managementActions from '../+store/management.action';

const managementsReducer = createReducer(
    initialManagementState,
    on(managementActions.Init, (state) => ({ ...state, loaded: false, error: null })),
    on(managementActions.LoadManagements, (state) => ({ ...state, loaded: false, error: null })),
    on(managementActions.LoadManagementsSuccess, (state, { managements }) => ({
        ...state,
        managements: managements,
        loaded: true,
        error: null
    })),
    on(managementActions.LoadManagementsFailure, (state, { error }) => ({ ...state, error })),
    on(managementActions.RemoveDepartmentFromManagement, (state) => ({
        ...state,
        loaded: false,
        error: null
    })),
    on(managementActions.RemoveDepartmentFromManagementSuccess, (state, { management, departmentId }) => {

        return {
            ...state,
            managements: state.managements?.map(m => m.id === management.id
                ? { ...m, departments: m.departments.filter(d => d.id !== departmentId) }
                : m
            ),
            loaded: true,
            error: null
        }
    }),
    on(managementActions.RemoveDepartmentFromManagementFailure, (state, { error }) => ({ ...state, error })),

);

export function reducer(state: ManagementState | undefined, action: Action) {
    return managementsReducer(state, action);
}