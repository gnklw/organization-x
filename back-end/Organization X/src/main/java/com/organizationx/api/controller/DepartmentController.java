package com.organizationx.api.controller;

import com.organizationx.department.CreateDepartmentDTO;
import com.organizationx.department.DepartmentDTO;
import com.organizationx.department.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.organizationx.api.Api.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(PREFIX + DEPARTMENT)
public class DepartmentController {

    private final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @PostMapping(CREATE)
    public ResponseEntity<DepartmentDTO> createDepartment(@RequestBody CreateDepartmentDTO createDepartmentDTO) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(this.departmentService.create(createDepartmentDTO));
    }

    @PutMapping(UPDATE)
    public ResponseEntity<DepartmentDTO> updateDepartment(
            @RequestParam("id") long id,
            @RequestBody CreateDepartmentDTO createDepartmentDTO) {

        return ResponseEntity
        .status(HttpStatus.ACCEPTED)
        .body(this.departmentService.update(id, createDepartmentDTO));
    }

    @DeleteMapping(DELETE)
    public void deleteDepartment(@RequestParam("id") long id) {
        this.departmentService.delete(id);
    }

    @GetMapping(SEARCH)
    public ResponseEntity<List<DepartmentDTO>> search(
            @RequestParam(value = "keyword", required = false) String keyword,
            @RequestParam(value = "page", defaultValue = "0") int page) {

        List<DepartmentDTO> departments = this.departmentService.search(keyword, page);
        return ResponseEntity.ok(departments);
    }
}
