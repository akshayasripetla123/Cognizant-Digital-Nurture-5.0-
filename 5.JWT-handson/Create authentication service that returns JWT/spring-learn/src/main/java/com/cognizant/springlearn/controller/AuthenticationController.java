package com.cognizant.springlearn.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.dto.AuthResponse;
import com.cognizant.springlearn.util.JwtUtil;

@RestController
public class AuthenticationController {

	private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

	private static final String BASIC_PREFIX = "Basic ";

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtUtil;

	@RequestMapping("/authenticate")
	public ResponseEntity<?> authenticate(@RequestHeader("Authorization") String authorizationHeader) {
		LOGGER.debug("Entering authenticate() method");

		if (authorizationHeader == null || !authorizationHeader.startsWith(BASIC_PREFIX)) {
			LOGGER.debug("Missing or malformed Authorization header");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}

		// Step 2: Read Authorization header and decode the username and password.
		// Header looks like: "Basic dXNlcjpwd2Q=" where the part after "Basic " is
		// Base64("username:password").
		String base64Credentials = authorizationHeader.substring(BASIC_PREFIX.length());
		byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
		String credentials = new String(decodedBytes, StandardCharsets.UTF_8);

		// credentials is now "username:password"
		String[] parts = credentials.split(":", 2);
		String username = parts[0];
		String password = parts.length > 1 ? parts[1] : "";

		LOGGER.debug("Decoded username from Authorization header: {}", username);

		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (BadCredentialsException ex) {
			LOGGER.debug("Authentication failed for user: {}", username);
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}

		// Step 3: Generate token based on the user retrieved above.
		String token = jwtUtil.generateToken(username);

		LOGGER.debug("Exiting authenticate() method");
		return ResponseEntity.ok(new AuthResponse(token));
	}

}
