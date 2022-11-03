package com.organizationx.api.controller;

import com.organizationx.management.CreateManagementDTO;
import com.organizationx.management.ManagementDTO;
import com.organizationx.management.ManagementService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.organizationx.api.Api.*;

@RestController
@RequestMapping(PREFIX + MANAGEMENT)
@CrossOrigin(origins = "http://localhost:4200")
public class ManagementController {

    private final ManagementService managementService;

    public ManagementController(ManagementService managementService) {
        this.managementService = managementService;
    }

    @PostMapping(CREATE)
    public ResponseEntity<ManagementDTO> createManagement(@RequestBody CreateManagementDTO createManagementDTO) {
        return ResponseEntity
        .status(HttpStatus.CREATED)
        .body(this.managementService.create(createManagementDTO));
    }

    @PutMapping(UPDATE)
    public ResponseEntity<ManagementDTO> updateManagement(
            @RequestParam("id") long id,
            @RequestBody CreateManagementDTO createManagementDTO) {
    	
        return ResponseEntity
        .status(HttpStatus.ACCEPTED)
        .body(this.managementService.update(id, createManagementDTO));
    }

    @DeleteMapping(DELETE)
    public void deleteManagement(@RequestParam("id") long id) {
        this.managementService.delete(id);
    }

    @GetMapping(SEARCH)
    public ResponseEntity<List<ManagementDTO>> search(
            @RequestParam(value = "keyword", required = false) String keyword,
            @RequestParam(value = "page", defaultValue = "0") int page) {

        List<ManagementDTO> managements = this.managementService.search(keyword, page);
        return ResponseEntity.ok(managements);
    }
}
