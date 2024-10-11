const asyncHandler = require('express-async-handler');
const BlogPost = require('../models/BlogPostModel');

// @desc    Get all blog posts
// @route   GET /api/blogs
// @access  Public
const getBlogPosts = asyncHandler(async (req, res) => {
  const posts = await BlogPost.find({});
  res.json(posts);
});

// @desc    Get single blog post by ID
// @route   GET /api/blogs/:id
// @access  Public
const getBlogPostById = asyncHandler(async (req, res) => {
  const post = await BlogPost.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

// @desc    Create a new blog post
// @route   POST /api/blogs
// @access  Private (Authenticated user)
const createBlogPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const post = new BlogPost({
    title,
    content,
    user: req.user._id,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
});

// @desc    Update blog post by ID
// @route   PUT /api/blogs/:id
// @access  Private
const updateBlogPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const post = await BlogPost.findById(req.params.id);

  if (post) {
    post.title = title || post.title;
    post.content = content || post.content;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

// @desc    Delete blog post by ID
// @route   DELETE /api/blogs/:id
// @access  Private
const deleteBlogPost = asyncHandler(async (req, res) => {
  const post = await BlogPost.findById(req.params.id);

  if (post) {
    await post.remove();
    res.json({ message: 'Post removed' });
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

module.exports = {
  getBlogPosts,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};

