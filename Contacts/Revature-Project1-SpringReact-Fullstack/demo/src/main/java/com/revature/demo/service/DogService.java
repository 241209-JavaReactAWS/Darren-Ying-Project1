package com.revature.demo.service;
import com.revature.demo.entity.Dog;
import com.revature.demo.exception.MissingDogException;
import com.revature.demo.repository.DogRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DogService{
    @Autowired
    private DogRespository dogRespository;

    public List<Dog> getAllDogs(){
        return dogRespository.findAll();
    }

    // Needs Some work
    /*
    public Dog getDogById(Long id) {
        return dogRepository.findById(id).orElseThrow(() -> new MissingDogException(id));
    }
    public Dog saveDog(Dog dog) {
        return dogRepository.save(dog);
    }

    public void deleteDog(Long id) {
        dogRepository.deleteById(id);
    }

     */





}
