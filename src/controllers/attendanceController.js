const {
  Attendance,
} = require("../models");

const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} = require("../helpers/crudFactory");

exports.createAttendance =
  createOne(Attendance);

exports.getAttendance =
  getAll(Attendance);

exports.getAttendanceById =
  getOne(Attendance);

exports.updateAttendance =
  updateOne(Attendance);

exports.deleteAttendance =
  deleteOne(Attendance);