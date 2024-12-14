package com.revature.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.revature.demo.model.Dog;
import com.revature.demo.repository.DogRepository;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/dogs")  // Base URL for this controller
public class DogController {

    @Autowired
    private DogRepository dogRepository;



    @GetMapping  // Endpoint: /dogs
    public List<Dog> getAllDogs() {
        return dogRepository.findAll();
    }

    @PostMapping
    public Dog addDog(@RequestBody Dog dog) {

        return dogRepository.save(dog);
    }
}

