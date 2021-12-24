package com.hrms.practice.mvn.repository;

import com.hrms.practice.mvn.model.User;
import com.hrms.practice.mvn.model.RefreshToken;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {

	RefreshToken findByRefreshToken(String token);
	RefreshToken findByUserId(long id);


	@Modifying
	int deleteByUser(User user);
	@Modifying
	int deleteByRefreshToken(String refreshToken);

}
