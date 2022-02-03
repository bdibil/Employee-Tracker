const router = require('express').Router();
const db = require('../../../utils/connection')


router.get('/', (req, res) => {
    const query = 'SELECT departments.dep_name AS Department, departments.id AS ID FROM departments'
    db.query(query, (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        res.json(result);
    });
});


router.post('/', (req, res) => {
    const query = 'INSERT INTO departments (dep_name) VALUES (?)'
    const params = req.body.dep_name;

    db.query(query, params, (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        res.json(result.affectedRows);
    });
})



module.exports = router;