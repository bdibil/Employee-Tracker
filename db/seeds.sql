INSERT INTO departments(dep_name)
VALUES ("Engineering"),
("Sales"),
("Operations"),
("Legal");


INSERT INTO roles(title, salary, department_id)
VALUES ("Lead Engineer", 150000, 1),
("Engineer", 100000, 1),
("Sales Manager", 100000, 2),
("Sales Lead", 80000, 2),
("Sr. Operations Manager", 120000, 3),
("Operations Manager", 90000, 3),
("Lead Lawyer", 130000, 4),
("Lawyer", 90000, 4);


INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),
("Steve", "Chan", 2 , 1),
("Don", "Juan", 3, NULL),
("Ben", "Stiller", 4 , 3),
("Linda", "Brown", 5, NULL),
("Anna", "Reynolds", 6 , 5),
("Clare", "Danes", 7, NULL),
("Marie", "Antoinette", 8 , 7);



