package com.organizationx.api.controller;

import com.organizationx.employee.CreateEmployeeDTO;
import com.organizationx.employee.EmployeeDTO;
import com.organizationx.employee.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.organizationx.api.Api.*;

@RestController
@RequestMapping(PREFIX + EMPLOYEE)
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping(CREATE)
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody CreateEmployeeDTO createEmployeeDTO) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(this.employeeService.create(createEmployeeDTO));
    }

    @PutMapping(UPDATE)
    public ResponseEntity<EmployeeDTO> updateEmployee(
            @RequestParam("id") long id,
            @RequestBody CreateEmployeeDTO createEmployeeDTO) {

        return ResponseEntity
        .status(HttpStatus.ACCEPTED)
        .body(this.employeeService.update(id, createEmployeeDTO));
    }

    @DeleteMapping(DELETE)
    public void deleteEmployee(@RequestParam("id") long id) {
        this.employeeService.delete(id);
    }

    @GetMapping(SEARCH)
    public ResponseEntity<List<EmployeeDTO>> search(
            @RequestParam(value = "keyword", required = false) String keyword,
            @RequestParam(value = "page", defaultValue = "0") int page) {

        List<EmployeeDTO> employees = this.employeeService.search(keyword, page);
        return ResponseEntity.ok(employees);
    }
}
