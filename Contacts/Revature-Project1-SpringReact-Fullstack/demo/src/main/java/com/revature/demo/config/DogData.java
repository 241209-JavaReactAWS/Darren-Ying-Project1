package com.revature.demo.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.revature.demo.model.Dog;
import com.revature.demo.repository.DogRepository;

import java.util.List;
@Configuration
public class DogData {

    @Bean
    CommandLineRunner initDatabase(DogRepository dogRepository) {

        return args -> {
            dogRepository.saveAll(List.of(
                    new Dog(2, "Max", "Bulldog", "Adopted", "Female"),
                    new Dog(3, "Charlie", "Beagle", "Available", "Male"),
                    new Dog(4, "Lucy", "Poodle", "Available", "Female"),
                    new Dog(5, "Daisy", "Cocker Spaniel", "Adopted", "Female"),
                    new Dog(6, "Molly", "Labrador", "Available", "Female"),
                    new Dog(7, "Rockey", "Rottweiler", "Available", "Male"),
                    new Dog(8, "Bella", "Boxer", "Adopted", "Female"),
                    new Dog(9, "Bailey", "Dalmatian", "Available", "Male"),
                    new Dog(10, "Coco", "Chihuahua", "Available", "Female")
            ));

        };
    }
}
