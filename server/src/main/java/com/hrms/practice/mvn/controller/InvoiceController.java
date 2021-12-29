package com.hrms.practice.mvn.controller;

import java.util.List;
import java.util.Map;

import com.hrms.practice.mvn.model.Invoices;
import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.service.InvoiceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/invoices")
@RestController
public class InvoiceController {

	@Autowired
	InvoiceService invoiceService;
	
	@GetMapping("/")
	public ResponseEntity<?> allInvoices() {

		List<Invoices> invoices = invoiceService.All_Invoices();

		return ResponseEntity.ok().body(new Response(true, "All invoices fetched", invoices));
	}

	@PostMapping("/add")
	public ResponseEntity<?> addInvoice(@RequestBody Map<String,Object> body) {

		Invoices invoice = invoiceService.Add_invoice(body);

		if(invoice == null)
			return ResponseEntity.badRequest().body(new Response(false, "Invoice not added",null));
	
		return ResponseEntity.ok().body(new Response(true, "All invoices fetched", invoice));
	}

	


}
