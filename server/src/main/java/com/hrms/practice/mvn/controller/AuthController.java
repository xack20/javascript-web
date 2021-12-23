package com.hrms.practice.mvn.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import com.hrms.practice.mvn.model.User;
import com.hrms.practice.mvn.model.MyUserDetails;
import com.hrms.practice.mvn.model.RefreshToken;
import com.hrms.practice.mvn.payload.JwtResponse;
import com.hrms.practice.mvn.payload.RefreshTokenResponse;
import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.security.jwt.JwtUtils;
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
	



	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user, HttpServletResponse response) throws Exception {
		Authentication auth = null;
		
		try {
			auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
		} catch (BadCredentialsException e) {
			return ResponseEntity.badRequest().body(new Response(false, "Incorrect Credentials!", null));
		}
		
		MyUserDetails myUserDetails = (MyUserDetails) auth.getPrincipal();
		final String jwt = jwtUtils.generateToken(myUserDetails);
		RefreshToken refreshToken = refreshTokenService.createRefreshToken(myUserDetails.getId());
		List<String> roles = myUserDetails.getAuthorities().stream().map(item -> item.getAuthority()).collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse("Bearer", jwt, refreshToken.getRefreshToken(), myUserDetails.getId(), myUserDetails.getFullname(), myUserDetails.getUsername() , roles));
	}




	@PostMapping("/logout")
	public ResponseEntity<?> logoutUser(@RequestBody Map<String, Long> userid) {
		refreshTokenService.deleteByUserId(userid.get("id"));    
	    return ResponseEntity.ok().body("User logged out");
	}

	
	@PostMapping("/refresh-token")
	public ResponseEntity<?> refreshtoken(@RequestBody Map<String, String> refreshToken) {

		RefreshToken token = refreshTokenService.findByRefreshToken(refreshToken.get("token"));

		if(token != null && refreshTokenService.verifyExpiration(token) != null) {
			User user = token.getUser();
			Map<String, Object> claims = new HashMap<>();
			claims.put("ROLES", user.getRoles().stream().map(item -> item.getRole()).collect(Collectors.toList()));
			String jwt = jwtUtils.createToken(claims, user.getUsername());
			
			return ResponseEntity.ok(new RefreshTokenResponse("Bearer", jwt, refreshToken.get("token")));
		}
		
		return ResponseEntity.badRequest().body("Refresh token has expired/Not found!");
	}
	
	
	
}
