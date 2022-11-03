package com.organizationx.management;

import com.organizationx.department.Department;
import com.organizationx.employee.Employee;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "managements")
public class Management {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String managementName;

    @Column(columnDefinition = "TEXT")
    private String description;

    @OneToOne
    @JoinColumn(name = "fk_employee")
    private Employee director;

    @OneToMany(
            mappedBy = "management",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE},
            fetch = FetchType.EAGER
    )
    private Set<Department> departments;

    public Management() {
    }

    public Long getId() {
        return id;
    }

    public Management setId(Long id) {
        this.id = id;
        return this;
    }

    public String getManagementName() {
        return managementName;
    }

    public Management setManagementName(String managementName) {
        this.managementName = managementName;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Management setDescription(String description) {
        this.description = description;
        return this;
    }

    public Employee getDirector() {
        return director;
    }

    public Management setDirector(Employee director) {
        this.director = director;
        return this;
    }

    public Set<Department> getDepartments() {
        return departments;
    }

    public Management setDepartments(Set<Department> departments) {
        this.departments = departments;
        return this;
    }

    public boolean addDepartment(Department department) {
        if (department.getManagement() == null) {
            this.getDepartments().add(department);
            department.setManagement(this);
            return true;
        }

        return false;
    }

    public boolean removeDepartment(Department department) {
        if (department.getManagement() != null) {
            this.getDepartments().remove(department);
            department.setManagement(null);
            return true;
        }

        return false;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Management that = (Management) o;
        return getId().equals(that.getId()) && getManagementName().equals(that.getManagementName()) && Objects.equals(getDescription(), that.getDescription());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getManagementName(), getDescription());
    }

    @Override
    public String toString() {
        return "Management{" +
                "id=" + id +
                ", managementName='" + managementName + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
