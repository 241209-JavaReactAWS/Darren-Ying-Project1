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
import java.util.Optional;


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

    @GetMapping("/{dogId}")

    public ResponseEntity<Dog> getDogById(@PathVariable int dogId) {
        Optional<Dog> dog = dogService.getDogById(dogId);

        if(dog.isEmpty()) {
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.ok(dog.get());
    }

    // TO ADD a new Dog (ADMIN ONLY)

    @PostMapping("/addDog")
    public ResponseEntity<Dog> addDogHandler(HttpSession session, @RequestBody Dog newDog) {
        System.out.println("Checking session and role...");
        if (session.isNew() || session.getAttribute("username") == null) {
            System.out.println("Unauthorized: User not logged in.");
            return ResponseEntity.status(401).build();
        }

        if (!Role.ADMIN.equals(session.getAttribute("role"))) {
            System.out.println("Forbidden: User is not an ADMIN.");
            return ResponseEntity.status(403).build();
        }

        System.out.println("Adding new dog...");
        Dog returnedDog = dogService.addDog(newDog);

        if (returnedDog == null) {
            System.out.println("Bad Request: Failed to add dog.");
            return ResponseEntity.badRequest().build();
        }

        System.out.println("Dog added successfully!");
        return ResponseEntity.status(201).body(returnedDog);
    }

    @PutMapping("/{dogId}")
    public ResponseEntity<Dog> updateDogHandler(@PathVariable int dogId, @RequestBody Dog updatedDog) {
        Optional<Dog> existingDog = dogService.getDogById(dogId);

        if (existingDog.isEmpty()) {
            return ResponseEntity.status(404).build();
        }

        // Ensure the ID of the dog being updated matches the ID in the path
        updatedDog.setId(dogId);

        Dog savedDog = dogService.updateDog(updatedDog);
        return ResponseEntity.ok(savedDog);
    }


    @DeleteMapping("/{dogId}")
    public ResponseEntity<?> deleteDogHandler(@PathVariable int dogId) {
        Optional<Dog> existingDog = dogService.getDogById(dogId);

        if (existingDog.isEmpty()) {
            return ResponseEntity.status(404).build();
        }

        dogService.deleteDogById(dogId);
        return ResponseEntity.noContent().build();
    }


//    @PostMapping("/addDog")
//    public ResponseEntity<Dog> addDogHandler(HttpSession session, @RequestBody Dog newDog) {
//        //Check that the user is logged in
//        if(session.isNew() || session.getAttribute("username") == null) {
//            return ResponseEntity.status(401).build();
//            //User not logged in yet
//        }
//
//        // Check the validation if logged in but need to make sure they have the right permission to add a dog
//        if(session.getAttribute("role") != Role.ADMIN) {
//            // This means the user signed in but NOT an ADMIN
//            return ResponseEntity.status(403).build();
//        }
//
//        // if made it to this point, the user is logged in and the user is an ADMIN
//        //Then add the dog tot he database
//        Dog returnedDog = dogService.addDog(newDog);
//
//        if(returnedDog == null) {
//            return ResponseEntity.badRequest().build();
//        }
//
//        // status code 201, dog Created
//        return ResponseEntity.status(201).body(returnedDog);
//    }

   // @PutMapping("/{dogId}")

//
//    @DeleteMapping("/{dogId}")
//    public void deleteDog(@PathVariable int dogId) {
//        dogService.deleteDogById(dogId);
//    }

}



