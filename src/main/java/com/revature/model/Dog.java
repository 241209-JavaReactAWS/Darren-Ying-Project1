package com.revature.model;
import jakarta.persistence.*;

@Entity
public class Dog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    private String name;
    private String breed;
    private String status;
    private String gender;
    //private String picUrl;

    public Dog(int id, String name, String breed, String status, String gender) {
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.status = status;
        this.gender = gender;
        //this.picUrl = picUrl;
    }

    public Dog() {

    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getBreed() {
        return breed;
    }

    public String getStatus() {
        return status;
    }

    public String getGender() {
        return gender;
    }

    //public String getPicUrl(){ return picUrl;}


    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    //public void setPicUrl(String picUrl) {
     //   this.picUrl = picUrl;
    //}


    @Override
    public String toString() {
        return "Dog [id=" + id + ", name=" + name + ", breed=" + breed + ", status=" + status + ", gender=" + gender
                + "]";
    }
}
