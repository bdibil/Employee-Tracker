-- Select all employees and join w/ roles       WORKS

-- SELECT * 
-- FROM employees
-- JOIN roles ON employees.role_id = roles.id; 



-- Select all departments and join w/ roles       WORKS

-- SELECT *    
-- FROM departments
-- JOIN roles ON departments.id = roles.department_id; 



-- Select all employees and join w/ roles       WORKS

-- SELECT employees.id AS ID,
--         employees.first_name AS First_Name, 
--         employees.last_name AS Last_Name,
--         roles.title AS Role,          
--         roles.salary AS Salary,
--         employees.first_name WHERE (manager_id = employees.manager_id) AS Boss         
-- FROM employees
-- JOIN roles ON employees.role_id = roles.id; 



SELECT employees.id AS ID,
        employees.first_name AS First_Name, 
        employees.last_name AS Last_Name,
        employees.first_name WHERE (manager_id = employees.manager_id) AS Boss         
FROM employees











