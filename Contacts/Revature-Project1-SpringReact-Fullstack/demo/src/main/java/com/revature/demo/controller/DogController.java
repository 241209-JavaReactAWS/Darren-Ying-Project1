package com.revature.demo.controller;

import com.revature.demo.model.Role;
import com.revature.demo.service.DogService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.revature.demo.model.Dog;
import com.revature.demo.repository.DogRepository;


import java.util.List;


@RestController
@RequestMapping("/dogs")  // Base URL for this controller
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class DogController {


    private final DogService dogService;

    @Autowired
    public DogController(DogService dogService) {
        this.dogService = dogService;

    }


    @GetMapping  // Endpoint: /dogs
    public List<Dog> getAllDogs() {
        return dogService.getAllDogs();
    }


    // TO ADD a new Dog (ADMIN ONLY)
    @PostMapping("/addDog")
    public ResponseEntity<Dog> addDogHandler(HttpSession session, @RequestBody Dog newDog) {
        //Check that the user is logged in
        if(session.isNew() || session.getAttribute("username") == null) {
            return ResponseEntity.status(401).build();
            //User not logged in yet
        }

        // Check the validation if logged in but need to make sure they have the right permission to add a dog
        if(session.getAttribute("role") != Role.ADMIN) {
            // This means the user signed in but NOT an ADMIN
            return ResponseEntity.status(403).build();
        }

        // if made it to this point, the user is logged in and the user is an ADMIN
        //Then add the dog tot he database
        Dog returnedDog = dogService.addDog(newDog);

        if(returnedDog == null) {
            return ResponseEntity.badRequest().build();
        }

        // status code 201, dog Created
        return ResponseEntity.status(201).body(returnedDog);
    }


    @DeleteMapping("/{dogId}")
    public void deleteDog(@PathVariable int dogId) {
        dogService.deleteDogById(dogId);
    }

}



