const router = require('express').Router();


const rolesRoutes = require('./roles');
const employeesRoutes = require('./employees');
const departmentsRoutes = require('./departments');


router.use('/roles', rolesRoutes);
router.use('/employees', employeesRoutes);
router.use('/departments', departmentsRoutes);



module.exports = router;