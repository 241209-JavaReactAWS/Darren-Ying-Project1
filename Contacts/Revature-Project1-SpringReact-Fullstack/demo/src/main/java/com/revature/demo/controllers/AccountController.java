package com.revature.demo.controllers;

import com.revature.demo.entity.Account;
import com.revature.demo.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/account")

public class AccountController{
    @Autowired
    private AccountService accountService;

    @PostMapping
    public Account createAccount(@RequestBody Account account) {
        return accountService.saveAdmin(account);
    }

    // Needs some work
    /*
    @GetMapping("/{username}")
    public Account getAccount(@PathVariable String username) {
        return accountService.getClass(username);
    }
    */


}

/*

 */