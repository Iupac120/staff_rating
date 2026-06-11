const express = require("express");

const router =
express.Router();

const controller =
require(
"../controllers/notificationController"
);

const protect =
require(
"../middleware/authMiddleware"
);

router.post(
"/send-email",
protect,
controller.sendEmail
);

router.get(
"/my-notifications",
protect,
controller.getMyNotifications
);

module.exports = router;