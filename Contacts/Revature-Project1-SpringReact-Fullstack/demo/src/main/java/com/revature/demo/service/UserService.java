package com.revature.demo.service;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    public boolean authenticate(String username, String password) {

       // Replace this with real authentication logic (e.g., database lookup
        return "admin".equals(username) && "password123".equals(password);

    }
}
