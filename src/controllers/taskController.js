const { Task } =
  require("../models");

const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} = require("../helpers/crudFactory");

exports.createTask =
  createOne(Task);

exports.getTasks =
  getAll(Task);

exports.getTask =
  getOne(Task);

exports.updateTask =
  updateOne(Task);

exports.deleteTask =
  deleteOne(Task);