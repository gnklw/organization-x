package com.organizationx.employee;

public class EmployeeDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String civilIDNumber;
    private int age;
    private String position;

    public EmployeeDTO() {
    }

    public Long getId() {
        return id;
    }

    public EmployeeDTO setId(Long id) {
        this.id = id;
        return this;
    }

    public String getFirstName() {
        return firstName;
    }

    public EmployeeDTO setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public String getLastName() {
        return lastName;
    }

    public EmployeeDTO setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public String getCivilIDNumber() {
        return civilIDNumber;
    }

    public EmployeeDTO setCivilIDNumber(String civilIDNumber) {
        this.civilIDNumber = civilIDNumber;
        return this;
    }

    public int getAge() {
        return age;
    }

    public EmployeeDTO setAge(int age) {
        this.age = age;
        return this;
    }

    public String getPosition() {
        return position;
    }

    public EmployeeDTO setPosition(String position) {
        this.position = position;
        return this;
    }
}
