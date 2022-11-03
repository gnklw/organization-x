package com.organizationx.employee;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String civilIDNumber;

    @Column
    private int age;

    @Column(nullable = false)
    private String position;

    public Employee() {
    }

    public Long getId() {
        return id;
    }

    public Employee setId(Long id) {
        this.id = id;
        return this;
    }

    public String getFirstName() {
        return firstName;
    }

    public Employee setFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public String getLastName() {
        return lastName;
    }

    public Employee setLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public String getCivilIDNumber() {
        return civilIDNumber;
    }

    public Employee setCivilIDNumber(String civilIDNumber) {
        this.civilIDNumber = civilIDNumber;
        return this;
    }

    public int getAge() {
        return age;
    }

    public Employee setAge(int age) {
        this.age = age;
        return this;
    }

    public String getPosition() {
        return position;
    }

    public Employee setPosition(String position) {
        this.position = position;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return getAge() == employee.getAge() && getId().equals(employee.getId()) && getFirstName().equals(employee.getFirstName()) && getLastName().equals(employee.getLastName()) && getCivilIDNumber().equals(employee.getCivilIDNumber()) && getPosition().equals(employee.getPosition());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getFirstName(), getLastName(), getCivilIDNumber(), getAge(), getPosition());
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", civilIDNumber='" + civilIDNumber + '\'' +
                ", age=" + age +
                ", position='" + position + '\'' +
                '}';
    }
}
