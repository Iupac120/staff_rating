const express = require("express");

const router =
  express.Router();

const reportController =
  require(
    "../controllers/reportController"
  );

const protect =
  require(
    "../middleware/authMiddleware"
  );

router.get(
  "/pdf/:employeeId",
  protect,
  reportController.downloadPDF
);

router.get(
  "/excel",
  protect,
  reportController.downloadExcel
)

module.exports = router