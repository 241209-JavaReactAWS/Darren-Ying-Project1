package com.revature.demo.exception;

public class MissingDogException extends RuntimeException{
    public MissingDogException(Long id) {
        super("Could not find dog with id " + id);
    }

}

/*

 */