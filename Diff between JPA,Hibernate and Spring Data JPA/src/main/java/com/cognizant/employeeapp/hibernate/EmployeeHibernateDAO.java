package com.cognizant.employeeapp.hibernate;

import com.cognizant.employeeapp.entity.Employee;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class EmployeeHibernateDAO {

    private final SessionFactory factory;

    public EmployeeHibernateDAO(SessionFactory factory) {
        this.factory = factory;
    }

    /* Method to CREATE an employee in the database */
    public Integer addEmployee(Employee employee) {
        Session session = factory.openSession();
        Transaction tx = null;
        Integer employeeID = null;

        try {
            tx = session.beginTransaction();
            employeeID = (Integer) session.save(employee);
            tx.commit();
        } catch (HibernateException e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
        return employeeID;
    }

    /* Method to READ a single employee by id */
    public Employee getEmployee(Integer employeeId) {
        Session session = factory.openSession();
        Employee employee = null;
        try {
            employee = session.get(Employee.class, employeeId);
        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }
        return employee;
    }

    /* Method to READ all employees */
    @SuppressWarnings("unchecked")
    public List<Employee> getAllEmployees() {
        Session session = factory.openSession();
        List<Employee> employees = null;
        try {
            employees = session.createQuery("FROM Employee").list();
        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }
        return employees;
    }

    /* Method to UPDATE an employee */
    public void updateEmployee(Employee employee) {
        Session session = factory.openSession();
        Transaction tx = null;
        try {
            tx = session.beginTransaction();
            session.update(employee);
            tx.commit();
        } catch (HibernateException e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }

    /* Method to DELETE an employee */
    public void deleteEmployee(Integer employeeId) {
        Session session = factory.openSession();
        Transaction tx = null;
        try {
            tx = session.beginTransaction();
            Employee employee = session.get(Employee.class, employeeId);
            if (employee != null) {
                session.delete(employee);
            }
            tx.commit();
        } catch (HibernateException e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }
}
