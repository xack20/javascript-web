package com.hrms.practice.mvn.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hrms.practice.mvn.model.Employee;
import com.hrms.practice.mvn.model.Role;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


public class MyEmployeeDetails implements UserDetails {

	private static final long serialVersionUID = 1L;
	private Long id; 
	private String fullname;
	private String username;
	private Collection<? extends GrantedAuthority> authorities;

	@JsonIgnore
	private String password;

	public MyEmployeeDetails(Long id, String fullname, String username, String password,
			Collection<? extends GrantedAuthority> authorities) {
		this.setId(id);
		this.setFullname(fullname);
		this.username = username;
		this.password = password;
		this.authorities = authorities;
	}

	public static MyEmployeeDetails build(Employee employee) {
		List<GrantedAuthority> roles = new ArrayList<>();

		for (Role role : employee.getRoles()) {
			roles.add(new SimpleGrantedAuthority(role.getRole()));
		}

		return new MyEmployeeDetails(employee.getId(), employee.getFullname(), employee.getUsername(),
				employee.getPassword(), roles);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return this.authorities;
	}

	@Override
	public String getPassword() {
		return this.password;
	}

	@Override
	public String getUsername() {
		return this.username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		MyEmployeeDetails user = (MyEmployeeDetails) o;
		return Objects.equals(id, user.id);
	}

}