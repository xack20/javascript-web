package com.hrms.practice.mvn.controller;

import java.util.HashMap;
// import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.hrms.practice.mvn.Config;
// import com.hrms.practice.mvn.model.Role;
import com.hrms.practice.mvn.model.User;
import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// @SuppressWarnings("unchecked")
@RestController
@RequestMapping("/employee")
public class EmployeeController {


	@Autowired
	private UserService userService;

	
	
	@GetMapping("/")
	public ResponseEntity<?> userinfo(@PathVariable long id) {
		System.out.println("id: " + id);
		
		User user = userService.getUserByUserId(id);

		if(user == null)
			return ResponseEntity.badRequest().body(new Response(false, "No user found by this ID!", null));


		if(!Config.user_role.equals("ADMIN") && !Config.user_now.equals(user.getUsername())) 
			return ResponseEntity.badRequest().body("You are not authorized to view this page!");
		
		
		Map<String,Object> UserInfo = new HashMap<>();
		UserInfo.put("fullname", user.getFullname());
		UserInfo.put("username", user.getUsername());
		UserInfo.put("roles", user.getRoles().stream().map(item -> item.getRole()).collect(Collectors.toList()));
		
		return ResponseEntity.ok().body(new Response(true, "User found!", UserInfo));
	}


	@PostMapping("/add")
	public ResponseEntity<?> addEmployee(@RequestBody Map<String,Object> payload) {
		User USER = userService.getUserByUsername((String) payload.get("username"));
		
		if(USER != null)
			return ResponseEntity.badRequest().body(new Response(false, "Employee already exists!", null));
		
		userService.saveEmployee(USER);
		
		return ResponseEntity.ok().body(USER);
	}

	@PostMapping("/remove")
	public ResponseEntity<?> removeEmployee(@RequestBody User user) {
		User USER = userService.getUserByUsername(user.getUsername());
		
		if(USER != null)
			return ResponseEntity.badRequest().body(new Response(false, "Employee already exists!", null));
		
		// USER = userService.saveEmployee(user);
		
		return ResponseEntity.ok().body(USER);
	}


	@PostMapping("/update")
	public ResponseEntity<?> updateEmployee(@RequestBody User user) {
		User USER = userService.getUserByUsername(user.getUsername());
		
		if(USER != null)
			return ResponseEntity.badRequest().body(new Response(false, "Employee already exists!", null));
		
		// USER = userService.saveEmployee(user);
		
		return ResponseEntity.ok().body(USER);
	}

}
