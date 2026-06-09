const User = require("../models/User")
const Employee = require("../models/Employee")
const Department = require("../models/Department")
const { getAll } = require("../helpers/crudFactory")

const {
    createOne,
    getAll,
    getOne, 
    updateOne,
    deleteOne
} = require("../helpers/crudFactory");

createEmployee = createOne(Employee);
getAllEmployee = getAll(Employee,[User,Department]);
getEmployee = getOne(Employee,[User,Department]);
updateEmployee = updateOne(Employee);
deleteEmployee = deleteOne(Employee)

module.exports = {
    createEmployee,
    getAllEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee
}