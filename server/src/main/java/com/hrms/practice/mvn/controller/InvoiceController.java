package com.hrms.practice.mvn.controller;

import java.util.Map;

import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.service.InvoiceService;

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

@RequestMapping("/invoice")
@RestController
public class InvoiceController {

	@Autowired
	InvoiceService invoiceService;




	
	@GetMapping("/")
	public ResponseEntity<?> allInvoices() {

		Response response = invoiceService.All_Invoices();

		return ResponseEntity.ok().body(response);
	}




	@GetMapping("/{id}")
	public ResponseEntity<?> oneInvoices(@PathVariable Long id) {

		return invoiceService.One_Invoices(id);
	}




	@PostMapping("/add")
	public ResponseEntity<?> addInvoice(@RequestBody Map<String,Object> body) {

		return invoiceService.Add_Invoice(body);
	}




	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateInvoice(@PathVariable Long id,@RequestBody Map<String,Object> body) {
	
		return invoiceService.Update_Invoice(id,body);
	}


	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteInvoice(@PathVariable Long id,@RequestBody Map<String,Object> body) {

		return invoiceService.Delete_Invoice(id,body);
	}



}
