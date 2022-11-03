package com.organizationx.employee;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long>, JpaSpecificationExecutor<Employee> {

    @Query(value =
            "SELECT e FROM Employee AS e " +
                    "WHERE e.firstName LIKE %:keyword% " +
                    "OR e.lastName LIKE %:keyword% " +
                    "OR e.civilIDNumber LIKE %:keyword% " +
                    "OR e.position LIKE %:keyword% " +
                    "ORDER BY e.firstName, e.lastName ASC")
    Page<Employee> findAllByKeyword(@Param("keyword") String keyword, Pageable pageable);

    @Query(value =
            "SELECT e FROM Employee AS e " +
                    "ORDER BY e.firstName, e.lastName ASC")
    Page<Employee> findAllEmployees(Pageable pageable);

    Optional<Employee> findByCivilIDNumber(String civilIDNumber);
}
