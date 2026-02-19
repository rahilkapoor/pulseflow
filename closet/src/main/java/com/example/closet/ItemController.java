package com.example.closet;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // allow Next.js dev server
public class ItemController {

    @GetMapping("/items")
    public List<Item> getItems() {
        // dummy data - later connect to MongoDB repository
        return Arrays.asList(
                new Item("1", "Shirt"),
                new Item("2", "Pants"),
                new Item("3", "Hat"),
                new Item("4", "Shoes"),
                new Item("5", "Jacket")
        );
    }
}
