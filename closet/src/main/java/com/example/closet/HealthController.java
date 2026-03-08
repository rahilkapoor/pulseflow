package com.example.closet;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/")
    public String welcome() {
        return "{\"message\": \"Closet API is running\", \"version\": \"0.0.1\"}";
    }

    @GetMapping("/health")
    public String health() {
        return "{\"status\": \"UP\"}";
    }
}
