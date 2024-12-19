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
        Optional<User> possibleUser = userRepository.getUserByUsername(username);

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

    public User addDogToFavorites(String username, int id) {
        //Look up the user
        Optional<User> possibleUser = userRepository.getUserByUsername(username);

        // Look up the dog
        Optional<Dog> possibleDog = dogRepository.findById(id);

        //Validate both exists
        if(possibleUser.isEmpty() || possibleDog.isEmpty()) {
            return null;
        }

        //Extract the values now that I know they exist
        User returnedUser = possibleUser.get();
        Dog returnedDog = possibleDog.get();

        //Add the dog to the list of favorites
        Set<Dog> favorites = returnedUser.getLikedDogs();
        favorites.add(returnedDog);
        returnedUser.setLikedDogs(favorites);

        // Save the user now that the info is updated
        return userRepository.save(returnedUser);

    }


    public Set<Dog> getFavoriteDogsForUser(int userId) {
        // Fetch the user by ID
        Optional<User> possibleUser = userRepository.findById(userId);

        if (possibleUser.isEmpty()) {
            return null; // User not found
        }

        // Return the user's liked dogs
        return possibleUser.get().getLikedDogs();
    }



}
