package com.hrms.practice.mvn.service;

import com.hrms.practice.mvn.model.Employee;
import com.hrms.practice.mvn.model.MyEmployeeDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyEmployeeDetailsService implements UserDetailsService {
    @Autowired
    private EmployeeService employeeService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Employee employee = employeeService.getEmployeeByUsername(username);

        if(employee == null)
            throw new UsernameNotFoundException("Employee Not Found");

        return MyEmployeeDetails.build(employee);
    }
}