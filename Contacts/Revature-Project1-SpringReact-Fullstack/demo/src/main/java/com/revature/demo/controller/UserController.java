package com.revature.demo.controller;

import com.revature.demo.model.Dog;
import com.revature.demo.model.User;
import com.revature.demo.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Set;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://127.0.0.1:5500", allowCredentials = "true")   // Live Server IP

public class UserController {


    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /*
    Authorizations and Authentication (the two main concepts for security) can often be complicated and there are
    variety of solutions to validate

    Sessions   - Server based  \Store what user is logged in inside the server and send a session key to the client to
    then, reaccess their info/endpoints

    JWTs/ Web Tokens
    - Client based /    The backend will generate a token and send it back upon a successful login attempt.  This token
    is stored by the frontend and decrypted by the backend as needed to get the appropriate info
    ---  Adheres more to REST constraints

     */


    // TODO LOGIN
    @PostMapping("/login")   //http://localhost:8080/users/login

    public ResponseEntity<User> loginHandler(@RequestBody User user, HttpSession session) {
        //Now validate the use who has provided the correct credentials

        User returnedUser = userService.login(user.getUsername(), user.getPassword());

        if (returnedUser == null) {
            // If use credentials for login is wrong couldn't find the username
            //return ResponseEntity.status(401).body(null);
            return ResponseEntity.badRequest().build();
        }
        // HttpSession helps to store some login info inside of the session to hold it for later
        session.setAttribute("username", returnedUser.getUsername());
        session.setAttribute("userId", returnedUser.getUserId());
        session.setAttribute("role", returnedUser.getRole());


        //OTHERWISE, success login return
        return ResponseEntity.ok(returnedUser);
    }
@GetMapping
    public User getAllUsers() {
        return userService.getAllUsers();

    }
        /*
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("username");
        String password = loginData.get("password");

        boolean isAuthenticated = userService.authenticate(username, password);

        if (isAuthenticated) {
            //return ResponseEntity.ok().build();
            return ResponseEntity.ok(Map.of("message", "Login successful"));
        } else {
           // return ResponseEntity.badRequest().build();
            return ResponseEntity.status(401).body(Map.of("message", "Login failed"));
        }
    }

    */

    //TODO LOGOUT
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        //This is for invalidating the session to log a user out
        session.invalidate();
        return ResponseEntity.noContent().build();
    }

    //TODO ADD Favorite dogs TO User
    @PostMapping("/{userId}/favorites")
    public ResponseEntity<User> addFavoriteDogs(HttpSession session, @PathVariable int userId) {
        // Implement the method logic here
        //Validate that user is logged in, then one check if the session is brand new
        //Also check if the user has a username stored
        if(session.isNew() || session.getAttribute("username") == null) {
            return ResponseEntity.status(401).build();
            //Status code indicates the user is not logged
            //403 is showing the user IS logged in but has the wrong permissions
        }

        //If the user is logged in
        User returnedUser = userService.addDogToFavorites( (String) session.getAttribute("username"), userId);
        //Now checking if the method was handled correctly
        if(returnedUser == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(returnedUser);
    }

//    //TODO Retrieve Favorite Dogs for a User
//    @GetMapping("/{userId}/favorites")
//    public ResponseEntity<User> getFavoriteDogs(HttpSession session, @PathVariable int userId) {
//        // Validate session
//        if (session.isNew() || session.getAttribute("username") == null) {
//            return ResponseEntity.status(401).build(); // User not logged in
//        }
//
//        // Check if the logged-in user matches the requested userId
//        String loggedInUser = userService.getUserByUsername((String)session.getAttribute("username");
//        if (loggedInUsername == null || loggedInUsername.getUserId() != userId) {
//            return ResponseEntity.status(403).build(); // Forbidden
//        }
//
//        // Fetch the favorite dogs for the user
//        Set<Dog> favoriteDogs = userService.getFavoriteDogsForUser(userId);
//        if (favoriteDogs == null) {
//            return ResponseEntity.status(404).build(); // User or favorite dogs not found
//        }
//
//        return ResponseEntity.ok(favoriteDogs);
//    }
//


}
