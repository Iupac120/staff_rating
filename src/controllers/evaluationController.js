const {
  Evaluation,
} = require("../models");

exports.createEvaluation =
  async (
    req,
    res,
    next
  ) => {
    try {
      const evaluation =
        await Evaluation.create(
          req.body
        );

      res.status(201).json({
        success: true,
        data: evaluation,
      });
    } catch (error) {
      next(error);
    }
  };

exports.getEvaluations =
  async (
    req,
    res,
    next
  ) => {
    try {
      const evaluations =
        await Evaluation.findAll();

      res.status(200).json({
        success: true,
        data: evaluations,
      });
    } catch (error) {
      next(error);
    }
  };