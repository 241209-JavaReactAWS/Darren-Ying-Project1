package com.revature.demo.service;

import com.revature.demo.entity.Account;
import com.revature.demo.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService{
    @Autowired
    private AccountRepository adminRepository;

    public Account saveAdmin(Account admin) {
        return adminRepository.save(admin);
    }

    // Needs some work
    /*
    public Account getAdminByUsername(String username) {
        return adminRepository.findByUsername(username);
    }
    */



}
