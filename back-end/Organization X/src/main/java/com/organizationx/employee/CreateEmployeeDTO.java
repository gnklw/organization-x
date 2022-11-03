package com.organizationx.employee;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class CreateEmployeeDTO {

    private @Size(min = 2, max = 20) @NotNull String firstName;
    private @Size(min = 2, max = 20) @NotNull String lastName;
    private @Size(min = 7, max = 15) @NotNull String civilIDNumber;
    private @Min(16) int age;
    private @Size(min = 8, max = 8) @NotNull String position;

    public CreateEmployeeDTO() {
    }

    public String getFirstName() {
        return firstName;
    }

    public CreateEmployeeDTO setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public String getLastName() {
        return lastName;
    }

    public CreateEmployeeDTO setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public String getCivilIDNumber() {
        return civilIDNumber;
    }

    public CreateEmployeeDTO setCivilIDNumber(String civilIDNumber) {
        this.civilIDNumber = civilIDNumber;
        return this;
    }

    public int getAge() {
        return age;
    }

    public CreateEmployeeDTO setAge(int age) {
        this.age = age;
        return this;
    }

    public String getPosition() {
        return position;
    }

    public CreateEmployeeDTO setPosition(String position) {
        this.position = position;
        return this;
    }
}
