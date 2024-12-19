package com.revature.service;
import com.revature.repository.UserRepository;
import com.revature.repository.DogRepository;
import com.revature.model.Dog;
import com.revature.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final DogRepository dogRepository;

    @Autowired
    public UserService(UserRepository userRepository, DogRepository dogRepository) {
        this.userRepository = userRepository;
        this.dogRepository = dogRepository;
    }
    //LOGIN METHOD
    public User login(String username, String password){
        // Look up the user by the username
        Optional<User> possibleUser = userRepository.getUserByUsername(username);

        // Check to make sure the user exists
        if (possibleUser.isEmpty()){
            return null;
        }

        // At this point we've validated that the user exists
        User returnedUser = possibleUser.get();

        // Validate the password added in will match the db password
        if (returnedUser.getPassword().equals(password)){
            return returnedUser;
        }

        return null;
    }




    //public boolean authenticate(String username, String password) {

        // Replace this with real authentication logic (e.g., database lookup
        //return "admin".equals(username) && "password123".equals(password);

    //}
}
