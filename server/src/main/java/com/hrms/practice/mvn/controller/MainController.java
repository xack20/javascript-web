package com.hrms.practice.mvn.controller;

import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.security.jwt.JwtUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

	@Autowired
	private JwtUtils jwtUtils;
	
	@GetMapping("/")
	public ResponseEntity<?> welcome() {
		return ResponseEntity.ok().body(new Response(true, "Welcome to homepage", null));
	}

}
