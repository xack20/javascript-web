package com.farhan.practice.mvn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.farhan.practice.mvn.model.Employee;
import com.farhan.practice.mvn.repository.EmployeeRepository;



@Service
public class EmployeeService {
	 @Autowired
	    private EmployeeRepository employeeRepository;

	    public Employee getEmployeeByUsername(String username) {
	        return employeeRepository.findEmployeeByUsername(username);
	    }

		public String addEmployee(Employee employee) {
			employeeRepository.save(employee);
			return "Employee added successfully";
		}
}
