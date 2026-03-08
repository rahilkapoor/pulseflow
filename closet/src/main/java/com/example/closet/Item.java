package com.example.closet;

public class Item {
    private String id;
    private String name;

    // new attributes
    private String size;
    private String color;
    private String pattern;
    private String brand;
    private String descriptor; // e.g. "Oversized", "Graphic Printed"

    public Item() {}

    public Item(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public Item(String id, String name, String size, String color, String pattern, String brand, String descriptor) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.color = color;
        this.pattern = pattern;
        this.brand = brand;
        this.descriptor = descriptor;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getPattern() {
        return pattern;
    }

    public void setPattern(String pattern) {
        this.pattern = pattern;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getDescriptor() {
        return descriptor;
    }

    public void setDescriptor(String descriptor) {
        this.descriptor = descriptor;
    }
}
