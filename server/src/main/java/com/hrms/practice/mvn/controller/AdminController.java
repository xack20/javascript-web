package com.hrms.practice.mvn.controller;

import com.hrms.practice.mvn.model.Employee;
import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private EmployeeService employeeService;

	@GetMapping("/")
	public ResponseEntity<?>  welcome() {
		//check header
		
		return ResponseEntity.ok().body(new Response(true, "Welcome to admin controller", null));
	}
	
	@PostMapping("/registerAdmin")
	public ResponseEntity<?> registerAdmin(@RequestBody Employee employee) {
		Employee regEmployee = employeeService.getEmployeeByUsername(employee.getUsername());
		
		if(regEmployee != null)
			return ResponseEntity.badRequest().body(new Response(false, "Admin already exists!", null));
		
		
		regEmployee = employeeService.saveAdmin(employee);
		return ResponseEntity.ok().body(regEmployee);
	}

	@PostMapping("/registerEmployee")
	public ResponseEntity<?> registerEmployee(@RequestBody Employee employee) {
		Employee regEmployee = employeeService.getEmployeeByUsername(employee.getUsername());
		
		if(regEmployee != null)
			return ResponseEntity.badRequest().body(new Response(false, "Employee already exists!", null));
		
		regEmployee = employeeService.saveEmployee(employee);
		
		return ResponseEntity.ok().body(regEmployee);
	}

}
