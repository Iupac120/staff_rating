const express = require('express');
const { register,login,forgotPassword,resetPassword,currentUserProfile,changePassword
 } = require('../controllers/authController');

const router = express.Router();

const protect = require("../middleware/authMiddleware")

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.get('/profile',protect ,currentUserProfile);
router.put('/change-password', protect,changePassword);
router.post('/reset-password/:token', resetPassword);

module.exports = router;
