const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');
const { getAllBlogs, createBlog } = require('../controllers/blogController');

const router = express.Router();

// GET all blogs
router.get('/', getAllBlogs);

// POST new blog (requires authentication)
router.post('/', authMiddleware, createBlog);

module.exports = router;
