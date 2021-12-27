package com.hrms.practice.mvn.controller;

import java.util.List;
import java.util.Map;


import javax.transaction.Transactional;

import com.hrms.practice.mvn.Config;
import com.hrms.practice.mvn.model.Employee;
import com.hrms.practice.mvn.model.Role;
import com.hrms.practice.mvn.model.User;
import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.repository.EmployeeRepository;
import com.hrms.practice.mvn.repository.RoleRepository;
import com.hrms.practice.mvn.repository.UserRepository;
import com.hrms.practice.mvn.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// @SuppressWarnings("unchecked")
@RestController
@RequestMapping("/employee")
public class EmployeeController {


	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private EmployeeService employeeService;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private UserRepository userRepository;


	@GetMapping("/")
	public ResponseEntity<?> allEmployee() {
		
		List<Employee> AllEmployees = employeeRepository.findAllActive();
		
		return ResponseEntity.ok().body(new Response(true, "All Employee List!", AllEmployees));
	}

	
	
	@GetMapping("/{id}")
	public ResponseEntity<?> employeeInfo(@PathVariable long id) {
		// System.out.println(id);
		User user = userRepository.findByUserId(id);
		Employee employee = employeeRepository.findByUserId(id);

		if(user == null || employee == null) 
			return ResponseEntity.badRequest().body(new Response(false, "No user found by this ID!", null));


		if(!Config.user_role.equals("ADMIN") && !Config.user_now.equals(user.getUsername())) 
			return ResponseEntity.badRequest().body("You are not authorized to view this page!");

		Map<String,Object>fullEmpDetails = employeeService.getOneEmployee(id);
	
		
		return ResponseEntity.ok().body(new Response(true, "User found!", fullEmpDetails));
	}


	@PostMapping("/add")
	public ResponseEntity<?> addEmployee(@RequestBody Map<String,Object> payload) {

		User USER = employeeService.getUserByUsername((String) payload.get("username"));
		
		if(USER != null)
			return ResponseEntity.badRequest().body(new Response(false, "Employee already exists!", null));
		
		Map<String,Object> response = employeeService.saveEmployee(payload);
		return ResponseEntity.ok().body(new Response(false, "Employeed Added Successfully!", response));

	}

	@PostMapping("/add-role")
	public ResponseEntity<?> addRole(@RequestBody Map<String,Object> payload) {
		
		if(roleRepository.findByRole((String) payload.get("role")) != null)
			return ResponseEntity.badRequest().body(new Response(false, "Role already exists!", null));
		
		Role role = new Role();
		role.setRole((String) payload.get("role"));
		roleRepository.save(role);
		
		return ResponseEntity.ok().body(role);

	}

	@Transactional
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<?> removeEmployee(@PathVariable long id) {
		
		User user = employeeService.getUserByUserId(id);
		
		if(user == null)
			return ResponseEntity.badRequest().body(new Response(false, "Employee doesn't exists!", null));
		
		employeeRepository.deleteByUserId(id);
		userRepository.deleteUserById(id);
		
		return ResponseEntity.ok().body(new Response(true, "Employee successfully deleted!", null));
	}


	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateEmployee(@PathVariable long id,@RequestBody Map<String,Object> payload) {
		
		Map<String,Object> employeeFullDetails = employeeService.updateEmployee(payload,id);

		if(employeeFullDetails == null){
			return ResponseEntity.badRequest().body(new Response(true, "User Not Found!", null));	
		}

		return ResponseEntity.ok().body(new Response(true, "User Updated Successfully!", employeeFullDetails));
	}

}
