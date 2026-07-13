package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

	// Logger instance for this class - used instead of System.out.println
	// so that log level, timestamp, thread and class name are captured automatically.
	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {
		LOGGER.info("========================================");
		LOGGER.info("Entering main() method of SpringLearnApplication");
		LOGGER.info("Starting Spring Boot application...");

		SpringApplication.run(SpringLearnApplication.class, args);

		LOGGER.info("SpringLearnApplication started successfully!");

		// Spring Core XML configuration demo
		displayCountry();

		LOGGER.info("Exiting main() method of SpringLearnApplication");
		LOGGER.info("========================================");
	}

	/**
	 * Reads the "country" bean defined in country.xml and displays its details.
	 */
	public static void displayCountry() {
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = context.getBean("country", Country.class);
		LOGGER.debug("Country : {}", country.toString());
	}

}
