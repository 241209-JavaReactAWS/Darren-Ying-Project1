package com.revature.demo.service;

import com.revature.demo.model.Dog;
import com.revature.demo.model.User;
import com.revature.demo.repository.DogRepository;
import com.revature.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final DogRepository dogRepository;


    @Autowired
    public UserService(UserRepository userRepository, DogRepository dogRepository) {
        this.userRepository = userRepository;
        this.dogRepository = dogRepository;
    }

//    public boolean authenticate(String username, String password) {
//
//       // Replace this with real authentication logic (e.g., database lookup
//        return "admin".equals(username) && "password123".equals(password);
//
//    }

    public User login(String username, String password) {
        Optional<User> possibleUser = userRepository.findByUsername(username);

        //Check to ensure user exists
        if (possibleUser.isEmpty()) {
            return null;
        }

        User returnedUser = possibleUser.get(); //Validated the user exists

        //Validate password
        if (returnedUser.getPassword().equals(password)) {
            return returnedUser;
        }
        return null;
    }

    public List<User> getAllUsers() {
         return userRepository.findAll();
    }

    public User addDogToFavorites(String username, int dogId) {
        Optional<User> possibleUser = userRepository.findByUsername(username);
        Optional<Dog> possibleDog = dogRepository.findById(dogId);

        if (possibleUser.isEmpty() || possibleDog.isEmpty()) {
            System.out.println("User or Dog not found");
            return null;
        }

        User returnedUser = possibleUser.get();
        Dog returnedDog = possibleDog.get();

        Set<Dog> favorites = returnedUser.getLikedDogs();
        if (favorites.contains(returnedDog)) {
            System.out.println("Dog is already in favorites");
            return returnedUser; // No need to add again
        }

        favorites.add(returnedDog);
        returnedUser.setLikedDogs(favorites);

        // Save the updated user with new favorites
        User updatedUser = userRepository.save(returnedUser);

        System.out.println("Dog added to favorites successfully");
        return updatedUser;
    }


//    public Set<Dog> getFavoriteDogsForUser(int userId) {
//        // Fetch the user by ID
//        Optional<User> possibleUser = userRepository.findById(userId);
//
//        if (possibleUser.isEmpty()) {
//            return null; // User not found
//        }
//
//        // Return the user's liked dogs
//        return possibleUser.get().getLikedDogs();
//    }


    public User getUserByUsername(String username) {
        // Use the repository to fetch the user by username
        Optional<User> user = userRepository.findByUsername(username);

        // Return the user if found, or throw an exception
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new RuntimeException();
        }
    }
}
