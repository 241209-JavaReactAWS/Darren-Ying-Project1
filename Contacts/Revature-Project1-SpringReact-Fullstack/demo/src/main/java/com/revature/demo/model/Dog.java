package com.revature.demo.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "dogs")
public class Dog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String breed;
    private String status;
    private String gender;

    @ManyToMany(mappedBy = "likedDogs", fetch = FetchType.LAZY)
    private Set<User> likedByUsers;

    public Dog(int id, String name, String breed, String status, String gender) {
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.status = status;
        this.gender = gender;
    }

    public Dog() {}

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Set<User> getLikedByUsers() {
        return likedByUsers;
    }

    public void setLikedByUsers(Set<User> likedByUsers) {
        this.likedByUsers = likedByUsers;
    }

    @Override
    public String toString() {
        return "Dog [id=" + id + ", name=" + name + ", breed=" + breed + ", status=" + status + ", gender=" + gender
                + "]";
    }
}