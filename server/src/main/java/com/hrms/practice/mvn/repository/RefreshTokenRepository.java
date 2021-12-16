package com.hrms.practice.mvn.repository;

import com.hrms.practice.mvn.model.Employee;
import com.hrms.practice.mvn.model.RefreshToken;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {

	RefreshToken findByRefreshToken(String token);


	@Modifying
	int deleteByEmployee(Employee employee);

}
