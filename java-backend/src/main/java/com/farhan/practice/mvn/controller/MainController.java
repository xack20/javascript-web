package com.farhan.practice.mvn.controller;
import com.farhan.practice.mvn.model.Employee;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("/")
    public String home() {
        return "This is home!";
    }

    @GetMapping("/number-of-employees")
    public String numberOfEmployee() {
        return "List of employees";
    }


    @GetMapping("/employees/{id}")
    public String employeeProfile(@PathVariable long id) {
        return "This is " + id +"\'s profile!";
    }



    @GetMapping("/employees")
    public String allEmployees() {
        return "All employees";
    }

    // @PreAuthorize("hasRole('ROLE_hr_admin')")
    @PostMapping("/add-employee")
    public String addEmployee(@RequestBody Employee employee) {
        return employee.getFullname()+" added successfully!" ;
    }
}