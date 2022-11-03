package com.organizationx.department;

import com.organizationx.employee.Employee;
import com.organizationx.management.Management;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "departments")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String departmentName;

    @Column(columnDefinition = "TEXT")
    private String description;

    @OneToOne
    @JoinColumn(name = "fk_employee")
    private Employee departmentManager;

    @OneToMany(
            targetEntity = Employee.class,
            cascade = {CascadeType.PERSIST, CascadeType.MERGE},
            fetch = FetchType.EAGER
    )
    @JoinTable(name = "departments_employees",
            joinColumns = @JoinColumn(name = "fk_department"),
            inverseJoinColumns = @JoinColumn(name = "fk_employee"))
    private Set<Employee> employees;

    @ManyToOne
    @JoinColumn(name = "fk_management")
    private Management management;

    public Department() {
    }

    public Long getId() {
        return id;
    }

    public Department setId(Long id) {
        this.id = id;
        return this;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public Department setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Department setDescription(String description) {
        this.description = description;
        return this;
    }

    public Employee getDepartmentManager() {
        return departmentManager;
    }

    public Department setDepartmentManager(Employee departmentManager) {
        this.departmentManager = departmentManager;
        return this;
    }

    public Set<Employee> getEmployees() {
        return employees;
    }

    public Department setEmployees(Set<Employee> employees) {
        this.employees = employees;
        return this;
    }

    public Management getManagement() {
        return management;
    }

    public Department setManagement(Management management) {
        this.management = management;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Department that = (Department) o;
        return getId().equals(that.getId()) && getDepartmentName().equals(that.getDepartmentName()) && Objects.equals(getDescription(), that.getDescription());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getDepartmentName(), getDescription());
    }

    @Override
    public String toString() {
        return "Department{" +
                "id=" + id +
                ", departmentName='" + departmentName + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
