# Employee App — JPA vs Hibernate vs Spring Data JPA

A hands-on Spring Boot project demonstrating the same `Employee` entity
persisted two different ways, so you can directly compare the code:

1. **Plain Hibernate** — `EmployeeHibernateDAO` (manual `Session` / `Transaction` / try-catch-finally)
2. **Spring Data JPA** — `EmployeeRepository` (interface only) + `EmployeeService` (`@Transactional`)

Both share the same `Employee` entity and the same H2 in-memory database table,
so the only difference you're seeing is *how much code you had to write*.

## Requirements

- Java 17+
- Maven 3.8+ (or use VS Code's bundled Maven support)
- VS Code with the **Extension Pack for Java** and **Spring Boot Extension Pack** (recommended)

## Running it

### Option A — VS Code
1. Unzip the project and open the folder in VS Code.
2. Let the Java extensions index the project (bottom-right progress bar).
3. Open `EmployeeAppApplication.java` and click **Run** (or press `F5`).

### Option B — Command line
```bash
mvn spring-boot:run
```

The app starts on **http://localhost:8080**.

## H2 Console (optional — inspect the database directly)

Visit http://localhost:8080/h2-console

- JDBC URL: `jdbc:h2:mem:employeedb`
- User: `sa`
- Password: *(leave blank)*

## Testing the endpoints

Both controllers expose identical CRUD operations, just under different base paths.

| Operation | Hibernate DAO | Spring Data JPA |
|---|---|---|
| Create | `POST /api/hibernate/employees` | `POST /api/jpa/employees` |
| Get one | `GET /api/hibernate/employees/{id}` | `GET /api/jpa/employees/{id}` |
| Get all | `GET /api/hibernate/employees` | `GET /api/jpa/employees` |
| Update | `PUT /api/hibernate/employees` | `PUT /api/jpa/employees` |
| Delete | `DELETE /api/hibernate/employees/{id}` | `DELETE /api/jpa/employees/{id}` |

### Example: create an employee (Spring Data JPA)
```bash
curl -X POST http://localhost:8080/api/jpa/employees \
  -H "Content-Type: application/json" \
  -d '{"name":"Priya Sharma","email":"priya@example.com","department":"Engineering","salary":75000}'
```

### Example: create an employee (plain Hibernate)
```bash
curl -X POST http://localhost:8080/api/hibernate/employees \
  -H "Content-Type: application/json" \
  -d '{"name":"Arjun Rao","email":"arjun@example.com","department":"Finance","salary":68000}'
```

### Example: fetch all employees
```bash
curl http://localhost:8080/api/jpa/employees
curl http://localhost:8080/api/hibernate/employees
```

You can also import these into Postman, or just hit the `GET` endpoints in a browser.

## Project structure

```
src/main/java/com/cognizant/employeeapp/
├── EmployeeAppApplication.java   # main() entry point
├── entity/
│   └── Employee.java             # shared JPA entity
├── config/
│   └── HibernateConfig.java      # exposes a raw Hibernate SessionFactory bean
├── hibernate/
│   └── EmployeeHibernateDAO.java # plain Hibernate CRUD (Session/Transaction)
├── repository/
│   └── EmployeeRepository.java   # Spring Data JPA repository interface
├── service/
│   └── EmployeeService.java      # Spring Data JPA service (@Transactional)
└── controller/
    ├── HibernateEmployeeController.java
    └── JpaEmployeeController.java
```

## Key takeaway (from the assignment notes)

- **JPA** is just the spec (interfaces/annotations) — no logic of its own.
- **Hibernate** is a concrete implementation of that spec — see `EmployeeHibernateDAO`
  for what it looks like to use it directly (you manage the `Session`,
  `Transaction`, and exception handling yourself).
- **Spring Data JPA** sits on top of a JPA provider (Hibernate here) and
  generates the repository implementation for you — see how `EmployeeRepository`
  is just an empty interface, and `EmployeeService.addEmployee()` is a
  one-liner with `@Transactional` handling the transaction boundary that
  you'd otherwise write by hand.
