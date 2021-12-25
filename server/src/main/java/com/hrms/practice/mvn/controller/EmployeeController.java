package com.hrms.practice.mvn.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import com.hrms.practice.mvn.Config;
import com.hrms.practice.mvn.model.User;
import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employee")
public class EmployeeController {


	@Autowired
	private UserService userService;

	
	
	@PostMapping("/info")
	public ResponseEntity<?> userinfo(@RequestParam long id) {
		
		User user = userService.getUserByUserId(id);

		if(user == null)
			return ResponseEntity.badRequest().body(new Response(false, "No user found by this ID!", null));


		if(!Config.user_role.equals("admin") && !Config.user_now.equals(user.getUsername())) 
			return ResponseEntity.badRequest().body("You are not authorized to view this page!");
		
		
		Map<String,Object> UserInfo = new HashMap<>();
		UserInfo.put("fullname", user.getFullname());
		UserInfo.put("username", user.getUsername());
		UserInfo.put("roles", user.getRoles().stream().map(item -> item.getRole()).collect(Collectors.toList()));
		
		return ResponseEntity.ok().body(new Response(true, "User found!", UserInfo));
	}


	@PostMapping("/register-employee")
	public ResponseEntity<?> registerEmployee(@RequestBody User user) {
		User regUser = userService.getUserByUsername(user.getUsername());
		
		if(regUser != null)
			return ResponseEntity.badRequest().body(new Response(false, "Employee already exists!", null));
		
		regUser = userService.saveEmployee(user);
		
		return ResponseEntity.ok().body(regUser);
	}

}
