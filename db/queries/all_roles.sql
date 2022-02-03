-- Select all role and join     w/  depts          WORKS

SELECT roles.title AS Job_Title,
        roles.id AS ID,
        departments.dep_name AS Department,
        roles.salary AS Salary
FROM departments
JOIN roles ON departments.id = roles.department_id; 


-- 'INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)'