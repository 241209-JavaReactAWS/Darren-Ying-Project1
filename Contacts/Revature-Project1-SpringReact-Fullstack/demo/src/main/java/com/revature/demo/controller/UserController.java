package com.revature.demo.controller;

import com.revature.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://127.0.0.1:5500/Contacts/Revature-Project1-SpringReact-Fullstack/demo/frontend/landingPage.html")   // Live Server IP

public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping
    public String defaultMapping() {
        return "Users endpoint is active!";
    }

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
}
