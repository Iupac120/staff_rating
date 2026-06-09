const {
  PeerReview,
} = require("../models");

exports.createReview =
  async (
    req,
    res,
    next
  ) => {
    try {
      const review =
        await PeerReview.create(
          req.body
        );

      res.status(201).json({
        success: true,
        data: review,
      });
    } catch (error) {
      next(error);
    }
  };