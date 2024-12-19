package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.revature.model.Dog;
import org.springframework.stereotype.Repository;

@Repository
public interface DogRepository extends JpaRepository<Dog, Integer> {
}
