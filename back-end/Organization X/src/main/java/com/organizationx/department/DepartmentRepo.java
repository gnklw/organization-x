package com.organizationx.department;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DepartmentRepo extends JpaRepository<Department, Long>, JpaSpecificationExecutor<Department> {

    @Query(value =
            "SELECT d FROM Department AS d " +
                    "WHERE d.departmentName LIKE %:keyword% " +
                    "ORDER BY d.departmentName ASC")
    Page<Department> findAllByKeyword(@Param("keyword") String keyword, Pageable pageable);

    Optional<Department> findByDepartmentName(String departmentName);
}
