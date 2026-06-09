const express = require("express")
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const {createEmployee, getAllEmployee,getEmployee,updateEmployee,deleteEmployee} = requre('../controllers/employeeController')

router.post("/", createEmployee)
router.get('/',getAllEmployee)
router.get('/:id', getEmployee)
router.put('/:id',updateEmployee)
router.delete('/:id',deleteEmployee)

module.exports = router