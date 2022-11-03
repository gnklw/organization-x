import { Department } from "../shared/interface/department";

export const DEPARTMENT_FEATURE_KEY = 'departments';

export interface DepartmentState {
    departments: Department[];
    loaded: boolean;
    error?: string | null;
}

export const initialDepartmentState: DepartmentState = {
    departments: [],
    loaded: false,
    error: null,
}