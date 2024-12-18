package com.revature.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.revature.demo.model.Dog;

import java.util.Optional;


public interface DogRepository extends JpaRepository<Dog, Integer> {
    Optional<Dog> findById(int id);

    int id(int id);
}