package com.revature.controller;

import com.revature.model.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://127.0.0.1:5500/Contacts/Revature-Project1-SpringReact-Fullstack/demo/frontend/landingPage.html")   // Live Server IP
//@CrossOrigin(origins = "http://localhost:5173", allowCredentials="true")

public class UserController {
    @Autowired
    private UserService userService;

    // Sessions-Base Authorization, Authentication, Server-Based cookies. Other method is backend based

    @GetMapping
    public String defaultMapping() {
        return "Users endpoint is active!";
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
    @PostMapping("/login")
    public ResponseEntity<User> loginHandler(@RequestBody User user, HttpSession session){
        User returnedUser = userService.login(user.getUsername(), user.getPassword());
        if(returnedUser == null){
            return ResponseEntity.badRequest().build();
        }
        // Store some information inside session
        session.setAttribute("username", returnedUser.getUsername());
        session.setAttribute("userId", returnedUser.getUserId());
        session.setAttribute("role", returnedUser.getRole());

        return ResponseEntity.ok(returnedUser);
    }

}
