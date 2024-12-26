package com.revature.demo.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column(unique = true)
    private String username;
    private String password;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.LAZY)
    @JoinTable(
            name = "user_dog", // Join table name
            joinColumns = @JoinColumn(name = "user_id"), // References `id` in the User table
            inverseJoinColumns = @JoinColumn(name = "dog_id", referencedColumnName = "id") // Maps to `id` in the Dog table
    )
    private Set<Dog> likedDogs;

    @Enumerated(EnumType.STRING)
    private Role role;

    public User() {}

    public User(int userId, String username, String password, Set<Dog> likedDogs, Role role) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.likedDogs = likedDogs;
        this.role = role;
    }

    // Getters and setters
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Dog> getLikedDogs() {
        return likedDogs;
    }

    public void setLikedDogs(Set<Dog> likedDogs) {
        this.likedDogs = likedDogs;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
