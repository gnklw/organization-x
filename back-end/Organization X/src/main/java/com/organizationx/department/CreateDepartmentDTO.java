package com.organizationx.department;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class CreateDepartmentDTO {

    private @Size(min = 2, max = 20) @NotNull String departmentName;
    private @Size(min = 5, max = 150)  String description;

    public CreateDepartmentDTO() {
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public CreateDepartmentDTO setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public CreateDepartmentDTO setDescription(String description) {
        this.description = description;
        return this;
    }
}
