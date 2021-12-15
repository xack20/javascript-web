package com.hrms.practice.mvn.controller;

import java.util.List;
import java.util.stream.Collectors;

import com.hrms.practice.mvn.model.Employee;
import com.hrms.practice.mvn.payload.JwtResponse;
import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.security.jwt.JwtUtils;
import com.hrms.practice.mvn.service.EmployeeService;
import com.hrms.practice.mvn.service.MyEmployeeDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtils jwtUtils;
	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("/authenticate")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody Employee employee) throws Exception {
		Authentication auth = null;
		
		try {
			auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(employee.getUsername(), employee.getPassword()));
		} catch (BadCredentialsException e) {
			return ResponseEntity.badRequest().body(new Response(false, "Incorrect Credentials!", null));
		}
		
		MyEmployeeDetails myEmployeeDetails = (MyEmployeeDetails) auth.getPrincipal();
		final String jwt = jwtUtils.generateToken(myEmployeeDetails);
		List<String> roles = myEmployeeDetails.getAuthorities().stream().map(item -> item.getAuthority()).collect(Collectors.toList());
		
		return ResponseEntity.ok(new JwtResponse("Bearer", jwt, myEmployeeDetails.getId(), myEmployeeDetails.getFullname(), myEmployeeDetails.getUsername(), roles));
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
