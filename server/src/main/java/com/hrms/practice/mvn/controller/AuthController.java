package com.hrms.practice.mvn.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import com.hrms.practice.mvn.Config;
import com.hrms.practice.mvn.model.Employee;
import com.hrms.practice.mvn.model.MyEmployeeDetails;
import com.hrms.practice.mvn.model.RefreshToken;
import com.hrms.practice.mvn.payload.JwtResponse;
import com.hrms.practice.mvn.payload.RefreshTokenResponse;
import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.security.jwt.JwtUtils;
import com.hrms.practice.mvn.service.EmployeeService;
import com.hrms.practice.mvn.service.RefreshTokenService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtils jwtUtils;
	@Autowired
	private RefreshTokenService refreshTokenService;

	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Employee employee, HttpServletResponse response) throws Exception {
		Authentication auth = null;
		
		try {
			auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(employee.getUsername(), employee.getPassword()));
		} catch (BadCredentialsException e) {
			return ResponseEntity.badRequest().body(new Response(false, "Incorrect Credentials!", null));
		}
		
		MyEmployeeDetails myEmployeeDetails = (MyEmployeeDetails) auth.getPrincipal();
		final String jwt = jwtUtils.generateToken(myEmployeeDetails);
		RefreshToken refreshToken = refreshTokenService.createRefreshToken(myEmployeeDetails.getId());
		List<String> roles = myEmployeeDetails.getAuthorities().stream().map(item -> item.getAuthority()).collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse("Bearer", jwt, refreshToken.getRefreshToken(), myEmployeeDetails.getId(), myEmployeeDetails.getFullname(), myEmployeeDetails.getUsername() , roles));
	}

	@PostMapping("/logout")
	public ResponseEntity<?> logoutUser(@RequestBody Map<String, Long> userid) {
		refreshTokenService.deleteByUserId(userid.get("id"));    
	    return ResponseEntity.ok().body("Employee logged out");
	}

	@PostMapping("/refreshtoken")
	public ResponseEntity<?> refreshtoken(@RequestBody Map<String, String> refreshToken) {
		RefreshToken token = refreshTokenService.findByRefreshToken(refreshToken.get("token"));
		if(token != null && refreshTokenService.verifyExpiration(token) != null) {
			Employee user = token.getEmployee();
			Map<String, Object> claims = new HashMap<>();
			claims.put("ROLES", user.getRoles().stream().map(item -> item.getRole()).collect(Collectors.toList()));
			String jwt = jwtUtils.createToken(claims, user.getUsername());
			
			return ResponseEntity.ok(new RefreshTokenResponse("Bearer", jwt, refreshToken.get("token")));
		}
		
		return ResponseEntity.badRequest().body("Refresh token has expired/Not found!");
	}


	@PostMapping("/userinfo")
	public ResponseEntity<?> userinfo(@RequestParam long id) {
		
		Employee user = employeeService.getEmployeeByEmployeeId(id);

		if(user == null)
			return ResponseEntity.badRequest().body(new Response(false, "No user found by this ID!", null));


		if(!Config.user_role.equals("admin") && !Config.user_now.equals(user.getUsername())) 
			return ResponseEntity.badRequest().body("You are not authorized to view this page!");
		
		
		Map<String,Object> UserInfo = new HashMap<>();
		UserInfo.put("fullname", user.getFullname());
		UserInfo.put("username", user.getUsername());
		UserInfo.put("roles", user.getRoles().stream().map(item -> item.getRole()).collect(Collectors.toList()));
		
		return ResponseEntity.ok().body(new Response(true, "User found!", UserInfo));
	}

	
	
	
}
