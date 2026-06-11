const express =
require("express");

const router =
express.Router();

const controller =
require(
"../controllers/aiController"
);

const protect =
require(
"../middleware/authMiddleware"
);

router.post(
"/analyze",
protect,
controller.analyzePerformance
);

router.post(
"/appraisal",
protect,
controller.generateAppraisal
);

router.post(
"/training",
protect,
controller.recommendTraining
);

module.exports = router;