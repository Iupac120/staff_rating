const {
  KPITarget,
} = require("../models");

const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} = require("../helpers/crudFactory");

exports.createTarget =
  createOne(KPITarget);

exports.getTargets =
  getAll(KPITarget);

exports.getTarget =
  getOne(KPITarget);

exports.updateTarget =
  updateOne(KPITarget);

exports.deleteTarget =
  deleteOne(KPITarget);