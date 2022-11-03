package com.organizationx.management;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class CreateManagementDTO {

    private @Size(min = 2, max = 20) @NotNull String managementName;
    private @Size(min = 5, max = 150) String description;

    public CreateManagementDTO() {
    }

    public String getManagementName() {
        return managementName;
    }

    public CreateManagementDTO setManagementName(String managementName) {
        this.managementName = managementName;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public CreateManagementDTO setDescription(String description) {
        this.description = description;
        return this;
    }
}
