package com.hrms.practice.mvn.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;

import com.hrms.practice.mvn.model.User;
import com.hrms.practice.mvn.model.Role;
import com.hrms.practice.mvn.repository.UserRepository;
import com.hrms.practice.mvn.repository.RoleRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository employeeRepository;
	@Autowired
	private RoleRepository roleRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;

	public User getUserByUsername(String username) {
		return employeeRepository.findUserByUsernameIgnoreCase(username);
	}

	public User saveEmployee(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		Role userRole = roleRepository.findByRole("employee");
		if(userRole != null)
			user.setRoles(Arrays.asList(userRole));
		else {
			Role role = new Role();
			role.setRole("employee");
			user.setRoles(Arrays.asList(role));
		}

		return user = employeeRepository.save(user);
	}

	public User saveAdmin(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		Role adminRole = roleRepository.findByRole("admin");
		if(adminRole != null)
			user.setRoles(Arrays.asList(adminRole));
		else {
			Role role = new Role();
			role.setRole("admin");
			user.setRoles(Arrays.asList(role));
		}
		user.setRoles(Arrays.asList(adminRole));

		return user = employeeRepository.save(user);
	}

	public User getUserByUserId(long id) {
		return employeeRepository.findByUserId(id);
	}
}
