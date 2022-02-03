const router = require('express').Router();
const db = require('../../../utils/connection')


router.get('/', (req, res) => {
    const query = 'SELECT roles.title AS Job_Title, roles.id AS ID, departments.dep_name AS Department, roles.salary AS Salary FROM departments JOIN roles ON departments.id = roles.department_id '
    db.query(query, (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        res.json(result);
    });
});


router.post('/', ({ body }, res) => {
    const query = 'INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)'
    const params = [body.title, body.salary, body.department_id];
    
    db.query(query, params, (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        res.json(result.affectedRows);
    });
})




module.exports = router;