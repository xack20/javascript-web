package com.backend.hrms.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/no-auth")
    public String noAuth() {
        return "Hello Not Authenticated User";
    }

    @PreAuthorize("hasAnyRole('ROLE_admin')")
    @GetMapping("/admin")
    public String admin() {
        return "Hello admin";
    }

    @PreAuthorize("hasAnyRole('ROLE_customer')")
    @GetMapping("/customer")
    public String customer() {
        return "Hello customer";
    }
}
