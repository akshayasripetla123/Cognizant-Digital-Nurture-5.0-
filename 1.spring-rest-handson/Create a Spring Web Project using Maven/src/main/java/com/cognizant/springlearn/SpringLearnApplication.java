package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {

	// Logger instance for this class - used instead of System.out.println
	// so that log level, timestamp, thread and class name are captured automatically.
	private static final Logger logger = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {
		logger.info("========================================");
		logger.info("Entering main() method of SpringLearnApplication");
		logger.info("Starting Spring Boot application...");

		SpringApplication.run(SpringLearnApplication.class, args);

		logger.info("SpringLearnApplication started successfully!");
		logger.info("Exiting main() method of SpringLearnApplication");
		logger.info("========================================");
	}

}
