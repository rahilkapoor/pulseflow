package com.example.closet;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(
                        "http://localhost:3000",                    // Local development
                        "http://127.0.0.1:3000",                   // Local development (alternative)
                        "http://localhost:8080",                   // Development with containers
                        "http://wardrobe:3000",                    // Docker container hostname
                        "http://closet:8080",                      // Docker container self-reference
                        "https://wardrobe-bbbkgtbqc7e3fwc6.eastasia-01.azurewebsites.net" // Your deployed wardrobe frontend
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
