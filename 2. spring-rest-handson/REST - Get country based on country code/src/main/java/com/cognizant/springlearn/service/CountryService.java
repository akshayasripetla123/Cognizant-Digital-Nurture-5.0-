package com.cognizant.springlearn.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.Country;

@Service
public class CountryService {

	private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

	/**
	 * Looks up a country by its ISO code, ignoring case.
	 * Returns null if no match is found.
	 */
	public Country getCountry(String code) {
		LOGGER.debug("Entering getCountry() method with code: {}", code);

		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

		@SuppressWarnings("unchecked")
		List<Country> countryList = (List<Country>) context.getBean("countryList");

		// Case insensitive match using a lambda expression instead of a manual loop
		Country matchedCountry = countryList.stream()
				.filter(country -> country.getCode().equalsIgnoreCase(code))
				.findFirst()
				.orElse(null);

		LOGGER.debug("Exiting getCountry() method with result: {}", matchedCountry);
		return matchedCountry;
	}

}
