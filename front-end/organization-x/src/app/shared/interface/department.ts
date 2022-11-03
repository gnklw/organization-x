import { Employee } from "./employee";

export interface Department {
    id: number;
    departmentName: string;
    description: string;
    departmentManager: Employee;
    employees: Employee[];
    management: string;
}
