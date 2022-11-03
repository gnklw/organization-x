import { Employee } from "../shared/interface/employee";

export const EMPLOYEE_FEATURE_KEY = 'employees';

export interface EmployeeState {
    employees: Employee[];
    loaded: boolean;
    error?: string | null;
}

export const initialEmployeeState: EmployeeState = {
    employees: [],
    loaded: false,
    error: null,
}