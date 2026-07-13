package com.cognizant.springlearn.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Step 1: Authentication controller is configured here in SecurityConfig.
 *
 * This class:
 *  - Defines a single in-memory user "user"/"pwd" (matches the sample curl -u user:pwd).
 *  - Exposes an AuthenticationManager bean so AuthenticationController can validate
 *    credentials manually (after it decodes them from the Authorization header itself,
 *    rather than letting Spring Security's own Basic-auth filter do it).
 *  - Leaves /authenticate open to unauthenticated requests at the filter-chain level,
 *    because authentication for that one endpoint happens *inside* the controller.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

	private static final Logger LOGGER = LoggerFactory.getLogger(SecurityConfig.class);

	@Bean
	public UserDetailsService userDetailsService(PasswordEncoder passwordEncoder) {
		LOGGER.debug("Configuring in-memory user store with user 'user'");

		UserDetails user = User.withUsername("user")
				.password(passwordEncoder.encode("pwd"))
				.roles("USER")
				.build();

		return new InMemoryUserDetailsManager(user);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
		return authConfig.getAuthenticationManager();
	}

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
			.csrf(csrf -> csrf.disable())
			.authorizeHttpRequests(authorize -> authorize
					.requestMatchers("/authenticate").permitAll()
					.anyRequest().permitAll()
			);

		return http.build();
	}

}
