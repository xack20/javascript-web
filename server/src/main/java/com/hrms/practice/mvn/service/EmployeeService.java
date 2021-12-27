package com.hrms.practice.mvn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Map;

import com.hrms.practice.mvn.model.Employee;
import com.hrms.practice.mvn.model.Role;

import java.util.Arrays;

import com.hrms.practice.mvn.model.User;
import com.hrms.practice.mvn.repository.UserRepository;
import com.hrms.practice.mvn.repository.EmployeeRepository;
import com.hrms.practice.mvn.repository.RoleRepository;

@Service
public class EmployeeService {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	public User getUserByUsername(String username) {
		return userRepository.findUserByUsernameIgnoreCase(username);
	}

	public User saveEmployee(Map<String,Object>payload) {

		User user = new User();
		
		user.setPassword(passwordEncoder.encode((CharSequence) payload.get("password")));
		user.setFullname(payload.get("firstname")+" "+payload.get("lastname"));
		user.setUsername((String) payload.get("username"));


		Role userRole = roleRepository.findByRole((String) payload.get("role"));
		user.setRoles(Arrays.asList(userRole));


		userRepository.save(user);

		
		Employee employee = new Employee();

		employee.setDepartment((String)payload.get("department"));
		employee.setDesignation((String)payload.get("designation"));
		employee.setEmail((String)payload.get("email"));
		employee.setEmployee_id((String)payload.get("employee_id"));
		employee.setFirstname((String)payload.get("firstname"));
		employee.setLastname((String)payload.get("lastname"));
		employee.setPhoneNumber((String)payload.get("phone_no"));
		employee.setUser_id(user.getId());
	
		employeeRepository.save(employee);
		

		return user;
	}


	public Employee updateEmployee(Map<String,Object> payload, long id){
		Employee employee = employeeRepository.findByUserId(id);


		if(employee==null)return null;

		employee.setDepartment((String)payload.get("department"));
		employee.setDesignation((String)payload.get("designation"));
		employee.setEmail((String)payload.get("email"));
		employee.setEmployee_id((String)payload.get("employee_id"));
		employee.setFirstname((String)payload.get("firstname"));
		employee.setLastname((String)payload.get("lastname"));
		employee.setPhoneNumber((String)payload.get("phone_no"));
	
		employeeRepository.save(employee);

		return employee;
	}

	public User getUserByUserId(long id) {
		return userRepository.findByUserId(id);
	}
}
