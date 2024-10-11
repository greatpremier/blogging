const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  addComment,
  getComments,
  updateComment,
  deleteComment,
} = require('../controllers/commentController');

// Add a comment to a blog post
router.route('/:blogId/comments')
  .post(protect, addComment)
  .get(getComments);

// Update or delete a comment
router.route('/:blogId/comments/:commentId')
  .put(protect, updateComment)
  .delete(protect, deleteComment);

module.exports = router;
