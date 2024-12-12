package com.revature.demo.controllers;

import com.revature.demo.entity.Dog;
import com.revature.demo.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dogs")
public class DogController{
    @Autowired
    private DogService dogService;

    @GetMapping
    public List<Dog> getAllDogs() {
        return dogService.getAllDogs();
    }
    // Needs some work
    /*
    @GetMapping("/{id}")
    public Dog getDogById(@PathVariable Long id) {
        return dogService.getDogById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Dog createDog(@RequestBody Dog dog) {
        return dogService.saveDog(dog);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteDog(@PathVariable Long id) {
        dogService.deleteDog(id);
    }
    */



}

/*


 */