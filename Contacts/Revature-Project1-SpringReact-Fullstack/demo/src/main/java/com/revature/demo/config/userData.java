package com.revature.demo.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.revature.demo.model.User;
import com.revature.demo.model.Dog;
import com.revature.demo.model.Role;
import com.revature.demo.repository.UserRepository;
import com.revature.demo.repository.DogRepository;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Configuration
public class userData {

    @Bean
    CommandLineRunner initUserDatabase(UserRepository userRepository, DogRepository dogRepository) {

        return args -> {
            // Fetch some existing dogs from the DogRepository to assign to users
            Dog dog1 = dogRepository.findById(1).orElse(null);
            Dog dog2 = dogRepository.findById(2).orElse(null);

            // Initialize likedDogs sets
            Set<Dog> likedDogs1 = new HashSet<>();
            likedDogs1.add(dog1);

            Set<Dog> likedDogs2 = new HashSet<>();
            likedDogs2.add(dog2);

            // Create User objects
            User adminUser = new User(1, "ADMIN", "admin12345", likedDogs1, Role.ADMIN);
            User user1 = new User(2, "Bob", "bob8888", likedDogs2, Role.USER);
            User user2 = new User(3, "Lucy", "lucy0000", new HashSet<>(), Role.USER);

            // Save Users to the database
            userRepository.saveAll(List.of(adminUser, user1, user2));
        };
    }
}