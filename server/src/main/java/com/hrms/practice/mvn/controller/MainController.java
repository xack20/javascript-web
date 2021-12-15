package com.hrms.practice.mvn.controller;

import com.hrms.practice.mvn.payload.Response;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class MainController {
	
	@GetMapping("/")
	public ResponseEntity<?> welcome() {
		return ResponseEntity.ok().body(new Response(true, "Welcome to homepage", null));
	}

}
