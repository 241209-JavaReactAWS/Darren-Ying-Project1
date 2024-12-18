package com.revature.demo.service;

import com.revature.demo.model.Dog;
import com.revature.demo.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DogService {


    private final DogRepository dogRepository;

    @Autowired
    public DogService(DogRepository dogRepository) {
        this.dogRepository = dogRepository;
    }

    public List<Dog> getAllDogs() {

        return dogRepository.findAll();
    }

    public Dog addDog(Dog newDog) {
        return dogRepository.save(newDog);
    }

    public Dog updateDog(Dog dog) {
        //Like addDog service layer, the validation needs to be done in checking all sorts of validation to ensure the
        //update can be triggered only if the dog already exists
        return dogRepository.save(dog);
    }

    public void deleteDogById(int dogId) {
        dogRepository.deleteById(dogId);
    }
}
