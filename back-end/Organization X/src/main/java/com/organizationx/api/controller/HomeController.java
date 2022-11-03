package com.organizationx.api.controller;

import com.organizationx.api.Api;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController {

    @GetMapping(Api.PREFIX + Api.HOME)
    public ResponseEntity<String> home() {
        return ResponseEntity.ok("Hello");
    }
}
