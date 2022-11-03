package com.organizationx.management;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ManagementRepo extends JpaRepository<Management, Long> {

    @Query(value =
            "SELECT m FROM Management AS m " +
                    "WHERE m.managementName LIKE %:keyword% " +
                    "ORDER BY m.managementName ASC")
    Page<Management> findAllByKeyword(@Param("keyword") String keyword, Pageable pageable);

    @Query(value =
            "SELECT m FROM Management AS m " +
                    "ORDER BY m.managementName ASC")
    Page<Management> findAllManagements(Pageable pageable);

    Optional<Management> findByManagementName(String managementName);
}
