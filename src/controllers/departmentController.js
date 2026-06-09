const {Department} = require("../models/Department")
const {
    createOne,
    getAll,
    getOne,
    updateOne,
    deleteOne
} = require("../helpers/crudFactory")

createDepartment= createOne(Department)
getAllDepartment= getAll(Department)
getDepartment= getOne(Department)
updateDepartment= updateOne(Department)
deleteDepartment= deleteOn(Department)

module.exports = {
    createDepartment,
    getAllDepartment,
    getDepartment,
    updateDepartment,
    deleteDepartment
}