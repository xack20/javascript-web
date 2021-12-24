package com.hrms.practice.mvn.service;

import java.time.Instant;
import java.util.UUID;
import javax.transaction.Transactional;

import com.hrms.practice.mvn.model.RefreshToken;
import com.hrms.practice.mvn.repository.UserRepository;
import com.hrms.practice.mvn.repository.RefreshTokenRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
;

@Service
public class RefreshTokenService {

	@Value("${jwt.refreshExp}")
	private Long refreshTokenDurationMs;
	@Autowired
	private RefreshTokenRepository refreshTokenRepository;
	@Autowired
	private UserRepository userRepository;

	public RefreshToken findByRefreshToken(String token) {
		return refreshTokenRepository.findByRefreshToken(token);
	}

	public RefreshToken createRefreshToken(Long userId) {
		RefreshToken refreshToken = new RefreshToken();

		refreshToken.setUser(userRepository.findById(userId).get());
		refreshToken.setExpDate(Instant.now().plusMillis(refreshTokenDurationMs));
		refreshToken.setRefreshToken(UUID.randomUUID().toString());
		refreshToken = refreshTokenRepository.save(refreshToken);

		return refreshToken;
	}

	public RefreshToken verifyExpiration(RefreshToken token) {
		if (token.getExpDate().compareTo(Instant.now()) < 0) {
			refreshTokenRepository.delete(token);
			return null;
		}

		return token;
	}

	@Transactional
	public int deleteByUserId(Long userId) {
		return refreshTokenRepository.deleteByUser(userRepository.findById(userId).get());
	}

	@Transactional
	public int deleteByRefreshToken(String refToken){
		return refreshTokenRepository.deleteByRefreshToken(refToken);
	}
	
}
