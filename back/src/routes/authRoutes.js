const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { login, register, getProfile } = require('../controllers/authController');

// User registration
router.post('/register', register);

// User login
router.post('/login', login);

// Get logged-in user's profile
router.get('/profile', protect, getProfile);

module.exports = router;
