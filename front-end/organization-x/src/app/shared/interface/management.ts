import { Department } from "./department";
import { Employee } from "./employee";

export interface Management {
    id: number;
    managementName: string;
    description: string;
    director: Employee;
    departments: Department[];
}
