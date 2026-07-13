package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.CountryService;

@RestController
public class CountryController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

	@Autowired
	private CountryService countryService;

	@RequestMapping("/country")
	public Country getCountryIndia() {
		LOGGER.debug("Entering getCountryIndia() method");

		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = context.getBean("country", Country.class);

		LOGGER.debug("Exiting getCountryIndia() method");
		return country;
	}

	@GetMapping("/countries/{code}")
	public Country getCountry(@PathVariable String code) {
		LOGGER.debug("Entering getCountry() method with code: {}", code);

		Country country = countryService.getCountry(code);

		LOGGER.debug("Exiting getCountry() method with result: {}", country);
		return country;
	}

}
