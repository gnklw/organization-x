package com.organizationx.management;

import com.organizationx.department.DepartmentDTO;
import com.organizationx.employee.EmployeeDTO;

import java.util.List;

public class ManagementDTO {

    private Long id;
    private String managementName;
    private String description;
    private EmployeeDTO director;
    private List<DepartmentDTO> departments;

    public ManagementDTO() {
    }

    public Long getId() {
        return id;
    }

    public ManagementDTO setId(Long id) {
        this.id = id;
        return this;
    }

    public String getManagementName() {
        return managementName;
    }

    public ManagementDTO setManagementName(String managementName) {
        this.managementName = managementName;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public ManagementDTO setDescription(String description) {
        this.description = description;
        return this;
    }

    public EmployeeDTO getDirector() {
        return director;
    }

    public ManagementDTO setDirector(EmployeeDTO director) {
        this.director = director;
        return this;
    }

    public List<DepartmentDTO> getDepartments() {
        return departments;
    }

    public ManagementDTO setDepartments(List<DepartmentDTO> departments) {
        this.departments = departments;
        return this;
    }
}
