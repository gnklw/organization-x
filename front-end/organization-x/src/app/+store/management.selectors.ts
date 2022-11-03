import { ManagementState, MANAGEMENTS_FEATURE_KEY } from "./management.state";
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getManagementsState = createFeatureSelector<ManagementState>(MANAGEMENTS_FEATURE_KEY);

export const getManagementsLoaded = createSelector(
    getManagementsState,
    (state: ManagementState) => state.loaded
);

export const getManagementsError = createSelector(
    getManagementsState,
    (state: ManagementState) => state.error
);

export const getAllManagements = createSelector(
    getManagementsState,
    (state: ManagementState) => state.managements
);
