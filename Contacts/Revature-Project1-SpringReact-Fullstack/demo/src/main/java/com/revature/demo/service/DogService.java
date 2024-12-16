package com.revature.demo.service;

import com.revature.demo.model.Dog;
import com.revature.demo.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DogService {

    @Autowired
    private DogRepository dogRepository;

    public List<Dog> getAllDogs() {
        return dogRepository.findAll();
    }

    public Dog addDog(Dog newDog) {
        return dogRepository.save(newDog);
    }
}
