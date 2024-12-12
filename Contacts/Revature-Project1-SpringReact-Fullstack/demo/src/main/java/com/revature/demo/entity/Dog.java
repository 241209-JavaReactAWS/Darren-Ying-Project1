package com.revature.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "dog")
public class Dog{

    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String dogName;
    private String dogBreed;
    private int dogAge;

    public Dog() {
    }

    public Dog(Long id, String dogName, String dogBreed, int dogAge) {
        this.id = id;
        this.dogName = dogName;
        this.dogBreed = dogBreed;
        this.dogAge = dogAge;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDogName() {
        return dogName;
    }

    public void setDogName(String dogName) {
        this.dogName = dogName;
    }

    public String getDogBreed() {
        return dogBreed;
    }

    public void setDogBreed(String dogBreed) {
        this.dogBreed = dogBreed;
    }

    public int getDogAge() {
        return dogAge;
    }

    public void setDogAge(int dogAge) {
        this.dogAge = dogAge;
    }
}







