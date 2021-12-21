package com.hrms.practice.mvn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;

import com.hrms.practice.mvn.model.Employee;
import com.hrms.practice.mvn.model.Role;
import com.hrms.practice.mvn.repository.EmployeeRepository;
import com.hrms.practice.mvn.repository.RoleRepository;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private RoleRepository roleRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;

	public Employee getEmployeeByUsername(String username) {
		return employeeRepository.findEmployeeByUsernameIgnoreCase(username);
	}

	public Employee saveEmployee(Employee employee) {
		employee.setPassword(passwordEncoder.encode(employee.getPassword()));
		Role userRole = roleRepository.findByRole("employee");
		if(userRole != null)
			employee.setRoles(Arrays.asList(userRole));
		else {
			Role role = new Role();
			role.setRole("employee");
			employee.setRoles(Arrays.asList(role));
		}

		return employee = employeeRepository.save(employee);
	}

	public Employee saveAdmin(Employee employee) {
		employee.setPassword(passwordEncoder.encode(employee.getPassword()));
		Role adminRole = roleRepository.findByRole("admin");
		if(adminRole != null)
			employee.setRoles(Arrays.asList(adminRole));
		else {
			Role role = new Role();
			role.setRole("admin");
			employee.setRoles(Arrays.asList(role));
		}
		employee.setRoles(Arrays.asList(adminRole));

		return employee = employeeRepository.save(employee);
	}

	public Employee getEmployeeByEmployeeId(long id) {
		return employeeRepository.findByEmployeeId(id);
	}
}
