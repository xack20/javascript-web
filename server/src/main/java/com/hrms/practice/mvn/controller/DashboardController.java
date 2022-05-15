package com.hrms.practice.mvn.controller;

import com.hrms.practice.mvn.service.DashboardService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

	@Autowired
	private DashboardService dashboardService;
	
	@GetMapping("/admin-dashboard")
	public ResponseEntity<?> AdminDashboard() {
		return dashboardService.adminDashboard();
	}

	@GetMapping("/employee-dashboard/{id}")
	public ResponseEntity<?> EmployeeDashboard(@PathVariable long id) {
		return dashboardService.employeeDashboard(id);
	}

}
