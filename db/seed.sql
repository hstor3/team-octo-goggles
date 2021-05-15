USE employeeDB;

CREATE TABLE department (
name VARCHAR(25) NOT NULL
);

CREATE TABLE role (
title VARCHAR(30) NOT NULL, 
salary INTEGER(20) NOT NULL,
department_id INTEGER(5) NOT NULL
);

CREATE TABLE employee(
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER(10)
);

INSERT INTO department(name) VALUES ("accouting"), ("sales"), ("engineering"), ("legal");
INSERT INTO role(title, salary, department_id) VALUES ("Accountant", 95000, 1), ("Account Manager", 65000, 1), ("Sales Rep", 75000, 2), ("Sales Lead", 125000, 2), ("Junior Developer", 48000, 3), ("Senior Software Developer", 175000, 3 ), ("Legal Assistant", 35000, 4), ("Lawyer", 175000, 4);
INSERT INTO employee(first_name, last_name, role_id) VALUES ("Martha", "McCartney", 1), ("Elvis", "Lennon", 2), ("Mimi", "Babaghi", 3), ("Sam", "Tich",4)

