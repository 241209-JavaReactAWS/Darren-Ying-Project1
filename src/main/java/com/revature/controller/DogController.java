package com.revature.controller;

import java.util.List;

import com.revature.model.Role;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Dog;
import com.revature.service.DogService;

@RestController
@RequestMapping("/dogs")  // Base URL for this controller
@CrossOrigin(origins = "http://127.0.0.1:5500")
//@CrossOrigin(origins = "http://localhost:5173", allowCredentials="true")

public class DogController {

    @Autowired
    private DogService dogService;

    @GetMapping  // Endpoint: /dogs
    public List<Dog> getAllDogs() {
        return dogService.getAllDogs();
    }

    /*
    @PostMapping("/addDog")
    public Dog addDog(@RequestBody Dog newDog) {
        return dogService.addDog(newDog);
    }
    */

     // Add a new dog
    //admin only
    @PostMapping
    public ResponseEntity<Dog>createNewDogHandler(HttpSession session, @RequestBody Dog dog){
        // check is user logged in
        if(session.isNew()||session.getAttribute("username") == null){
            // user not loged in
            return ResponseEntity.status(401).build();
        }
        // check if user is admin
        if (session.getAttribute("role") != Role.ADMIN){
            // signed in but not admin
            return ResponseEntity.status(403).build();
        }
        // add dog to db as admin
        Dog returnedDog = dogService.addDog(dog);
        // else if null
        if(returnedDog == null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.status(201).body(returnedDog);
    }


    // delete dog by id
    //admin only
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteDog(@PathVariable int id) {
        dogService.deleteDog(id);
    }

    // update dog by id (put)
    //Admin only
    @PutMapping("/{id}")
    public ResponseEntity<Dog> updateDog(@PathVariable int id, @RequestBody Dog dogDetails) {
        try {
            Dog updatedDog = dogService.updateDog(id, dogDetails);
            return ResponseEntity.ok(updatedDog);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();  // Else Dog not found
        }
    }


}
