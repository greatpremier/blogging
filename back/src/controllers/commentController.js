const asyncHandler = require('express-async-handler');
const BlogPost = require('../models/BlogPostModel');
const Comment = require('../models/Comment');

// @desc    Add a comment to a blog post
// @route   POST /api/blogs/:blogId/comments
// @access  Private
const addComment = asyncHandler(async (req, res) => {
  const { text } = req.body;

  const blogPost = await BlogPost.findById(req.params.blogId);
  if (!blogPost) {
    res.status(404);
    throw new Error('Blog post not found');
  }

  const comment = await Comment.create({
    user: req.user._id,
    blogPost: req.params.blogId,
    text,
  });

  res.status(201).json(comment);
});

// @desc    Get all comments for a blog post
// @route   GET /api/blogs/:blogId/comments
// @access  Public
const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find({ blogPost: req.params.blogId }).populate('user', 'name');
  res.json(comments);
});

// @desc    Update a comment
// @route   PUT /api/blogs/:blogId/comments/:commentId
// @access  Private
const updateComment = asyncHandler(async (req, res) => {
  const { text } = req.body;

  const comment = await Comment.findById(req.params.commentId);
  if (!comment) {
    res.status(404);
    throw new Error('Comment not found');
  }

  if (comment.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized to update this comment');
  }

  comment.text = text || comment.text;
  const updatedComment = await comment.save();
  res.json(updatedComment);
});

// @desc    Delete a comment
// @route   DELETE /api/blogs/:blogId/comments/:commentId
// @access  Private
const deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);
  if (!comment) {
    res.status(404);
    throw new Error('Comment not found');
  }

  if (comment.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error('Not authorized to delete this comment');
  }

  await comment.remove();
  res.json({ message: 'Comment removed' });
});

module.exports = {
  addComment,
  getComments,
  updateComment,
  deleteComment,
};
