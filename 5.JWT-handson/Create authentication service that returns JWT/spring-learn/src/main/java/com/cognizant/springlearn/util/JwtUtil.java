package com.cognizant.springlearn.util;

import java.security.Key;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

/**
 * Step 3: Generate token based on the user retrieved during authentication.
 */
@Component
public class JwtUtil {

	private static final Logger LOGGER = LoggerFactory.getLogger(JwtUtil.class);

	@Value("${jwt.secret}")
	private String secret;

	@Value("${jwt.expiration.ms}")
	private long expirationMs;

	public String generateToken(String username) {
		LOGGER.debug("Entering generateToken() method for user: {}", username);

		Date now = new Date();
		Date expiry = new Date(now.getTime() + expirationMs);
		Key signingKey = Keys.hmacShaKeyFor(secret.getBytes());

		String token = Jwts.builder()
				.setSubject(username)
				.setIssuedAt(now)
				.setExpiration(expiry)
				.signWith(signingKey, SignatureAlgorithm.HS256)
				.compact();

		LOGGER.debug("Exiting generateToken() method. Token generated for user: {}", username);
		return token;
	}

}
