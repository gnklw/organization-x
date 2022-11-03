package com.organizationx.department;

import com.organizationx.employee.EmployeeDTO;

import java.util.List;

public class DepartmentDTO {

    private Long id;
    private String departmentName;
    private String description;
    private EmployeeDTO departmentManager;
    private List<EmployeeDTO> employees;
    private String managementName;

    public DepartmentDTO() {
    }

    public Long getId() {
        return id;
    }

    public DepartmentDTO setId(Long id) {
        this.id = id;
        return this;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public DepartmentDTO setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public DepartmentDTO setDescription(String description) {
        this.description = description;
        return this;
    }

    public EmployeeDTO getDepartmentManager() {
        return departmentManager;
    }

    public DepartmentDTO setDepartmentManager(EmployeeDTO departmentManager) {
        this.departmentManager = departmentManager;
        return this;
    }

    public List<EmployeeDTO> getEmployees() {
        return employees;
    }

    public DepartmentDTO setEmployees(List<EmployeeDTO> employees) {
        this.employees = employees;
        return this;
    }

    public String getManagement() {
        return managementName;
    }

    public DepartmentDTO setManagement(String managementName) {
        this.managementName = managementName;
        return this;
    }
}
