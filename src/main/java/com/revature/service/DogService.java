package com.revature.service;

import com.revature.model.Dog;
import com.revature.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    // delete dog by id
    public void deleteDog(int id) {
        dogRepository.deleteById(id);
    }

    // update dog
    public Dog updateDog(int id, Dog dogDetails) {
        Optional<Dog> optionalDog = dogRepository.findById(id);
        if (optionalDog.isPresent()) {
            Dog existingDog = optionalDog.get();
            existingDog.setName(dogDetails.getName());
            existingDog.setStatus(dogDetails.getStatus());
            existingDog.setBreed(dogDetails.getBreed());
            existingDog.setGender(dogDetails.getGender());
            return dogRepository.save(existingDog);
        } else {
            // Throw an exception or return null if the dog does not exist
            throw new RuntimeException("Dog not found with id " + id);
        }
    }
}
