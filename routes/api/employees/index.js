const router = require('express').Router();
const db = require('../../../utils/connection')


router.get('/', (req, res) => {
    const query = 'SELECT employees.id AS  ID, employees.first_name AS First_Name, employees.last_name AS Last_Name, roles.title AS Job_Title, departments.dep_name AS Department, roles.salary AS Salary, manager_id AS Manager_ID FROM employees JOIN (departments JOIN roles ON departments.id = roles.department_id) ON employees.role_id = roles.id'
    db.query(query, (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        res.json(result);
    });
});


router.post('/', ({ body }, res) => {
    const query = 'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)'
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

    db.query(query, params, (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        res.json(result.affectedRows);
    });
})



module.exports = router;






