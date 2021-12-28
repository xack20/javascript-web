package com.hrms.practice.mvn.controller;

import com.hrms.practice.mvn.payload.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/invoices")
@RestController
public class InvoiceController {
	
	@GetMapping("/")
	public ResponseEntity<?> welcome() {
		return ResponseEntity.ok().body(new Response(true, "Welcome to Invoice Management System!", null));
	}

}
