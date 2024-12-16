package com.revature.demo.controller;

import com.revature.demo.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.revature.demo.model.Dog;
import com.revature.demo.repository.DogRepository;


import java.util.List;


@RestController
@RequestMapping("/dogs")  // Base URL for this controller
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class DogController {

    @Autowired
    private DogService dogService;



    @GetMapping  // Endpoint: /dogs
    public List<Dog> getAllDogs() {
        return dogService.getAllDogs();
    }


    @PostMapping("/addDog")
    public Dog addDog(@RequestBody Dog newDog) {
        return dogService.addDog(newDog);
    }
}

