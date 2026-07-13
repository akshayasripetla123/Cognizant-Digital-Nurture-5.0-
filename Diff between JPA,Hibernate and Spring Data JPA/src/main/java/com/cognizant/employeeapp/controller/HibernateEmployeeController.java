package com.cognizant.employeeapp.controller;

import com.cognizant.employeeapp.entity.Employee;
import com.cognizant.employeeapp.hibernate.EmployeeHibernateDAO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/hibernate/employees")
public class HibernateEmployeeController {

    private final EmployeeHibernateDAO employeeHibernateDAO;

    public HibernateEmployeeController(EmployeeHibernateDAO employeeHibernateDAO) {
        this.employeeHibernateDAO = employeeHibernateDAO;
    }

    @PostMapping
    public ResponseEntity<Integer> addEmployee(@RequestBody Employee employee) {
        Integer id = employeeHibernateDAO.addEmployee(employee);
        return ResponseEntity.ok(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Integer id) {
        Employee employee = employeeHibernateDAO.getEmployee(id);
        return employee != null ? ResponseEntity.ok(employee) : ResponseEntity.notFound().build();
    }

    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        return ResponseEntity.ok(employeeHibernateDAO.getAllEmployees());
    }

    @PutMapping
    public ResponseEntity<Void> updateEmployee(@RequestBody Employee employee) {
        employeeHibernateDAO.updateEmployee(employee);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Integer id) {
        employeeHibernateDAO.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }
}
