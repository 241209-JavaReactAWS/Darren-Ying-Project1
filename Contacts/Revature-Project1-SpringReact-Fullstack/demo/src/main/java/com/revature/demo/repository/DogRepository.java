package com.revature.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.revature.demo.model.Dog;



public interface DogRepository extends JpaRepository<Dog, Integer> {
}