const {
  WorkReport,
} = require("../models");

const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} = require("../helpers/crudFactory");

exports.createReport =
  createOne(WorkReport);

exports.getReports =
  getAll(WorkReport);

exports.getReport =
  getOne(WorkReport);

exports.updateReport =
  updateOne(WorkReport);

exports.deleteReport =
  deleteOne(WorkReport);