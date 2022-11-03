import { Management } from "../shared/interface/management";

export const MANAGEMENTS_FEATURE_KEY = 'managements';

export interface ManagementState {
    managements: Management[];
    loaded: boolean;
    error?: string | null;
}

export const initialManagementState: ManagementState = {
    managements: [],
    loaded: false,
    error: null,
}