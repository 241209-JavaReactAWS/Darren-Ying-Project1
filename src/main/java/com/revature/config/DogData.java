package com.revature.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.revature.model.Dog;
import com.revature.repository.DogRepository;

import java.util.List;

@Configuration
public class DogData {
    @Bean
    CommandLineRunner initDatabase(DogRepository dogRepository) {

        return args -> {
            dogRepository.saveAll(List.of(
                    new Dog(1, "Max", "Bulldog", "Adopted", "Female"),
                    new Dog(2, "Charlie", "Beagle", "Available", "Male"),
                    new Dog(3, "Lucy", "Poodle", "Available", "Female"),
                    new Dog(4, "Daisy", "Cocker Spaniel", "Adopted", "Female"),
                    new Dog(5, "Molly", "Labrador", "Available", "Female"),
                    new Dog(6, "Rockey", "Rottweiler", "Available", "Male"),
                    new Dog(7, "Bella", "Boxer", "Adopted", "Female"),
                    new Dog(8, "Bailey", "Dalmatian", "Available", "Male"),
                    new Dog(9, "Coco", "Chihuahua", "Available", "Female"),
                    new Dog(10, "Lola", "Shiba Inu", "Adopted", "Male"),
                    new Dog(11, "Milo", "French Bulldog", "Available", "Female"),
                    new Dog(12, "Toby", "Golden Retriever", "Adopted", "Male"),
                    new Dog(13, "Sassy", "German Shepherd", "Available", "Female")
            ));

        };
    }

}
