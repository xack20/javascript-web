package com.hrms.practice.mvn.controller;

import com.hrms.practice.mvn.payload.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {
	
	@GetMapping("/")
	public ResponseEntity<?> welcome() {
		return ResponseEntity.ok().body(new Response(true, "Welcome to Dashboard", null));
	}

}
