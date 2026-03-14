package com.example.closet;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ItemController {

    // in-memory "database" of items; loaded from JSON resource
    private static final List<Item> ITEMS = loadFromJson();

    private static List<Item> loadFromJson() {
        try (java.io.InputStream is = ItemController.class.getResourceAsStream("/items.json")) {
            if (is == null) {
                return new java.util.ArrayList<>();
            }
            com.fasterxml.jackson.databind.ObjectMapper mapper = new com.fasterxml.jackson.databind.ObjectMapper();
            Item[] array = mapper.readValue(is, Item[].class);
            return java.util.Arrays.asList(array);
        } catch (Exception ex) {
            throw new RuntimeException("Failed to load items.json", ex);
        }
    }

    @GetMapping("/items")
    public List<Item> getItems(@org.springframework.web.bind.annotation.RequestParam(required = false) String search) {
        if (search == null || search.isEmpty()) {
            return ITEMS;
        }
        String term = search.toLowerCase();
        // filter by any of the string attributes
        java.util.List<Item> filtered = new java.util.ArrayList<>();
        for (Item it : ITEMS) {
            if ((it.getName() != null && it.getName().toLowerCase().contains(term)) ||
                (it.getColor() != null && it.getColor().toLowerCase().contains(term)) ||
                (it.getPattern() != null && it.getPattern().toLowerCase().contains(term)) ||
                (it.getBrand() != null && it.getBrand().toLowerCase().contains(term)) ||
                (it.getSize() != null && it.getSize().toLowerCase().contains(term))) {
                filtered.add(it);
            }
        }
        return filtered;
    }
}
