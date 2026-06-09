const { KPI } =
  require("../models");

const {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
} = require("../helpers/crudFactory");

exports.createKPI =
  createOne(KPI);

exports.getKPIs =
  getAll(KPI);

exports.getKPI =
  getOne(KPI);

exports.updateKPI =
  updateOne(KPI);

exports.deleteKPI =
  deleteOne(KPI);