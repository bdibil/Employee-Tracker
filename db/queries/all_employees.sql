-- Select all employees and join w/ roles   &&   depts          WORKS

SELECT employees.id AS  ID,
        employees.first_name AS First_Name, 
        employees.last_name AS Last_Name,
        roles.title AS Job_Title,   
        departments.dep_name AS Department,       
        roles.salary AS Salary,
        manager_id AS Manager_ID
FROM employees
JOIN (departments JOIN roles ON departments.id = roles.department_id) 
        ON employees.role_id = roles.id; 



-- 'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)'